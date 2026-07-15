import { Metadata } from "next";
import { KnowledgeHubGrid } from "@/components/learn/knowledge-hub/KnowledgeHubGrid";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Knowledge Hub: Knowledge hub",
  description: "Premium organic spices exporter from India.",
  keywords: pageIntelligence.home?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/learn/knowledge-hub",
});

export default function KnowledgeHubPage() {
  return (
    <main className="min-h-screen">
      <KnowledgeHubGrid />
    </main>
  );
}
