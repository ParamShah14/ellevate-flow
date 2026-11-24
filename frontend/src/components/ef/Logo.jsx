export const LogoMark = ({ className = "h-9 w-9" }) => (
  <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
    <defs>
      <linearGradient id="ef-logo-g" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#4A1A8C" />
        <stop offset=".55" stopColor="#B02FB0" />
        <stop offset="1" stopColor="#FF8A3D" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="18" fill="url(#ef-logo-g)" />
    <path d="M17 44c8 0 10-8 15-8s7 4 15 4" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" opacity=".55" />
    <path d="M17 33c8 0 10-8 15-8s7 4 15 4" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" opacity=".8" />
    <path d="M17 22c8 0 10-8 15-8s7 3 13 3" stroke="#fff" strokeWidth="5" strokeLinecap="round" fill="none" />
    <circle cx="47" cy="17" r="4" fill="#fff" />
  </svg>
);

export const Logo = ({ light = false }) => (
  <span className="flex items-center gap-2.5">
    <LogoMark />
    <span className={`font-display text-[21px] font-bold tracking-tight ${light ? "text-white" : "text-ink"}`}>
      Ellevate<span className="text-gradient">Flow</span>
    </span>
  </span>
);
