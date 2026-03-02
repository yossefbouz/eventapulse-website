import { BadgeCheck, CreditCard, RefreshCcw, ShieldCheck } from "lucide-react";
import SpotlightCard from "../SpotlightCard";

const pillars = [
  {
    icon: BadgeCheck,
    title: "Verified Listings",
    body: "Every event is reviewed by our admin team within 48 hours. No spam, no scams — only quality listings reach your feed.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    body: "Powered by Stripe. Your card details never touch our servers. Transparent fees with no hidden charges.",
  },
  {
    icon: ShieldCheck,
    title: "Organizer Accountability",
    body: "Verified organizer badges, a ban system for policy violations, and a full audit trail on every action.",
  },
  {
    icon: RefreshCcw,
    title: "Refund Protection",
    body: "Request refunds up to 24 hours before event start. A fair and transparent process for every ticket.",
  },
];

export default function SafetyPillars() {
  return (
    <section className="page-section trust-pillars" aria-labelledby="trust-pillars-title">
      <div className="page-container">
        <header className="page-section__header">
          <p>Our Principles</p>
          <h2 id="trust-pillars-title">How we keep events reliable</h2>
        </header>

        <div className="trust-pillars__grid">
          {pillars.map((pillar) => (
            <SpotlightCard key={pillar.title} className="trust-pillars__card">
              <pillar.icon size={22} aria-hidden="true" />
              <h3>{pillar.title}</h3>
              <p>{pillar.body}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
