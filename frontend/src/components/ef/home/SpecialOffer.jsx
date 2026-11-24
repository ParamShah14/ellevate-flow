import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Check, Globe, Sparkles } from "lucide-react";
import { Reveal } from "../Reveal";
import { Money } from "../Money";
import { SPECIAL_OFFER } from "@/data/pricing";
import { contactHref } from "@/lib/scroll";
import { CurrencyToggle } from "../Currency";

const Group = ({ icon: I, title, items, delay }) => (
  <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.8, delay }} className="rounded-[24px] border border-white/10 bg-white/[0.04] p-6 sm:p-7">
    <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-brand"><I className="h-5 w-5" /></span><p className="text-lg font-semibold">{title}</p></div>
    <ul className="mt-5 space-y-3">{items.map((i) => <li key={i} className="flex items-start gap-3 text-[15px] text-white/85"><Check className="mt-0.5 h-4 w-4 shrink-0 text-tangerine" />{i}</li>)}</ul>
  </motion.div>
);

export const SpecialOffer = () => (
  <section className="py-20 sm:py-28" data-testid="home-special-offer">
    <div className="container-x">
      <Reveal>
        <div className="relative rounded-[40px] p-[1.5px]" style={{ background: "var(--brand-gradient)" }}>
          <div className="grain relative overflow-hidden rounded-[39px] bg-ink px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand opacity-35 blur-[110px]" />
            <div className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 font-mono text-[11.5px] uppercase tracking-[0.16em] text-tangerine"><Sparkles className="h-3.5 w-3.5" /> Special package</span>
                <h2 className="mt-6 text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-[58px]">Website <span className="text-gradient">+</span> Lead Capture Automation.</h2>
                <p className="mt-5 max-w-md text-base text-white/75 md:text-lg">We build your website and set up the automations that capture every lead — delivered together as one launch-ready system.</p>
                <div className="mt-8"><CurrencyToggle dark testId="currency-special" /></div>
                <div className="mt-6"><Money inr={SPECIAL_OFFER.inr} big gradient muted="text-white/85" testId="special-offer-price" /></div>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to={contactHref(SPECIAL_OFFER.name)} className="btn btn-primary group" data-testid="special-offer-cta">Claim This Package <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
                  <Link to="/pricing" className="btn btn-outline-light" data-testid="special-offer-pricing-link">See All Pricing</Link>
                </div>
                <p className="mt-6 text-[13px] text-white/60">Domain, hosting and third-party tool subscriptions are billed separately.</p>
              </div>
              <div className="grid gap-4">
                <Group icon={Globe} title="Your professional website" items={SPECIAL_OFFER.website} delay={0.1} />
                <Group icon={Sparkles} title="Your lead capture automation" items={SPECIAL_OFFER.automation} delay={0.2} />
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
