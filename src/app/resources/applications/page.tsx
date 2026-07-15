import { Metadata } from "next";
import { ApplicationsHero } from "@/components/learn/applications/ApplicationsHero";
import { IndustryUseCases } from "@/components/learn/applications/IndustryUseCases";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Knowledge Hub: Applications",
  description: "Premium organic spices exporter from India.",
  keywords: pageIntelligence.home?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/learn/applications",
});

export default function ApplicationsPage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <ApplicationsHero />
      <IndustryUseCases />
    </main>
  );
}
