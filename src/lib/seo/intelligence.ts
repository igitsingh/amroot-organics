export type SearchIntent = "Informational" | "Commercial" | "Transactional" | "Navigational";

export interface IntelligenceNode {
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: SearchIntent;
  buyerPersona: string[];
  countryTargeting: string[];
}

export const productIntelligence: Record<string, IntelligenceNode> = {
  turmeric: {
    primaryKeyword: "Organic Turmeric Powder Wholesale",
    secondaryKeywords: [
      "Premium Lakadong Turmeric Exporter",
      "High Curcumin Turmeric Supplier",
      "Bulk Organic Turmeric from India",
      "Private Label Turmeric Powder"
    ],
    searchIntent: "Transactional",
    buyerPersona: ["Spice Buyers", "Supermarket Procurement", "Organic Distributors"],
    countryTargeting: ["UK", "USA", "Germany", "UAE", "Australia"]
  },
  ginger: {
    primaryKeyword: "Organic Ginger Powder Wholesale",
    secondaryKeywords: [
      "Premium Jaintia Hills Ginger Exporter",
      "Bulk Organic Ginger from India",
      "Private Label Ginger Powder"
    ],
    searchIntent: "Transactional",
    buyerPersona: ["Spice Buyers", "Food Manufacturers", "Organic Distributors"],
    countryTargeting: ["UK", "USA", "Germany", "UAE", "Australia"]
  }
};

export const pageIntelligence: Record<string, IntelligenceNode> = {
  home: {
    primaryKeyword: "Organic Spice Exporter India",
    secondaryKeywords: ["Premium Organic Spices Wholesale", "Direct from Farm Spices", "B2B Spice Supplier"],
    searchIntent: "Navigational",
    buyerPersona: ["Importers", "Wholesalers", "Procurement Managers"],
    countryTargeting: ["Global"]
  },
  about: {
    primaryKeyword: "Organic Spice Manufacturer Profile",
    secondaryKeywords: ["Ethical Spice Sourcing", "AMROOT Organics Company", "B2B Spice Exporter India"],
    searchIntent: "Informational",
    buyerPersona: ["Importers", "Brand Managers", "Procurement Managers"],
    countryTargeting: ["Global"]
  },
  quality: {
    primaryKeyword: "Organic Spice Quality Certifications",
    secondaryKeywords: ["Lab Tested Spices", "Export Grade Spices", "B2B Organic Certifications"],
    searchIntent: "Informational",
    buyerPersona: ["Quality Control Managers", "Procurement Managers"],
    countryTargeting: ["Global"]
  },
  origin: {
    primaryKeyword: "Single Origin Spices Meghalaya",
    secondaryKeywords: ["Lakadong Turmeric Origin", "Jaintia Hills Ginger Origin", "Direct from Farmers India"],
    searchIntent: "Informational",
    buyerPersona: ["Ethical Sourcing Managers", "Brand Managers"],
    countryTargeting: ["Global"]
  },
  trace: {
    primaryKeyword: "Spice Supply Chain Traceability",
    secondaryKeywords: ["Farm to Fork Spices", "Transparent Spice Sourcing", "Traceable Organic Spices"],
    searchIntent: "Informational",
    buyerPersona: ["Procurement Managers", "Sustainability Officers"],
    countryTargeting: ["Global"]
  },
  community: {
    primaryKeyword: "Fair Trade Spice Farming",
    secondaryKeywords: ["Empowering Spice Farmers", "Sustainable Agriculture India", "Women in Agriculture Meghalaya"],
    searchIntent: "Informational",
    buyerPersona: ["Sustainability Officers", "Brand Managers"],
    countryTargeting: ["Global"]
  },
  industries: {
    primaryKeyword: "Organic Spices for Food Manufacturing",
    secondaryKeywords: ["Spices for Retailers", "Bulk Spices for Supermarkets", "Wholesale Spices for Distributors"],
    searchIntent: "Commercial",
    buyerPersona: ["Food Manufacturers", "Supermarket Buyers", "Distributors"],
    countryTargeting: ["Global"]
  },
  contact: {
    primaryKeyword: "Contact AMROOT Organics",
    secondaryKeywords: ["Bulk Spice Inquiry", "Organic Spices Supplier Contact", "Request Quote Organic Spices"],
    searchIntent: "Transactional",
    buyerPersona: ["Importers", "Wholesalers", "Procurement Managers"],
    countryTargeting: ["Global"]
  }
};
