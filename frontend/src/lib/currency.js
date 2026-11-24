export const INR_PER_USD = 88;
export const USD_MARKUP = 1.12;

export const toUsd = (inr) => Math.ceil((inr / INR_PER_USD) * USD_MARKUP / 10) * 10 - 1;
export const fmtINR = (inr) => `₹${inr.toLocaleString("en-IN")}`;
export const fmtUSD = (inr) => `$${toUsd(inr).toLocaleString("en-US")}`;
