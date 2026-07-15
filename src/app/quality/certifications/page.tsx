import { Metadata } from "next";
import { CertificationsHero } from "@/components/certifications/CertificationsHero";
import { GlobalStandards } from "@/components/certifications/GlobalStandards";
import { LabTesting } from "@/components/certifications/LabTesting";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";

export const metadata = constructMetadata({
  title: "Knowledge Hub: Certifications",
  description: "Premium organic spices exporter from India.",
  keywords: pageIntelligence.home?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/learn/certifications",
});

export default function CertificationsPage() {
  return (
    <main className="min-h-screen">
      <CertificationsHero />
      <GlobalStandards />
      <LabTesting />
    </main>
  );
}
