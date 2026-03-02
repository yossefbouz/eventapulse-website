import { Building, Megaphone, Target } from "lucide-react";
import SpotlightCard from "../SpotlightCard";

const partners = [
  {
    icon: Building,
    title: "Venues",
    body: "Get your venue discovered by thousands. List events and build your brand on the leading Cyprus events platform.",
  },
  {
    icon: Megaphone,
    title: "Organizers",
    body: "Simple tools to publish, promote, and profit from your events. Analytics, ticketing, and payouts built in.",
  },
  {
    icon: Target,
    title: "Brands & Sponsors",
    body: "Reach a targeted audience of event-goers across 5 Cyprus cities. Featured placements and campaign tools.",
  },
];

export default function PartnerCards() {
  return (
    <section className="page-section contact-partners" aria-labelledby="contact-partners-title">
      <div className="page-container">
        <header className="page-section__header">
          <p>Who We Work With</p>
          <h2 id="contact-partners-title">Partnership opportunities</h2>
        </header>

        <div className="contact-partners__grid">
          {partners.map((p) => (
            <SpotlightCard key={p.title} className="contact-partners__card">
              <p.icon size={22} aria-hidden="true" />
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
