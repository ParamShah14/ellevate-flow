import { createContext, useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fmtINR, fmtUSD } from "@/lib/currency";

const Ctx = createContext({ cur: "INR", setCur: () => {} });

export const CurrencyProvider = ({ children }) => {
  const [cur, setCur] = useState(() => (localStorage.getItem("ef-cur") === "USD" ? "USD" : "INR"));
  useEffect(() => {
    localStorage.setItem("ef-cur", cur);
  }, [cur]);
  return <Ctx.Provider value={{ cur, setCur }}>{children}</Ctx.Provider>;
};

export const usePrice = () => {
  const { cur } = useContext(Ctx);
  return {
    cur,
    main: (inr) => (cur === "USD" ? fmtUSD(inr) : fmtINR(inr)),
    alt: (inr) => (cur === "USD" ? `${fmtINR(inr)} INR` : `${fmtUSD(inr)} USD`),
  };
};

export const CurrencyToggle = ({ dark = false, testId = "currency-toggle" }) => {
  const { cur, setCur } = useContext(Ctx);
  return (
    <div role="radiogroup" aria-label="Currency" data-testid={testId} className={`inline-flex rounded-full border p-1 ${dark ? "border-white/15 bg-white/5" : "border-ink/10 bg-white shadow-sm"}`}>
      {[["INR", "₹ INR"], ["USD", "$ USD"]].map(([k, l]) => (
        <button key={k} type="button" role="radio" aria-checked={cur === k} onClick={() => setCur(k)} data-testid={`${testId}-${k.toLowerCase()}`} className={`relative rounded-full px-5 py-2 font-mono text-[13px] font-medium transition-colors duration-300 ${cur === k ? (dark ? "text-ink" : "text-white") : dark ? "text-white/75 hover:text-white" : "text-muted2 hover:text-ink"}`}>
          {cur === k && <motion.span layoutId={`cur-pill-${testId}`} className={`absolute inset-0 rounded-full ${dark ? "bg-white" : "bg-ink"}`} transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
          <span className="relative">{l}</span>
        </button>
      ))}
    </div>
  );
};
