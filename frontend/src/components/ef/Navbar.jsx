import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink as RNavLink } from "react-router-dom";
import { Logo } from "./Logo";
import { contactHref } from "@/lib/scroll";

export const LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const NavLink = ({ link, onNavigate }) => (
  <RNavLink
    to={link.to}
    end={link.to === "/"}
    onClick={onNavigate}
    data-testid={`nav-link-${link.label.toLowerCase()}`}
    className={({ isActive }) => `rounded-full px-4 py-2 text-[15px] transition-colors duration-300 ${isActive ? "bg-violet-soft font-medium text-ink" : "text-muted2 hover:text-ink"}`}
  >
    {link.label}
  </RNavLink>
);

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const bookTo = contactHref("Not sure yet", "consultation");
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-white/75 backdrop-blur-xl" data-testid="site-navbar">
      <div className="container-x flex h-[72px] items-center justify-between">
        <Link to="/" data-testid="nav-logo"><Logo /></Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => <NavLink key={l.label} link={l} />)}
        </nav>
        <div className="hidden lg:block">
          <Link to={bookTo} className="btn btn-primary !px-5 !py-3 text-[14.5px]" data-testid="nav-book-call-btn">
            Book a Free Call <ArrowUpRight className="h-4 w-4" />
          </Link>
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
              <Link to={bookTo} onClick={() => setOpen(false)} className="btn btn-primary mt-3 w-full" data-testid="nav-mobile-book-btn">Book a Free Call <ArrowUpRight className="h-4 w-4" /></Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
