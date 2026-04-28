import { Link } from "react-router-dom";
import { motion, useReducedMotion, useInView, animate } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, TrendingUp, Ticket, Wallet } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

function Counter({ to, prefix = "", suffix = "" }: { to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) { setVal(to); return; }
    const controls = animate(0, to, {
      duration: 1.6,
      ease: EASE,
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return <span ref={ref}>{prefix}{val.toLocaleString("en-US")}{suffix}</span>;
}

export default function OrganizerHero() {
  const reduce = useReducedMotion();

  return (
    <section className="v3-hero v3-org-hero" aria-labelledby="v3-org-hero-title">
      <div className="v3-hero__bg" aria-hidden="true">
        <div className="v3-hero__grid" />
        <motion.div
          className="v3-blob v3-blob--violet"
          animate={reduce ? undefined : { x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="v3-blob v3-blob--magenta"
          animate={reduce ? undefined : { x: [0, -30, 20, 0], y: [0, 20, -30, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="v3-container v3-hero__inner">
        <motion.div
          className="v3-hero__copy"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="v3-chip">
            <span className="v3-chip__dot" />
            For organizers
          </div>
          <h1 id="v3-org-hero-title" className="v3-hero__title">
            Fill every seat.{" "}
            <span className="v3-gradient-text">Track every sale.</span>
          </h1>
          <p className="v3-hero__sub">
            Publish events in minutes, watch sales roll in live, scan tickets at the door, and get paid fast. EventaPulse is the toolkit Cyprus organizers have been waiting for.
          </p>
          <div className="v3-hero__actions">
            <Link to="/contact" className="v3-btn v3-btn--primary">
              Get your account
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/trust" className="v3-btn v3-btn--ghost">
              See pricing
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="v3-org-hero__dash"
          initial={reduce ? false : { opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease: EASE }}
        >
          <div className="v3-org-hero__dash-header">
            <div>
              <p className="v3-org-hero__dash-label">Tonight's event</p>
              <strong>Retrogroove · Somewhere</strong>
            </div>
            <span className="v3-org-hero__live">
              <span className="v3-chip__dot" /> Live
            </span>
          </div>

          <div className="v3-org-hero__dash-stats">
            <div className="v3-org-hero__stat">
              <div className="v3-org-hero__stat-icon v3-org-hero__stat-icon--violet">
                <Ticket size={16} aria-hidden="true" />
              </div>
              <div>
                <span className="v3-org-hero__stat-label">Tickets sold</span>
                <strong><Counter to={312} /></strong>
              </div>
            </div>
            <div className="v3-org-hero__stat">
              <div className="v3-org-hero__stat-icon v3-org-hero__stat-icon--magenta">
                <Wallet size={16} aria-hidden="true" />
              </div>
              <div>
                <span className="v3-org-hero__stat-label">Revenue</span>
                <strong><Counter to={8460} prefix="€" /></strong>
              </div>
            </div>
            <div className="v3-org-hero__stat">
              <div className="v3-org-hero__stat-icon v3-org-hero__stat-icon--coral">
                <TrendingUp size={16} aria-hidden="true" />
              </div>
              <div>
                <span className="v3-org-hero__stat-label">Check-ins</span>
                <strong><Counter to={168} /></strong>
              </div>
            </div>
          </div>

          <div className="v3-org-hero__chart" aria-hidden="true">
            <svg viewBox="0 0 300 80" preserveAspectRatio="none" width="100%" height="80">
              <defs>
                <linearGradient id="v3-org-chart-grad" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#8B5CF6" stopOpacity="0.6" />
                  <stop offset="1" stopColor="#8B5CF6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,65 C30,58 50,40 75,42 C100,44 120,70 150,55 C180,40 200,20 230,25 C255,30 280,10 300,15 L300,80 L0,80 Z"
                fill="url(#v3-org-chart-grad)"
              />
              <path
                d="M0,65 C30,58 50,40 75,42 C100,44 120,70 150,55 C180,40 200,20 230,25 C255,30 280,10 300,15"
                fill="none"
                stroke="#A78BFA"
                strokeWidth="2"
              />
            </svg>
          </div>

          <ul className="v3-org-hero__events">
            <li><span>Early bird tier</span><em>Sold out</em></li>
            <li><span>General admission</span><em>214 left</em></li>
            <li><span>VIP</span><em>8 left</em></li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
