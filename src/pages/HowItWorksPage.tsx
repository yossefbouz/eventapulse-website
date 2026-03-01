import { Link } from "react-router-dom";

const attendeeFlow = [
  "Discover events by city and category",
  "Open event details and compare ticket tiers",
  "Complete checkout and receive ticket instantly",
];

const organizerFlow = [
  "Create event, pricing, and schedule in minutes",
  "Submit for review and publish to EventaPulse discovery",
  "Track sales, attendance, and payouts from one dashboard",
];

export default function HowItWorksPage() {
  return (
    <div className="route-page">
      <div className="route-page__bg route-page__bg--one" />
      <div className="route-page__bg route-page__bg--two" />

      <main className="route-main">
        <section className="route-hero">
          <p className="hero-pill">How It Works</p>
          <h1>One marketplace for attendees and organizers</h1>
          <p>
            EventaPulse connects discovery, booking, and event growth in one clear flow for everyone in the Cyprus
            events ecosystem.
          </p>
          <div className="hero-actions">
            <Link to="/users" className="btn-solid">
              User Journey
            </Link>
            <Link to="/organizers" className="btn-ghost">
              Organizer Journey
            </Link>
          </div>
        </section>

        <section className="route-panel-grid">
          <article className="route-panel">
            <h2>Proof</h2>
            <ul>
              <li>14+ in-app screens mapped to the website flow</li>
              <li>Designed for Cyprus cities and nightlife demand</li>
              <li>Discovery and transaction in one product loop</li>
            </ul>
          </article>
          <article className="route-panel">
            <h2>Ecosystem</h2>
            <ul>
              <li>Users discover and buy with low friction</li>
              <li>Organizers publish and track event performance</li>
              <li>Trust layer supports reliable attendance growth</li>
            </ul>
          </article>
        </section>

        <section className="route-panel-grid">
          <article className="route-panel">
            <h2>Attendee Flow</h2>
            <ul>
              {attendeeFlow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>
          <article className="route-panel">
            <h2>Organizer Flow</h2>
            <ul>
              {organizerFlow.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </article>
        </section>

        <section className="route-panel">
          <h2>Next Step</h2>
          <p>Choose your path and get started with EventaPulse in under five minutes.</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-solid">
              Talk to Team
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
