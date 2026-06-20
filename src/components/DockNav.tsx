import { NavLink } from "react-router-dom";
import {
  Home,
  Compass,
  Sparkles,
  Workflow,
  ShieldCheck,
  Mail,
  type LucideIcon,
} from "lucide-react";

type DockItem = {
  to: string;
  label: string;
  icon: LucideIcon;
  end?: boolean;
  highlight?: boolean;
};

const items: DockItem[] = [
  { to: "/", label: "Home", icon: Home, end: true },
  { to: "/users", label: "For Users", icon: Compass },
  { to: "/organizers", label: "For Organizers", icon: Sparkles },
  { to: "/how-it-works", label: "How It Works", icon: Workflow },
  { to: "/trust", label: "Trust", icon: ShieldCheck },
  { to: "/contact", label: "Contact", icon: Mail },
];

type DockNavProps = {
  onNavigate?: () => void;
  className?: string;
};

export default function DockNav({ onNavigate, className }: DockNavProps) {
  return (
    <nav
      className={`dock-nav ${className ?? ""}`.trim()}
      aria-label="Main navigation"
    >
      <div className="dock-nav__shell">
        {items.map(({ to, label, icon: Icon, end, highlight }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={onNavigate}
            className={({ isActive }) =>
              `dock-nav__item ${isActive ? "is-active" : ""} ${
                highlight ? "dock-nav__item--highlight" : ""
              }`.trim()
            }
          >
            <span className="dock-nav__icon" aria-hidden="true">
              <Icon size={18} strokeWidth={2.1} />
            </span>
            <span className="dock-nav__label">{label}</span>
            {highlight && (
              <span className="dock-nav__live-dot" aria-hidden="true" />
            )}
            <span className="dock-nav__tooltip" aria-hidden="true">
              {label}
              {highlight ? " · Live" : ""}
            </span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
