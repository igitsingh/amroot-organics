import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { OurMission } from "@/components/about/OurMission";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "About AMROOT Organics",
  description: "Learn about AMROOT Organics, our ethical sourcing, and our mission to export premium Indian spices.",
  keywords: pageIntelligence.about?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <OurMission />
    </>
  );
}
