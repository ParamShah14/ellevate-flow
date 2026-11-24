import { Reveal } from "@/components/ef/Reveal";
import { PageHeader, Process, FinalCta } from "@/components/ef/home/Blocks";
import { SectionHead } from "@/components/ef/PricingSection";
import { VALUES } from "@/data/site";

const Values = () => (
  <section className="grain relative overflow-hidden bg-ink py-20 text-white sm:py-28" data-testid="about-values">
    <div aria-hidden="true" className="pointer-events-none absolute -left-40 top-20 h-[460px] w-[460px] rounded-full bg-brand opacity-25 blur-[120px]" />
    <div className="container-x relative">
      <SectionHead dark num="06" eyebrow="Why EllevateFlow" title={<>Built around your business, <span className="text-gradient">not a template</span></>} sub="We keep things practical, transparent and focused on the outcomes that matter to you." />
      <div className="mt-14 grid gap-px overflow-hidden rounded-[28px] bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
        {VALUES.map((v, i) => (
          <div key={v.t} className="group relative h-full bg-ink p-7 transition-colors duration-500 hover:bg-[#1d1240] sm:p-8" data-testid={`why-item-${i}`}>
            <span className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-brand transition-transform duration-700 group-hover:scale-x-100" />
            <span className="font-mono text-xs text-tangerine">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-xl font-bold">{v.t}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-white/75">{v.d}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function AboutPage() {
  return (
    <>
      <PageHeader testId="about-header" eyebrow="About EllevateFlow" title={<>Smarter systems for <span className="text-gradient">growing businesses</span></>} sub="EllevateFlow is an AI automation and digital growth agency. We build AI chatbots, workflow automation, high-performing websites, SEO and lead generation systems." />
      <section className="py-16 sm:py-20" data-testid="about-mission">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <div className="relative h-72 overflow-hidden rounded-[32px] sm:h-96">
              <img src="/img/studio.jpg" alt="Team working in a purple-lit studio" loading="lazy" className="h-full w-full object-cover object-[50%_35%]" />
              <div className="absolute inset-0 bg-gradient-to-tr from-ink/50 to-transparent" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow">Our mission</p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.1] text-ink sm:text-[44px]">Help businesses grow with technology that <span className="text-gradient">actually works</span></h2>
            <p className="mt-5 text-[15.5px] leading-relaxed text-muted2">We combine premium web design with practical AI automation, so every enquiry is captured, followed up and organised — without adding more manual work for your team.</p>
            <p className="mt-4 font-mono text-[12px] uppercase tracking-[0.16em] text-muted2">Smarter Systems · Stronger Businesses · Faster Growth</p>
          </Reveal>
        </div>
      </section>
      <Values />
      <Process />
      <FinalCta />
    </>
  );
}
