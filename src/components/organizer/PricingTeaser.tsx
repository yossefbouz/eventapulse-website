import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const tiers = [
  {
    name: "Standard",
    price: "From EUR 20",
    period: "/ day",
    features: [
      "Listed in discovery feed",
      "Category and city targeting",
      "Basic analytics",
      "Stripe-powered ticketing",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Featured",
    price: "From EUR 50",
    period: "/ day",
    features: [
      "Priority placement in feeds",
      "Featured badge on listing",
      "Advanced analytics & insights",
      "Dedicated support",
    ],
    cta: "Go Featured",
    highlight: true,
  },
];

export default function PricingTeaser() {
  return (
    <section className="page-section org-pricing" id="org-pricing" aria-labelledby="org-pricing-title">
      <div className="page-container">
        <header className="page-section__header">
          <p>Pricing</p>
          <h2 id="org-pricing-title">Simple, transparent pricing</h2>
        </header>
        <p className="org-pricing__subtitle">
          Duration-based listing fees from 1 to 90 days. Plus 5% ticket commission (net of VAT).
        </p>

        <div className="org-pricing__grid">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`org-pricing__card ${tier.highlight ? "org-pricing__card--featured" : ""}`}
            >
              <h3>{tier.name}</h3>
              <p className="org-pricing__price">
                {tier.price}
                <span>{tier.period}</span>
              </p>
              <ul>
                {tier.features.map((feature) => (
                  <li key={feature}>
                    <CheckCircle2 size={15} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`page-btn ${tier.highlight ? "page-btn--primary" : "page-btn--ghost"}`}
              >
                {tier.cta}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
