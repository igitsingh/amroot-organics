import { Metadata } from "next";
import { FaqSection } from "@/components/learn/faqs/FaqSection";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Knowledge Hub: Faqs",
  description: "Premium organic spices exporter from India.",
  keywords: pageIntelligence.home?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/learn/faqs",
});

export default function FaqsPage() {
  return (
    <main className="min-h-screen bg-[#FAF8F5]">
      <FaqSection />
    </main>
  );
}
