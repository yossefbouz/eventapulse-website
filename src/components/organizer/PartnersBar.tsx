const partners = ["Retrogroove", "Harbor", "ODIN", "Madhouse", "Somewhere"];

export default function PartnersBar() {
  return (
    <section className="page-section org-partners" aria-label="Our partners">
      <div className="page-container">
        <p className="org-partners__label">Trusted by organizers across Cyprus</p>
        <div className="org-partners__row">
          {partners.map((partner) => (
            <span key={partner} className="org-partners__name">
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
