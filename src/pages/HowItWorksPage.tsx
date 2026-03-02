import HowHero from "../components/how-it-works/HowHero";
import DualTrackTimeline from "../components/how-it-works/DualTrackTimeline";
import EcosystemSummary from "../components/how-it-works/EcosystemSummary";

export default function HowItWorksPage() {
  return (
    <div className="page-shell page-shell--how" id="top">
      <HowHero />
      <DualTrackTimeline />
      <EcosystemSummary />
    </div>
  );
}
