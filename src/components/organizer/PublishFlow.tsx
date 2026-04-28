import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  { n: "01", title: "Create event", body: "Name, date, media, venue — a single form." },
  { n: "02", title: "Set pricing", body: "Multiple tiers, early-bird, promo codes." },
  { n: "03", title: "Publish", body: "Go live across all EventaPulse surfaces." },
  { n: "04", title: "Track", body: "Sales, check-ins, and payouts in real time." },
];

export default function PublishFlow() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-section v3-org-publish" aria-labelledby="v3-org-publish-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">From empty to sold out</p>
          <h2 id="v3-org-publish-title">
            Launch your event in{" "}
            <span className="v3-gradient-text">under five minutes.</span>
          </h2>
        </motion.header>

        <motion.ol
          className="v3-org-publish__track"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <span className="v3-org-publish__line" aria-hidden="true" />
          {steps.map((s) => (
            <motion.li
              key={s.n}
              className="v3-org-publish__step"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <span className="v3-org-publish__pill">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
