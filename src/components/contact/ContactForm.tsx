import { useState, type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import { CheckCircle2, Send } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

type FormData = {
  name: string;
  email: string;
  company: string;
  role: string;
  message: string;
};

export default function ContactForm() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  if (submitted) {
    return (
      <section id="contact-form" className="v3-section v3-contact-form" aria-label="Contact form success">
        <div className="v3-container">
          <motion.div
            className="v3-contact-form__success"
            initial={reduce ? false : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <div className="v3-value__icon v3-value__icon--coral" style={{ margin: "0 auto 20px" }}>
              <CheckCircle2 size={22} aria-hidden="true" />
            </div>
            <h2>Message received.</h2>
            <p>We read every one. Expect a reply within 48 hours.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="v3-section v3-contact-form" aria-labelledby="v3-contact-form-title">
      <div className="v3-container">
        <motion.header
          className="v3-section__header"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="v3-eyebrow">Drop us a line</p>
          <h2 id="v3-contact-form-title">
            Send us{" "}
            <span className="v3-gradient-text v3-gradient-text--warm">a message.</span>
          </h2>
        </motion.header>

        <motion.form
          className="v3-contact-form__form"
          onSubmit={handleSubmit}
          noValidate
          initial={reduce ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <div className="v3-contact-form__field">
            <label htmlFor="cf-name">Full name *</label>
            <input
              id="cf-name"
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={!!errors.name}
              autoComplete="name"
            />
            {errors.name && <span className="v3-contact-form__error">{errors.name}</span>}
          </div>

          <div className="v3-contact-form__field">
            <label htmlFor="cf-email">Email *</label>
            <input
              id="cf-email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
              autoComplete="email"
            />
            {errors.email && <span className="v3-contact-form__error">{errors.email}</span>}
          </div>

          <div className="v3-contact-form__field">
            <label htmlFor="cf-company">Company <em>(optional)</em></label>
            <input
              id="cf-company"
              type="text"
              value={form.company}
              onChange={(e) => update("company", e.target.value)}
              autoComplete="organization"
            />
          </div>

          <div className="v3-contact-form__field">
            <label htmlFor="cf-role">I am a</label>
            <select
              id="cf-role"
              value={form.role}
              onChange={(e) => update("role", e.target.value)}
            >
              <option value="">Select one</option>
              <option value="attendee">Attendee</option>
              <option value="organizer">Organizer</option>
              <option value="press">Press</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="v3-contact-form__field v3-contact-form__field--full">
            <label htmlFor="cf-message">Message *</label>
            <textarea
              id="cf-message"
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!errors.message}
            />
            {errors.message && <span className="v3-contact-form__error">{errors.message}</span>}
          </div>

          <div className="v3-contact-form__submit-row">
            <button type="submit" className="v3-btn v3-btn--primary v3-btn--large">
              Send message
              <Send size={16} aria-hidden="true" />
            </button>
            <span className="v3-contact-form__note">We reply within 48 hours.</span>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
