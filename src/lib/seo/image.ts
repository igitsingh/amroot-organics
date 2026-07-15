import { IntelligenceNode, productIntelligence } from "./intelligence";

/**
 * Generates an SEO-optimized alt text for an image based on its context and product intelligence.
 * The goal is to provide highly descriptive, B2B-focused alt texts for Google Images.
 */
export function generateImageAlt(
  context: "hero" | "product" | "certification" | "facility" | "generic",
  productKey?: keyof typeof productIntelligence,
  customDescriptor?: string
): string {
  const baseSuffix = "Global B2B Export from India - AMROOT Organics";

  if (context === "product" && productKey) {
    // Map specific IDs to general intelligence categories if needed, or fallback gracefully
    const intelKey = String(productKey).includes("ginger") ? "ginger" : "turmeric";
    const intel = productIntelligence[intelKey as keyof typeof productIntelligence];
    
    return `Premium ${customDescriptor || String(productKey).replace("-", " ")} (${intel?.primaryKeyword}) for ${baseSuffix}`;
  }

  if (context === "hero") {
    return `Premium Organic Spices, Herbs, and Extracts for ${baseSuffix}`;
  }

  if (context === "certification") {
    return `${customDescriptor || "Global Quality Certification"} for Organic Spice Export - AMROOT Organics India`;
  }

  if (context === "facility") {
    return `${customDescriptor || "State-of-the-art Processing Facility"} for Organic Spices - AMROOT Organics India`;
  }

  if (customDescriptor) {
    return `${customDescriptor} - AMROOT Organics India`;
  }

  return `Organic Spices and Extracts Export from India - AMROOT Organics`;
}

/**
 * Generates an SEO-optimized title attribute for images to provide hover context.
 */
export function generateImageTitle(
  context: "hero" | "product" | "certification" | "facility" | "generic",
  productKey?: keyof typeof productIntelligence,
  customDescriptor?: string
): string {
  if (context === "product" && productKey) {
    const intelKey = String(productKey).includes("ginger") ? "ginger" : "turmeric";
    const intel = productIntelligence[intelKey as keyof typeof productIntelligence];
    return `View specifications for ${customDescriptor || String(productKey).replace("-", " ")} B2B Export`;
  }

  if (context === "hero") {
    return "AMROOT Organics - Premium B2B Spice Exporter";
  }

  if (context === "certification") {
    return customDescriptor ? `Certified: ${customDescriptor}` : "Quality Certifications";
  }

  if (customDescriptor) {
    return customDescriptor;
  }

  return "AMROOT Organics";
}
