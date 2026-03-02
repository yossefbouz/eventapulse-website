import PhoneMockup from "../PhoneMockup";
import { screenshots } from "../../data/screenshots";

const steps = [
  {
    step: 1,
    label: "Browse",
    title: "Choose your city and interests",
    body: "Pick from Nicosia, Larnaca, Paphos, Ayia Napa, or Limassol. Filter by category — Cultural, Music, Seminars, Sports, Workshop, or Food & Drink.",
    image: screenshots.citySelection,
    alt: "City selection screen showing 5 Cyprus cities",
    glow: "blue" as const,
  },
  {
    step: 2,
    label: "Discover",
    title: "Find events nearby on the map or feed",
    body: "See what's happening tonight with our live feed or switch to map view to find events near you with pinpoint accuracy.",
    image: screenshots.mapView,
    alt: "Map view showing events across Cyprus",
    glow: "pink" as const,
  },
  {
    step: 3,
    label: "Go",
    title: "Buy tickets instantly with transparent fees",
    body: "Select your ticket tier, review the clear fee breakdown, and check out securely with Stripe — no hidden charges, just a flat EUR 1.00 platform fee.",
    image: screenshots.checkout,
    alt: "Checkout screen with ticket tiers and fee breakdown",
    glow: "amber" as const,
  },
];

export default function DiscoveryFlow() {
  return (
    <section className="page-section discovery-flow" aria-labelledby="discovery-flow-title">
      <div className="page-container">
        <header className="page-section__header">
          <p>How It Works</p>
          <h2 id="discovery-flow-title">Three steps to your next event</h2>
        </header>

        <div className="discovery-flow__steps">
          {steps.map((s, index) => (
            <article
              key={s.step}
              className={`discovery-flow__step ${index % 2 === 1 ? "is-reversed" : ""}`}
            >
              <div className="discovery-flow__phone">
                <PhoneMockup src={s.image} alt={s.alt} glow={s.glow} />
              </div>
              <div className="discovery-flow__copy">
                <span className="discovery-flow__badge">
                  Step {s.step} — {s.label}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
