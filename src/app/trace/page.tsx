import { TraceFeature } from "@/components/trace/TraceFeature";
import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Spice Supply Chain Traceability",
  description: "Verify the single-origin farm, organic certificates, and transit history of your Amroot Organics turmeric and ginger batches.",
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
