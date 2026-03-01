type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
  accent?: "amber" | "orange" | "pink" | "blue";
};

export default function ProfileCard({
  name,
  role,
  bio,
  image,
  accent = "amber",
}: ProfileCardProps) {
  return (
    <article className={`profile-card profile-card--${accent}`}>
      <div className="profile-card__image-wrap">
        <img src={image} alt={name} className="profile-card__image" />
      </div>
      <div className="profile-card__content">
        <p className="profile-card__role">{role}</p>
        <h3>{name}</h3>
        <p>{bio}</p>
      </div>
    </article>
  );
}
