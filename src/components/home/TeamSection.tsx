import RBProfileCard from "../RBProfileCard.jsx";
import { useFadeIn } from "../../hooks/useFadeIn";

export default function TeamSection() {
  const ref = useFadeIn<HTMLElement>();
  return (
    <section ref={ref} className="home-v2-section home-v2-team fade-in-section" id="aboutus" aria-labelledby="home-v2-team-title">
      <div className="home-v2-container">
        <header className="home-v2-section__header">
          <p>About EventaPulse</p>
          <h2 id="home-v2-team-title">A Cyprus team building trusted event discovery</h2>
        </header>
        <p className="home-v2-team__story">
          We started EventaPulse to make discovering local experiences easier and more trustworthy for everyone in
          Cyprus. Today we are building one platform where users discover events and organizers grow faster.
        </p>

        <div className="home-v2-team__grid">
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
      </div>
    </section>
  );
}
