import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Apple, Smartphone, Send, CheckCircle2, Download, Sparkles } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

// When the signed APK is hosted, set this to the real URL (e.g. CDN / GitHub Releases asset)
// and flip ANDROID_BUILD_AVAILABLE to true.
const ANDROID_APK_URL = "/downloads/eventapulse-beta.apk";
const ANDROID_BUILD_AVAILABLE = false;
const TESTFLIGHT_REQUEST_EMAIL = "info@eventapulse.com";

export default function BetaTesters() {
  const reduce = useReducedMotion();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleIosSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      setError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Enter a valid email");
      return;
    }
    setError(null);

    const subject = encodeURIComponent("TestFlight invite — EventaPulse beta");
    const body = encodeURIComponent(
      `Hi team,\n\nI'd like to be one of the first testers on iOS.\n\nName: ${name || "(not provided)"}\nEmail: ${trimmed}\n\nPlease send me a TestFlight invite when a slot opens.\n\nThanks!`,
    );
    window.location.href = `mailto:${TESTFLIGHT_REQUEST_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

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
            Beta access · Limited spots
          </p>
          <h2 id="v3-beta-title">
            Be the first to <span className="v3-gradient-text v3-shine">test the app.</span>
          </h2>
          <p className="v3-section__sub">
            We're rolling out the EventaPulse beta to a small group of testers in Cyprus.
            Help us shape the product before launch — your feedback goes straight to the founders.
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
                <span>Drop your email below — we'll send you a personal invite link.</span>
              </li>
              <li>
                <span className="v3-beta__step-num">3</span>
                <span>Open the link on your iPhone and tap <em>Accept</em> in TestFlight.</span>
              </li>
            </ol>

            {submitted ? (
              <div className="v3-beta__success" role="status">
                <CheckCircle2 size={20} aria-hidden="true" />
                <div>
                  <strong>Almost there!</strong>
                  <p>
                    Your email client just opened with the request. Send it and we'll reply with
                    your TestFlight invite within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form className="v3-beta__form" onSubmit={handleIosSubmit} noValidate>
                <label className="v3-beta__field">
                  <span className="v3-beta__label">Your name (optional)</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maria"
                    autoComplete="name"
                  />
                </label>
                <label className="v3-beta__field">
                  <span className="v3-beta__label">Email for TestFlight invite</span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                    }}
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "beta-email-error" : undefined}
                    required
                  />
                  {error && (
                    <span id="beta-email-error" className="v3-beta__error">
                      {error}
                    </span>
                  )}
                </label>
                <button type="submit" className="v3-btn v3-btn--primary v3-beta__submit">
                  <Send size={16} aria-hidden="true" />
                  Request TestFlight invite
                </button>
                <p className="v3-beta__fineprint">
                  We'll only use your email to send the invite. No spam, ever.
                </p>
              </form>
            )}
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

            {ANDROID_BUILD_AVAILABLE ? (
              <>
                <a
                  href={ANDROID_APK_URL}
                  className="v3-btn v3-btn--primary v3-beta__submit"
                  download
                >
                  <Download size={16} aria-hidden="true" />
                  Download APK (Beta)
                </a>
                <p className="v3-beta__fineprint">
                  Latest build · Updated weekly. Issues? Email{" "}
                  <a href={`mailto:${TESTFLIGHT_REQUEST_EMAIL}`}>
                    {TESTFLIGHT_REQUEST_EMAIL}
                  </a>
                  .
                </p>
              </>
            ) : (
              <>
                <a
                  href={`mailto:${TESTFLIGHT_REQUEST_EMAIL}?subject=${encodeURIComponent(
                    "Android beta — notify me",
                  )}&body=${encodeURIComponent(
                    "Hi team,\n\nPlease notify me when the Android build is ready to install.\n\nThanks!",
                  )}`}
                  className="v3-btn v3-btn--primary v3-beta__submit"
                >
                  <Send size={16} aria-hidden="true" />
                  Notify me when ready
                </a>
                <p className="v3-beta__fineprint">
                  Android build is in QA. Email{" "}
                  <a href={`mailto:${TESTFLIGHT_REQUEST_EMAIL}`}>
                    {TESTFLIGHT_REQUEST_EMAIL}
                  </a>{" "}
                  and we'll send the APK as soon as it's signed.
                </p>
              </>
            )}
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
