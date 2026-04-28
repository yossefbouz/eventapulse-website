import UserHero from "../components/user/UserHero";
import DiscoveryFlow from "../components/user/DiscoveryFlow";
import UserFeatures from "../components/user/UserFeatures";
import UserCTA from "../components/user/UserCTA";
import { useSeo, seoData } from "../utils/seo";

export default function UserPage() {
  useSeo(seoData.users);
  return (
    <div className="v3-page" id="top">
      <UserHero />
      <DiscoveryFlow />
      <UserFeatures />
      <UserCTA />
    </div>
  );
}
