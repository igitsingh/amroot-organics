import { Metadata } from "next";
import { ResearchHero } from "@/components/learn/research/ResearchHero";
import { ClinicalData } from "@/components/learn/research/ClinicalData";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Knowledge Hub: Research",
  description: "Premium organic spices exporter from India.",
  keywords: pageIntelligence.home?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/learn/research",
});

export default function ResearchPage() {
  return (
    <main className="min-h-screen">
      <ResearchHero />
      <ClinicalData />
    </main>
  );
}
