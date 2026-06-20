import { Instagram, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SiteEndcap() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-final v3-contact-endcap" aria-labelledby="v3-contact-endcap-title">
      <div className="v3-final__mesh" aria-hidden="true" />
      <div className="v3-final__noise" aria-hidden="true" />
      <motion.div
        className="v3-container v3-final__inner"
        initial={reduce ? false : { opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: EASE }}
      >
        <p className="v3-eyebrow v3-eyebrow--light">See you soon</p>
        <h2 id="v3-contact-endcap-title" className="v3-final__title">
          See you in{" "}
          <span className="v3-gradient-text v3-gradient-text--warm">Cyprus.</span>
        </h2>

        <div className="v3-contact-endcap__socials">
          <a href="mailto:info@eventapulse.com" aria-label="Email EventaPulse" className="v3-contact-endcap__social">
            <Mail size={18} aria-hidden="true" />
          </a>
          <a href="https://instagram.com/eventapulse" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="v3-contact-endcap__social">
            <Instagram size={18} aria-hidden="true" />
          </a>
        </div>

        <p className="v3-contact-endcap__copy">&copy; 2026 EventaPulse. Built with care in Nicosia.</p>
      </motion.div>
    </section>
  );
}
