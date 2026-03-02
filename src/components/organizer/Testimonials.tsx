import SpotlightCard from "../SpotlightCard";

const testimonials = [
  {
    quote:
      "EventaPulse transformed our event operations. The listing flow and venue discovery tools brought us more qualified attendees every week.",
    name: "Alpha",
    role: "Manager",
    handle: "@odin",
  },
  {
    quote:
      "Ticketing and organizer analytics are clean and practical. We can launch seminars in Cyprus faster and scale campaigns by city.",
    name: "Ralph",
    role: "Founder",
    handle: "@retrogroove",
  },
  {
    quote:
      "Managing entry options and targeting repeat users is much easier now. The platform helps us convert traffic into real event attendance.",
    name: "Mark",
    role: "Founder",
    handle: "@madhouse",
  },
];

export default function Testimonials() {
  return (
    <section className="page-section org-testimonials" aria-labelledby="org-testimonials-title">
      <div className="page-container">
        <header className="page-section__header">
          <p>Trust</p>
          <h2 id="org-testimonials-title">What organizers say about us</h2>
        </header>

        <div className="org-testimonials__grid">
          {testimonials.map((t) => (
            <SpotlightCard key={t.name} className="org-testimonials__card">
              <blockquote>
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <footer>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
                <span className="org-testimonials__handle">{t.handle}</span>
              </footer>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
