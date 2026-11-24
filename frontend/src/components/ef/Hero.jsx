import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { MaskedLines } from "./Reveal";
import { scrollToId, contactHref } from "@/lib/scroll";
import { fmtINR, fmtUSD } from "@/lib/currency";

const CHIPS = [
  { id: "websites", label: "Website Development", inr: 12999, n: "01", cls: "bg-white text-ink", z: 0 },
  { id: "automation", label: "AI Automation", inr: 9999, n: "02", cls: "bg-ink text-white", z: 60 },
  { id: "growth", label: "Complete Growth System", inr: 24999, n: "03", cls: "bg-brand text-white", z: 120 },
];

const Fade = ({ delay, children, className = "" }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}>
    {children}
  </motion.div>
);

const TiltStack = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [14, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-16, 16]), { stiffness: 120, damping: 18 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const reset = () => { mx.set(0); my.set(0); };
  return (
    <div className="relative mx-auto w-full max-w-[480px] [perspective:1400px]" onMouseMove={onMove} onMouseLeave={reset} data-testid="hero-tilt-stack">
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative flex flex-col gap-4 py-6">
        {CHIPS.map((c, i) => (
          <motion.button
            type="button"
            key={c.id}
            onClick={() => scrollToId(c.id)}
            data-testid={`hero-chip-${c.id}`}
            initial={{ opacity: 0, y: 40, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ transform: `translateZ(${c.z}px)`, marginLeft: `${i * 6}%` }}
            className={`group relative flex w-[94%] items-center justify-between overflow-hidden rounded-[26px] p-6 text-left shadow-[0_40px_70px_-40px_rgba(58,14,110,0.55)] sm:p-7 ${c.cls}`}
          >
            <div>
              <p className="font-mono text-[11.5px] uppercase tracking-[0.16em] opacity-75">{c.n} · Starting at</p>
              <p className="mt-2 font-display text-3xl font-bold sm:text-4xl">{fmtINR(c.inr)} <span className="font-mono text-[14px] font-normal opacity-75">≈ {fmtUSD(c.inr)}</span></p>
              <p className="mt-1 text-[14.5px] font-medium opacity-85">{c.label}</p>
            </div>
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-current/20 transition-transform duration-500 group-hover:rotate-45">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export const PricingHero = () => {
  const { scrollY } = useScroll();
  const yGlow = useTransform(scrollY, [0, 600], [0, 140]);
  return (
    <section className="soft-bg relative overflow-hidden pb-20 pt-32 sm:pt-40 lg:pb-28" data-testid="pricing-hero">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(21,11,46,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(21,11,46,.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(70%_60%_at_30%_30%,black,transparent)]" />
      <motion.div aria-hidden="true" style={{ y: yGlow }} className="pointer-events-none absolute -right-32 top-24 h-[420px] w-[420px] rounded-full bg-brand opacity-25 blur-[110px]" />
      <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        <div>
          <Fade delay={0}><p className="eyebrow">Pricing · One-time project fees</p></Fade>
          <h1 className="mt-6 text-[44px] font-extrabold leading-[0.98] text-ink sm:text-6xl lg:text-[84px]" data-testid="hero-headline">
            <MaskedLines lines={["Clear pricing.", "Serious systems.", <>Built to <span className="text-gradient">grow.</span></>]} />
          </h1>
          <Fade delay={0.55}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted2 md:text-lg">
              Website development, WordPress, AI automation, or the Complete Growth System that does it all. Every price shown in INR and USD.
            </p>
          </Fade>
          <Fade delay={0.7} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to={contactHref("Not sure yet", "consultation")} className="btn btn-primary group" data-testid="hero-book-consultation-btn">
              Book a Free Consultation <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <button type="button" onClick={() => scrollToId("websites")} className="btn btn-ghost group" data-testid="hero-compare-btn">
              Compare Packages <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </button>
          </Fade>
          <Fade delay={0.85}><p className="mt-10 font-mono text-[12px] uppercase tracking-[0.16em] text-muted2">Smarter Systems · Stronger Businesses · Faster Growth</p></Fade>
        </div>
        <TiltStack />
      </div>
    </section>
  );
};
