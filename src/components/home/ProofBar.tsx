import { BadgeCheck, Building2, Layers3, ShieldCheck } from "lucide-react";
import NumberTicker from "./NumberTicker";
import { useFadeIn } from "../../hooks/useFadeIn";

const stats = [
  {
    label: "Cities",
    value: 5,
    suffix: "",
    description: "Nicosia, Larnaca, Paphos, Ayia Napa, Limassol",
    icon: Building2,
  },
  {
    label: "Categories",
    value: 6,
    suffix: "",
    description: "Cultural, Music, Seminars, Sports, Workshop, Food & Drink",
    icon: Layers3,
  },
  {
    label: "Verified Listings",
    value: 100,
    suffix: "%",
    description: "Admin-reviewed event quality",
    icon: BadgeCheck,
  },
  {
    label: "Secure Payments",
    value: 100,
    suffix: "%",
    description: "Protected checkout powered by Stripe",
    icon: ShieldCheck,
  },
] as const;

export default function ProofBar() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} id="home-proof" className="home-v2-proof fade-in-section" aria-label="Trust and proof metrics">
      <div className="home-v2-container">
        <div className="home-v2-proof__grid">
          {stats.map((stat, index) => (
            <article key={stat.label} className="home-v2-proof__item">
              <stat.icon size={18} aria-hidden="true" />
              <p>
                <NumberTicker value={stat.value} delay={index * 0.08} />
                {stat.suffix}
              </p>
              <h2>{stat.label}</h2>
              <span>{stat.description}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
