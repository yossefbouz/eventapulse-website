import { Link } from "react-router-dom";

const partners = ["Retrogroove", "Harbor", "ODIN", "Madhouse", "Somewhere"];

export default function SiteEndcap() {
  return (
    <section className="page-section site-endcap" aria-labelledby="endcap-title">
      <div className="page-container">
        <div className="site-endcap__partners">
          <p className="site-endcap__partners-label">Our Current Partners</p>
          <div className="site-endcap__partners-row">
            {partners.map((p) => (
              <span key={p} className="site-endcap__partner-name">{p}</span>
            ))}
          </div>
        </div>

        <div className="site-endcap__inner">
          <h2 id="endcap-title">Join the future of events in Cyprus</h2>
          <div className="site-endcap__actions">
            <Link to="/users" className="page-btn page-btn--primary">
              Download the App
            </Link>
            <Link to="/organizers" className="page-btn page-btn--ghost">
              Submit Your Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
