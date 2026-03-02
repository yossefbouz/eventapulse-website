import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    q: "How do I buy tickets?",
    a: "Download the EventaPulse app, browse events by city or category, select a ticket tier, and checkout securely with Stripe.",
  },
  {
    q: "Can I get a refund?",
    a: "Yes — you can request a refund up to 24 hours before the event starts. Refunds are processed through Stripe and returned to your original payment method.",
  },
  {
    q: "How do I list an event?",
    a: "Sign up as an organizer in the app, fill out the event form with details, ticket tiers, and media, then submit for admin review.",
  },
  {
    q: "How much does it cost to list an event?",
    a: "Listing fees are duration-based, starting at EUR 20/day for Standard and EUR 50/day for Featured. Duration options range from 1 to 90 days.",
  },
  {
    q: "How do I get paid as an organizer?",
    a: "Payouts go directly to your bank account via Stripe Connect. You can track pending and completed payouts from your organizer dashboard.",
  },
  {
    q: "What is the platform commission?",
    a: "EventaPulse takes a 5% commission on ticket sales, calculated net of 19% Cyprus VAT. Buyers also pay a flat EUR 1.00 platform fee per ticket.",
  },
  {
    q: "Is EventaPulse only in Cyprus?",
    a: "Yes — we're currently focused on 5 cities in Cyprus: Nicosia, Larnaca, Paphos, Ayia Napa, and Limassol.",
  },
  {
    q: "How long does event approval take?",
    a: "Our admin team reviews submissions within 48 hours during peak periods. You'll get a notification when your event is approved and goes live.",
  },
  {
    q: "What categories of events are supported?",
    a: "We support Cultural, Music, Seminars, Sports, Workshop, and Food & Drink events.",
  },
  {
    q: "How do I contact support?",
    a: "Use the in-app chat to message our admin team, or reach us through the contact page on this website.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="page-section trust-faq" aria-labelledby="trust-faq-title">
      <div className="page-container">
        <header className="page-section__header">
          <p>FAQ</p>
          <h2 id="trust-faq-title">Frequently asked questions</h2>
        </header>

        <div className="trust-faq__list" role="list">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.q}
                className={`trust-faq__item ${isOpen ? "is-open" : ""}`}
                role="listitem"
              >
                <button
                  type="button"
                  className="trust-faq__trigger"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`trust-faq__chevron ${isOpen ? "is-open" : ""}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  className="trust-faq__answer"
                  role="region"
                  hidden={!isOpen}
                >
                  <p>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="trust-faq__cta">
          <p>Have more questions?</p>
          <Link to="/contact" className="page-btn page-btn--ghost">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
