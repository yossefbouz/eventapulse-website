import { Link } from "react-router-dom";
import Iridescence from "../Iridescence";
import TextPressure from "../TextPressure.jsx";

export default function HeroSection() {
  return (
    <section className="home-v2-hero" aria-labelledby="home-v2-hero-title">
      <Iridescence
        className="home-v2-hero__iridescence"
        baseColor={[1, 0.72, 0.86]}
        speed={1.05}
        amplitude={0.09}
        mouseReact
      />
      <div className="home-v2-hero__overlay" />
      <div className="home-v2-hero__orb home-v2-hero__orb--pink" />
      <div className="home-v2-hero__orb home-v2-hero__orb--blue" />

      <div className="home-v2-container home-v2-hero__inner home-v2-hero__inner--centered">
        <p className="home-v2-kicker home-v2-hero__kicker">Event Discovery Platform • Cyprus</p>

        <div className="home-v2-hero__pressure">
          <TextPressure
            text="EVENTAPULSE"
            minFontSize={32}
            textColor="#fff6fd"
            stroke={false}
            width
            weight
            italic={false}
            alpha={false}
          />
        </div>

        <h1 id="home-v2-hero-title" className="home-v2-hero__tagline">
          Your guide to unforgettable experiences
        </h1>

        <p className="home-v2-hero__sub">
          Discover, book, and save on the best events across Cyprus — one trusted app for everyone.
        </p>

        <div className="home-v2-hero__actions home-v2-hero__actions--centered">
          <Link to="/users" className="home-v2-btn home-v2-btn--primary">
            Explore Events
          </Link>
          <Link to="/organizers" className="home-v2-btn home-v2-btn--ghost">
            List Your Event
          </Link>
        </div>
      </div>

      <a
        className="home-v2-scroll-indicator"
        href="#home-proof"
        aria-label="Scroll to proof section"
      >
        <span />
        Scroll
      </a>
    </section>
  );
}
