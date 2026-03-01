import { Link } from "react-router-dom";
import TiltedCardLite from "../components/TiltedCardLite";
import { screenshots } from "../data/screenshots";

const userShots = [
  {
    title: "Events in Nicosia Tonight",
    subtitle: "Find seminars, live music, and workshops in minutes.",
    image: screenshots.discoverFeed,
  },
  {
    title: "Fast Checkout",
    subtitle: "Choose ticket tiers and confirm in a frictionless flow.",
    image: screenshots.checkout,
  },
  {
    title: "Map Discovery",
    subtitle: "Find nearby events with city and category filters.",
    image: screenshots.mapView,
  },
];

export default function UserPage() {
  return (
    <div className="route-page route-page--user">
      <div className="route-page__bg route-page__bg--one" />
      <div className="route-page__bg route-page__bg--two" />

      <main className="route-main">
        <section className="route-hero">
          <p className="hero-pill">User Page</p>
          <h1>Find events in Cyprus by city, theme, and venue</h1>
          <p>
            Search events in Nicosia and Paphos, filter by seminars and music festivals, and quickly discover the
            best event venue near you.
          </p>
          <div className="hero-actions">
            <Link to="/" className="btn-ghost">
              Back Home
            </Link>
            <Link to="/organizers" className="btn-solid">
              Organizer Page
            </Link>
          </div>
        </section>

        <section className="route-panel-grid">
          <article className="route-panel">
            <h2>City Search Focus</h2>
            <ul>
              <li>events in nicosia this weekend</li>
              <li>paphos live music events</li>
              <li>seminars in cyprus this month</li>
              <li>event venue near me tonight</li>
            </ul>
          </article>
          <article className="route-panel">
            <h2>What to Discover</h2>
            <ul>
              <li>Tech and business seminars</li>
              <li>Music festivals and live shows</li>
              <li>Culture, art, and social events</li>
              <li>Venue-based recommendations by location</li>
            </ul>
          </article>
        </section>

        <section className="doc-guides route-panel-stack">
          <header className="section-header">
            <p>Smart Discovery</p>
            <h2>Designed for high-intent event searches</h2>
          </header>
          <p className="seo-copy">
            This page targets people already searching for events in Cyprus and comparing options between Nicosia and
            Paphos. Results are organized by relevance so users can move from search to attendance quickly.
          </p>
          <div className="user-shots">
            {userShots.map((shot) => (
              <TiltedCardLite key={`user-page-${shot.title}`} title={shot.title} subtitle={shot.subtitle} image={shot.image} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
