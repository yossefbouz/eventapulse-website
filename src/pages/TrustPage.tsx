import { Link } from "react-router-dom";

export default function TrustPage() {
  return (
    <div className="route-page">
      <div className="route-page__bg route-page__bg--one" />
      <div className="route-page__bg route-page__bg--two" />

      <main className="route-main">
        <section className="route-hero">
          <p className="hero-pill">Trust & Policies</p>
          <h1>Built to keep event experiences reliable and safe</h1>
          <p>
            EventaPulse aligns organizers, attendees, and venues around verified event information, clear fees, and
            transparent marketplace policies.
          </p>
        </section>

        <section className="route-panel-grid">
          <article className="route-panel">
            <h2>Safety Pillars</h2>
            <ul>
              <li>Organizer profile verification and quality checks</li>
              <li>Clear event details and structured ticket tiers</li>
              <li>In-app attendance and validation support tools</li>
            </ul>
          </article>
          <article className="route-panel">
            <h2>Payment Basics</h2>
            <ul>
              <li>Listing fee options by duration and visibility tier</li>
              <li>5% commission model on ticket sales (net VAT)</li>
              <li>EUR 1.00 platform fee for buyer-side operations</li>
            </ul>
          </article>
        </section>

        <section className="route-panel-grid">
          <article className="route-panel">
            <h2>Frequently Asked</h2>
            <ul>
              <li>How fast are organizer submissions reviewed?</li>
              <li>Where can users find booking and ticket confirmations?</li>
              <li>How can organizers monitor sales and payout status?</li>
            </ul>
          </article>
          <article className="route-panel">
            <h2>Policy Access</h2>
            <ul>
              <li>Privacy and Terms are available in the global footer</li>
              <li>Contact support for trust-related clarifications</li>
              <li>Marketplace standards are updated with launch phases</li>
            </ul>
          </article>
        </section>

        <section className="route-panel">
          <h2>Need More Information?</h2>
          <div className="hero-actions">
            <Link to="/contact" className="btn-solid">
              Contact Support
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
