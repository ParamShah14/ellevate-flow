import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT_EMAIL, WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL } from "@/data/pricing";

const QUICK = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

const SERVICES = [
  { label: "AI Automation", to: "/services#ai" },
  { label: "Website Development", to: "/services#web" },
  { label: "CRM & Lead Management", to: "/services#crm" },
  { label: "SEO & Digital Growth", to: "/services#seo" },
  { label: "Customer Communication", to: "/services#comm" },
  { label: "Growth & Optimization", to: "/services#growth" },
];

const Col = ({ title, links, testId }) => (
  <div data-testid={testId}>
    <p className="font-display text-lg font-bold text-white">{title}</p>
    <ul className="mt-5 space-y-3 text-[15px]">
      {links.map((l) => (
        <li key={l.to}><Link to={l.to} className="text-white/75 transition-colors hover:text-white" data-testid={`${testId}-${l.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>{l.label}</Link></li>
      ))}
    </ul>
  </div>
);

export const Footer = () => (
  <footer className="bg-ink pt-16 text-white" data-testid="site-footer">
    <div className="container-x grid gap-12 pb-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.1fr_1.3fr]">
      <div className="lg:-ml-1">
        <Link to="/" data-testid="footer-logo-link" className="inline-block"><Logo light /></Link>
        <p className="mt-5 max-w-xs text-[15px] leading-relaxed text-white/75" data-testid="footer-description">AI automation and web development agency helping businesses build smarter systems, capture more leads and grow with confidence.</p>
        <p className="mt-5 font-display text-[16px] font-semibold text-white" data-testid="footer-tagline">Smarter Websites. <span className="text-gradient">Intelligent Automation.</span> Better Growth.</p>
      </div>
      <Col title="Quick Links" links={QUICK} testId="footer-quick" />
      <Col title="Services" links={SERVICES} testId="footer-services" />
      <div>
        <p className="font-display text-lg font-bold text-white">Contact</p>
        <ul className="mt-5 space-y-4 text-[15px] text-white/75">
          <li><a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 transition-colors hover:text-white" data-testid="footer-email-link"><Mail className="h-4 w-4 text-tangerine" />{CONTACT_EMAIL}</a></li>
          <li><a href={PHONE_TEL} className="flex items-center gap-3 transition-colors hover:text-white" data-testid="footer-phone-link"><Phone className="h-4 w-4 text-tangerine" />{PHONE_DISPLAY}</a></li>
          <li className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-tangerine" />Based in India · Serving clients worldwide</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10">
      <div className="container-x flex flex-col gap-3 py-6 text-[14px] text-white/70 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} EllevateFlow. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="transition-colors hover:text-white" data-testid="footer-privacy-link">Privacy Policy</Link>
          <Link to="/terms" className="transition-colors hover:text-white" data-testid="footer-terms-link">Terms & Conditions</Link>
        </div>
      </div>
    </div>
  </footer>
);

export const WhatsAppFloat = () => (
  <motion.a
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with EllevateFlow on WhatsApp"
    data-testid="whatsapp-float-btn"
    initial={{ opacity: 0, scale: 0.6 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 1.2 }}
    className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-12px_rgba(37,211,102,0.7)]"
  >
    <span className="pulse-ring absolute inset-0 rounded-full bg-[#25D366]" />
    <MessageCircle className="relative h-6 w-6" />
  </motion.a>
);
