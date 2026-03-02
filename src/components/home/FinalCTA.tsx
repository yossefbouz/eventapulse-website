import { Link } from "react-router-dom";
import CircularText from "../CircularText.jsx";

export default function FinalCTA() {
  return (
    <section className="home-v2-section home-v2-final-cta" id="join" aria-labelledby="home-v2-final-title">
      <div className="home-v2-container home-v2-final-cta__inner">
        <div className="home-v2-final-cta__copy">
          <p>Final Call</p>
          <h2 id="home-v2-final-title">Ready to discover what&apos;s happening in Cyprus?</h2>
          <div className="home-v2-final-cta__actions">
            <Link to="/users" className="home-v2-btn home-v2-btn--primary">
              Download the App
            </Link>
            <Link to="/contact" className="home-v2-btn home-v2-btn--ghost">
              Partner with Us
            </Link>
          </div>
        </div>

        <div className="home-v2-final-cta__wheel" aria-hidden="true">
          <CircularText text="EVENTAPULSE * DISCOVER * BOOK * SAVE * " spinDuration={14} onHover="speedUp" />
        </div>
      </div>
    </section>
  );
}
