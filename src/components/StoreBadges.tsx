type AppStoreBadgeProps = {
  href: string;
  className?: string;
};

export function AppStoreBadge({ href, className }: AppStoreBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`store-badge store-badge--apple ${className ?? ""}`.trim()}
      aria-label="Download EventaPulse on the App Store"
    >
      <img
        src="/badges/app-store.svg"
        alt="Download on the App Store"
        width={156}
        height={52}
      />
    </a>
  );
}

export function GooglePlayBadge({ className }: { className?: string }) {
  return (
    <span
      className={`store-badge store-badge--play is-disabled ${className ?? ""}`.trim()}
      role="img"
      aria-label="EventaPulse on Google Play — coming soon"
    >
      <svg viewBox="0 0 135 40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="epa-play-tri" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FB7185" />
            <stop offset="1" stopColor="#F97316" />
          </linearGradient>
        </defs>
        <rect
          x="0.5"
          y="0.5"
          width="134"
          height="39"
          rx="6.5"
          fill="#000"
          stroke="rgba(255,255,255,0.18)"
        />
        <path
          d="M13 8.4 L13 31.6 Q13 33 14.2 32.2 L33.2 20.6 Q34.4 19.9 33.2 19.2 L14.2 7.8 Q13 7 13 8.4 Z"
          fill="url(#epa-play-tri)"
        />
        <text
          x="44"
          y="17"
          fill="#fff"
          fontFamily="-apple-system, Segoe UI, Helvetica, Arial, sans-serif"
          fontSize="6.5"
          letterSpacing="0.6"
          opacity="0.88"
        >
          GET IT ON
        </text>
        <text
          x="44"
          y="30"
          fill="#fff"
          fontFamily="-apple-system, Segoe UI, Helvetica, Arial, sans-serif"
          fontSize="13.5"
          fontWeight="600"
        >
          Google Play
        </text>
      </svg>
      <span className="store-badge__soon">Coming soon</span>
    </span>
  );
}
