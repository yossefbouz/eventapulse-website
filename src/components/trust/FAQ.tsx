import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    q: "How do I buy tickets?",
    a: "Download EventaPulse, browse events by city or category, pick a ticket tier, and check out with Stripe. Tickets land in your wallet instantly.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes. Request a refund up to 24 hours before the event starts. Refunds go straight back to your original payment method via Stripe.",
  },
  {
    q: "What does it cost to list an event?",
    a: "A flat €1.00 platform fee per ticket plus a 5% organizer commission (net of 19% Cyprus VAT). No setup fees, no monthly subscription.",
  },
  {
    q: "How do organizers get paid?",
    a: "Payouts go directly to your bank account via Stripe Connect. Track pending and completed payouts from your organizer dashboard.",
  },
  {
    q: "How long does event approval take?",
    a: "Our team reviews submissions within 48 hours. You'll get a notification the moment your event is approved and goes live.",
  },
  {
    q: "Is EventaPulse only in Cyprus?",
    a: "For now, yes — we're focused on five cities: Nicosia, Larnaca, Limassol, Paphos, and Ayia Napa.",
  },
];

export default function FAQ() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-section v3-trust-faq" aria-labelledby="v3-trust-faq-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">FAQ</p>
          <h2 id="v3-trust-faq-title">
            The{" "}
            <span className="v3-gradient-text">honest answers.</span>
          </h2>
        </motion.header>

        <motion.div
          className="v3-trust-faq__list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {faqs.map((f) => (
            <motion.details
              key={f.q}
              className="v3-trust-faq__item"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
            >
              <summary>
                <span>{f.q}</span>
                <ChevronDown size={18} aria-hidden="true" className="v3-trust-faq__chev" />
              </summary>
              <div className="v3-trust-faq__answer">
                <p>{f.a}</p>
              </div>
            </motion.details>
          ))}
        </motion.div>

        <div className="v3-trust-faq__cta">
          <p>Still have questions?</p>
          <Link to="/contact" className="v3-btn v3-btn--ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
