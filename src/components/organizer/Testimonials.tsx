import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const testimonials = [
  {
    quote: "The listing flow and organizer tools bring us qualified attendees every week — it's changed how we plan our nights.",
    name: "Alpha",
    role: "Manager, ODIN",
    initials: "AO",
    tone: "violet" as const,
  },
  {
    quote: "Ticketing and analytics are clean and practical. We launch events faster and scale by city without friction.",
    name: "Ralph",
    role: "Founder, Retrogroove",
    initials: "RR",
    tone: "coral" as const,
  },
  {
    quote: "Managing entry and retargeting loyal guests is finally simple. The platform converts traffic into real attendance.",
    name: "Mark",
    role: "Founder, Madhouse",
    initials: "MM",
    tone: "magenta" as const,
  },
];

export default function Testimonials() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-section v3-org-testimonials" aria-labelledby="v3-org-testimonials-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">Early partners</p>
          <h2 id="v3-org-testimonials-title">
            From Cyprus organizers{" "}
            <span className="v3-gradient-text">already on board.</span>
          </h2>
        </motion.header>

        <motion.div
          className="v3-org-testimonials__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {testimonials.map((t) => (
            <motion.figure
              key={t.name}
              className="v3-org-testimonials__card"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <blockquote>
                <p>"{t.quote}"</p>
              </blockquote>
              <figcaption>
                <span className={`v3-org-testimonials__avatar v3-org-testimonials__avatar--${t.tone}`}>
                  {t.initials}
                </span>
                <span>
                  <strong>{t.name}</strong>
                  <em>{t.role}</em>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
