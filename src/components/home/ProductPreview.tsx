import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

type Tile = {
  kind: "image" | "video";
  src: string;
  alt?: string;
  title: string;
  caption: string;
  span: string;
  accent: "coral" | "violet" | "magenta";
};

const tiles: Tile[] = [
  {
    kind: "image",
    src: "/marketing/screens/IMG_7852.PNG",
    alt: "Halloumi Festival featured event with bold poster artwork",
    title: "Halloumi Festival",
    caption: "Featured events, curated weekly",
    span: "v3-bento__tile--big",
    accent: "coral",
  },
  {
    kind: "image",
    src: "/marketing/screens/IMG_7405.PNG",
    alt: "City picker showing Nicosia, Larnaca, Paphos, Ayia Napa",
    title: "Pick your city",
    caption: "Every district, every vibe",
    span: "v3-bento__tile--tall",
    accent: "violet",
  },
  {
    kind: "video",
    src: "/marketing/video/ScreenRecording_04-23-2026 19-34-52_1.mp4",
    title: "Live in the app",
    caption: "Smooth, instant, delightful",
    span: "v3-bento__tile--wide",
    accent: "magenta",
  },
  {
    kind: "image",
    src: "/marketing/screens/IMG_7859.PNG",
    alt: "Blue Hour Sessions concert event card",
    title: "Blue Hour Sessions",
    caption: "Concerts & nightlife",
    span: "",
    accent: "violet",
  },
  {
    kind: "image",
    src: "/marketing/screens/IMG_7865.PNG",
    alt: "Profile page with saved events",
    title: "Your profile",
    caption: "Save, follow, share",
    span: "",
    accent: "coral",
  },
  {
    kind: "image",
    src: "/marketing/screens/IMG_7738.PNG",
    alt: "Workshop and seminar discovery screen",
    title: "Workshops & talks",
    caption: "Learn something new",
    span: "",
    accent: "magenta",
  },
];

export default function ProductPreview() {
  const reduce = useReducedMotion();

  return (
    <section className="v3-section v3-bento-section" aria-labelledby="v3-bento-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">Inside the app</p>
          <h2 id="v3-bento-title">
            A feed that{" "}
            <span className="v3-gradient-text">feels like Cyprus.</span>
          </h2>
          <p className="v3-section__sub">
            Real events, real photography, real cities. Everything you want to
            do — in one place.
          </p>
        </motion.header>

        <motion.div
          className="v3-bento"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {tiles.map((t) => (
            <motion.article
              key={t.title}
              className={`v3-bento__tile ${t.span} v3-bento__tile--${t.accent}`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <div className="v3-bento__media">
                {t.kind === "video" ? (
                  <video
                    src={t.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                  />
                ) : (
                  <img src={t.src} alt={t.alt ?? ""} loading="lazy" />
                )}
              </div>
              <div className="v3-bento__overlay">
                <strong>{t.title}</strong>
                <span>{t.caption}</span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
