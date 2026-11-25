import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHead } from "../PricingSection";
import { WEBSITE_PLANS, AUTOMATION_PLANS, GROWTH_PLANS, WORDPRESS_PLANS } from "@/data/pricing";
import { usePrice, CurrencyToggle } from "../Currency";

const ROWS = [
  { title: "Website Development", from: WEBSITE_PLANS[0].inr, to: "/pricing#websites" },
  { title: "WordPress Websites", from: WORDPRESS_PLANS[0].inr, to: "/pricing#wordpress" },
  { title: "AI Automation", from: AUTOMATION_PLANS[0].inr, to: "/pricing#automation" },
  { title: "Complete Growth System", from: GROWTH_PLANS.find((p) => p.popular).inr, to: "/pricing#growth", hl: true },
];

export const PricingPreview = () => {
  const { main } = usePrice();
  return (
  <section className="bg-white py-20 sm:py-28" data-testid="home-pricing">
    <div className="container-x">
      <SectionHead num="₹/$" eyebrow="Pricing" title={<>Simple packages, <span className="text-gradient">clear terms</span></>} sub="One-time project fees, shown in INR and USD." />
      <Reveal className="mt-8"><CurrencyToggle testId="currency-preview" /></Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {ROWS.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.08} className="h-full">
            <Link to={r.to} className={`group flex h-full flex-col rounded-[28px] p-7 transition-transform duration-500 hover:-translate-y-1.5 ${r.hl ? "bg-ink text-white" : "card-soft"}`} data-testid={`pricing-preview-${i}`}>
              <p className={`font-mono text-[11.5px] uppercase tracking-[0.16em] ${r.hl ? "text-tangerine" : "text-violet"}`}>Starting at</p>
              <p className="mt-3 font-display text-4xl font-bold">{main(r.from)}</p>
              <p className="mt-6 text-lg font-semibold">{r.title}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[14.5px] font-semibold">View packages <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
  );
};
