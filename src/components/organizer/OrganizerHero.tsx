import { Link } from "react-router-dom";
import PhoneMockup from "../PhoneMockup";
import { screenshots } from "../../data/screenshots";

export default function OrganizerHero() {
  return (
    <section className="org-hero" aria-labelledby="org-hero-title">
      <div className="org-hero__bg" />
      <div className="org-hero__orb org-hero__orb--amber" />
      <div className="org-hero__orb org-hero__orb--pink" />

      <div className="page-container org-hero__inner">
        <div className="org-hero__copy">
          <p className="page-kicker">For Organizers</p>
          <h1 id="org-hero-title">Grow Your Events in Cyprus</h1>
          <p>
            Reach thousands of event-goers, track performance in real time, and
            get paid directly through Stripe Connect.
          </p>
          <div className="org-hero__actions">
            <Link to="/contact" className="page-btn page-btn--primary">
              Start Listing Events
            </Link>
            <a href="#org-pricing" className="page-btn page-btn--ghost">
              See Pricing
            </a>
          </div>
        </div>

        <div className="org-hero__device">
          <PhoneMockup
            src={screenshots.organizerHome}
            alt="Organizer dashboard — 12,490 views, 842 tickets, EUR 18,640 revenue"
            glow="amber"
          />
        </div>
      </div>
    </section>
  );
}
