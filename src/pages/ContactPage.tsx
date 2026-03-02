import ContactHero from "../components/contact/ContactHero";
import PartnerCards from "../components/contact/PartnerCards";
import ContactForm from "../components/contact/ContactForm";
import ContactMethods from "../components/contact/ContactMethods";
import SiteEndcap from "../components/contact/SiteEndcap";

export default function ContactPage() {
  return (
    <div className="page-shell page-shell--contact" id="top">
      <ContactHero />
      <PartnerCards />
      <ContactForm />
      <ContactMethods />
      <SiteEndcap />
    </div>
  );
}
