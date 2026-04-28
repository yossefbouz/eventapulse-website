import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function PricingTeaser() {
  const reduce = useReducedMotion();
  return (
    <section id="org-pricing" className="v3-section v3-org-pricing" aria-labelledby="v3-org-pricing-title">
      <div className="v3-container">
        <motion.div
          className="v3-org-pricing__card"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="v3-eyebrow">Pricing</p>
          <h2 id="v3-org-pricing-title" className="v3-org-pricing__headline">
            <span className="v3-gradient-text">€1 + 5%</span>
            <em>per ticket.</em>
          </h2>
          <p className="v3-org-pricing__note">Flat €1.00 platform fee and 5% commission, net of Cyprus VAT. No setup fees, no monthly subscription, no surprises.</p>
          <Link to="/trust" className="v3-btn v3-btn--primary">
            See full pricing
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
