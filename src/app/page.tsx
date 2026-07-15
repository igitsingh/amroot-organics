import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence } from "@/lib/seo/intelligence";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/home/Hero";
import { TrustCards } from "@/components/home/TrustCards";
import { RareProductsScroll } from "@/components/home/RareProductsScroll";
import { ComingSoon } from "@/components/home/ComingSoon";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { Traceability } from "@/components/home/Traceability";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = constructMetadata({
  title: "Organic Spice Exporter India",
  description: "Premium organic spices, herbs, and extracts exporter from India. Sourcing single-origin Lakadong Turmeric and Jaintia Hills Ginger for global B2B procurement.",
  keywords: pageIntelligence.home.secondaryKeywords,
  canonicalUrl: "https://amrootorganics.com",
});

export default function Home() {


  return (
    <>
      <JsonLd schema={generateOrganizationSchema()} />
      <JsonLd schema={generateWebSiteSchema()} />
      <Hero />
      <Traceability />
      <TrustCards />
      
      <RareProductsScroll />

      <ComparisonTable />
    </>
  );
}
