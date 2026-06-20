import { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "motion/react";
import { Apple, MapPin, Smartphone, Sparkles } from "lucide-react";

const rotatingScreens = [
  "/marketing/screens/IMG_7852.PNG",
  "/marketing/screens/IMG_7855.PNG",
  "/marketing/screens/IMG_7859.PNG",
  "/marketing/screens/IMG_7865.PNG",
];

const APP_STORE_URL = "https://apps.apple.com/cy/app/eventapulse/id6762138395";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HeroSection() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % rotatingScreens.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section className="v3-hero" aria-labelledby="v3-hero-title">
      <div className="v3-hero__bg" aria-hidden="true">
        <div className="v3-hero__grid" />
        <motion.div
          className="v3-blob v3-blob--violet"
          animate={reduce ? undefined : { x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="v3-blob v3-blob--coral"
          animate={reduce ? undefined : { x: [0, -50, 30, 0], y: [0, 40, -20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="v3-blob v3-blob--magenta"
          animate={reduce ? undefined : { x: [0, 30, -40, 0], y: [0, -20, 30, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="v3-container v3-hero__inner">
        <motion.div
          className="v3-hero__copy"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <motion.div
            className="v3-chip v3-chip--animated"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <span className="v3-chip__pulse" aria-hidden="true" />
            <Apple size={13} aria-hidden="true" />
            Live on the App Store · Cyprus 2026
          </motion.div>

          <h1 id="v3-hero-title" className="v3-hero__title">
            Every event in Cyprus.{" "}
            <span className="v3-gradient-text v3-shine">One app.</span>
          </h1>

          <p className="v3-hero__sub">
            Concerts, beach parties, festivals, workshops — Nicosia to Ayia Napa,
            all in one place.
          </p>

          <div className="v3-hero__actions">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="v3-btn v3-btn--primary"
              aria-label="Download EventaPulse on the App Store"
            >
              <Apple size={16} aria-hidden="true" />
              Download on the App Store
            </a>
            <span
              className="v3-btn v3-btn--ghost is-disabled"
              role="button"
              aria-disabled="true"
              tabIndex={-1}
            >
              <Smartphone size={16} aria-hidden="true" />
              Google Play — coming soon
            </span>
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
              <AnimatePresence mode="wait">
                <motion.img
                  key={rotatingScreens[index]}
                  src={rotatingScreens[index]}
                  alt="EventaPulse app screen showing Cyprus events"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.7, ease: EASE }}
                />
              </AnimatePresence>
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
              <span>Sold out · Larnaca</span>
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
              <span>This weekend</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
