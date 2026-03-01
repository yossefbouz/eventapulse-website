import { Link } from "react-router-dom";
import Iridescence from "../components/Iridescence";
import RBProfileCard from "../components/RBProfileCard.jsx";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import ScrollStackLite from "../components/ScrollStackLite";
import SplitText from "../components/SplitText.jsx";
import TextPressure from "../components/TextPressure.jsx";
import TiltedCardLite from "../components/TiltedCardLite";
import { screenshots } from "../data/screenshots";

const userShots = [
  {
    title: "Events in Nicosia Tonight",
    subtitle: "Find seminars, live music, and workshops in minutes.",
    image: screenshots.discoverFeed,
  },
  {
    title: "Paphos Music Festivals",
    subtitle: "Book Cyprus festival tickets with verified venue details.",
    image: screenshots.eventDiscovery,
  },
  {
    title: "Event Venue Near Me",
    subtitle: "Search nearby events in Cyprus with map-ready locations.",
    image: screenshots.mapView,
  },
];

const organizerStack = [
  {
    tag: "Step 1",
    title: "Publish Cyprus Events",
    body: "List seminars, concerts, and festivals in Nicosia and Paphos.",
  },
  {
    tag: "Step 2",
    title: "Venue Discovery",
    body: "Get found by people searching events in Cyprus and venue near me.",
  },
  {
    tag: "Step 3",
    title: "Track Event Growth",
    body: "Measure impressions, clicks, and checkout conversion by city.",
  },
];

const homeExperienceCards = [
  {
    title: "Discovery Engine for Events",
    body: "Move from browsing to booking faster with a discovery flow built for event lovers in Cyprus.",
    image: screenshots.categories,
    alt: "Event categories inside the EventaPulse mobile app",
  },
  {
    title: "Never miss an event in Cyprus again",
    body: "Show what is trending right now and create instant FOMO around the hottest upcoming events.",
    image: screenshots.citySelection,
    alt: "City selection flow in the EventaPulse app",
  },
  {
    title: "Choose your preference and always get notified",
    body: "Personalize interests by city and vibe, then receive notifications before tickets sell out.",
    image: screenshots.userProfile,
    alt: "User profile and preferences screen in EventaPulse",
  },
];

export default function HomePage() {
  return (
    <div className="home-page" id="top">
      <div className="hero-shell">
        <Iridescence
          className="hero-iridescence"
          baseColor={[1, 0.72, 0.86]}
          speed={1.05}
          amplitude={0.09}
          mouseReact
        />
        <div className="hero-overlay" />
        <div className="hero-orb hero-orb--one" />
        <div className="hero-orb hero-orb--two" />

        <section className="hero-content">
          <p className="hero-pill">Cyprus Event Platform</p>
          <div className="text-pressure-wrap">
            <TextPressure
              text="EVENTAPULSE"
              minFontSize={24}
              textColor="#fff6fd"
              stroke={false}
              width
              weight
              italic={false}
              alpha={false}
            />
          </div>
          <h1>
            <SplitText
              text="Your guide to unforgettable experiences"
              className="hero-split"
              delay={40}
              duration={0.9}
              splitType="words, chars"
              from={{ opacity: 0, y: 20 }}
              to={{ opacity: 1, y: 0 }}
              tag="span"
            />
          </h1>
          <p>
            People searching for events in Cyprus can discover seminars, music festivals, and local venues in
            Nicosia and Paphos.
          </p>
          <div className="hero-actions">
            <Link to="/users" className="btn-solid">
              Explore as User
            </Link>
            <Link to="/organizers" className="btn-ghost">
              Promote as Organizer
            </Link>
          </div>
          <div className="hero-stats">
            <article>
              <span>Search Intent</span>
              <p>Optimized for "events Cyprus" and "event in Nicosia".</p>
            </article>
            <article>
              <span>City Focus</span>
              <p>Nicosia and Paphos venue discovery in one flow.</p>
            </article>
            <article>
              <span>Event Themes</span>
              <p>Seminars, music festivals, culture, and networking.</p>
            </article>
          </div>
        </section>
      </div>

      <section className="experience-stack-section">
        <header className="section-header experience-stack-section__header">
          <p>Mobile Experience</p>
          <h2>Explore how EventaPulse works in your pocket</h2>
        </header>
        <ScrollStack
          className="experience-scroll-stack experience-scroll-stack--page"
          itemDistance={140}
          itemScale={0.035}
          itemStackDistance={34}
          stackPosition="14%"
          scaleEndPosition="8%"
          baseScale={0.9}
          blurAmount={0.28}
          useWindowScroll
        >
          {homeExperienceCards.map((card) => (
            <ScrollStackItem key={card.title} itemClassName="experience-stack-card">
              <div className="experience-stack-card__copy">
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
              <div className="experience-stack-card__media">
                <img src={card.image} alt={card.alt} loading="lazy" />
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>

      <main className="doc-main">
        <section className="doc-guides">
          <header className="section-header">
            <p>User Search Profile</p>
            <h2>How people search events in Cyprus</h2>
          </header>
          <p className="seo-copy">
            High-intent visitors often search phrases like <strong>events Cyprus</strong>,
            <strong> event in Nicosia tonight</strong>, <strong>Paphos music festival</strong>, and
            <strong> event venue near me</strong>. EventaPulse is structured for these exact search patterns so users
            can quickly choose by city, date, and event type.
          </p>
          <div className="user-shots">
            {userShots.map((shot) => (
              <TiltedCardLite key={shot.title} title={shot.title} subtitle={shot.subtitle} image={shot.image} />
            ))}
          </div>
        </section>

        <section className="organizer-block">
          <header className="section-header">
            <p>Organizer Growth</p>
            <h2>Rank for event-related searches in Cyprus</h2>
          </header>
          <div className="organizer-grid">
            <ScrollStackLite items={organizerStack} />
            <article className="organizer-note">
              <h3>Built for local discovery</h3>
              <ul>
                <li>Theme clusters: seminars, music festivals, and workshops.</li>
                <li>City visibility for Nicosia and Paphos event pages.</li>
                <li>Venue context for users searching "near me".</li>
              </ul>
              <Link to="/organizers" className="btn-solid">
                Go to Organizer Page
              </Link>
            </article>
          </div>
        </section>

        <section className="search-intent-grid">
          <article className="search-intent-card">
            <p>Popular Cyprus Searches</p>
            <ul>
              <li>events cyprus</li>
              <li>events in nicosia</li>
              <li>events in paphos</li>
              <li>event venue near me</li>
            </ul>
          </article>
          <article className="search-intent-card">
            <p>Top Event Themes</p>
            <ul>
              <li>seminars in cyprus</li>
              <li>music festivals cyprus</li>
              <li>business networking events</li>
              <li>culture and art events</li>
            </ul>
          </article>
        </section>

        <section className="profiles" id="aboutus">
          <header className="section-header">
            <p>About Us</p>
            <h2>Team behind EventaPulse</h2>
          </header>
          <div className="profile-grid">
            <RBProfileCard
              name="Omar"
              title="Founder - Business & Marketing"
              handle="eventapulse"
              status="Online"
              contactText="Contact"
              avatarUrl="/foundersfaces/omar.jpg"
              miniAvatarUrl="/foundersfaces/omar.jpg"
              iconUrl="/eventpulse-logo-full.jpg"
              grainUrl="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=400&q=30"
              showUserInfo
            />
            <RBProfileCard
              name="Youssef Bouzgarrou"
              title="Co-Founder - Developer"
              handle="eventapulse"
              status="Available"
              contactText="Contact"
              avatarUrl="/foundersfaces/youssef.jpg"
              miniAvatarUrl="/foundersfaces/youssef.jpg"
              iconUrl="/eventpulse-logo-full.jpg"
              grainUrl="https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&w=400&q=30"
              showUserInfo
            />
          </div>
        </section>

        <section className="docs-note" id="join">
          <div>
            <p>Membership</p>
            <h3>Be a member of EventaPulse</h3>
            <ul>
              <li>Launch access for Cyprus events</li>
              <li>Priority event recommendations by city</li>
              <li>Partner invites and venue updates</li>
            </ul>
          </div>
          <div className="docs-note__cta">
            <span>Early Access</span>
            <h4>Join now</h4>
            <Link to="/users" className="btn-solid">
              Start Exploring
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
