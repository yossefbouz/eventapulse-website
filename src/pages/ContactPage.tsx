import ContactHero from "../components/contact/ContactHero";
import PartnerCards from "../components/contact/PartnerCards";
import ContactForm from "../components/contact/ContactForm";
import ContactMethods from "../components/contact/ContactMethods";
import SiteEndcap from "../components/contact/SiteEndcap";
import { useSeo, seoData } from "../utils/seo";

export default function ContactPage() {
  useSeo(seoData.contact);
  return (
    <div className="v3-page" id="top">
      <ContactHero />
      <PartnerCards />
      <ContactForm />
      <ContactMethods />
      <SiteEndcap />
    </div>
  );
}
