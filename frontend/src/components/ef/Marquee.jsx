const WORDS = ["Website Development", "Lead Capture Automation", "AI Chatbots", "CRM Integration", "Appointment Booking", "Complete Growth System"];

export const Marquee = () => (
  <div className="relative overflow-hidden border-y border-ink/10 bg-white/60 py-7" data-testid="pricing-marquee" aria-hidden="true">
    <div className="animate-marquee flex w-max items-center">
      {[...WORDS, ...WORDS].map((w, i) => (
        <span key={i} className="flex items-center whitespace-nowrap">
          <span className={`px-8 font-display text-4xl font-semibold tracking-tight sm:text-6xl ${i % 2 ? "outline-text" : "text-ink"}`}>{w}</span>
          <span className="h-3 w-3 rotate-45 rounded-[3px] bg-brand" />
        </span>
      ))}
    </div>
  </div>
);
