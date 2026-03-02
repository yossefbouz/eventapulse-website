import { Link } from "react-router-dom";
import Iridescence from "../Iridescence";
import TextPressure from "../TextPressure.jsx";
import PhoneMockup from "../PhoneMockup";
import { screenshots } from "../../data/screenshots";

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

      <div className="home-v2-container home-v2-hero__inner">
        <div className="home-v2-hero__copy">
          <p className="home-v2-kicker">Event Discovery Platform • Cyprus</p>
          <div className="home-v2-hero__pressure">
            <TextPressure
              text="EVENTAPULSE"
              minFontSize={28}
              textColor="#fff6fd"
              stroke={false}
              width
              weight
              italic={false}
              alpha={false}
            />
          </div>
          <h1 id="home-v2-hero-title">Your Pulse on Every Event in Cyprus</h1>
          <p>
            Discover, book, and save on the best experiences across Cyprus in one trusted app for users and
            organizers.
          </p>

          <div className="home-v2-hero__actions">
            <Link to="/users" className="home-v2-btn home-v2-btn--primary">
              Explore Events
            </Link>
            <Link to="/organizers" className="home-v2-btn home-v2-btn--ghost">
              List Your Event
            </Link>
          </div>
        </div>

        <div className="home-v2-hero__device">
          <PhoneMockup
            src={screenshots.eventDetail}
            alt="Event detail screen inside the EventaPulse app"
            glow="pink"
          />
          <p>Real app preview: event details, ticketing, and instant checkout.</p>
        </div>
      </div>

      <a className="home-v2-scroll-indicator" href="#home-proof" aria-label="Scroll to proof section">
        <span />
        Scroll
      </a>
    </section>
  );
}
