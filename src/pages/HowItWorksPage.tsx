import HowHero from "../components/how-it-works/HowHero";
import DualTrackTimeline from "../components/how-it-works/DualTrackTimeline";
import EcosystemSummary from "../components/how-it-works/EcosystemSummary";
import { useSeo, seoData } from "../utils/seo";

export default function HowItWorksPage() {
  useSeo(seoData.howItWorks);
  return (
    <div className="v3-page" id="top">
      <HowHero />
      <DualTrackTimeline />
      <EcosystemSummary />
    </div>
  );
}
