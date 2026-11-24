import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PageHeader, FinalCta } from "@/components/ef/home/Blocks";
import { PROJECTS, PROJECT_FILTERS } from "@/data/site";
import { contactHref } from "@/lib/scroll";

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-");

const Filters = ({ value, onChange }) => (
  <div className="-mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0" data-testid="portfolio-filters">
    <div className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
      {PROJECT_FILTERS.map((f) => (
        <button key={f} type="button" aria-pressed={value === f} onClick={() => onChange(f)} data-testid={`portfolio-filter-${slug(f)}`} className={`relative whitespace-nowrap rounded-full border px-5 py-2.5 text-[14px] font-medium transition-colors duration-300 ${value === f ? "border-ink text-white" : "border-ink/10 bg-white text-muted2 hover:text-ink"}`}>
          {value === f && <motion.span layoutId="pf-pill" className="absolute inset-0 rounded-full bg-ink" />}
          <span className="relative">{f}</span>
        </button>
      ))}
    </div>
  </div>
);

const Project = ({ p }) => (
  <motion.article layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="group flex flex-col" data-testid={`project-card-${p.id}`}>
    <div className="relative overflow-hidden rounded-[28px] bg-violet-soft">
      <div className="aspect-[4/3]"><img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.06]" /></div>
      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 font-mono text-[11px] font-medium uppercase tracking-wider text-ink backdrop-blur">{p.tag}</span>
    </div>
    <p className="mt-5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-violet">{p.cat}</p>
    <h3 className="mt-2 text-xl font-bold text-ink sm:text-2xl">{p.title}</h3>
    <p className="mt-2 text-[15px] leading-relaxed text-muted2">{p.desc}</p>
    <Link to={contactHref("Not sure yet")} className="mt-4 inline-flex w-fit items-center gap-1.5 text-[14.5px] font-semibold text-ink underline decoration-coral/60 decoration-2 underline-offset-[6px] hover:text-violet" data-testid={`project-cta-${p.id}`}>Build something similar <ArrowUpRight className="h-4 w-4" /></Link>
  </motion.article>
);

export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);
  return (
    <>
      <PageHeader testId="portfolio-header" eyebrow="Selected work" title={<>Systems we design & <span className="text-gradient">build</span></>} sub="Demo and concept projects that show the kind of systems we create. Real client case studies will be added as they're published." />
      <section className="pb-12 pt-4" data-testid="portfolio-section">
        <div className="container-x">
          <Filters value={filter} onChange={setFilter} />
          <div className="mt-10 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3" data-testid="portfolio-grid">
            {list.map((p) => <Project key={p.id} p={p} />)}
          </div>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
