import PhoneMockup from "../PhoneMockup";
import { screenshots } from "../../data/screenshots";

const steps = [
  {
    step: 1,
    label: "Create",
    title: "Submit your event in minutes",
    body: "Fill in event details, upload media, set ticket tiers and pricing — our multi-step form guides you through everything.",
    image: screenshots.organizerHub,
    alt: "Organizer hub with Create Event button and payout status",
    glow: "amber" as const,
  },
  {
    step: 2,
    label: "Go Live",
    title: "Admin reviews and approves your listing",
    body: "Our team reviews every submission within 48 hours. Once approved, your event goes live with a verified badge across the platform.",
    image: screenshots.organizerEvents,
    alt: "Organizer events list with LIVE, SELLING, and PENDING statuses",
    glow: "pink" as const,
  },
  {
    step: 3,
    label: "Earn",
    title: "Track performance and get paid",
    body: "Monitor views, ticket sales, and revenue in real time. Payouts go directly to your bank via Stripe Connect — no delays.",
    image: screenshots.organizerActivity,
    alt: "Organizer activity showing payout status and recent activity",
    glow: "blue" as const,
  },
];

export default function PublishFlow() {
  return (
    <section className="page-section publish-flow" aria-labelledby="publish-flow-title">
      <div className="page-container">
        <header className="page-section__header">
          <p>How It Works</p>
          <h2 id="publish-flow-title">From submission to sold out</h2>
        </header>

        <div className="publish-flow__steps">
          {steps.map((s, index) => (
            <article
              key={s.step}
              className={`publish-flow__step ${index % 2 === 1 ? "is-reversed" : ""}`}
            >
              <div className="publish-flow__phone">
                <PhoneMockup src={s.image} alt={s.alt} glow={s.glow} />
              </div>
              <div className="publish-flow__copy">
                <span className="publish-flow__badge">
                  Step {s.step} — {s.label}
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
