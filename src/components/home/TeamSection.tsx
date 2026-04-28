import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Copy, Check, MapPin, Linkedin } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Founder = {
  name: string;
  role: string;
  bio: string;
  img: string;
  tone: "coral" | "violet";
  email: string;
  linkedin?: string;
  status: string;
};

const founders: Founder[] = [
  {
    name: "Omar",
    role: "Founder · Business & Growth",
    bio: "Leading partnerships, venues, and go-to-market across every Cyprus city.",
    img: "/foundersfaces/omar.jpg",
    tone: "coral",
    email: "omar@eventpulse.app",
    linkedin: "#",
    status: "Nicosia, Cyprus",
  },
  {
    name: "Youssef Bouzgarrou",
    role: "Co-Founder · Product & Engineering",
    bio: "Shaping the product from the first pixel to the last ticket scan.",
    img: "/foundersfaces/youssef.jpg",
    tone: "violet",
    email: "youssef@eventpulse.app",
    linkedin: "#",
    status: "Building in public",
  },
];

function FounderCard({ f, parallaxOffset }: { f: Founder; parallaxOffset: number }) {
  const [copied, setCopied] = useState(false);
  const reduce = useReducedMotion();
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [parallaxOffset, -parallaxOffset],
  );

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(f.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — no-op */
    }
  };

  return (
    <motion.article
      ref={cardRef}
      className={`v3-founder v3-founder--${f.tone}`}
      style={{ y }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
      }}
      transition={{ duration: 0.3, ease: EASE }}
    >
      <div className="v3-founder__media">
        <img src={f.img} alt={f.name} loading="lazy" />
        <div className="v3-founder__media-shade" aria-hidden="true" />
        <span className="v3-founder__status">
          <span className="v3-founder__dot" />
          {f.status}
        </span>
        <div className="v3-founder__media-title">
          <h3>{f.name}</h3>
          <p>{f.role}</p>
        </div>
      </div>

      <div className="v3-founder__body">
        <p className="v3-founder__bio">{f.bio}</p>

        <div className="v3-founder__actions">
          <button
            type="button"
            onClick={handleCopy}
            className="v3-founder__btn v3-founder__btn--primary"
            aria-label={`Copy ${f.name}'s email`}
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? "Copied" : "Copy email"}</span>
          </button>
          {f.linkedin && (
            <a
              href={f.linkedin}
              className="v3-founder__btn v3-founder__btn--ghost"
              aria-label={`${f.name} on LinkedIn`}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          )}
        </div>

        <p className="v3-founder__location">
          <MapPin size={13} aria-hidden="true" />
          <span>Based in Cyprus</span>
        </p>
      </div>
    </motion.article>
  );
}

export default function TeamSection() {
  const reduce = useReducedMotion();
  return (
    <section
      id="aboutus"
      className="v3-section v3-team"
      aria-labelledby="v3-team-title"
    >
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">The team</p>
          <h2 id="v3-team-title">
            Built in Cyprus,{" "}
            <span className="v3-gradient-text">for Cyprus.</span>
          </h2>
          <p className="v3-section__sub">
            Two founders, one mission — making it easier for locals and
            travellers to find the best of the island.
          </p>
        </motion.header>

        <motion.div
          className="v3-team__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
        >
          {founders.map((f, i) => (
            <FounderCard key={f.name} f={f} parallaxOffset={i % 2 === 0 ? 40 : -40} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
