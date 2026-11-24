import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { ALL_PACKAGES } from "@/data/pricing";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const EMPTY = { name: "", email: "", phone: "", company: "", package: "Not sure yet", intent: "consultation", message: "" };
const field = "w-full rounded-2xl border border-ink/10 bg-canvas px-4 py-3.5 text-[15px] text-ink outline-none transition-[border-color,box-shadow] duration-300 placeholder:text-muted2/70 focus:border-violet focus:shadow-[0_0_0_4px_rgba(91,31,166,0.12)]";

const Label = ({ children, htmlFor }) => <label htmlFor={htmlFor} className="mb-2 block text-[13px] font-semibold text-ink">{children}</label>;

const IntentToggle = ({ value, onChange }) => (
  <div className="grid grid-cols-2 gap-1 rounded-full border border-ink/10 bg-canvas p-1" role="radiogroup" aria-label="Enquiry type">
    {[["consultation", "Free consultation"], ["project", "Project enquiry"]].map(([k, l]) => (
      <button type="button" key={k} role="radio" aria-checked={value === k} onClick={() => onChange(k)} data-testid={`intent-${k}`} className={`relative rounded-full px-4 py-2.5 text-[14px] font-medium transition-colors ${value === k ? "text-white" : "text-muted2 hover:text-ink"}`}>
        {value === k && <motion.span layoutId="intent-pill" className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
        <span className="relative">{l}</span>
      </button>
    ))}
  </div>
);

export const EnquiryForm = () => {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  useEffect(() => {
    const onSelect = (e) => {
      const { plan, intent } = e.detail ?? {};
      setDone(false);
      setForm((f) => ({ ...f, package: ALL_PACKAGES.includes(plan) ? plan : f.package, intent: intent ?? f.intent }));
    };
    window.addEventListener("ef:select-plan", onSelect);
    return () => window.removeEventListener("ef:select-plan", onSelect);
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const body = { ...form, phone: form.phone || null, company: form.company || null, message: form.message || null };
      await axios.post(`${API}/enquiries`, body);
      setDone(true);
      setForm(EMPTY);
      toast.success("Thanks! Your enquiry has been sent.");
    } catch (err) {
      const d = err?.response?.data?.detail;
      toast.error(typeof d === "string" ? d : "Please check your details and try again.");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <div className="card-soft flex h-full flex-col items-start justify-center p-8 sm:p-10" data-testid="enquiry-success">
        <CheckCircle2 className="h-12 w-12 text-violet" />
        <h3 className="mt-6 text-3xl font-bold text-ink">Enquiry received.</h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted2">Thank you — we'll get back to you soon to talk through your project.</p>
        <button type="button" onClick={() => setDone(false)} className="btn btn-ghost mt-8" data-testid="enquiry-send-another-btn">Send another enquiry</button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="card-soft p-6 sm:p-10" id="contact-form" data-testid="enquiry-form">
      <IntentToggle value={form.intent} onChange={(v) => setForm((f) => ({ ...f, intent: v }))} />
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div><Label htmlFor="f-name">Full name *</Label><input id="f-name" required minLength={2} maxLength={80} value={form.name} onChange={set("name")} className={field} placeholder="Your name" data-testid="enquiry-name-input" /></div>
        <div><Label htmlFor="f-email">Email *</Label><input id="f-email" type="email" required value={form.email} onChange={set("email")} className={field} placeholder="you@business.com" data-testid="enquiry-email-input" /></div>
        <div><Label htmlFor="f-phone">Phone / WhatsApp</Label><input id="f-phone" maxLength={30} value={form.phone} onChange={set("phone")} className={field} placeholder="+91" data-testid="enquiry-phone-input" /></div>
        <div><Label htmlFor="f-company">Business name</Label><input id="f-company" maxLength={120} value={form.company} onChange={set("company")} className={field} placeholder="Your business" data-testid="enquiry-company-input" /></div>
      </div>
      <div className="mt-5">
        <Label htmlFor="f-package">Package</Label>
        <select id="f-package" value={form.package} onChange={set("package")} className={`${field} appearance-none`} data-testid="enquiry-package-select">
          {ALL_PACKAGES.map((p) => <option key={p} value={p}>{p}</option>)}
        </select>
      </div>
      <div className="mt-5">
        <Label htmlFor="f-msg">Tell us about your project</Label>
        <textarea id="f-msg" rows={4} maxLength={2000} value={form.message} onChange={set("message")} className={`${field} resize-none`} placeholder="Goals, timeline, tools you use…" data-testid="enquiry-message-input" />
      </div>
      <button type="submit" disabled={loading} className="btn btn-primary group mt-7 w-full disabled:opacity-70" data-testid="enquiry-submit-btn">
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
        {form.intent === "consultation" ? "Book My Free Consultation" : "Send Enquiry"}
        {!loading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
      </button>
    </form>
  );
};
