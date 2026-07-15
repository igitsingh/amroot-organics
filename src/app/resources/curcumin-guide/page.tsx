import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence } from "@/lib/seo/intelligence";
import { CurcuminGuideView } from "./CurcuminGuideView";

export const metadata = constructMetadata({
  title: "Knowledge Hub: Curcumin guide",
  description: "Understanding the active compound that makes Lakadong Turmeric world-renowned. Discover the science behind the spice.",
  keywords: pageIntelligence.home?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/learn/curcumin-guide",
});

export default function CurcuminGuidePage() {
  return <CurcuminGuideView />;
}
