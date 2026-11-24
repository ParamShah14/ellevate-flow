import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { SITE_URL } from "@/data/pricing";
import { scrollToId, selectPlan } from "@/lib/scroll";

const LINKS = [
  { label: "Home", href: `${SITE_URL}/` },
  { label: "Services", href: `${SITE_URL}/services` },
  { label: "Portfolio", href: `${SITE_URL}/portfolio` },
  { label: "Pricing", href: "#websites", active: true },
  { label: "About", href: `${SITE_URL}/about` },
  { label: "Contact", href: "#contact" },
];

const NavLink = ({ link, onNavigate }) => {
  const onClick = (e) => {
    if (!link.href.startsWith("#")) return;
    e.preventDefault();
    onNavigate?.();
    scrollToId(link.href.slice(1));
  };
  return (
    <a
      href={link.href}
      onClick={onClick}
      data-testid={`nav-link-${link.label.toLowerCase()}`}
      className={`rounded-full px-4 py-2 text-[15px] transition-colors duration-300 ${
        link.active ? "bg-violet-soft font-medium text-ink" : "text-muted2 hover:text-ink"
      }`}
    >
      {link.label}
    </a>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const book = () => {
    setOpen(false);
    selectPlan("Not sure yet", "consultation");
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-white/75 backdrop-blur-xl" data-testid="site-navbar">
      <div className="container-x flex h-[72px] items-center justify-between">
        <a href={`${SITE_URL}/`} data-testid="nav-logo"><Logo /></a>
        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => <NavLink key={l.label} link={l} />)}
        </nav>
        <div className="hidden lg:block">
          <button type="button" onClick={book} className="btn btn-primary !px-5 !py-3 text-[14.5px]" data-testid="nav-book-call-btn">
            Book a Free Call <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <button type="button" onClick={() => setOpen((v) => !v)} className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 bg-white lg:hidden" aria-label="Toggle menu" data-testid="nav-mobile-toggle">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="border-t border-ink/5 bg-white lg:hidden" data-testid="nav-mobile-menu">
            <div className="container-x flex flex-col gap-1 py-4">
              {LINKS.map((l) => <NavLink key={l.label} link={l} onNavigate={() => setOpen(false)} />)}
              <button type="button" onClick={book} className="btn btn-primary mt-3 w-full" data-testid="nav-mobile-book-btn">Book a Free Call <ArrowUpRight className="h-4 w-4" /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
