import { ArrowRight, CheckCircle2, Megaphone, Search, Users } from "lucide-react";
import { Link } from "react-router-dom";

const cycle = [
  { icon: Megaphone, label: "Organizers create" },
  { icon: CheckCircle2, label: "Platform verifies" },
  { icon: Search, label: "Users discover" },
  { icon: Users, label: "Everyone wins" },
];

export default function EcosystemSummary() {
  return (
    <section className="page-section ecosystem" aria-labelledby="ecosystem-title">
      <div className="page-container">
        <header className="page-section__header" style={{ textAlign: "center" }}>
          <p>The Ecosystem</p>
          <h2 id="ecosystem-title">A cycle that benefits everyone</h2>
        </header>

        <div className="ecosystem__cycle">
          {cycle.map((item, index) => (
            <div key={item.label} className="ecosystem__node">
              <div className="ecosystem__icon-ring">
                <item.icon size={22} aria-hidden="true" />
              </div>
              <span>{item.label}</span>
              {index < cycle.length - 1 && (
                <ArrowRight size={16} className="ecosystem__arrow" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <div className="ecosystem__cta">
          <p className="page-kicker-sm">Pick Your Path</p>
          <div className="ecosystem__cta-actions">
            <Link to="/users" className="page-btn page-btn--primary">
              I want to attend events
            </Link>
            <Link to="/organizers" className="page-btn page-btn--ghost">
              I want to list events
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
