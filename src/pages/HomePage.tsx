import { useEffect } from "react";
import BetaTesters from "../components/home/BetaTesters";
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

  useEffect(() => {
    const root = document.documentElement;
    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;
      const scrollable = Math.max(root.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(Math.max(window.scrollY / scrollable, 0), 1);
      root.style.setProperty("--home-scroll-progress", progress.toFixed(4));
    };

    const requestUpdate = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateProgress);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      root.style.removeProperty("--home-scroll-progress");
    };
  }, []);

  return (
    <div className="v3-page" id="top">
      <HeroSection />
      <BetaTesters />
      <ProofBar />
      <ProductPreview />
      <ValueCards />
      <SplitEntry />
      <TeamSection />
      <FinalCTA />
    </div>
  );
}
