import "@/App.css";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScroll } from "@/components/ef/SmoothScroll";
import { Navbar } from "@/components/ef/Navbar";
import { Hero } from "@/components/ef/Hero";
import { Marquee } from "@/components/ef/Marquee";
import { PricingSection } from "@/components/ef/PricingSection";
import { GrowthSection } from "@/components/ef/GrowthSection";
import { CustomQuote } from "@/components/ef/CustomQuote";
import { ContactSection } from "@/components/ef/ContactSection";
import { Footer, WhatsAppFloat } from "@/components/ef/Footer";
import { WEBSITE_PLANS, AUTOMATION_PLANS } from "@/data/pricing";

function App() {
  return (
    <div className="App">
      <SmoothScroll />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <PricingSection
          id="websites"
          num="01"
          eyebrow="Website development"
          title={<>Website Development <span className="text-gradient">Pricing</span></>}
          sub="Professional websites designed to establish your online presence and turn visitors into customers."
          plans={WEBSITE_PLANS}
          cta="Get Started"
        />
        <PricingSection
          id="automation"
          num="02"
          eyebrow="AI automation services"
          title={<>AI Automation <span className="text-gradient">Pricing</span></>}
          sub="Automate repetitive tasks, capture more opportunities and make your business operations more efficient."
          plans={AUTOMATION_PLANS}
          cta="Automate My Business"
          className="border-t border-ink/5 bg-white"
        />
        <GrowthSection />
        <CustomQuote />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;
