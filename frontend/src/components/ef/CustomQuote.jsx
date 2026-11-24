import { ArrowUpRight, PhoneCall } from "lucide-react";
import { Reveal } from "./Reveal";
import { selectPlan } from "@/lib/scroll";

const POINTS = ["Multi-service or multi-location projects", "Custom AI agents and integrations", "E-commerce, portals and dashboards"];

export const CustomQuote = () => (
  <section className="py-20 sm:py-28" data-testid="section-custom-quote">
    <div className="container-x">
      <Reveal>
        <div className="grain relative overflow-hidden rounded-[36px] bg-brand px-6 py-14 text-white sm:px-14 sm:py-16">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/25" />
          <div aria-hidden="true" className="pointer-events-none absolute -bottom-32 right-24 h-72 w-72 rounded-full border border-white/20" />
          <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
            <div>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/85">Custom quote</p>
              <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-[60px]">Need something more specialised?</h2>
              <p className="mt-5 max-w-xl text-base text-white/90 md:text-lg">Tell us what you are trying to achieve. We will scope a solution around your processes and send a clear, fixed quote.</p>
            </div>
            <div>
              <ul className="space-y-3">
                {POINTS.map((p) => (
                  <li key={p} className="flex items-center gap-3 border-b border-white/20 pb-3 text-[15px]"><span className="h-2 w-2 rotate-45 rounded-[2px] bg-white" />{p}</li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="button" onClick={() => selectPlan("Custom Quote")} className="btn btn-light group" data-testid="custom-quote-btn">
                  Request a Custom Quote <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </button>
                <button type="button" onClick={() => selectPlan("Not sure yet", "consultation")} className="btn btn-outline-light" data-testid="custom-consultation-btn">
                  <PhoneCall className="h-4 w-4" /> Book a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);
