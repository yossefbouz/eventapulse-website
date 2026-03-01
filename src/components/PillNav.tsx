import { Link, NavLink } from "react-router-dom";

type NavItem = {
  label: string;
  to: string;
  end?: boolean;
};

type PillNavProps = {
  items: NavItem[];
  ctaLabel?: string;
  ctaTo?: string;
  brandTo?: string;
};

export default function PillNav({
  items,
  ctaLabel = "Join",
  ctaTo = "/contact",
  brandTo = "/",
}: PillNavProps) {
  return (
    <div className="pill-nav-shell">
      <Link to={brandTo} className="pill-brand">
        <img src="/eventpulse-logo-full.jpg" alt="EventaPulse" />
        <span>EventaPulse</span>
      </Link>
      <nav className="pill-nav-links" aria-label="Main navigation">
        {items.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.end ?? item.to === "/"}
            className={({ isActive }) => (isActive ? "is-active" : "")}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
      <Link to={ctaTo} className="pill-cta">
        {ctaLabel}
      </Link>
    </div>
  );
}
