import { motion, useReducedMotion } from "motion/react";
import { MapPin, PartyPopper, Ticket, TrendingUp, Zap } from "lucide-react";
import NumberTicker from "./NumberTicker";

const EASE = [0.22, 1, 0.36, 1] as const;

const bars = [52, 40, 66, 82, 48, 100, 76];
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function OrganizerProofCard() {
  const reduce = useReducedMotion();

  return (
    <div
      className="v3-proofcard"
      role="img"
      aria-label="Example organizer dashboard: 1,248 people tapped Get Tickets this week, up 18 percent, with 8,420 views, 612 saves, and a 14.8 percent tap-through rate."
    >
      <div className="v3-proofcard__head">
        <div className="v3-proofcard__logo" aria-hidden="true">
          <PartyPopper size={22} />
        </div>
        <div className="v3-proofcard__head-txt">
          <div className="v3-proofcard__event">Halloumi Festival Pop-up</div>
          <div className="v3-proofcard__loc">
            <MapPin size={13} aria-hidden="true" />
            Pattichion Theatre · Limassol
          </div>
        </div>
        <span className="v3-proofcard__live">
          <span className="v3-proofcard__live-dot" aria-hidden="true" />
          Live
        </span>
      </div>

      <div className="v3-proofcard__hero">
        <div className="v3-proofcard__hero-label">
          <Ticket size={15} aria-hidden="true" />
          Tapped &ldquo;Get tickets&rdquo;
        </div>
        <div className="v3-proofcard__hero-row">
          <NumberTicker
            value={1248}
            className="v3-proofcard__big v3-gradient-text v3-gradient-text--warm"
          />
          <span className="v3-proofcard__delta">
            <TrendingUp size={16} aria-hidden="true" />
            18% this week
          </span>
        </div>
        <div className="v3-proofcard__hero-sub">
          people you sent straight to your ticket page
        </div>
      </div>

      <div className="v3-proofcard__chart" aria-hidden="true">
        <div className="v3-proofcard__bars">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className="v3-proofcard__bar"
              initial={reduce ? false : { height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: EASE }}
              style={reduce ? { height: `${h}%` } : undefined}
            />
          ))}
        </div>
        <div className="v3-proofcard__days">
          {days.map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>

      <div className="v3-proofcard__metrics">
        <div className="v3-proofcard__metric">
          <span>Views</span>
          <strong>8,420</strong>
        </div>
        <div className="v3-proofcard__metric">
          <span>Saves</span>
          <strong>612</strong>
        </div>
        <div className="v3-proofcard__metric">
          <span>Tap-through</span>
          <strong>14.8%</strong>
        </div>
      </div>

      <div className="v3-proofcard__foot">
        <Zap size={16} aria-hidden="true" />
        You get this live for every event you list — real numbers, real customers.
      </div>
    </div>
  );
}
