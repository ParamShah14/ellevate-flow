# EllevateFlow — Premium Pricing Page

## Original problem statement
Build three premium pricing sections (Website Development, AI Automation, Complete Growth System) for the EllevateFlow agency website, keeping existing branding (lavender/off-white bg, deep purple, purple→pink→orange gradients, rounded cards, gradient CTAs). 3 cards per section, middle highlighted "Most Popular", "Starting at" label, checkmarks, delivery times, price note ("All prices are one-time project fees. Hosting, domain, third-party subscriptions and API usage charges are billed separately."), custom quote option, "Book a Free Consultation". CTAs: "Get Started" / "Automate My Business" / "Get My Growth System" → contact section. No fake testimonials/logos/stats. Fully responsive. Enquiries should arrive at hello.ellevateflow@gmail.com. Reference site: https://ellevate-growth--3lb5jmvz.preview.emergentagent.com/

## Architecture
- React (CRA) + Tailwind + framer-motion + lenis; self-hosted fonts (Bricolage Grotesque, Plus Jakarta Sans, JetBrains Mono) matching the live site
- FastAPI `POST /api/enquiries` → stores in Mongo `enquiries` + emails owner via Emergent managed Resend (`email_service.py`), rate-limited 5/10min per IP
- Data: `frontend/src/data/pricing.js` (all plans, prices, note, contact links)

## Implemented (2026-11-24)
- Navbar (replica of live site; Home/Services/Portfolio/About link to live site URL), kinetic hero with masked line reveal + 3D tilt price stack, slow marquee
- Section 01 Website, 02 Automation (light, dark highlighted middle card), 03 Complete Growth System (dark flagship section, gradient-border featured card, parallax photo, equation chips)
- Custom quote band, contact section with consultation/project toggle; every CTA preselects its package in the form
- Original SVG logo mark + favicon, WhatsApp float (number from live site), footer

## Implemented (2026-11-24, iteration 2) — full multi-page site
- Routes: / (home), /services, /portfolio, /pricing, /about, /contact; all CTAs link to /contact?plan=…&intent=… and preselect the package
- Home: hero, 4 prioritised core services bento (AI Automation, Website Dev, CRM & Lead Mgmt, SEO & Digital Growth), "Also available" services, ₹39,000 Website + Lead Capture special offer, WordPress teaser, process, pricing preview, final CTA
- WordPress pricing (Starter/Professional/Premium/E-commerce) on /pricing
- All prices shown in INR + approx USD (rate 88 INR/USD in lib/currency.js, rounded to …9)
- Floating WhatsApp button → wa.me/918401427743; phone + email in contact & footer; no social links

## Implemented (2026-11-24, iteration 3)
- Customer logo (navbar light / footer white-text versions), customer hero image on Home
- INR/USD toggle buttons (saved per browser) on all price areas; USD = INR/88 × 1.12, rounded to …9
- Contact & About images removed; niche images on Services; 4-column footer per reference + /privacy, /terms pages

## Implemented (2026-11-25, iteration 5)
- Complete Growth System shown as ₹39,999 everywhere (hero chip, home preview, home card)
- Every package has specs (pages/workflows, integrations, revisions, support) + delivery; comparison table, custom-quote CTA and new disclaimer per category; automation billing note; WordPress vs custom explainer
- 12 real portfolio projects (data/projects.js) with clickable case study pages /portfolio/:id; liveUrl/videoUrl/screenshots placeholders
- About: Meet the Founder with founder photo

## Backlog
- P1: Merge these sections into the live EllevateFlow codebase (separate project)
- P1: Admin view of enquiries
- P2: Auto-reply confirmation email to enquirer; USD toggle like homepage preview
