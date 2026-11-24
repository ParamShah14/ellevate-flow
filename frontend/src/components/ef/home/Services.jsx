import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "../Reveal";
import { SectionHead } from "../PricingSection";
import { CORE_SERVICES, EXTRA_SERVICES } from "@/data/site";

const Tag = ({ children, dark }) => <span className={`rounded-full px-2.5 py-1 text-[12.5px] ${dark ? "bg-white/15 text-white" : "bg-canvas text-ink/80"}`}>{children}</span>;

const Lead = ({ s }) => (
  <article data-testid={`service-card-${s.id}`} className="grain group relative flex h-full flex-col overflow-hidden rounded-[32px] bg-ink p-7 text-white sm:p-10">
    <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-brand opacity-40 blur-[90px] transition-opacity duration-700 group-hover:opacity-60" />
    <div className="relative flex items-center justify-between">
      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand"><s.icon className="h-6 w-6" /></span>
      <span className="rounded-full border border-white/20 px-3 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/85">{s.num} · Core service</span>
    </div>
    <h3 className="relative mt-10 text-3xl font-bold sm:text-[44px] sm:leading-[1.05]">{s.title}</h3>
    <p className="relative mt-4 max-w-lg text-[15.5px] leading-relaxed text-white/75">{s.desc}</p>
    <ul className="relative mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2">
      {s.items.map((i) => <li key={i} className="flex items-center gap-3 border-b border-white/10 pb-3 text-[15px]"><Check className="h-4 w-4 text-tangerine" />{i}</li>)}
    </ul>
    <div className="relative mt-auto flex flex-col gap-6 pt-10 sm:flex-row sm:items-end sm:justify-between">
      <Link to={`/services#${s.id}`} className="btn btn-light" data-testid={`service-learn-more-${s.id}`}>Learn More <ArrowUpRight className="h-4 w-4" /></Link>
      <div className="h-40 w-full overflow-hidden rounded-2xl sm:h-44 sm:w-64"><img src="/img/pf-crm.jpg" alt="Automation dashboard" loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110" /></div>
    </div>
  </article>
);

const Card = ({ s, brand = false, wide = false }) => (
  <article data-testid={`service-card-${s.id}`} className={`group flex h-full flex-col p-7 transition-transform duration-500 hover:-translate-y-1.5 ${brand ? "rounded-[28px] bg-brand text-white shadow-[0_30px_60px_-30px_rgba(164,45,180,0.7)]" : "card-soft"} ${wide ? "lg:flex-row lg:items-center lg:gap-10" : ""}`}>
    <div className={wide ? "lg:w-1/2" : ""}>
      <div className="flex items-start justify-between">
        <span className={`grid h-12 w-12 place-items-center rounded-2xl ${brand ? "bg-white/15" : "bg-violet-soft text-violet"}`}><s.icon className="h-5 w-5" /></span>
        <span className={`font-mono text-xs ${brand ? "text-white/85" : "text-muted2"}`}>{s.num}</span>
      </div>
      <h3 className={`mt-6 text-xl font-bold sm:text-[24px] ${brand ? "" : "text-ink"}`}>{s.title}</h3>
      <p className={`mt-2 text-[15px] leading-relaxed ${brand ? "text-white/90" : "text-muted2"}`}>{s.short}</p>
    </div>
    <div className={wide ? "lg:w-1/2" : "flex flex-1 flex-col"}>
      <div className="mt-5 flex flex-wrap gap-1.5">{s.items.map((i) => <Tag key={i} dark={brand}>{i}</Tag>)}</div>
      <Link to={`/services#${s.id}`} className={`mt-auto inline-flex items-center gap-1.5 pt-6 text-[14.5px] font-semibold ${brand ? "text-white" : "text-ink hover:text-violet"}`} data-testid={`service-learn-more-${s.id}`}>Learn More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
    </div>
  </article>
);

export const CoreServices = () => {
  const [ai, web, crm, seo] = CORE_SERVICES;
  return (
    <section className="py-20 sm:py-28" data-testid="home-services">
      <div className="container-x">
        <SectionHead num="04" eyebrow="What we do" title={<>Four ways we help you <span className="text-gradient">grow</span></>} sub="Focused services, ranked by the impact they have on your business." />
        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          <Reveal className="h-full lg:col-span-7 lg:row-span-2"><Lead s={ai} /></Reveal>
          <Reveal delay={0.08} className="h-full lg:col-span-5"><Card s={web} brand /></Reveal>
          <Reveal delay={0.16} className="h-full lg:col-span-5"><Card s={crm} /></Reveal>
          <Reveal delay={0.1} className="h-full lg:col-span-12"><Card s={seo} wide /></Reveal>
        </div>
      </div>
    </section>
  );
};

export const ExtraServices = () => (
  <section className="pb-20 sm:pb-28" data-testid="home-extra-services">
    <div className="container-x">
      <Reveal><p className="eyebrow">Also available</p></Reveal>
      <div className="mt-6 grid gap-5 md:grid-cols-2">
        {EXTRA_SERVICES.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.08} className="h-full">
            <article className="card-soft flex h-full flex-col p-7" data-testid={`extra-service-${i}`}>
              <div className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-soft text-violet"><s.icon className="h-5 w-5" /></span><h3 className="text-xl font-bold text-ink sm:text-[22px]">{s.title}</h3></div>
              <p className="mt-3 text-[15px] text-muted2">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-1.5">{s.items.map((t) => <Tag key={t}>{t}</Tag>)}</div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
