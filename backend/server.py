import asyncio
import time
from collections import defaultdict
from contextlib import suppress
from html import escape
from fastapi import FastAPI, APIRouter, HTTPException, Request
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import DESCENDING, IndexModel
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, field_validator
from typing import Literal, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from email_service import send_email, EMAIL_FROM_NAME  # noqa: E402

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]
OWNER_EMAIL = os.environ['OWNER_EMAIL']

INDEXES: dict[str, list[IndexModel]] = {
    "enquiries": [IndexModel([("created_at", DESCENDING)], name="created_at_desc")],
}

PACKAGES = {
    "Starter Website", "Business Website", "Advanced Website",
    "Starter Automation", "Growth Automation", "Advanced AI Automation",
    "Essential Growth", "Complete Growth System", "Premium Growth System",
    "Custom Quote", "Not sure yet",
    "WordPress Starter", "WordPress Professional", "WordPress Premium", "E-commerce",
    "Website + Lead Capture Offer",
}

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


async def ensure_indexes() -> None:
    for collection, models in INDEXES.items():
        for model in models:
            try:
                await db[collection].create_indexes([model])
            except Exception as exc:
                logger.error("ensure_indexes(%s.%s): %s", collection, model.document["name"], exc)

app = FastAPI()
api_router = APIRouter(prefix="/api")

_hits: dict[str, list[float]] = defaultdict(list)


def _rate_limited(ip: str, limit: int = 5, window: int = 600) -> bool:
    now = time.time()
    _hits[ip] = [t for t in _hits[ip] if now - t < window]
    if len(_hits[ip]) >= limit:
        return True
    _hits[ip].append(now)
    return False


class EnquiryIn(BaseModel):
    name: str = Field(min_length=2, max_length=80)
    email: EmailStr
    phone: Optional[str] = Field(default=None, max_length=30)
    company: Optional[str] = Field(default=None, max_length=120)
    package: str
    intent: Literal["consultation", "project"]
    message: Optional[str] = Field(default=None, max_length=2000)

    @field_validator("package")
    @classmethod
    def known_package(cls, v: str) -> str:
        if v not in PACKAGES:
            raise ValueError("Unknown package")
        return v


def _row(label: str, value: str) -> str:
    return (f'<tr><td style="padding:8px 0;color:#5E5873;font-size:13px;width:140px;vertical-align:top">{label}</td>'
            f'<td style="padding:8px 0;color:#150B2E;font-size:15px">{value}</td></tr>')


def _enquiry_html(e: EnquiryIn) -> str:
    intent = "Free consultation request" if e.intent == "consultation" else "Project enquiry"
    email = escape(e.email)
    rows = _row("Name", escape(e.name)) + _row("Email", f'<a href="mailto:{email}" style="color:#5B1FA6">{email}</a>')
    if e.phone:
        rows += _row("Phone", escape(e.phone))
    if e.company:
        rows += _row("Business", escape(e.company))
    rows += _row("Package", escape(e.package)) + _row("Type", intent)
    msg = escape(e.message or "—").replace("\n", "<br>")
    return (
        '<table role="presentation" width="100%" style="background:#F6F4FB;padding:24px 0">'
        '<tr><td align="center"><table role="presentation" width="560" style="background:#ffffff;border-radius:16px;'
        'padding:28px;font-family:Arial,sans-serif">'
        f'<tr><td style="font-size:12px;letter-spacing:2px;color:#8E2BB3;text-transform:uppercase">{intent}</td></tr>'
        f'<tr><td style="font-size:22px;font-weight:bold;color:#150B2E;padding:6px 0 16px">New enquiry: {escape(e.package)}</td></tr>'
        f'<tr><td><table role="presentation" width="100%">{rows}</table></td></tr>'
        '<tr><td style="padding-top:16px;font-size:13px;color:#5E5873">Message</td></tr>'
        f'<tr><td style="padding-top:6px;font-size:15px;color:#150B2E;line-height:1.5">{msg}</td></tr>'
        f'<tr><td style="padding-top:24px;font-size:12px;color:#888">Sent by the {escape(EMAIL_FROM_NAME)} website pricing page.</td></tr>'
        '</table></td></tr></table>'
    )


@api_router.get("/")
async def root():
    return {"message": "EllevateFlow API"}


@api_router.post("/enquiries")
async def create_enquiry(payload: EnquiryIn, request: Request):
    ip = (request.headers.get("x-forwarded-for") or (request.client.host if request.client else "")).split(",")[0].strip()
    if _rate_limited(ip):
        raise HTTPException(status_code=429, detail="Too many enquiries. Please try again in a few minutes.")
    enquiry_id = str(uuid.uuid4())
    doc = {"id": enquiry_id, **payload.model_dump(), "created_at": datetime.now(timezone.utc).isoformat()}
    await db.enquiries.insert_one(doc)
    subject = f"New {'consultation' if payload.intent == 'consultation' else 'project'} enquiry: {payload.package} from {payload.name}".replace("\n", " ")
    email_id = None
    try:
        email_id = await send_email(to=OWNER_EMAIL, subject=subject, html=_enquiry_html(payload))
    except Exception as exc:
        logger.error("Enquiry email error: %s", exc)
    await db.enquiries.update_one({"id": enquiry_id}, {"$set": {"email_sent": bool(email_id)}})
    return {"ok": True, "id": enquiry_id, "email_sent": bool(email_id)}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def start_index_build():
    app.state.index_task = asyncio.create_task(ensure_indexes())


@app.on_event("shutdown")
async def shutdown_db_client():
    app.state.index_task.cancel()
    with suppress(asyncio.CancelledError):
        await app.state.index_task
    client.close()
