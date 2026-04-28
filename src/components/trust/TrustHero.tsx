import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function TrustHero() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-hero v3-trust-hero" aria-labelledby="v3-trust-hero-title">
      <div className="v3-hero__bg" aria-hidden="true">
        <div className="v3-hero__grid" />
        <motion.div className="v3-blob v3-blob--violet" animate={reduce ? undefined : { x: [0, 30, -20, 0], y: [0, -20, 20, 0] }} transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }} />
        <motion.div className="v3-blob v3-blob--coral" animate={reduce ? undefined : { x: [0, -30, 20, 0], y: [0, 20, -20, 0] }} transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }} />
      </div>
      <motion.div
        className="v3-container v3-trust-hero__inner"
        initial={reduce ? false : { opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <p className="v3-eyebrow">Trust &amp; policies</p>
        <h1 id="v3-trust-hero-title" className="v3-hero__title">
          Built on trust.{" "}
          <span className="v3-gradient-text">From day one.</span>
        </h1>
        <p className="v3-hero__sub v3-trust-hero__sub">
          Every listing verified. Every payment secured. Every fee shown before you pay. This is how we keep the Cyprus scene honest.
        </p>
      </motion.div>
    </section>
  );
}
