import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useMagnetic } from "./useMagnetic";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function FinalCTA() {
  const reduce = useReducedMotion();
  const primaryRef = useMagnetic<HTMLAnchorElement>(0.3);
  const ghostRef = useMagnetic<HTMLAnchorElement>(0.22);
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
        <p className="v3-eyebrow v3-eyebrow--light">Ready when you are</p>
        <h2 id="v3-final-title" className="v3-final__title">
          Ready to discover{" "}
          <span className="v3-gradient-text v3-gradient-text--warm">Cyprus?</span>
        </h2>
        <p className="v3-final__sub">
          Get early access. Be first in line when we launch.
        </p>

        <div className="v3-final__actions">
          <Link
            ref={primaryRef}
            to="/contact"
            className="v3-btn v3-btn--primary v3-btn--large v3-btn--magnetic"
          >
            Get Early Access
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            ref={ghostRef}
            to="/users"
            className="v3-btn v3-btn--ghost v3-btn--large v3-btn--magnetic"
          >
            Preview the app
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
