import ContactCards from "../components/ContactCards";
import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";
import FAQSection from "../components/FAQSection";
import HeroBanner from "../components/HeroBanner";

const contacts = [
  {
    id: 1,
    type: "Email",
    value: "contact@example.com",
    icon: "📧",
  },
  {
    id: 2,
    type: "Phone",
    value: "+1 234 567 8900",
    icon: "📞",
  },
  {
    id: 3,
    type: "Address",
    value: "123 Main St, City, Country",
    icon: "🏠",
  },
];

function ContactPage() {
  return (
    <div className="px-4 sm:px-8 md:px-10 py-10 space-y-16">
      <div className="pt-24" />
      <HeroBanner></HeroBanner>
      <br />
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <br />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactCards contacts={contacts} />
        </div>
        <div data-aos="fade-down"><FAQSection></FAQSection></div>
      </div>
      
    </div>
  );
}

export default ContactPage;
