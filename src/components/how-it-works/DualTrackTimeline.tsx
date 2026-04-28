import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const attendees = [
  { n: "1", title: "Open the app", body: "Download EventaPulse and sign in — no hoops." },
  { n: "2", title: "Pick your city", body: "From Nicosia to Ayia Napa, choose where you are." },
  { n: "3", title: "Browse feed + map", body: "A personal feed plus a live map of what's happening." },
  { n: "4", title: "Tap to book", body: "Buy in seconds with secure Stripe checkout." },
  { n: "5", title: "Show ticket at the door", body: "QR scans in under a second. You're in." },
];

const organizers = [
  { n: "1", title: "Sign up", body: "Create an organizer account and verify your identity." },
  { n: "2", title: "Create an event", body: "Add details, media, and venue in a single form." },
  { n: "3", title: "Set pricing", body: "Tiers, promos, early-bird discounts — your call." },
  { n: "4", title: "Publish", body: "Go live across EventaPulse. Share the link anywhere." },
  { n: "5", title: "Scan tickets", body: "Check guests in at the door from your phone." },
];

function Track({ title, tone, steps }: { title: string; tone: "coral" | "violet"; steps: typeof attendees }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={`v3-how-track v3-how-track--${tone}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
    >
      <motion.header
        className="v3-how-track__head"
        initial={reduce ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <span className={`v3-split__tag v3-split__tag--${tone}`}>{title}</span>
      </motion.header>
      <ol className="v3-how-track__list">
        <span className="v3-how-track__line" aria-hidden="true" />
        {steps.map((s) => (
          <motion.li
            key={s.n}
            className="v3-how-track__step"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
          >
            <span className={`v3-how-track__node v3-how-track__node--${tone}`}>{s.n}</span>
            <div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </motion.div>
  );
}

export default function DualTrackTimeline() {
  return (
    <section className="v3-section v3-how-dual" aria-labelledby="v3-how-dual-title">
      <div className="v3-container">
        <header className="v3-section__header">
          <p className="v3-eyebrow">The journey</p>
          <h2 id="v3-how-dual-title">
            Two paths that{" "}
            <span className="v3-gradient-text">meet in the middle.</span>
          </h2>
        </header>

        <div className="v3-how-dual__grid">
          <Track title="For attendees" tone="coral" steps={attendees} />
          <Track title="For organizers" tone="violet" steps={organizers} />
        </div>
      </div>
    </section>
  );
}
