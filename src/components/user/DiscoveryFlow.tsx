import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const steps = [
  {
    n: "01",
    title: "Pick your city",
    body: "Start where you are — or plan a weekend trip across the island.",
    img: "/marketing/screens/IMG_7405.PNG",
    alt: "City picker in the EventaPulse app",
  },
  {
    n: "02",
    title: "Find your vibe",
    body: "Scroll a feed that learns what you love — from jazz nights to food markets.",
    img: "/marketing/screens/IMG_7852.PNG",
    alt: "Event feed showing a variety of Cyprus events",
  },
  {
    n: "03",
    title: "Book instantly",
    body: "Secure Stripe checkout. Tickets land in your wallet in seconds.",
    img: "/marketing/screens/IMG_7859.PNG",
    alt: "Event detail with ticket purchase",
  },
];

export default function DiscoveryFlow() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-section v3-users-flow" aria-labelledby="v3-users-flow-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">Three taps to a ticket</p>
          <h2 id="v3-users-flow-title">
            From bored on the sofa to{" "}
            <span className="v3-gradient-text v3-gradient-text--warm">out the door.</span>
          </h2>
          <p className="v3-section__sub">
            No more digging through five different Instagram accounts. One app, every event, zero friction.
          </p>
        </motion.header>

        <motion.ol
          className="v3-users-flow__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {steps.map((s) => (
            <motion.li
              key={s.n}
              className="v3-users-flow__step"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
            >
              <div className="v3-users-flow__phone">
                <span className="v3-users-flow__badge">{s.n}</span>
                <div className="v3-users-flow__frame">
                  <img src={s.img} alt={s.alt} loading="lazy" />
                </div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
