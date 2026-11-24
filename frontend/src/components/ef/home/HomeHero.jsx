import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight, CheckCircle2, FileText, Sparkles, Database } from "lucide-react";
import { MaskedLines } from "../Reveal";
import { contactHref } from "@/lib/scroll";

const Fade = ({ delay, children, className = "" }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}>
    {children}
  </motion.div>
);

const Float = ({ className, delay, children }) => (
  <motion.div className={`absolute ${className}`} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay }}>
    {children}
  </motion.div>
);

const WorkflowCard = () => (
  <div className="w-[230px] rounded-2xl border border-white bg-white/90 p-4 shadow-[0_30px_60px_-30px_rgba(58,14,110,0.45)] backdrop-blur-xl">
    <div className="mb-3 flex items-center justify-between">
      <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted2">Workflow</span>
      <span className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-700"><span className="relative flex h-2 w-2"><span className="pulse-ring absolute inset-0 rounded-full bg-emerald-500" /><span className="relative h-2 w-2 rounded-full bg-emerald-500" /></span>running</span>
    </div>
    <div className="flex justify-between">
      {[[FileText, "Form"], [Sparkles, "AI agent"], [Database, "CRM"]].map(([I, l]) => (
        <div key={l} className="flex flex-col items-center gap-1.5"><span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-soft text-violet"><I className="h-[18px] w-[18px]" /></span><span className="font-mono text-[11px] text-muted2">{l}</span></div>
      ))}
    </div>
  </div>
);

const HeroVisual = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <div className="relative mx-auto w-full max-w-[500px] [perspective:1400px]" onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0); }} data-testid="home-hero-visual">
      <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }} className="relative aspect-[4/5] w-full">
        <motion.div initial={{ clipPath: "inset(100% 0 0 0 round 44px)" }} animate={{ clipPath: "inset(0% 0 0 0 round 44px)" }} transition={{ duration: 1.3, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="absolute inset-x-[8%] bottom-0 top-[6%] overflow-hidden rounded-[44px] bg-gradient-to-br from-white via-violet-soft to-[#ffe4da] shadow-[0_40px_90px_-50px_rgba(58,14,110,0.5)]">
          <img src="/img/hero-man.jpg" alt="Consultant holding a laptop" className="h-full w-full object-cover object-top" fetchpriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-violet/25 to-transparent" />
        </motion.div>
        <Float className="-left-2 top-[18%] hidden sm:block" delay={1}><div style={{ transform: "translateZ(60px)" }}><WorkflowCard /></div></Float>
        <Float className="bottom-[8%] right-0 sm:-right-4" delay={1.2}>
          <div style={{ transform: "translateZ(90px)" }} className="flex w-[220px] items-center gap-3 rounded-2xl bg-ink p-4 text-white shadow-[0_30px_60px_-25px_rgba(21,11,46,0.7)]">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand"><CheckCircle2 className="h-5 w-5" /></span>
            <div><p className="text-[13.5px] font-semibold">New lead qualified</p><p className="font-mono text-[11px] text-white/70">routed to sales · auto</p></div>
          </div>
        </Float>
      </motion.div>
    </div>
  );
};

export const HomeHero = () => (
  <section className="soft-bg relative overflow-hidden pb-16 pt-32 sm:pt-40 lg:pb-24" data-testid="home-hero">
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(21,11,46,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(21,11,46,.05)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(70%_60%_at_30%_30%,black,transparent)]" />
    <div className="container-x relative grid items-center gap-14 lg:grid-cols-[1.12fr_1fr] lg:gap-10">
      <div>
        <Fade delay={0}><p className="eyebrow">AI Automation & Web Studio · Worldwide</p></Fade>
        <h1 className="mt-6 text-[44px] font-extrabold leading-[0.98] text-ink sm:text-6xl lg:text-[70px]" data-testid="hero-headline">
          <MaskedLines lines={["Transform Your", "Business with AI", <>& Smart <span className="text-gradient">Automation.</span></>]} />
        </h1>
        <Fade delay={0.55}><p className="mt-7 max-w-xl text-base leading-relaxed text-muted2 md:text-lg">We design premium websites and build AI automations that capture, qualify and follow up with every lead — so your business grows around the clock while your team focuses on what matters.</p></Fade>
        <Fade delay={0.7} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to={contactHref("Not sure yet", "consultation")} className="btn btn-primary group" data-testid="hero-primary-cta">Book a Free Consultation <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></Link>
          <Link to="/services" className="btn btn-ghost group" data-testid="hero-secondary-cta">Explore Our Services <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
        </Fade>
        <Fade delay={0.85}><p className="mt-10 font-mono text-[12px] uppercase tracking-[0.16em] text-muted2">Smarter Systems · Stronger Businesses · Faster Growth</p></Fade>
      </div>
      <HeroVisual />
    </div>
  </section>
);
