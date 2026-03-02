import { useState, type FormEvent } from "react";

type FormData = {
  name: string;
  email: string;
  role: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    role: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validate = (): boolean => {
    const next: typeof errors = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email";
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
      <section className="page-section contact-form-section" aria-label="Contact form success">
        <div className="page-container">
          <div className="contact-form__success">
            <h2>Thanks!</h2>
            <p>We&apos;ll be in touch within 48 hours.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-section contact-form-section" aria-labelledby="contact-form-title">
      <div className="page-container">
        <header className="page-section__header">
          <p>Get In Touch</p>
          <h2 id="contact-form-title">Send us a message</h2>
        </header>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="contact-form__field">
            <label htmlFor="cf-name">Name *</label>
            <input
              id="cf-name"
              type="text"
              value={form.name}
              onChange={(e) => update("name", e.target.value)}
              aria-invalid={!!errors.name}
            />
            {errors.name && <span className="contact-form__error">{errors.name}</span>}
          </div>

          <div className="contact-form__field">
            <label htmlFor="cf-email">Email *</label>
            <input
              id="cf-email"
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              aria-invalid={!!errors.email}
            />
            {errors.email && <span className="contact-form__error">{errors.email}</span>}
          </div>

          <div className="contact-form__field">
            <label htmlFor="cf-role">I am a...</label>
            <select
              id="cf-role"
              value={form.role}
              onChange={(e) => update("role", e.target.value)}
            >
              <option value="">Select one</option>
              <option value="venue">Venue</option>
              <option value="organizer">Organizer</option>
              <option value="brand">Brand / Sponsor</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="contact-form__field contact-form__field--full">
            <label htmlFor="cf-message">Message *</label>
            <textarea
              id="cf-message"
              rows={5}
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              aria-invalid={!!errors.message}
            />
            {errors.message && <span className="contact-form__error">{errors.message}</span>}
          </div>

          <button type="submit" className="page-btn page-btn--primary contact-form__submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
