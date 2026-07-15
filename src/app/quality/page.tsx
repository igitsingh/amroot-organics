import { Metadata } from "next";
import { QualityHero } from "@/components/quality/QualityHero";
import { ProcessingStandards } from "@/components/quality/ProcessingStandards";
import { QualityCommitment } from "@/components/quality/QualityCommitment";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Export Quality & Certifications",
  description: "Explore our rigorous quality control, lab testing, and global organic certifications for export.",
  keywords: pageIntelligence.quality?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/export-quality",
});

export default function QualityPage() {
  return (
    <main className="min-h-screen bg-brand-white">
      <QualityHero />
      <ProcessingStandards />
      <QualityCommitment />
    </main>
  );
}
