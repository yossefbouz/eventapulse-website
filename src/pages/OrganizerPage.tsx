import { Link } from "react-router-dom";
import { BarChart3, CalendarDays, Handshake, Megaphone, Ticket, Users, Wallet } from "lucide-react";
import SpotlightCard from "../components/SpotlightCard";

const organizerFeatureRows = [
  {
    icon: Megaphone,
    kicker: "Exposure",
    title: "Sell out and reach a wider audience through EventaPulse",
    body: "Publish your event on web and mobile to attract new customers searching events in Cyprus.",
    mode: "discovery",
  },
  {
    icon: Ticket,
    kicker: "Ticketing & Reservations",
    title: "Manage your entry options seamlessly",
    body: "Sell tickets and organize reservations with clear options for seminars, concerts, and festivals.",
    mode: "ticketing",
  },
  {
    icon: Handshake,
    kicker: "CRM & Marketing",
    title: "Engage your audience and boost repeat attendance",
    body: "Collect attendee data and retarget users through campaigns built for Cyprus venues and organizers.",
    mode: "crm",
  },
] as const;

const organizerCapabilities = [
  {
    icon: Megaphone,
    title: "Exposure",
    body: "Amplify your reach through a platform dedicated to Cyprus events.",
  },
  {
    icon: Ticket,
    title: "Ticketing",
    body: "Create flexible entry options, pricing waves, and reservation controls.",
  },
  {
    icon: Users,
    title: "Guestlist",
    body: "Effortlessly manage guests and team access at the venue entry point.",
  },
  {
    icon: CalendarDays,
    title: "Table Booking & Floor Management",
    body: "Handle floor plans, reservations, and premium tables from one workflow.",
  },
  {
    icon: BarChart3,
    title: "CRM & Analytics",
    body: "Track behavior, demand, and conversion trends by city and event type.",
  },
  {
    icon: Wallet,
    title: "Finance",
    body: "Keep visibility on revenue and payouts while your event is selling.",
  },
];

const organizerPartners = ["Retrogroove", "Harbor", "ODIN", "Madhouse", "Somewhere"];

const organizerTestimonials = [
  {
    quote:
      "EventaPulse transformed our event operations. The listing flow and venue discovery tools brought us more qualified attendees every week.",
    name: "Alpha, Manager",
    handle: "@odin",
  },
  {
    quote:
      "Ticketing and organizer analytics are clean and practical. We can launch seminars in Cyprus faster and scale campaigns by city.",
    name: "Ralph, Founder",
    handle: "@retrogroove",
  },
  {
    quote:
      "Managing entry options and targeting repeat users is much easier now. The platform helps us convert traffic into real event attendance.",
    name: "Mark, Founder",
    handle: "@madhouse",
  },
];

const organizerQuickLinks = [
  "Home",
  "Features",
  "Support",
  "Testimonials",
  "Privacy Policy",
  "Terms and Conditions",
];

export default function OrganizerPage() {
  return (
    <div className="route-page route-page--organizer">
      <div className="route-page__bg route-page__bg--one" />
      <div className="route-page__bg route-page__bg--two" />

      <main className="route-main">
        <section className="route-hero organizer-hero">
          <div className="organizer-hero__copy">
            <p className="hero-pill">Organizer Page</p>
            <h1>Create events in Cyprus and grow your organizer brand</h1>
            <p>
              Publish seminars in Cyprus, launch music festivals, and manage venue demand in Nicosia and Paphos with
              one organizer workflow.
            </p>
            <div className="hero-actions">
              <Link to="/" className="btn-ghost">
                Back Home
              </Link>
              <Link to="/users" className="btn-solid">
                User Page
              </Link>
            </div>
          </div>
          <div className="organizer-phone-deck" aria-hidden="true">
            <article className="organizer-phone-card organizer-phone-card--front">
              <span>Scanner</span>
              <div className="organizer-phone-card__qr" />
              <p>Checked in</p>
            </article>
            <article className="organizer-phone-card organizer-phone-card--mid">
              <span>Guestlists</span>
              <ul>
                <li>VIP Guests</li>
                <li>Regular Guests</li>
                <li>Table Bookings</li>
              </ul>
            </article>
            <article className="organizer-phone-card organizer-phone-card--back">
              <span>Event Details</span>
              <p>Nicosia Seminar Night</p>
              <p>Tickets + Reservations</p>
            </article>
          </div>
        </section>

        <section className="organizer-feature-rows">
          {organizerFeatureRows.map((feature, index) => {
            const Icon = feature.icon;
            const reverseClass = index % 2 === 1 ? " is-reverse" : "";

            return (
              <article key={feature.title} className={`organizer-feature-row${reverseClass}`}>
                <div className={`organizer-feature-row__device organizer-feature-row__device--${feature.mode}`}>
                  <div className="organizer-feature-row__screen">
                    <div className="organizer-feature-row__line" />
                    <div className="organizer-feature-row__line organizer-feature-row__line--small" />
                    <div className="organizer-feature-row__chip" />
                    <div className="organizer-feature-row__line" />
                  </div>
                </div>
                <div className="organizer-feature-row__copy">
                  <p className="organizer-kicker">
                    <Icon size={16} />
                    {feature.kicker}
                  </p>
                  <h2>{feature.title}</h2>
                  <p>{feature.body}</p>
                </div>
              </article>
            );
          })}
        </section>

        <section className="organizer-highlight-panel">
          <div>
            <p className="organizer-kicker">
              <BarChart3 size={16} />
              Growth Dashboard
            </p>
            <h2>Plan, manage and sell your event in no time</h2>
            <p>
              List your event, optimize ticket options, and monitor sales momentum while campaigns are running across
              Cyprus.
            </p>
            <Link to="/contact" className="btn-solid">
              More Features
            </Link>
          </div>
          <div className="organizer-stats-mock" aria-hidden="true">
            <article>
              <span>Attendees</span>
              <strong>3,240</strong>
            </article>
            <article>
              <span>Revenue</span>
              <strong>7,500 EUR</strong>
            </article>
            <article>
              <span>Tickets</span>
              <strong>50 / 120</strong>
            </article>
          </div>
        </section>

        <section className="organizer-two-cards">
          <article className="organizer-info-card">
            <h3>Collect attendees data and retarget your customers</h3>
            <p>
              Build audience segments and promote your next seminars in Cyprus through direct campaigns and repeat
              flows.
            </p>
          </article>
          <article className="organizer-info-card">
            <h3>Have access and control over your funds while selling</h3>
            <p>
              Follow revenue in real time and keep full visibility on payouts to manage venue operations with less
              risk.
            </p>
          </article>
        </section>

        <section className="organizer-capabilities">
          <header className="section-header">
            <p>Organizer Toolkit</p>
            <h2>With all the features you need</h2>
          </header>
          <div className="organizer-capability-grid">
            {organizerCapabilities.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="organizer-capability-card">
                  <span>
                    <Icon size={22} />
                  </span>
                  <h3>{feature.title}</h3>
                  <p>{feature.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="organizer-partners">
          <p>Our Partners</p>
          <div className="organizer-partners__row">
            {organizerPartners.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </section>

        <section className="organizer-testimonials">
          <header className="section-header">
            <p>Trust</p>
            <h2>What clients say about us</h2>
          </header>
          <div className="organizer-testimonials__grid">
            {organizerTestimonials.map((review) => (
              <SpotlightCard key={review.name} className="organizer-testimonial-card">
                <p>{review.quote}</p>
                <h4>{review.name}</h4>
                <span>{review.handle}</span>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <footer className="organizer-footer-links">
          <div>
            <h3>EventaPulse mobile app is now available</h3>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul>
              {organizerQuickLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>
          <div className="organizer-footer-links__stores">
            <p>for iOS</p>
            <span>Download on App Store</span>
            <p>for Android</p>
            <span>Get it on Google Play</span>
          </div>
        </footer>
      </main>
    </div>
  );
}
