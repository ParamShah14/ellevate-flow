import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PricingSection } from "../PricingSection";
import { Reveal } from "../Reveal";
import { WORDPRESS_PLANS } from "@/data/pricing";
import { fmtINR, fmtUSD } from "@/lib/currency";

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
  />
);

export const WordPressTeaser = () => (
  <section className="pb-20 sm:pb-28" data-testid="home-wordpress">
    <div className="container-x">
      <Reveal>
        <div className="card-soft grid gap-8 p-7 sm:p-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <p className="eyebrow">WordPress</p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.1] text-ink sm:text-4xl">Prefer WordPress? <span className="text-gradient">We build that too.</span></h2>
            <p className="mt-4 text-[15.5px] leading-relaxed text-muted2">We also design and develop professional WordPress websites tailored to your business needs, goals, and brand identity.</p>
            <Link to="/pricing#wordpress" className="btn btn-primary group mt-7" data-testid="home-wordpress-cta">See WordPress Pricing <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {WORDPRESS_PLANS.map((p) => (
              <li key={p.name} className="rounded-2xl bg-canvas p-5" data-testid={`home-wp-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
                <p className="text-[14px] font-semibold text-ink">{p.name}</p>
                <p className="mt-2 font-display text-2xl font-bold text-gradient">{fmtINR(p.inr)}</p>
                <p className="font-mono text-[12.5px] text-muted2">≈ {fmtUSD(p.inr)} USD</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  </section>
);
