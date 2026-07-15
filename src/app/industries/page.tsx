import { Metadata } from "next";
import { IndustriesHero } from "@/components/industries/IndustriesHero";
import { IndustryCards } from "@/components/industries/IndustryCards";
import { B2BAdvantages } from "@/components/industries/B2BAdvantages";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Organic Spices for Industries",
  description: "Premium bulk organic spices tailored for food manufacturers, distributors, and retail brands.",
  keywords: pageIntelligence.industries?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/industries",
});

export default function IndustriesPage() {
  return (
    <main className="min-h-screen">
      <IndustriesHero />
      <IndustryCards />
      <B2BAdvantages />
    </main>
  );
}
