import { MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import NumberTicker from "./NumberTicker";

const cities = [
  "Nicosia",
  "Limassol",
  "Larnaca",
  "Paphos",
  "Ayia Napa",
  "Famagusta",
];

const stats = [
  { value: 6, suffix: "", label: "cities covered" },
  { value: 100, suffix: "%", label: "free to use" },
  { value: 0, suffix: "", label: "booking fees" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function ProofBar() {
  const reduce = useReducedMotion();
  const loop = [...cities, ...cities, ...cities];

  return (
    <section id="home-proof" className="v3-proof" aria-labelledby="v3-proof-title">
      <h2 id="v3-proof-title" className="v3-sr-only">
        Cities and statistics
      </h2>

      <div
        className="v3-marquee"
        aria-hidden="true"
        style={{ ["--marquee-duration" as string]: reduce ? "0s" : "42s" }}
      >
        <div className="v3-marquee__track">
          {loop.map((city, i) => (
            <div className="v3-marquee__item" key={`${city}-${i}`}>
              <MapPin size={16} aria-hidden="true" />
              <span>{city}</span>
              <span className="v3-marquee__dot" />
            </div>
          ))}
        </div>
      </div>

      <div className="v3-container">
        <motion.div
          className="v3-stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              className="v3-stat"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <div className="v3-stat__num">
                <NumberTicker value={s.value} />
                {s.suffix}
              </div>
              <div className="v3-stat__label">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
