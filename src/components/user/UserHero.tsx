import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function UserHero() {
  const reduce = useReducedMotion();

  return (
    <section className="v3-hero v3-users-hero" aria-labelledby="v3-users-hero-title">
      <div className="v3-hero__bg" aria-hidden="true">
        <div className="v3-hero__grid" />
        <motion.div
          className="v3-blob v3-blob--coral"
          animate={reduce ? undefined : { x: [0, 30, -20, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="v3-blob v3-blob--magenta"
          animate={reduce ? undefined : { x: [0, -30, 20, 0], y: [0, 20, -30, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="v3-container v3-hero__inner">
        <motion.div
          className="v3-hero__copy"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="v3-chip">
            <span className="v3-chip__dot" />
            <Sparkles size={13} aria-hidden="true" />
            For event-goers
          </div>

          <h1 id="v3-users-hero-title" className="v3-hero__title">
            Your Friday night,{" "}
            <span className="v3-gradient-text v3-gradient-text--warm">already sorted.</span>
          </h1>

          <p className="v3-hero__sub">
            Discover nightlife, festivals, workshops, concerts, and hidden food
            spots across Cyprus — in one app built for the way you actually go out.
          </p>

          <div className="v3-hero__actions">
            <Link to="/contact" className="v3-btn v3-btn--primary">
              Join the waitlist
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/how-it-works" className="v3-btn v3-btn--ghost">
              How it works
            </Link>
          </div>

          <div className="v3-hero__meta">
            <MapPin size={14} aria-hidden="true" />
            <span>Nicosia · Larnaca · Limassol · Paphos · Ayia Napa</span>
          </div>
        </motion.div>

        <motion.div
          className="v3-hero__visual"
          initial={reduce ? false : { opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
        >
          <div className="v3-phone-glow v3-phone-glow--coral" aria-hidden="true" />
          <div className="v3-phone-glow v3-phone-glow--violet" aria-hidden="true" />

          <motion.div
            className="v3-phone"
            animate={reduce ? undefined : { y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="v3-phone__frame">
              <div className="v3-phone__notch" />
              <img
                src="/marketing/screens/IMG_7852.PNG"
                alt="EventaPulse event feed featuring a Halloumi Festival in Larnaca"
                loading="eager"
              />
            </div>
          </motion.div>

          <motion.div
            className="v3-float-card v3-float-card--top"
            initial={reduce ? false : { opacity: 0, x: 30, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.6, ease: EASE }}
          >
            <div className="v3-float-card__icon v3-float-card__icon--coral">
              <Sparkles size={14} aria-hidden="true" />
            </div>
            <div>
              <strong>Halloumi Festival</strong>
              <span>Larnaca · This Saturday</span>
            </div>
          </motion.div>

          <motion.div
            className="v3-float-card v3-float-card--bottom"
            initial={reduce ? false : { opacity: 0, x: -30, y: 10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8, ease: EASE }}
          >
            <div className="v3-float-card__icon v3-float-card__icon--violet">
              <MapPin size={14} aria-hidden="true" />
            </div>
            <div>
              <strong>12 events nearby</strong>
              <span>Within 5 km</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
