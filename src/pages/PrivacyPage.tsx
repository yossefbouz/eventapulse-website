import { Sparkles } from "lucide-react";
import { useSeo, seoData } from "../utils/seo";

export default function PrivacyPage() {
  useSeo(seoData.privacy);

  return (
    <div className="v3-page" id="top">
      <section className="v3-section" aria-labelledby="privacy-title">
        <div className="v3-container" style={{ maxWidth: 880 }}>
          <header className="v3-section__header" style={{ textAlign: "left", marginBottom: 32 }}>
            <p className="v3-eyebrow">
              <Sparkles size={12} aria-hidden="true" style={{ marginRight: 6 }} />
              Legal · Privacy
            </p>
            <h1 id="privacy-title">
              Privacy <span className="v3-gradient-text">Policy</span>
            </h1>
            <p className="v3-section__sub" style={{ marginTop: 8 }}>
              Last updated: May 3, 2026
            </p>
          </header>

          <article className="privacy-prose">
            <section>
              <h2>Overview</h2>
              <p>
                EventPulse ("we", "us", "our") is a Cyprus-based event discovery and ticketing
                platform. This Privacy Policy explains what data we collect, how we use it, and
                the choices you have. By using EventPulse you agree to this policy.
              </p>
            </section>

            <section>
              <h2>What we collect</h2>
              <ul>
                <li>
                  <strong>Account data:</strong> email, display name, optional avatar, preferred
                  city, language preference.
                </li>
                <li>
                  <strong>Event activity:</strong> events you save, tickets you purchase, scans
                  you perform as an organizer, and engagement metrics (views, taps, conversion).
                </li>
                <li>
                  <strong>Payments:</strong> processed securely by Stripe. We never store your
                  full card number on our servers; Stripe handles PCI-compliant tokenization.
                  For organizers, Stripe Connect handles payouts.
                </li>
                <li>
                  <strong>Device data:</strong> push notification tokens, app version, device
                  model and OS, anonymized crash reports.
                </li>
                <li>
                  <strong>Location:</strong> only when you opt in to "Near Me" features.
                  Coarse city-level location is inferred from event search filters.
                </li>
              </ul>
            </section>

            <section>
              <h2>How we use your data</h2>
              <ul>
                <li>Show you events relevant to your city + interests.</li>
                <li>Process ticket purchases and issue QR-coded tickets.</li>
                <li>Send transactional emails (purchase confirmation, event reminders).</li>
                <li>
                  Send push notifications about events you saved or organizers you follow — only
                  with your permission.
                </li>
                <li>Improve the product through anonymized analytics and crash logs.</li>
                <li>
                  Comply with legal obligations (tax reporting for paid events, anti-fraud
                  checks via Stripe).
                </li>
              </ul>
            </section>

            <section>
              <h2>Who we share data with</h2>
              <ul>
                <li>
                  <strong>Stripe</strong> — payment processing and Connect payouts.
                </li>
                <li>
                  <strong>Supabase</strong> — database hosting (EU region).
                </li>
                <li>
                  <strong>Event organizers</strong> — when you buy a ticket, the organizer of
                  that event sees your name, email, and tier purchased so they can verify entry
                  and contact you about event updates.
                </li>
                <li>
                  We never sell your data. No third-party advertisers or data brokers.
                </li>
              </ul>
            </section>

            <section>
              <h2>Your rights (GDPR)</h2>
              <p>As a Cyprus / EU resident you have the right to:</p>
              <ul>
                <li>Access the data we hold about you</li>
                <li>Correct inaccurate data</li>
                <li>Delete your account and all associated data</li>
                <li>Export your data in a portable format</li>
                <li>Object to processing for marketing purposes</li>
              </ul>
              <p>
                Contact us at{" "}
                <a href="mailto:info@eventapulse.com">info@eventapulse.com</a> to exercise
                any of these rights. We respond within 30 days.
              </p>
            </section>

            <section>
              <h2>Data retention</h2>
              <ul>
                <li>
                  Account data is kept while your account is active and for 90 days after
                  deletion (to handle disputes / refunds).
                </li>
                <li>Ticket purchase records are retained for 7 years per Cyprus tax law.</li>
                <li>Anonymized analytics are retained indefinitely.</li>
              </ul>
            </section>

            <section>
              <h2>Security</h2>
              <p>
                We use TLS for all network traffic, hash passwords with bcrypt, and store
                payment data only via Stripe's PCI-DSS environment. Database access is
                restricted by Row-Level Security policies.
              </p>
            </section>

            <section>
              <h2>Children</h2>
              <p>
                EventPulse is not intended for users under 16. We do not knowingly collect data
                from children. If you believe a child has created an account, contact us at{" "}
                <a href="mailto:info@eventapulse.com">info@eventapulse.com</a>.
              </p>
            </section>

            <section>
              <h2>Changes to this policy</h2>
              <p>
                We may update this policy as our product evolves. Material changes will be
                announced in-app and via email at least 14 days before they take effect.
              </p>
            </section>

            <section>
              <h2>Contact</h2>
              <p>
                EventPulse Ltd · Nicosia, Cyprus
                <br />
                Email: <a href="mailto:info@eventapulse.com">info@eventapulse.com</a>
                <br />
                For GDPR / Data Protection Officer requests, use the same address above and
                put <strong>"DPO request"</strong> in the subject line.
              </p>
            </section>
          </article>
        </div>
      </section>
    </div>
  );
}
