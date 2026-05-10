import BetaTesters from "../components/home/BetaTesters";
import { useSeo, seoData } from "../utils/seo";

export default function BetaPage() {
  useSeo(seoData.beta);

  return (
    <div className="v3-page" id="top">
      <BetaTesters />
    </div>
  );
}
