import { Metadata } from "next";
import { ImportGuideHero } from "@/components/learn/import-guide/ImportGuideHero";
import { ImportSteps } from "@/components/learn/import-guide/ImportSteps";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Knowledge Hub: Import guide",
  description: "Premium organic spices exporter from India.",
  keywords: pageIntelligence.home?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/learn/import-guide",
});

export default function ImportGuidePage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <ImportGuideHero />
      <ImportSteps />
    </main>
  );
}
