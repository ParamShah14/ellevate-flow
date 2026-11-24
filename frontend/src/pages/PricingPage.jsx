import { PricingHero } from "@/components/ef/Hero";
import { Marquee } from "@/components/ef/Marquee";
import { PricingSection } from "@/components/ef/PricingSection";
import { GrowthSection } from "@/components/ef/GrowthSection";
import { CustomQuote } from "@/components/ef/CustomQuote";
import { WordPressPricing } from "@/components/ef/home/WordPress";
import { SpecialOffer } from "@/components/ef/home/SpecialOffer";
import { WEBSITE_PLANS, AUTOMATION_PLANS } from "@/data/pricing";

export default function PricingPage() {
  return (
    <>
      <PricingHero />
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
      <WordPressPricing className="border-t border-ink/5" />
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
      <SpecialOffer />
      <CustomQuote />
    </>
  );
}
