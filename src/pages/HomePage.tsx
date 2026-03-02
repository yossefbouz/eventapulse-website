import FinalCTA from "../components/home/FinalCTA";
import HeroSection from "../components/home/HeroSection";
import ProductPreview from "../components/home/ProductPreview";
import ProofBar from "../components/home/ProofBar";
import SplitEntry from "../components/home/SplitEntry";
import TeamSection from "../components/home/TeamSection";
import ValueCards from "../components/home/ValueCards";
import { useSeo, seoData } from "../utils/seo";

export default function HomePage() {
  useSeo(seoData.home);
  return (
    <div className="home-v2-page" id="top">
      <HeroSection />
      <ProofBar />
      <SplitEntry />
      <ProductPreview />
      <ValueCards />
      <TeamSection />
      <FinalCTA />
    </div>
  );
}
