import { BarChart3, ScanSearch, ShieldCheck, Ticket } from "lucide-react";
import SpotlightCard from "../SpotlightCard";
import { useFadeIn } from "../../hooks/useFadeIn";

const values = [
  {
    title: "Discover by City & Category",
    body: "Filter events across all major Cyprus cities with category-first browsing built for speed.",
    icon: ScanSearch,
  },
  {
    title: "Instant Ticketing",
    body: "Buy tickets with transparent fees and a checkout flow optimized for mobile conversion.",
    icon: Ticket,
  },
  {
    title: "Verified & Trusted",
    body: "Event listings are reviewed to keep discovery clean, relevant, and spam-free.",
    icon: ShieldCheck,
  },
  {
    title: "Organizer Tools",
    body: "Use analytics, attendee control, and payout tracking to run events end to end.",
    icon: BarChart3,
  },
];

export default function ValueCards() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} className="home-v2-section home-v2-values fade-in-section" aria-labelledby="home-v2-values-title">
      <div className="home-v2-container">
        <header className="home-v2-section__header">
          <p>Why EventaPulse</p>
          <h2 id="home-v2-values-title">Everything you need to discover and run events</h2>
        </header>

        <div className="home-v2-values__grid">
          {values.map((value, index) => (
            <SpotlightCard key={value.title} className={`home-v2-values__card ${index === 0 ? "is-featured" : ""}`}>
              <value.icon size={22} aria-hidden="true" />
              <h3>{value.title}</h3>
              <p>{value.body}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
