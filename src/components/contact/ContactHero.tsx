import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ContactHero() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-hero v3-contact-hero" aria-labelledby="v3-contact-hero-title">
      <div className="v3-hero__bg" aria-hidden="true">
        <div className="v3-hero__grid" />
        <motion.div className="v3-blob v3-blob--coral" animate={reduce ? undefined : { x: [0, 30, -20, 0], y: [0, -20, 30, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="v3-blob v3-blob--violet" animate={reduce ? undefined : { x: [0, -30, 20, 0], y: [0, 30, -20, 0] }} transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }} />
      </div>
      <motion.div
        className="v3-container v3-contact-hero__inner"
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <p className="v3-eyebrow">Say hello</p>
        <h1 id="v3-contact-hero-title" className="v3-hero__title">
          Let's build Cyprus's{" "}
          <span className="v3-gradient-text v3-gradient-text--warm">event scene</span>{" "}
          together.
        </h1>
        <p className="v3-hero__sub v3-contact-hero__sub">
          Whether you want to attend, host, or feature us in the press — we read every message.
        </p>
      </motion.div>
    </section>
  );
}
