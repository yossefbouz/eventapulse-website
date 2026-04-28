import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function SplitEntry() {
  const reduce = useReducedMotion();

  return (
    <section className="v3-section v3-split" aria-labelledby="v3-split-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">Two sides, one platform</p>
          <h2 id="v3-split-title">
            Whether you're going{" "}
            <span className="v3-gradient-text">or hosting.</span>
          </h2>
        </motion.header>

        <div className="v3-split__grid">
          <motion.div
            className="v3-split__card v3-split__card--attendee"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <div className="v3-split__media">
              <img
                src="/marketing/screens/IMG_7859.PNG"
                alt="Event discovery feed with concerts and festivals"
                loading="lazy"
              />
            </div>
            <div className="v3-split__body">
              <span className="v3-split__tag v3-split__tag--coral">For attendees</span>
              <h3>Find your next night out.</h3>
              <p>
                Scroll real events happening this week. Tap to book. Share with
                friends in one swipe.
              </p>
              <Link to="/users" className="v3-split__cta v3-split__cta--coral">
                Browse as a user
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="v3-split__card v3-split__card--organizer"
            initial={reduce ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            <div className="v3-split__media">
              <img
                src="/marketing/screens/IMG_7869.PNG"
                alt="Organizer dashboard overview"
                loading="lazy"
              />
            </div>
            <div className="v3-split__body">
              <span className="v3-split__tag v3-split__tag--violet">For organizers</span>
              <h3>Fill every seat, track every sale.</h3>
              <p>
                Publish events in minutes. Watch ticket sales in real time.
                Scan at the door. Get paid fast.
              </p>
              <Link to="/organizers" className="v3-split__cta v3-split__cta--violet">
                See organizer tools
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
