import PhoneMockup from "../PhoneMockup";
import { screenshots } from "../../data/screenshots";

const rows = [
  { label: "Ticket price", value: "Set by organizer", note: null },
  { label: "Platform fee", value: "EUR 1.00 / ticket", note: null },
  { label: "VAT", value: "19%", note: "On platform fee only" },
  { label: "Organizer commission", value: "5%", note: "Net of VAT" },
];

export default function FeeTransparency() {
  return (
    <section className="page-section trust-fees" aria-labelledby="trust-fees-title">
      <div className="page-container">
        <header className="page-section__header">
          <p>Transparency</p>
          <h2 id="trust-fees-title">You always see the total before you pay</h2>
        </header>

        <div className="trust-fees__inner">
          <div className="trust-fees__table-wrap">
            <table className="trust-fees__table" aria-label="Fee breakdown">
              <thead>
                <tr>
                  <th>Fee</th>
                  <th>Amount</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.value}</td>
                    <td>{row.note ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="trust-fees__phone">
            <PhoneMockup
              src={screenshots.checkout}
              alt="Checkout screen showing clear fee breakdown before payment"
              glow="blue"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
