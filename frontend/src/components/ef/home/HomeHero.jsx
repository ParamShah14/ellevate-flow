import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { MaskedLines } from "../Reveal";
import { contactHref } from "@/lib/scroll";

const Fade = ({ delay, children, className = "" }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] }}>
    {children}
  </motion.div>
);

const HeroVisual = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 120, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 120, damping: 18 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  return (
    <div className="relative mx-auto w-full max-w-[560px] [perspective:1400px]" onMouseMove={onMove} onMouseLeave={() => { mx.set(0); my.set(0); }} data-testid="home-hero-visual">
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ rotateX: rx, rotateY: ry }}
        className="relative"
      >
        <img src="/img/hero-man2.jpg" alt="EllevateFlow automation consultant holding a laptop" fetchpriority="high" className="w-full rounded-[36px] mix-blend-multiply" />
        <span aria-hidden="true" className="absolute h-[1.6%] w-[1.6%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" style={{ left: "60.6%", top: "27.96%" }} />
        <motion.span
          aria-hidden="true"
          data-testid="hero-workflow-dot"
          className="absolute h-[1.5%] w-[1.5%] min-h-[6px] min-w-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-coral shadow-[0_0_0_4px_rgba(255,90,95,0.18),0_0_12px_rgba(255,90,95,0.8)]"
          style={{ top: "27.96%" }}
          animate={{ left: ["60.6%", "70.9%", "70.9%", "81.1%", "81.1%"], opacity: [1, 1, 1, 1, 0] }}
          transition={{ duration: 3, times: [0, 0.35, 0.5, 0.85, 1], repeat: Infinity, ease: "easeInOut" }}
        />
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
