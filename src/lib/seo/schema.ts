import { siteConfig } from "./config";
import { IntelligenceNode } from "./intelligence";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.companyName,
    url: siteConfig.url,
    logo: siteConfig.logo,
    description: siteConfig.description,
    sameAs: [siteConfig.links.twitter, siteConfig.links.linkedin],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteConfig.businessEmail,
        contactType: "customer support",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.companyName,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
    },
  };
}

export function generateProductSchema(
  name: string,
  description: string,
  image: string,
  intelligenceNode: IntelligenceNode
) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: name,
    image: image,
    description: description,
    brand: {
      "@type": "Brand",
      name: siteConfig.companyName,
    },
    category: siteConfig.category,
    keywords: intelligenceNode.primaryKeyword + ", " + intelligenceNode.secondaryKeywords.join(", "),
    audience: {
      "@type": "Audience",
      audienceType: intelligenceNode.buyerPersona.join(", "),
    },
    offers: {
      "@type": "AggregateOffer",
      offerCount: "1",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: siteConfig.companyName,
      },
    },
  };
}

export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${siteConfig.companyName}`,
    description: `Contact ${siteConfig.companyName} for bulk organic spices, wholesale pricing, and export inquiries.`,
    url: `${siteConfig.url}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: siteConfig.companyName,
      email: siteConfig.businessEmail,
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.businessEmail,
        contactType: "sales",
      },
    },
  };
}
