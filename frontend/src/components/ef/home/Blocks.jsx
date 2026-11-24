import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHead } from "../PricingSection";
import { PROCESS } from "@/data/site";
import { contactHref } from "@/lib/scroll";

export const Process = () => (
  <section className="py-20 sm:py-28" data-testid="process-section">
    <div className="container-x">
      <SectionHead num="→" eyebrow="How we work" title={<>A simple, <span className="text-gradient">four-step</span> process</>} sub="Clear stages, clear scope and regular updates from first call to launch." />
      <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
        <div aria-hidden="true" className="absolute left-6 right-6 top-6 hidden h-px bg-gradient-to-r from-violet/40 via-magenta/40 to-tangerine/50 lg:block" />
        {PROCESS.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.1}>
            <li className="flex gap-6 lg:block" data-testid={`process-step-${i + 1}`}>
              <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-full border border-ink/10 bg-white font-mono text-sm font-medium text-ink shadow-sm">{p.n}</span>
              <div className="lg:mt-8"><h3 className="text-2xl font-bold text-ink sm:text-3xl">{p.t}</h3><p className="mt-3 max-w-xs text-[15px] leading-relaxed text-muted2">{p.d}</p></div>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export const FinalCta = () => (
  <section className="py-20 sm:py-28" data-testid="final-cta">
    <div className="container-x">
      <Reveal>
        <div className="grain relative overflow-hidden rounded-[36px] bg-brand px-6 py-16 text-white sm:px-14 sm:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/25" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 right-20 h-72 w-72 rounded-full border border-white/20" />
          <div className="relative max-w-3xl">
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/85">Let's talk</p>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-[64px]">Ready to Make Your Business Smarter?</h2>
            <p className="mt-5 max-w-xl text-base text-white/90 md:text-lg">Let's identify the opportunities where automation and technology can make a real difference.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to={contactHref("Not sure yet", "consultation")} className="btn btn-light group" data-testid="final-cta-book-call-btn">Book a Free Call <ArrowUpRight className="h-4 w-4" /></Link>
              <Link to="/contact" className="btn btn-outline-light" data-testid="final-cta-contact-btn">Contact Us</Link>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export const PageHeader = ({ eyebrow, title, sub, testId }) => (
  <section className="soft-bg relative overflow-hidden pb-12 pt-36 sm:pb-16 sm:pt-44" data-testid={testId}>
    <div className="container-x">
      <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
      <h1 className="mt-6 max-w-4xl text-[44px] font-extrabold leading-[0.98] text-ink sm:text-6xl lg:text-[76px]">{title}</h1>
      <Reveal delay={0.15}><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted2 md:text-lg">{sub}</p></Reveal>
    </div>
  </section>
);
