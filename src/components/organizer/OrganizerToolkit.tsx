import { ChartBar, QrCode, Wallet, CreditCard, Building2, Tag } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

const tools = [
  { icon: ChartBar, title: "Real-time sales", body: "Watch ticket revenue move live as people buy.", tone: "violet" as const },
  { icon: QrCode, title: "Scan at the door", body: "Native QR scanner. Offline fallback. No queues.", tone: "magenta" as const },
  { icon: Wallet, title: "Transparent fees", body: "3% + €0.30 per ticket. No surprises at checkout.", tone: "coral" as const },
  { icon: CreditCard, title: "Stripe payouts", body: "Get paid directly to your bank via Stripe Connect.", tone: "violet" as const },
  { icon: Building2, title: "Multi-venue support", body: "Run a club, a festival, a workshop — one dashboard.", tone: "magenta" as const },
  { icon: Tag, title: "Promo codes", body: "Reward your loyal crowd. Track conversion per code.", tone: "coral" as const },
];

export default function OrganizerToolkit() {
  const reduce = useReducedMotion();
  return (
    <section className="v3-section v3-org-toolkit" aria-labelledby="v3-org-toolkit-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">Your toolkit</p>
          <h2 id="v3-org-toolkit-title">
            Every tool you need.{" "}
            <span className="v3-gradient-text">In one dashboard.</span>
          </h2>
        </motion.header>

        <motion.div
          className="v3-values__grid v3-org-toolkit__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {tools.map((t) => (
            <motion.article
              key={t.title}
              className="v3-value"
              variants={{
                hidden: { opacity: 0, y: 28 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <div className={`v3-value__icon v3-value__icon--${t.tone}`}>
                <t.icon size={20} aria-hidden="true" />
              </div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
