import {
  Map,
  QrCode,
  ShieldCheck,
  Ticket,
  TrendingUp,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import PhoneMockup from "../PhoneMockup";
import { screenshots } from "../../data/screenshots";

type TimelineStep = {
  icon: LucideIcon;
  title: string;
  body: string;
  screenshot?: string;
  alt?: string;
};

const attendeeSteps: TimelineStep[] = [
  {
    icon: UserPlus,
    title: "Sign Up",
    body: "Create your account, choose your city, and pick your interests.",
  },
  {
    icon: Map,
    title: "Discover",
    body: "Browse events by city, category, date, or explore the map.",
    screenshot: screenshots.mapView,
    alt: "Map view showing events across Cyprus",
  },
  {
    icon: Ticket,
    title: "Get Tickets",
    body: "Select your tier, checkout with Stripe, and receive your QR ticket instantly.",
    screenshot: screenshots.checkout,
    alt: "Checkout screen with ticket tiers and transparent fee breakdown",
  },
  {
    icon: QrCode,
    title: "Attend",
    body: "Show your QR code at the door and get scanned in — no paper, no hassle.",
  },
];

const organizerSteps: TimelineStep[] = [
  {
    icon: ShieldCheck,
    title: "Get Verified",
    body: "Apply as an organizer and our admin team reviews your profile.",
  },
  {
    icon: UserPlus,
    title: "Create Event",
    body: "Use the multi-step form to set tiers, upload media, and configure details.",
    screenshot: screenshots.organizerHub,
    alt: "Organizer hub with Create Event, Venues, and Payouts",
  },
  {
    icon: Ticket,
    title: "Go Live",
    body: "Admin approves your event and it appears in the discovery feed with a verified badge.",
    screenshot: screenshots.organizerEvents,
    alt: "Organizer events showing LIVE, SELLING, and PENDING statuses",
  },
  {
    icon: TrendingUp,
    title: "Earn",
    body: "Track analytics and revenue in real time. Payouts go directly to your bank via Stripe Connect.",
  },
];

function TrackColumn({
  label,
  accent,
  steps,
}: {
  label: string;
  accent: string;
  steps: TimelineStep[];
}) {
  return (
    <div className="dual-track__column">
      <h3 className="dual-track__label" style={{ color: accent }}>
        {label}
      </h3>
      <div className="dual-track__steps">
        {steps.map((step, index) => (
          <article key={step.title} className="dual-track__step">
            <div className="dual-track__marker" style={{ borderColor: accent }}>
              <span style={{ background: accent }}>{index + 1}</span>
            </div>
            <div className="dual-track__content">
              <div className="dual-track__icon-row">
                <step.icon size={18} aria-hidden="true" />
                <h4>{step.title}</h4>
              </div>
              <p>{step.body}</p>
              {step.screenshot && (
                <div className="dual-track__phone">
                  <PhoneMockup
                    src={step.screenshot}
                    alt={step.alt!}
                    glow={label === "Attendee Path" ? "blue" : "amber"}
                  />
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function DualTrackTimeline() {
  return (
    <section
      className="page-section dual-track"
      aria-labelledby="dual-track-title"
    >
      <div className="page-container">
        <header className="page-section__header">
          <p>The Journey</p>
          <h2 id="dual-track-title">Two paths to one platform</h2>
        </header>

        <div className="dual-track__grid">
          <TrackColumn
            label="Attendee Path"
            accent="#70d5ff"
            steps={attendeeSteps}
          />
          <TrackColumn
            label="Organizer Path"
            accent="#ffd26f"
            steps={organizerSteps}
          />
        </div>
      </div>
    </section>
  );
}
