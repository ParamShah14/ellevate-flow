import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { usePrice } from "./Currency";
import { contactHref } from "@/lib/scroll";

export const CompareTable = ({ plans, dark = false, testId }) => {
  const { main } = usePrice();
  const labels = [...new Set(plans.flatMap((p) => (p.specs ?? []).map(([k]) => k)))];
  const rows = [
    ["Price", (p) => main(p.inr)],
    ...labels.map((l) => [l, (p) => (p.specs ?? []).find(([k]) => k === l)?.[1] ?? "—"]),
    ["Delivery", (p) => p.delivery ?? "—"],
    ["Features included", (p) => `${p.features.length} deliverables`],
  ];
  const head = dark ? "text-white" : "text-ink";
  const line = dark ? "border-white/10" : "border-ink/10";
  return (
    <Reveal className="mt-16">
      <p className={`eyebrow ${dark ? "!text-tangerine" : ""}`}>Compare packages</p>
      <div className={`mt-5 overflow-x-auto rounded-[24px] border ${line} ${dark ? "bg-white/[0.03]" : "bg-white"}`} data-testid={testId}>
        <table className="w-full min-w-[640px] text-left text-[14.5px]">
          <thead>
            <tr className={`border-b ${line}`}>
              <th className={`p-4 font-mono text-[11.5px] font-medium uppercase tracking-wider ${dark ? "text-white/70" : "text-muted2"}`}>Package</th>
              {plans.map((p) => (
                <th key={p.name} className={`p-4 font-display text-[16px] font-bold ${head}`}>
                  {p.name}
                  {p.popular && <span className="ml-2 rounded-full bg-brand px-2 py-0.5 align-middle font-sans text-[11px] font-semibold text-white">Recommended</span>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, get]) => (
              <tr key={label} className={`border-b last:border-0 ${line}`}>
                <td className={`p-4 font-medium ${dark ? "text-white/70" : "text-muted2"}`}>{label}</td>
                {plans.map((p) => <td key={p.name} className={`p-4 font-semibold ${head} ${p.popular ? (dark ? "bg-white/[0.05]" : "bg-violet-soft/60") : ""}`}>{get(p)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Reveal>
  );
};

export const CustomCta = ({ dark = false, testId }) => (
  <Reveal className="mt-10">
    <div className={`flex flex-col gap-5 rounded-[24px] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8 ${dark ? "border border-white/10 bg-white/[0.04]" : "card-soft"}`} data-testid={testId}>
      <div>
        <p className={`font-display text-xl font-bold sm:text-2xl ${dark ? "text-white" : "text-ink"}`}>Need something more customized?</p>
        <p className={`mt-1.5 text-[15px] ${dark ? "text-white/75" : "text-muted2"}`}>Let's discuss your business requirements and build a solution that fits your needs.</p>
      </div>
      <Link to={contactHref("Custom Quote")} className="btn btn-primary group shrink-0" data-testid={`${testId}-btn`}>Get a Custom Quote <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
    </div>
  </Reveal>
);
