import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence } from "@/lib/seo/intelligence";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { Hero } from "@/components/home/Hero";
import { TrustCards } from "@/components/home/TrustCards";
import { RareProductsScroll } from "@/components/home/RareProductsScroll";
import { Traceability } from "@/components/home/Traceability";
import { WhyBuyersSwitch } from "@/components/home/WhyBuyersSwitch";
import { PackagingScale } from "@/components/home/PackagingScale";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { QualityCompliance } from "@/components/home/QualityCompliance";

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

      <WhyBuyersSwitch />
      <PackagingScale />
      <ProcessTimeline />
      <QualityCompliance />
    </>
  );
}
