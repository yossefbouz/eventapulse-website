import UserHero from "../components/user/UserHero";
import DiscoveryFlow from "../components/user/DiscoveryFlow";
import UserFeatures from "../components/user/UserFeatures";
import UserCTA from "../components/user/UserCTA";

export default function UserPage() {
  return (
    <div className="page-shell page-shell--user" id="top">
      <UserHero />
      <DiscoveryFlow />
      <UserFeatures />
      <UserCTA />
    </div>
  );
}
