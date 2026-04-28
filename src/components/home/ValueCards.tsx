import { Compass, MapPin, Ticket, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const values = [
  {
    icon: Compass,
    title: "Tailored discovery",
    body: "A feed that learns what you love — concerts, food, culture, nightlife.",
    tone: "coral" as const,
  },
  {
    icon: MapPin,
    title: "Map-first browsing",
    body: "See what's happening around you. Walkable, drivable, findable.",
    tone: "violet" as const,
  },
  {
    icon: Ticket,
    title: "Instant tickets",
    body: "Transparent fees. Secure Stripe checkout. Tickets in your wallet.",
    tone: "magenta" as const,
  },
  {
    icon: Sparkles,
    title: "Locals and tourists",
    body: "Whether you live here or visit for a weekend — same trusted app.",
    tone: "coral" as const,
  },
];

export default function ValueCards() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-section v3-values" aria-labelledby="v3-values-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">Why EventaPulse</p>
          <h2 id="v3-values-title">
            Built for{" "}
            <span className="v3-gradient-text">the way you actually go out.</span>
          </h2>
        </motion.header>

        <motion.div
          className="v3-values__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
        >
          {values.map((v) => (
            <motion.article
              key={v.title}
              className={`v3-value v3-value--${v.tone}`}
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <div className={`v3-value__icon v3-value__icon--${v.tone}`}>
                <v.icon size={20} aria-hidden="true" />
              </div>
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
