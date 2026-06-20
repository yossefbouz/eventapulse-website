import { motion, useReducedMotion } from "motion/react";
import { Eye, Mail, Sparkles } from "lucide-react";
import OrganizerProofCard from "./OrganizerProofCard";

const EASE = [0.22, 1, 0.36, 1] as const;

const ORGANIZER_MAILTO =
  "mailto:events@eventapulse.com?subject=List%20my%20event%20on%20EventaPulse";

export default function OrganizerCallout() {
  const reduce = useReducedMotion();

  return (
    <section id="organizers" className="v3-org" aria-labelledby="v3-org-title">
      <div className="v3-org__glow" aria-hidden="true" />
      <div className="v3-container">
        <div className="v3-org__grid">
          <motion.div
            className="v3-org__copy"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <p className="v3-eyebrow">
              <Sparkles size={12} aria-hidden="true" style={{ marginRight: 6 }} />
              For organizers
            </p>
            <h2 id="v3-org-title" className="v3-org__title">
              Run events in{" "}
              <span className="v3-gradient-text v3-gradient-text--warm">
                Cyprus?
              </span>
            </h2>
            <p className="v3-org__body">
              List your event free. We put it in front of locals and tourists
              discovering things to do — and show you exactly how many tapped
              through to your tickets. Real numbers, real customers.
            </p>
            <div className="v3-org__actions">
              <a
                href={ORGANIZER_MAILTO}
                className="v3-btn v3-btn--primary v3-btn--large"
              >
                <Mail size={16} aria-hidden="true" />
                List your event
              </a>
            </div>
            <p className="v3-org__contact">
              or email us at{" "}
              <a href="mailto:events@eventapulse.com">events@eventapulse.com</a>
            </p>
          </motion.div>

          <motion.div
            className="v3-org__visual"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            <p className="v3-org__example">
              <Eye size={13} aria-hidden="true" />
              Example dashboard — what every organizer sees
            </p>
            <OrganizerProofCard />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
