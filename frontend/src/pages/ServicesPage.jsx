import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/ef/Reveal";
import { PageHeader, FinalCta } from "@/components/ef/home/Blocks";
import { ExtraServices } from "@/components/ef/home/Services";
import { WordPressTeaser } from "@/components/ef/home/WordPress";
import { CORE_SERVICES } from "@/data/site";
import { contactHref } from "@/lib/scroll";

const IMAGES = { ai: "/img/pf-support.jpg", web: "/img/pf-website.jpg", crm: "/img/pf-lead.jpg", seo: "/img/pf-email.jpg" };

const ServiceRow = ({ s, i }) => (
  <section id={s.id} className="scroll-mt-24 border-t border-ink/5 py-16 sm:py-20" data-testid={`services-detail-${s.id}`}>
    <div className={`container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <Reveal>
        <div className="relative h-64 overflow-hidden rounded-[32px] sm:h-80 lg:h-[420px]">
          <img src={IMAGES[s.id]} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          <span className="absolute bottom-5 left-5 font-display text-7xl font-bold text-white/90">{s.num}</span>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-soft text-violet"><s.icon className="h-5 w-5" /></span>
        <h2 className="mt-5 text-3xl font-bold text-ink sm:text-[44px] sm:leading-[1.05]">{s.title}</h2>
        <p className="mt-3 text-lg font-medium text-violet">{s.short}</p>
        <p className="mt-4 text-[15.5px] leading-relaxed text-muted2">{s.desc}</p>
        <ul className="mt-7 grid gap-3 sm:grid-cols-2">
          {s.items.map((it) => <li key={it} className="flex items-center gap-3 text-[15px] text-ink/85"><span className="grid h-5 w-5 place-items-center rounded-full bg-violet-soft text-violet"><Check className="h-3 w-3" strokeWidth={3} /></span>{it}</li>)}
        </ul>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link to={contactHref(s.plan)} className="btn btn-primary group" data-testid={`services-cta-${s.id}`}>Get Started <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
          <Link to="/pricing" className="btn btn-ghost" data-testid={`services-pricing-${s.id}`}>View Pricing</Link>
        </div>
      </Reveal>
    </div>
  </section>
);

export default function ServicesPage() {
  return (
    <>
      <PageHeader testId="services-header" eyebrow="Our services" title={<>Systems that help you <span className="text-gradient">run smarter</span></>} sub="Four core services — AI automation, websites, CRM & lead management, and SEO — plus supporting services for communication and growth." />
      {CORE_SERVICES.map((s, i) => <ServiceRow key={s.id} s={s} i={i} />)}
      <div className="pt-6"><ExtraServices /></div>
      <WordPressTeaser />
      <FinalCta />
    </>
  );
}
