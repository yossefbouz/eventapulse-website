import { Mail, Instagram, MapPin } from "lucide-react";
import { motion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const methods = [
  {
    icon: Mail,
    label: "Email",
    value: "info@eventapulse.com",
    href: "mailto:info@eventapulse.com",
    tone: "coral" as const,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@eventapulse",
    href: "https://instagram.com/eventapulse",
    tone: "magenta" as const,
  },
  {
    icon: MapPin,
    label: "Nicosia HQ",
    value: "Cyprus",
    href: null,
    tone: "violet" as const,
  },
];

export default function ContactMethods() {
  return (
    <section className="v3-section v3-contact-methods" aria-label="Other ways to reach us">
      <div className="v3-container">
        <motion.div
          className="v3-contact-methods__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {methods.map((m) => {
            const inner = (
              <>
                <div className={`v3-value__icon v3-value__icon--${m.tone}`}>
                  <m.icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <h4>{m.label}</h4>
                  <span>{m.value}</span>
                </div>
              </>
            );
            return (
              <motion.div
                key={m.label}
                className="v3-contact-methods__card"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
                }}
              >
                {m.href ? (
                  <a href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                    {inner}
                  </a>
                ) : (
                  <div>{inner}</div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
