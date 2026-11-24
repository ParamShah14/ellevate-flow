import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { CONTACT_EMAIL, SITE_URL, WHATSAPP_URL } from "@/data/pricing";

export const Footer = () => (
  <footer className="bg-ink py-14 text-white" data-testid="site-footer">
    <div className="container-x flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <a href={`${SITE_URL}/`}><Logo light /></a>
        <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em] text-white/70">Smarter Systems · Stronger Businesses · Faster Growth</p>
      </div>
      <div className="flex flex-col gap-2 text-[14.5px] text-white/75 sm:items-end">
        <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-white" data-testid="footer-email-link">{CONTACT_EMAIL}</a>
        <p>© {new Date().getFullYear()} EllevateFlow. All rights reserved.</p>
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
