import { fmtINR, fmtUSD } from "@/lib/currency";

export const Money = ({ inr, gradient = false, muted = "text-muted2", testId, big = false }) => (
  <div data-testid={testId}>
    <p className="flex flex-wrap items-baseline gap-x-2">
      <span className={`font-display font-bold leading-none ${big ? "text-6xl sm:text-7xl" : "text-[44px] sm:text-5xl"} ${gradient ? "text-gradient" : ""}`}>{fmtINR(inr)}</span>
      <span className={`text-sm font-medium ${muted}`}>one-time</span>
    </p>
    <p className={`mt-2 font-mono text-[13px] ${muted}`}>≈ {fmtUSD(inr)} USD</p>
  </div>
);
