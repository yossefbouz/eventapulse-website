import { BarChart3, Megaphone, QrCode, Ticket, Users, Wallet } from "lucide-react";
import SpotlightCard from "../SpotlightCard";
import PhoneMockup from "../PhoneMockup";
import { screenshots } from "../../data/screenshots";

const tools = [
  {
    icon: Megaphone,
    title: "Exposure",
    body: "Featured and standard listing tiers to amplify your reach across Cyprus.",
    size: "normal" as const,
  },
  {
    icon: Ticket,
    title: "Ticketing",
    body: "Multi-tier tickets with dynamic pricing — Early Bird, General, VIP, and custom options.",
    size: "normal" as const,
  },
  {
    icon: QrCode,
    title: "QR Scanner",
    body: "Scan tickets at the door. Track attendance in real time with manual entry fallback.",
    size: "large" as const,
    screenshot: screenshots.scanner,
    alt: "QR scanner showing 168/420 attendance",
  },
  {
    icon: BarChart3,
    title: "Analytics",
    body: "Views, conversions, revenue tracking, and city-level insights — all in your dashboard.",
    size: "normal" as const,
  },
  {
    icon: Wallet,
    title: "Payouts",
    body: "Stripe Connect direct deposits. Track pending, completed, and upcoming payouts.",
    size: "normal" as const,
  },
  {
    icon: Users,
    title: "CRM",
    body: "Collect attendee data, build audience segments, and retarget for your next event.",
    size: "normal" as const,
  },
];

export default function OrganizerToolkit() {
  return (
    <section className="page-section org-toolkit" aria-labelledby="org-toolkit-title">
      <div className="page-container">
        <header className="page-section__header">
          <p>Organizer Toolkit</p>
          <h2 id="org-toolkit-title">Everything you need to run events end to end</h2>
        </header>

        <div className="org-toolkit__grid">
          {tools.map((tool) => (
            <SpotlightCard
              key={tool.title}
              className={`org-toolkit__card ${tool.size === "large" ? "org-toolkit__card--large" : ""}`}
            >
              <tool.icon size={22} aria-hidden="true" />
              <h3>{tool.title}</h3>
              <p>{tool.body}</p>
              {tool.screenshot && (
                <div className="org-toolkit__card-phone">
                  <PhoneMockup src={tool.screenshot} alt={tool.alt!} glow="amber" />
                </div>
              )}
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
