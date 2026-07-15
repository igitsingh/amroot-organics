import { OriginHero } from "@/components/origin/OriginHero";
import { TheTerroir } from "@/components/origin/TheTerroir";
import { FarmingPractices } from "@/components/origin/FarmingPractices";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Single Origin Spices from India",
  description: "Discover the single-origin sources of our Lakadong Turmeric and Jaintia Hills Ginger in Meghalaya.",
  keywords: pageIntelligence.origin?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/origin",
});

export default function OriginPage() {
  return (
    <>
      <OriginHero />
      <TheTerroir />
      <FarmingPractices />
    </>
  );
}
