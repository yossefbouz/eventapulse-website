import { motion, useReducedMotion } from "motion/react";
import { Apple, Smartphone, Download, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const ANDROID_APK_URL = "https://expo.dev/artifacts/eas/be9bX733gRoWZi4KqZhXEG.apk";
const ANDROID_APK_FILENAME = "EventaPulse-1.0.0.apk";
const TESTFLIGHT_URL = "https://testflight.apple.com/join/h7KCEpZj";
const APP_VERSION = "1.0.0";

export default function BetaTesters() {
  const reduce = useReducedMotion();

  return (
    <section id="beta" className="v3-section v3-beta" aria-labelledby="v3-beta-title">
      <div className="v3-beta__glow" aria-hidden="true" />
      <div className="v3-beta__grid-bg" aria-hidden="true" />
      <span className="v3-beta__beam v3-beta__beam--1" aria-hidden="true" />
      <span className="v3-beta__beam v3-beta__beam--2" aria-hidden="true" />
      <span className="v3-beta__beam v3-beta__beam--3" aria-hidden="true" />
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">
            <Sparkles size={12} aria-hidden="true" style={{ marginRight: 6 }} />
            🟢 Beta is live · iOS + Android
          </p>
          <h2 id="v3-beta-title">
            EventaPulse is <span className="v3-gradient-text v3-shine">now in beta.</span>
          </h2>
          <p className="v3-section__sub">
            iOS via TestFlight, Android via direct APK install.
            Tap your platform below — your feedback goes straight to the founders.
          </p>
        </motion.header>

        <motion.div
          className="v3-beta__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {/* iOS / TestFlight card */}
          <motion.article
            className="v3-beta__card v3-beta__card--ios"
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
          >
            <div className="v3-beta__card-head">
              <div className="v3-beta__icon v3-beta__icon--ios">
                <Apple size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="v3-beta__platform">iOS · iPhone &amp; iPad</p>
                <h3 className="v3-beta__title">Test through TestFlight</h3>
              </div>
            </div>

            <ol className="v3-beta__steps">
              <li>
                <span className="v3-beta__step-num">1</span>
                <span>
                  Install Apple's <strong>TestFlight</strong> app from the App Store.
                </span>
              </li>
              <li>
                <span className="v3-beta__step-num">2</span>
                <span>
                  Tap the button below — TestFlight opens automatically and shows EventaPulse
                  ready to install.
                </span>
              </li>
            </ol>

            <a
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="v3-btn v3-btn--primary v3-beta__submit"
            >
              <Apple size={16} aria-hidden="true" />
              Join TestFlight
            </a>
            <p className="v3-beta__fineprint">
              Latest build: {APP_VERSION} · Open this page on your iPhone for the smoothest install.
            </p>
          </motion.article>

          {/* Android card */}
          <motion.article
            className="v3-beta__card v3-beta__card--android"
            variants={{
              hidden: { opacity: 0, y: 28 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
          >
            <div className="v3-beta__card-head">
              <div className="v3-beta__icon v3-beta__icon--android">
                <Smartphone size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="v3-beta__platform">Android</p>
                <h3 className="v3-beta__title">Install directly</h3>
              </div>
            </div>

            <ol className="v3-beta__steps">
              <li>
                <span className="v3-beta__step-num">1</span>
                <span>Tap the download button to grab the latest APK.</span>
              </li>
              <li>
                <span className="v3-beta__step-num">2</span>
                <span>
                  When prompted, allow installs from your browser in{" "}
                  <em>Settings → Security</em>.
                </span>
              </li>
              <li>
                <span className="v3-beta__step-num">3</span>
                <span>Open the downloaded file and tap <em>Install</em>. You're in.</span>
              </li>
            </ol>

            <a
              href={ANDROID_APK_URL}
              className="v3-btn v3-btn--primary v3-beta__submit"
              download={ANDROID_APK_FILENAME}
            >
              <Download size={16} aria-hidden="true" />
              Download APK · {APP_VERSION}
            </a>
            <p className="v3-beta__fineprint">
              Latest build: {APP_VERSION} · Make sure "Install from unknown sources" is enabled
              in your browser when prompted.
            </p>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
