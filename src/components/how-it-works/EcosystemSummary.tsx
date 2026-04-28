import { ArrowRight, Compass, Megaphone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const nodes = [
  { icon: Compass, label: "Attendees discover", body: "Real events, filtered to your taste and city.", tone: "coral" as const },
  { icon: Megaphone, label: "Organizers sell", body: "Tools that turn listings into sold-out nights.", tone: "violet" as const },
  { icon: Sparkles, label: "Cyprus wins", body: "More culture, more nightlife, more reasons to stay local.", tone: "magenta" as const },
];

export default function EcosystemSummary() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-section v3-how-eco" aria-labelledby="v3-how-eco-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">The ecosystem</p>
          <h2 id="v3-how-eco-title">
            A loop that{" "}
            <span className="v3-gradient-text">lifts everyone.</span>
          </h2>
        </motion.header>

        <motion.div
          className="v3-how-eco__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {nodes.map((n, i) => (
            <motion.div
              key={n.label}
              className="v3-how-eco__card"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <div className={`v3-value__icon v3-value__icon--${n.tone}`}>
                <n.icon size={20} aria-hidden="true" />
              </div>
              <h3>{n.label}</h3>
              <p>{n.body}</p>
              {i < nodes.length - 1 && (
                <ArrowRight className="v3-how-eco__arrow" size={22} aria-hidden="true" />
              )}
            </motion.div>
          ))}
        </motion.div>

        <div className="v3-how-eco__cta">
          <Link to="/users" className="v3-btn v3-btn--primary">I want to attend</Link>
          <Link to="/organizers" className="v3-btn v3-btn--ghost">I want to host</Link>
        </div>
      </div>
    </section>
  );
}
