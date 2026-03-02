import { Instagram, Mail, MapPin } from "lucide-react";

const methods = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@eventpulse.app",
    href: "mailto:contact@eventpulse.app",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@eventapulse",
    href: "https://instagram.com/eventapulse",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nicosia, Cyprus",
    href: null,
  },
];

export default function ContactMethods() {
  return (
    <section className="page-section contact-methods" aria-label="Contact methods">
      <div className="page-container">
        <div className="contact-methods__grid">
          {methods.map((m) => (
            <div key={m.label} className="contact-methods__item">
              <m.icon size={20} aria-hidden="true" />
              <div>
                <h4>{m.label}</h4>
                {m.href ? (
                  <a href={m.href} target="_blank" rel="noopener noreferrer">
                    {m.value}
                  </a>
                ) : (
                  <span>{m.value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
