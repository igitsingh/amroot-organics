import { Metadata } from "next";
import { ProductsCatalog } from "@/components/products/ProductsCatalog";

import { constructMetadata } from "@/lib/seo/utils";
import { pageIntelligence, productIntelligence } from "@/lib/seo/intelligence";
import { generateProductSchema } from "@/lib/seo/schema";
import { JsonLd } from "@/components/seo/JsonLd";

export const metadata = constructMetadata({
  title: "Premium Organic Spices & Extracts",
  description: "Explore our catalog of premium organic turmeric, ginger, and natural extracts for wholesale.",
  keywords: productIntelligence.turmeric?.secondaryKeywords || [],
  canonicalUrl: "https://amrootorganics.com/products",
});

export default function ProductsPage() {
  return (
    <main className="min-h-screen pt-24 bg-[#FAF8F5]">
      <JsonLd schema={generateProductSchema(
        "Organic Lakadong Turmeric",
        "Premium single-origin Lakadong turmeric powder with high curcumin content.",
        "https://amrootorganics.com/images/turmeric-product.jpg",
        productIntelligence.turmeric
      )} />
      <ProductsCatalog />
    </main>
  );
}
