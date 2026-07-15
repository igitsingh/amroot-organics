import { TraceFeature } from "@/components/trace/TraceFeature";
import { Metadata } from "next";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Spice Supply Chain Traceability",
  description: "Farm-to-fork traceability ensuring the highest quality organic spices for your brand.",
  keywords: pageIntelligence.trace?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/trace",
});

export default function TracePage() {
  return (
    <main>
      <TraceFeature />
    </main>
  );
}
