import { HomeHero } from "@/components/ef/home/HomeHero";
import { Marquee } from "@/components/ef/Marquee";
import { CoreServices, ExtraServices } from "@/components/ef/home/Services";
import { SpecialOffer } from "@/components/ef/home/SpecialOffer";
import { WordPressTeaser } from "@/components/ef/home/WordPress";
import { Process, FinalCta } from "@/components/ef/home/Blocks";
import { PricingPreview } from "@/components/ef/home/PricingPreview";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <Marquee />
      <CoreServices />
      <ExtraServices />
      <SpecialOffer />
      <WordPressTeaser />
      <Process />
      <PricingPreview />
      <FinalCta />
    </>
  );
}
