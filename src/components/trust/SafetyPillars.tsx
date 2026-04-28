import { ShieldCheck, UserCheck, Undo2, Lock } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const pillars = [
  { icon: ShieldCheck, title: "Payment security", body: "Stripe-powered checkout. PCI-DSS Level 1. Your card never touches our servers.", tone: "violet" as const },
  { icon: UserCheck, title: "Organizer vetting", body: "Every event is reviewed by our team within 48 hours. No spam, no scams.", tone: "coral" as const },
  { icon: Undo2, title: "Clear refund policy", body: "Request a refund up to 24 hours before the event — processed straight back to your card.", tone: "magenta" as const },
  { icon: Lock, title: "Data privacy", body: "GDPR-compliant from day one. Your data is yours — we never sell it.", tone: "violet" as const },
];

export default function SafetyPillars() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-section v3-trust-pillars" aria-labelledby="v3-trust-pillars-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">The four pillars</p>
          <h2 id="v3-trust-pillars-title">
            How we keep events{" "}
            <span className="v3-gradient-text">reliable.</span>
          </h2>
        </motion.header>

        <motion.div
          className="v3-values__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {pillars.map((p) => (
            <motion.article
              key={p.title}
              className="v3-value"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <div className={`v3-value__icon v3-value__icon--${p.tone}`}>
                <p.icon size={20} aria-hidden="true" />
              </div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
