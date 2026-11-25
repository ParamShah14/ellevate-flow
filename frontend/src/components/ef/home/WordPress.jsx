import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PricingSection } from "../PricingSection";
import { Reveal } from "../Reveal";
import { WORDPRESS_PLANS } from "@/data/pricing";
import { usePrice, CurrencyToggle } from "../Currency";

const DIFF = [
  ["WordPress", "Built on WordPress with a theme and Elementor page builder. Quicker to launch, easy for you to edit content yourself, and extended with plugins."],
  ["Custom development", "Hand-coded design and functionality with no theme limits. Best for advanced animations, custom integrations, CRM and automation-heavy builds."],
];

const Difference = () => (
  <Reveal className="mt-8 grid gap-3 md:grid-cols-2">
    {DIFF.map(([t, d], i) => (
      <div key={t} className={`rounded-2xl p-5 ${i ? "bg-ink text-white" : "bg-violet-soft text-ink"}`} data-testid={`wp-diff-${i}`}>
        <p className="font-display text-lg font-bold">{t}</p>
        <p className={`mt-1.5 text-[14.5px] leading-relaxed ${i ? "text-white/80" : "text-ink/80"}`}>{d}</p>
      </div>
    ))}
  </Reveal>
);

export const WordPressPricing = ({ className = "" }) => (
  <PricingSection
    id="wordpress"
    num="WP"
    eyebrow="WordPress websites"
    title={<>WordPress Website <span className="text-gradient">Pricing</span></>}
    sub="We also design and develop professional WordPress websites tailored to your business needs, goals, and brand identity."
    plans={WORDPRESS_PLANS}
    cta="Get Started"
    cols="lg:grid-cols-4"
    className={className}
  >
    <Difference />
  </PricingSection>
);

export const WordPressTeaser = () => {
  const { main } = usePrice();
  return (
  <section className="pb-20 sm:pb-28" data-testid="home-wordpress">
    <div className="container-x">
      <Reveal>
        <div className="card-soft grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">WordPress</p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.1] text-ink sm:text-4xl">Prefer WordPress? <span className="text-gradient">We build that too.</span></h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted2">We also design and develop professional WordPress websites tailored to your business needs, goals, and brand identity.</p>
            <Link to="/pricing#wordpress" className="btn btn-primary group mt-7" data-testid="home-wordpress-cta">See WordPress Pricing <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
            <div className="mt-6"><CurrencyToggle testId="currency-wp-teaser" /></div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {WORDPRESS_PLANS.map((p) => (
              <li key={p.name} className="rounded-2xl bg-canvas p-5" data-testid={`home-wp-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <p className="text-[14px] font-semibold text-ink">{p.name}</p>
                <p className="mt-2 font-display text-2xl font-bold text-gradient">{main(p.inr)}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
  );
};
