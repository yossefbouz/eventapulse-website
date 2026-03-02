import { Link } from "react-router-dom";
import PhoneMockup from "../PhoneMockup";
import { screenshots } from "../../data/screenshots";

export default function UserCTA() {
  return (
    <section className="page-section user-cta" aria-labelledby="user-cta-title">
      <div className="page-container user-cta__inner">
        <div className="user-cta__copy">
          <p className="page-kicker-sm">Get Started</p>
          <h2 id="user-cta-title">Start discovering events in Cyprus today</h2>
          <div className="user-cta__actions">
            <Link to="/contact" className="page-btn page-btn--primary">
              Download on App Store
            </Link>
            <Link to="/contact" className="page-btn page-btn--ghost">
              Get it on Google Play
            </Link>
          </div>
        </div>

        <div className="user-cta__device">
          <PhoneMockup
            src={screenshots.userProfile}
            alt="User profile showing activity, settings, and ticket wallet"
            glow="blue"
          />
        </div>
      </div>
    </section>
  );
}
