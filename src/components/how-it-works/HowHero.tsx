import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function HowHero() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-hero v3-how-hero" aria-labelledby="v3-how-hero-title">
      <div className="v3-hero__bg" aria-hidden="true">
        <div className="v3-hero__grid" />
        <motion.div className="v3-blob v3-blob--violet" animate={reduce ? undefined : { x: [0, 40, -20, 0], y: [0, -20, 30, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="v3-blob v3-blob--coral" animate={reduce ? undefined : { x: [0, -40, 20, 0], y: [0, 30, -20, 0] }} transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }} />
      </div>

      <motion.div
        className="v3-container v3-how-hero__inner"
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <p className="v3-eyebrow">How EventaPulse works</p>
        <h1 id="v3-how-hero-title" className="v3-hero__title">
          <span className="v3-gradient-text v3-gradient-text--warm">Two sides.</span>{" "}
          <span className="v3-gradient-text">One platform.</span>
        </h1>
        <p className="v3-hero__sub v3-how-hero__sub">
          A transparent loop between the people going out and the people making it happen. Here's exactly how it runs.
        </p>
      </motion.div>
    </section>
  );
}
