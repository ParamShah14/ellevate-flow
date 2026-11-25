import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, Clock3, Sparkles, ArrowRight } from "lucide-react";
import { contactHref } from "@/lib/scroll";
import { Money } from "./Money";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const onSpot = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

const STYLES = {
  light: { cell: "bg-canvas", card: "card-soft", muted: "text-muted2", line: "border-ink/10", tick: "bg-violet-soft text-violet", feat: "text-ink/85", label: "text-violet" },
  dark: { cell: "bg-white/[0.07]", card: "bg-ink text-white shadow-[0_50px_90px_-40px_rgba(58,14,110,0.75)] spotlight-dark", muted: "text-white/75", line: "border-white/10", tick: "bg-brand text-white", feat: "text-white/90", label: "text-tangerine" },
  glass: { cell: "bg-white/[0.06]", card: "border border-white/10 bg-white/[0.04] text-white spotlight-dark", muted: "text-white/70", line: "border-white/10", tick: "bg-white/10 text-tangerine", feat: "text-white/85", label: "text-tangerine" },
};

const Price = ({ plan, s, gradient }) => (
  <div className={`my-6 border-y py-6 ${s.line}`}>
    <p className={`mb-2 font-mono text-[11.5px] uppercase tracking-[0.16em] ${s.muted}`}>Starting at</p>
    <Money inr={plan.inr} gradient={gradient} muted={s.muted} testId={`price-${slug(plan.name)}`} />
  </div>
);

export const PricingCard = ({ plan, index, cta, variant = "light", featured = false }) => {
  const s = STYLES[variant];
  const id = slug(plan.name);
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      onMouseMove={onSpot}
      data-testid={`plan-card-${id}`}
      className={`spotlight relative flex h-full flex-col overflow-hidden rounded-[28px] p-7 sm:p-8 ${s.card}`}
    >
      {featured && <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-brand opacity-40 blur-[80px]" />}
      {variant === "dark" && <div aria-hidden="true" className="pointer-events-none absolute inset-x-8 top-0 h-[3px] rounded-full bg-brand" />}
      <div className="relative flex items-center justify-between gap-3">
        <span className={`font-mono text-[11.5px] uppercase tracking-[0.16em] ${s.label}`}>Plan {String(index + 1).padStart(2, "0")}</span>
        {plan.popular && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3 py-1 text-[12px] font-semibold text-white shadow-[0_10px_24px_-10px_rgba(224,69,123,0.9)]" data-testid={`badge-popular-${id}`}>
            <Sparkles className="h-3.5 w-3.5" /> Most Popular
          </span>
        )}
      </div>
      <h3 className="relative mt-5 text-2xl font-bold sm:text-[26px]">{plan.name}</h3>
      <p className={`relative mt-2 text-[15px] leading-relaxed ${s.muted}`}>{plan.tagline}</p>
      <Price plan={plan} s={s} gradient={variant === "light"} />
      <ul className="relative mb-6 space-y-3 text-[15px]">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3">
            <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${s.tick}`}><Check className="h-3 w-3" strokeWidth={3} /></span>
            <span className={s.feat}>{f}</span>
          </li>
        ))}
      </ul>
      {plan.delivery ? (
        <div className={`relative mb-7 mt-auto flex items-center gap-2.5 rounded-2xl border px-4 py-3 text-[14px] ${s.line}`} data-testid={`delivery-${id}`}>
          <Clock3 className={`h-4 w-4 ${s.label}`} />
          <span className={s.muted}>Delivery:</span>
          <span className="font-semibold">{plan.delivery}</span>
        </div>
      ) : <div className="mt-auto" />}
      <Link to={contactHref(plan.name)} className="btn btn-primary group relative w-full" data-testid={`cta-${id}`}>
        {cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.article>
  );
};
