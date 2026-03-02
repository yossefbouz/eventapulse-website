import TrustHero from "../components/trust/TrustHero";
import SafetyPillars from "../components/trust/SafetyPillars";
import FeeTransparency from "../components/trust/FeeTransparency";
import FAQ from "../components/trust/FAQ";
import { useSeo, seoData } from "../utils/seo";

export default function TrustPage() {
  useSeo(seoData.trust);
  return (
    <div className="page-shell page-shell--trust" id="top">
      <TrustHero />
      <SafetyPillars />
      <FeeTransparency />
      <FAQ />
    </div>
  );
}
