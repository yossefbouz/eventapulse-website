import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import SpotlightCard from "../SpotlightCard";
import PhoneMockup from "../PhoneMockup";
import { screenshots } from "../../data/screenshots";

const paths = [
  {
    title: "For Users",
    description: "Find what to do tonight and secure your tickets in seconds.",
    bullets: [
      "Browse events by city and category",
      "See nearby events with map view",
      "Book instantly with transparent fees",
    ],
    cta: "Explore User Experience",
    to: "/users",
    image: screenshots.discoverFeed,
    alt: "Event discovery feed for users",
    glow: "blue" as const,
  },
  {
    title: "For Organizers",
    description: "Publish events, track growth, and run operations from one dashboard.",
    bullets: [
      "Launch events with verified listings",
      "Manage sales and attendee data",
      "Monitor payouts and performance",
    ],
    cta: "Explore Organizer Tools",
    to: "/organizers",
    image: screenshots.organizerHome,
    alt: "Organizer dashboard home screen",
    glow: "amber" as const,
  },
];

export default function SplitEntry() {
  return (
    <section className="home-v2-section home-v2-split-entry" aria-labelledby="home-v2-split-title">
      <div className="home-v2-container">
        <header className="home-v2-section__header">
          <p>Choose Your Path</p>
          <h2 id="home-v2-split-title">Built for both event-goers and event organizers</h2>
        </header>

        <div className="home-v2-split-entry__grid">
          {paths.map((path) => (
            <Link key={path.title} to={path.to} className="home-v2-split-entry__link">
              <SpotlightCard className="home-v2-split-entry__card">
                <div className="home-v2-split-entry__copy">
                  <h3>{path.title}</h3>
                  <p>{path.description}</p>
                  <ul>
                    {path.bullets.map((bullet) => (
                      <li key={bullet}>
                        <CheckCircle2 size={15} aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <span>
                    {path.cta}
                    <ArrowRight size={15} aria-hidden="true" />
                  </span>
                </div>

                <PhoneMockup src={path.image} alt={path.alt} glow={path.glow} className="home-v2-split-entry__phone" />
              </SpotlightCard>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
