import { Link } from "react-router-dom";
import PhoneMockup from "../PhoneMockup";
import { screenshots } from "../../data/screenshots";

export default function UserHero() {
  return (
    <section className="user-hero" aria-labelledby="user-hero-title">
      <div className="user-hero__bg" />
      <div className="user-hero__orb user-hero__orb--blue" />
      <div className="user-hero__orb user-hero__orb--violet" />

      <div className="page-container user-hero__inner">
        <div className="user-hero__copy">
          <p className="page-kicker">For Event-Goers</p>
          <h1 id="user-hero-title">Find Your Next Experience in Cyprus</h1>
          <p>
            Discover events across 5 cities, browse by category, and book
            tickets instantly — all in one trusted app.
          </p>
          <div className="user-hero__actions">
            <Link to="/contact" className="page-btn page-btn--primary">
              Download EventaPulse
            </Link>
          </div>
        </div>

        <div className="user-hero__device">
          <PhoneMockup
            src={screenshots.discoverFeed}
            alt="EventaPulse discover feed showing tonight's events"
            glow="blue"
          />
        </div>
      </div>
    </section>
  );
}
