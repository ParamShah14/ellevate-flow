import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MonitorSmartphone, Workflow, Rocket, Plus, Equal } from "lucide-react";
import { Reveal } from "./Reveal";
import { PricingCard } from "./PricingCard";
import { SectionHead, PriceNote } from "./PricingSection";
import { GROWTH_PLANS } from "@/data/pricing";

const EQUATION = [
  { icon: MonitorSmartphone, label: "Website" },
  { op: Plus },
  { icon: Workflow, label: "Lead automation" },
  { op: Equal },
  { icon: Rocket, label: "Growth System", hl: true },
];

const Equation = () => (
  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3" data-testid="growth-equation">
    {EQUATION.map((e, i) =>
      e.op ? (
        <e.op key={i} className="h-4 w-4 text-white/50" />
      ) : (
        <span key={i} className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium ${e.hl ? "bg-brand text-white" : "border border-white/15 bg-white/5 text-white/90"}`}>
          <e.icon className="h-4 w-4" /> {e.label}
        </span>
      )
    )}
  </div>
);

const PhotoFrame = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  return (
    <div ref={ref} className="relative h-56 overflow-hidden rounded-[32px] sm:h-72 lg:h-full lg:min-h-[340px]" data-testid="growth-photo">
      <motion.img src="/img/growth-laptop.jpg" alt="Laptop glowing in purple light" style={{ y, scale: 1.25 }} className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
      <div className="absolute inset-0 rounded-[32px] ring-1 ring-inset ring-white/15" />
      <p className="absolute bottom-6 left-6 right-6 font-display text-2xl font-bold leading-tight text-white sm:text-3xl">One build. <span className="text-gradient">Two engines.</span></p>
    </div>
  );
};

const Featured = ({ plan, index }) => (
  <div className="relative h-full rounded-[30px] p-[1.5px] lg:-my-8" style={{ background: "var(--brand-gradient)" }}>
    <div className="h-full rounded-[28.5px] bg-[#1b0f3b]">
      <PricingCard plan={plan} index={index} cta="Get My Growth System" variant="dark" featured />
    </div>
    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-ink shadow-lg" data-testid="flagship-label">
      Flagship package
    </span>
  </div>
);

export const GrowthSection = () => (
  <section id="growth" className="grain relative overflow-hidden bg-ink py-20 text-white sm:py-28" data-testid="section-growth">
    <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-brand opacity-25 blur-[130px]" />
    <div aria-hidden="true" className="pointer-events-none absolute -right-40 bottom-10 h-[420px] w-[420px] rounded-full bg-[#ff8a3d] opacity-15 blur-[130px]" />
    <div className="container-x relative">
      <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:items-stretch">
        <div>
          <SectionHead num="03" dark eyebrow="Flagship · Website + Automation" title={<>Complete <span className="text-gradient">Growth System</span></>} sub="Everything your business needs to establish an online presence and automate its lead management process." />
          <Reveal delay={0.15} className="mt-8"><Equation /></Reveal>
        </div>
        <Reveal delay={0.1} className="h-full"><PhotoFrame /></Reveal>
      </div>
      <div className="mt-20 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {GROWTH_PLANS.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1} className={`h-full ${p.popular ? "md:col-span-2 md:order-first lg:order-none lg:col-span-1" : ""}`}>
            {p.popular ? <Featured plan={p} index={i} /> : <PricingCard plan={p} index={i} cta="Get My Growth System" variant="glass" />}
          </Reveal>
        ))}
      </div>
      <PriceNote dark testId="price-note-growth" />
    </div>
  </section>
);
