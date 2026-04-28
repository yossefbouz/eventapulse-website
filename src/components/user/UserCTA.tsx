import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function UserCTA() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-final" aria-labelledby="v3-users-cta-title">
      <div className="v3-final__mesh" aria-hidden="true" />
      <div className="v3-final__noise" aria-hidden="true" />

      <motion.div
        className="v3-container v3-final__inner"
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <p className="v3-eyebrow v3-eyebrow--light">Almost here</p>
        <h2 id="v3-users-cta-title" className="v3-final__title">
          Ready to stop{" "}
          <span className="v3-gradient-text v3-gradient-text--warm">missing out?</span>
        </h2>
        <p className="v3-final__sub">
          Join the waitlist. Be first when we launch in Cyprus.
        </p>
        <div className="v3-final__actions">
          <Link to="/contact" className="v3-btn v3-btn--primary v3-btn--large">
            Join the waitlist
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to="/how-it-works" className="v3-btn v3-btn--ghost v3-btn--large">
            How it works
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
