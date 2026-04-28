import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const rows = [
  { label: "Ticket price", value: "Set by organizer", note: "You always see the total first" },
  { label: "Platform fee", value: "€1.00 / ticket", note: "Flat, never a percentage" },
  { label: "VAT (Cyprus)", value: "19%", note: "On platform fee only" },
  { label: "Organizer commission", value: "5%", note: "Net of VAT" },
];

export default function FeeTransparency() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-section v3-trust-fees" aria-labelledby="v3-trust-fees-title">
      <div className="v3-container">
        <motion.div
          className="v3-trust-fees__card"
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="v3-eyebrow">Fee transparency</p>
          <h2 id="v3-trust-fees-title" className="v3-trust-fees__headline">
            <span className="v3-gradient-text">€1 + 5%</span>
            <em>per ticket. Nothing more.</em>
          </h2>
          <p className="v3-trust-fees__sub">
            You see the full breakdown before you pay — at checkout, in your receipt, and in your wallet.
          </p>

          <div className="v3-trust-fees__table" role="table" aria-label="Fee breakdown">
            {rows.map((r) => (
              <div key={r.label} className="v3-trust-fees__row" role="row">
                <span role="cell" className="v3-trust-fees__cell-label">{r.label}</span>
                <span role="cell" className="v3-trust-fees__cell-value">{r.value}</span>
                <span role="cell" className="v3-trust-fees__cell-note">{r.note}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
