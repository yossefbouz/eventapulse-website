import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function OrganizerCTA() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-final v3-org-final" aria-labelledby="v3-org-cta-title">
      <div className="v3-final__mesh v3-org-final__mesh" aria-hidden="true" />
      <div className="v3-final__noise" aria-hidden="true" />
      <motion.div
        className="v3-container v3-final__inner"
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <p className="v3-eyebrow v3-eyebrow--light">Your next sellout</p>
        <h2 id="v3-org-cta-title" className="v3-final__title">
          Ready to sell your{" "}
          <span className="v3-gradient-text">next event?</span>
        </h2>
        <p className="v3-final__sub">
          Create your organizer account in minutes. Publish your first event today.
        </p>
        <div className="v3-final__actions">
          <Link to="/contact" className="v3-btn v3-btn--primary v3-btn--large">
            Get your account
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link to="/trust" className="v3-btn v3-btn--ghost v3-btn--large">
            Pricing & policies
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
