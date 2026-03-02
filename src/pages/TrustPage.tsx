import TrustHero from "../components/trust/TrustHero";
import SafetyPillars from "../components/trust/SafetyPillars";
import FeeTransparency from "../components/trust/FeeTransparency";
import FAQ from "../components/trust/FAQ";

export default function TrustPage() {
  return (
    <div className="page-shell page-shell--trust" id="top">
      <TrustHero />
      <SafetyPillars />
      <FeeTransparency />
      <FAQ />
    </div>
  );
}
