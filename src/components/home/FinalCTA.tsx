import { motion, useReducedMotion } from "motion/react";
import { AppStoreBadge, GooglePlayBadge } from "../StoreBadges";

const EASE = [0.22, 1, 0.36, 1] as const;

const APP_STORE_URL = "https://apps.apple.com/cy/app/eventapulse/id6762138395";

export default function FinalCTA() {
  const reduce = useReducedMotion();
  return (
    <section id="join" className="v3-final" aria-labelledby="v3-final-title">
      <div className="v3-final__mesh" aria-hidden="true" />
      <div className="v3-final__noise" aria-hidden="true" />

      <motion.div
        className="v3-container v3-final__inner"
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <p className="v3-eyebrow v3-eyebrow--light">Live now on iOS</p>
        <h2 id="v3-final-title" className="v3-final__title">
          Ready to discover{" "}
          <span className="v3-gradient-text v3-gradient-text--warm">Cyprus?</span>
        </h2>
        <p className="v3-final__sub">
          Download EventaPulse free on the App Store. Android arriving this week.
        </p>

        <div className="v3-final__actions v3-hero__actions--badges">
          <AppStoreBadge href={APP_STORE_URL} />
          <GooglePlayBadge />
        </div>
      </motion.div>
    </section>
  );
}
