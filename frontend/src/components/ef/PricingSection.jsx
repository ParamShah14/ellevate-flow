import { Info } from "lucide-react";
import { Reveal } from "./Reveal";
import { PricingCard } from "./PricingCard";
import { PRICE_NOTE } from "@/data/pricing";

export const PriceNote = ({ dark = false, testId }) => (
  <p className={`mx-auto mt-10 flex max-w-3xl items-start justify-center gap-2 text-center text-[13.5px] leading-relaxed ${dark ? "text-white/70" : "text-muted2"}`} data-testid={testId}>
    <Info className="mt-0.5 h-4 w-4 shrink-0" /> <span>{PRICE_NOTE} USD prices are approximate conversions.</span>
  </p>
);

export const SectionHead = ({ num, eyebrow, title, sub, dark = false }) => (
  <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
    <Reveal className="max-w-2xl">
      <p className={`eyebrow ${dark ? "!text-tangerine" : ""}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-[34px] font-bold leading-[1.05] sm:text-5xl lg:text-[56px] ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      <p className={`mt-5 text-base leading-relaxed md:text-lg ${dark ? "text-white/75" : "text-muted2"}`}>{sub}</p>
    </Reveal>
    <Reveal delay={0.1} className="hidden lg:block">
      <span className={`font-display text-7xl font-bold leading-none sm:text-8xl lg:text-[128px] ${dark ? "text-white/10" : "outline-text opacity-30"}`} aria-hidden="true">{num}</span>
    </Reveal>
  </div>
);

export const PricingSection = ({ id, num, eyebrow, title, sub, plans, cta, className = "", cols = "lg:grid-cols-3" }) => (
  <section id={id} className={`relative py-20 sm:py-28 ${className}`} data-testid={`section-${id}`}>
    <div className="container-x">
      <SectionHead num={num} eyebrow={eyebrow} title={title} sub={sub} />
      <div className={`mt-14 grid items-stretch gap-6 md:grid-cols-2 ${cols} lg:gap-5`}>
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1} className={`h-full ${p.popular ? "md:col-span-2 md:order-first lg:order-none lg:col-span-1 lg:-my-4" : ""}`}>
            <PricingCard plan={p} index={i} cta={cta} variant={p.popular ? "dark" : "light"} featured={p.popular} />
          </Reveal>
        ))}
      </div>
      <PriceNote testId={`price-note-${id}`} />
    </div>
  </section>
);
