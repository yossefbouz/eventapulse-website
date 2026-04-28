const partners = [
  "Retrogroove", "Harbor", "ODIN", "Madhouse", "Somewhere",
  "Nicosia Live", "Limassol Nights", "Paphos Arts", "Ayia Napa Sounds", "Larnaca Sessions",
];

const track = [...partners, ...partners];

export default function PartnersBar() {
  return (
    <section className="v3-org-partners" aria-label="Partners">
      <div className="v3-container">
        <p className="v3-org-partners__label">Early partners across the island</p>
      </div>
      <div className="v3-marquee v3-org-partners__marquee">
        <div className="v3-marquee__track" style={{ animationDuration: "38s" }}>
          {track.map((p, i) => (
            <span key={`${p}-${i}`} className="v3-org-partners__pill">{p}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
