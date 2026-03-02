import { Link } from "react-router-dom";

export default function OrganizerCTA() {
  return (
    <section className="page-section org-cta" aria-labelledby="org-cta-title">
      <div className="page-container">
        <div className="org-cta__inner">
          <p className="page-kicker-sm">Ready?</p>
          <h2 id="org-cta-title">
            Ready to reach thousands of event-goers in Cyprus?
          </h2>
          <div className="org-cta__actions">
            <Link to="/contact" className="page-btn page-btn--primary">
              Submit Your First Event
            </Link>
            <Link to="/contact" className="page-btn page-btn--ghost">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
