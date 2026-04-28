import { Compass, Map, Ticket, Heart, Languages, Gift } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const features = [
  { icon: Compass, title: "Tailored discovery", body: "A feed that learns what you love — music, food, culture, nightlife.", tone: "coral" as const },
  { icon: Map, title: "Map-first browsing", body: "See what's happening around you. Walkable, drivable, findable.", tone: "violet" as const },
  { icon: Ticket, title: "Instant tickets", body: "Transparent fees. Secure Stripe checkout. Tickets straight to your wallet.", tone: "magenta" as const },
  { icon: Heart, title: "Save & share", body: "Bookmark the ones you're eyeing. Share with friends in a single tap.", tone: "coral" as const },
  { icon: Languages, title: "Bilingual (EN / GR)", body: "Built for locals and travellers alike — switch languages anytime.", tone: "violet" as const },
  { icon: Gift, title: "Free for attendees", body: "No subscription, no hidden fees. You pay for the ticket, nothing more.", tone: "magenta" as const },
];

export default function UserFeatures() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-section v3-users-features" aria-labelledby="v3-users-features-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">What you get</p>
          <h2 id="v3-users-features-title">
            Everything you need.{" "}
            <span className="v3-gradient-text">Nothing you don't.</span>
          </h2>
        </motion.header>

        <motion.div
          className="v3-values__grid v3-users-features__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {features.map((f) => (
            <motion.article
              key={f.title}
              className="v3-value"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <div className={`v3-value__icon v3-value__icon--${f.tone}`}>
                <f.icon size={20} aria-hidden="true" />
              </div>
              <h3>{f.title}</h3>
              <p>{f.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
