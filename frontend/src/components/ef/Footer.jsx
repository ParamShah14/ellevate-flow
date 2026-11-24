import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { LINKS } from "./Navbar";
import { CONTACT_EMAIL, WHATSAPP_URL, PHONE_DISPLAY, PHONE_TEL } from "@/data/pricing";

export const Footer = () => (
  <footer className="bg-ink py-14 text-white" data-testid="site-footer">
    <div className="container-x grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
      <div>
        <Link to="/"><Logo light /></Link>
        <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-white/70">AI automation, websites and lead systems for growing businesses.</p>
        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em] text-white/70">Smarter Systems · Stronger Businesses · Faster Growth</p>
      </div>
      <nav className="grid grid-cols-2 gap-2 text-[14.5px]" aria-label="Footer">
        {LINKS.map((l) => (
          <Link key={l.to} to={l.to} className="text-white/75 transition-colors hover:text-white" data-testid={`footer-link-${l.label.toLowerCase()}`}>{l.label}</Link>
        ))}
      </nav>
      <div className="flex flex-col gap-2 text-[14.5px] text-white/75">
        <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white" data-testid="footer-email-link">{CONTACT_EMAIL}</a>
        <a href={PHONE_TEL} className="transition-colors hover:text-white" data-testid="footer-phone-link">{PHONE_DISPLAY}</a>
        <p className="mt-4 text-white/60">© {new Date().getFullYear()} EllevateFlow. All rights reserved.</p>
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
