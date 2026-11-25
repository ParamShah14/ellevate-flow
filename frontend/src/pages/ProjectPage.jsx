import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ef/Reveal";
import { FinalCta } from "@/components/ef/home/Blocks";
import { PROJECTS } from "@/data/projects";
import { contactHref } from "@/lib/scroll";

const Block = ({ title, children, testId }) => (
  <Reveal className="card-soft p-6 sm:p-8" >
    <div data-testid={testId}>
      <p className="eyebrow">{title}</p>
      <div className="mt-4 text-[15.5px] leading-relaxed text-ink/85">{children}</div>
    </div>
  </Reveal>
);

export default function ProjectPage() {
  const { id } = useParams();
  const idx = PROJECTS.findIndex((x) => x.id === id);
  if (idx < 0) return <Navigate to="/portfolio" replace />;
  const p = PROJECTS[idx];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  return (
    <>
      <section className="soft-bg pb-12 pt-32 sm:pt-40" data-testid="project-header">
        <div className="container-x">
          <Link to="/portfolio" className="inline-flex items-center gap-2 text-[14.5px] font-medium text-muted2 hover:text-ink" data-testid="project-back-link"><ArrowLeft className="h-4 w-4" /> All projects</Link>
          <div className="mt-8"><p className="eyebrow">{p.cat}</p></div>
          <h1 className="mt-5 max-w-4xl text-4xl font-extrabold leading-[1.02] text-ink sm:text-5xl lg:text-6xl">{p.title}</h1>
          <p className="mt-5 max-w-2xl text-base text-muted2 md:text-lg">{p.summary}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {p.liveUrl ? (
              <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" data-testid="project-live-link">View Live Project <ExternalLink className="h-4 w-4" /></a>
            ) : (
              <span className="btn btn-ghost cursor-default opacity-70" data-testid="project-live-pending">Live link coming soon</span>
            )}
            <Link to={contactHref("Not sure yet")} className="btn btn-ghost" data-testid="project-contact-cta">Build something similar <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-10 overflow-hidden rounded-[32px]"><img src={p.img} alt={p.title} className="h-64 w-full object-cover sm:h-96" /></div>
        </div>
      </section>
      <section className="pb-10">
        <div className="container-x grid gap-5">
          <Block title="Project overview" testId="project-overview"><p>{p.overview}</p></Block>
          <div className="grid gap-5 lg:grid-cols-2">
            <Block title="Problem solved" testId="project-problem"><p>{p.problem}</p></Block>
            <Block title="Solution implemented" testId="project-solution"><p>{p.solution}</p></Block>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
            <Block title="Key features" testId="project-features">
              <ul className="grid gap-3 sm:grid-cols-2">{p.features.map((f) => <li key={f} className="flex items-start gap-3"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-violet-soft text-violet"><Check className="h-3 w-3" strokeWidth={3} /></span>{f}</li>)}</ul>
            </Block>
            <Block title="Technology stack" testId="project-tools">
              <div className="flex flex-wrap gap-2">{p.tools.map((t) => <span key={t} className="rounded-full bg-ink px-3.5 py-1.5 text-[13.5px] font-medium text-white">{t}</span>)}</div>
            </Block>
          </div>
          <Link to={`/portfolio/${next.id}`} className="group card-soft flex items-center justify-between gap-4 p-6 sm:p-8" data-testid="project-next-link">
            <div><p className="font-mono text-[11.5px] uppercase tracking-wider text-muted2">Next project</p><p className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">{next.title}</p></div>
            <ArrowRight className="h-6 w-6 shrink-0 text-violet transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
      <FinalCta />
    </>
  );
}
