import { Users, Megaphone, Newspaper, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const partners = [
  {
    icon: Users,
    title: "For attendees",
    body: "Be first in line when we launch. Join the waitlist and we'll email you when the app is live.",
    cta: "Join the waitlist",
    href: "#contact-form",
    tone: "coral" as const,
    internal: false,
  },
  {
    icon: Megaphone,
    title: "For organizers",
    body: "Sell your next event on EventaPulse. Get tools, payouts, and real-time analytics from day one.",
    cta: "Get your account",
    href: "#contact-form",
    tone: "violet" as const,
    internal: false,
  },
  {
    icon: Newspaper,
    title: "For press",
    body: "Building a story about Cyprus nightlife or events? We'll share data, quotes, and media assets.",
    cta: "Email press@",
    href: "mailto:info@eventapulse.com?subject=Press%20inquiry",
    tone: "magenta" as const,
    internal: false,
  },
];

export default function PartnerCards() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-section v3-contact-partners" aria-labelledby="v3-contact-partners-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">Where do you fit in?</p>
          <h2 id="v3-contact-partners-title">
            Pick the path that{" "}
            <span className="v3-gradient-text">suits you.</span>
          </h2>
        </motion.header>

        <motion.div
          className="v3-contact-partners__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {partners.map((p) => (
            <motion.article
              key={p.title}
              className="v3-contact-partners__card"
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
              {p.href.startsWith("mailto") ? (
                <a href={p.href} className="v3-contact-partners__cta">
                  {p.cta}
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              ) : (
                <Link to={p.href} className="v3-contact-partners__cta">
                  {p.cta}
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
