import { Metadata } from "next";
import { SingleOriginHero } from "@/components/learn/single-origin/SingleOriginHero";
import { TerroirBenefits } from "@/components/learn/single-origin/TerroirBenefits";
import { FarmerCommunity } from "@/components/learn/single-origin/FarmerCommunity";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Knowledge Hub: Single origin",
  description: "Premium organic spices exporter from India.",
  keywords: pageIntelligence.home?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/learn/single-origin",
});

export default function SingleOriginPage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <SingleOriginHero />
      <TerroirBenefits />
      <FarmerCommunity />
    </main>
  );
}
