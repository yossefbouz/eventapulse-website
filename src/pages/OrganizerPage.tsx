import OrganizerHero from "../components/organizer/OrganizerHero";
import PublishFlow from "../components/organizer/PublishFlow";
import OrganizerToolkit from "../components/organizer/OrganizerToolkit";
import PricingTeaser from "../components/organizer/PricingTeaser";
import Testimonials from "../components/organizer/Testimonials";
import PartnersBar from "../components/organizer/PartnersBar";
import OrganizerCTA from "../components/organizer/OrganizerCTA";
import { useSeo, seoData } from "../utils/seo";

export default function OrganizerPage() {
  useSeo(seoData.organizers);
  return (
    <div className="page-shell page-shell--organizer" id="top">
      <OrganizerHero />
      <PublishFlow />
      <OrganizerToolkit />
      <PricingTeaser />
      <Testimonials />
      <PartnersBar />
      <OrganizerCTA />
    </div>
  );
}
