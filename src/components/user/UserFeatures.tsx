import { Building2, Filter, ShieldCheck, Ticket } from "lucide-react";
import SpotlightCard from "../SpotlightCard";

const features = [
  {
    icon: Building2,
    title: "5 Cities",
    body: "Events across Nicosia, Larnaca, Paphos, Ayia Napa, and Limassol — all in one place.",
  },
  {
    icon: Filter,
    title: "Smart Filters",
    body: "Browse by category, date, and what's happening tonight — find exactly what you're looking for.",
  },
  {
    icon: Ticket,
    title: "Instant Checkout",
    body: "Stripe-powered payments with transparent fees. No surprises at checkout.",
  },
  {
    icon: ShieldCheck,
    title: "Your Ticket Wallet",
    body: "QR tickets, digital receipts, and calendar sync — everything in your pocket.",
  },
];

export default function UserFeatures() {
  return (
    <section className="page-section user-features" aria-labelledby="user-features-title">
      <div className="page-container">
        <header className="page-section__header">
          <p>Features</p>
          <h2 id="user-features-title">Everything you need to discover events</h2>
        </header>

        <div className="user-features__grid">
          {features.map((f) => (
            <SpotlightCard key={f.title} className="user-features__card">
              <f.icon size={22} aria-hidden="true" />
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </SpotlightCard>
          ))}
        </div>

        <div className="user-features__trust">
          <ShieldCheck size={18} aria-hidden="true" />
          <p>Verified listings only — every event is reviewed by our team before going live.</p>
        </div>
      </div>
    </section>
  );
}
