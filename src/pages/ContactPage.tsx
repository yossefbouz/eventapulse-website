export default function ContactPage() {
  return (
    <div className="route-page route-page--organizer">
      <div className="route-page__bg route-page__bg--one" />
      <div className="route-page__bg route-page__bg--two" />

      <main className="route-main">
        <section className="route-hero">
          <p className="hero-pill">Contact & Partnerships</p>
          <h1>Partner with EventaPulse for Cyprus event growth</h1>
          <p>
            Work with our team to launch listings, featured campaigns, and conversion-focused event experiences for
            your venue or brand.
          </p>
        </section>

        <section className="route-panel-grid">
          <article className="route-panel">
            <h2>Contact Channels</h2>
            <ul>
              <li>Email: contact@eventpulse.app</li>
              <li>Phone: +357 22 000 000</li>
              <li>Website: www.eventpulse.app</li>
            </ul>
          </article>
          <article className="route-panel">
            <h2>Partner Value</h2>
            <ul>
              <li>Reach high-intent audiences by city and category</li>
              <li>Promote featured listings with trust-first presentation</li>
              <li>Track results across views, starts, and conversions</li>
            </ul>
          </article>
        </section>

        <section className="route-panel-grid">
          <article className="route-panel">
            <h2>Who We Support</h2>
            <ul>
              <li>Nightclubs, venues, and bars</li>
              <li>Cultural and seminar organizers</li>
              <li>Festival, sports, and workshop teams</li>
            </ul>
          </article>
          <article className="route-panel">
            <h2>Launch CTA</h2>
            <ul>
              <li>Send your event profile and city focus</li>
              <li>Get onboarding guidance from our team</li>
              <li>Go live with EventaPulse listing options</li>
            </ul>
          </article>
        </section>

        <section className="route-panel">
          <h2>Primary Action</h2>
          <p>Ready to launch with EventaPulse? Reach us directly at contact@eventpulse.app.</p>
        </section>
      </main>
    </div>
  );
}
