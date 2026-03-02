export default function ContactHero() {
  return (
    <section className="contact-hero" aria-labelledby="contact-hero-title">
      <div className="contact-hero__bg" />
      <div className="contact-hero__orb contact-hero__orb--one" />
      <div className="contact-hero__orb contact-hero__orb--two" />
      <div className="page-container contact-hero__inner">
        <p className="page-kicker">Partner With Us</p>
        <h1 id="contact-hero-title">
          <span className="contact-hero__gradient">Let&apos;s Connect</span>
        </h1>
        <p>
          Whether you&apos;re a venue, organizer, or brand — let&apos;s grow
          Cyprus events together.
        </p>
      </div>
    </section>
  );
}
