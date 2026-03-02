import PhoneMockup from "../PhoneMockup";
import { screenshots } from "../../data/screenshots";

const previewCards = [
  {
    title: "Discover Feed",
    subtitle: "Browse events by category",
    image: screenshots.discoverFeed,
  },
  {
    title: "Map View",
    subtitle: "Find nearby events instantly",
    image: screenshots.mapView,
  },
  {
    title: "Checkout",
    subtitle: "Buy tickets in a few taps",
    image: screenshots.checkout,
  },
  {
    title: "Organizer Dashboard",
    subtitle: "Track revenue and attendee flow",
    image: screenshots.organizerHome,
  },
];

export default function ProductPreview() {
  return (
    <section className="home-v2-section home-v2-preview" aria-labelledby="home-v2-preview-title">
      <div className="home-v2-container">
        <header className="home-v2-section__header">
          <p>Product Preview</p>
          <h2 id="home-v2-preview-title">One App. Every Event.</h2>
        </header>

        <div className="home-v2-preview__rail" role="list" aria-label="App preview screens">
          {previewCards.map((card, index) => (
            <article key={card.title} className="home-v2-preview__item" role="listitem">
              <PhoneMockup src={card.image} alt={`${card.title} app screen`} glow={index % 2 === 0 ? "blue" : "pink"} />
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
