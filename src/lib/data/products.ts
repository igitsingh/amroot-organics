import { B2BProduct } from "@/components/products/ProductSpecTable";

export const b2bProducts: B2BProduct[] = [
  {
    id: "lakadong-turmeric",
    name: "Premium Lakadong Turmeric",
    origin: "Meghalaya, India",
    botanicalName: "Curcuma longa",
    hsCode: "0910.30.20",
    description: "Sourced directly from the pristine hills of Meghalaya, Lakadong Turmeric is globally renowned for its exceptionally high curcumin content, offering superior potency, vibrant color, and robust flavor profile ideal for premium nutraceutical and culinary applications.",
    image: "/mockups/1kg/PREMIUM TURMERIC - 1KG - WITHOUT BG.png",
    images: [
      "/mockups/1kg/PREMIUM TURMERIC - 1KG - WITHOUT BG.png",
      "/mockups/1kg/BACK%20SIDE/PREMIUM TURMERIC - 1KG - BACK SIDE - WITHOUT BG.png",
      "/mockups/250gms/PREMIUM LAKADONG TURMERIC - 250G - WITHOUT BG.png"
    ],
    specifications: [
      {
        category: "Technical Specifications",
        items: [
          { label: "Curcumin Content", value: "7.0% - 9.0% (HPLC)" },
          { label: "Moisture", value: "< 10%" },
          { label: "Total Ash", value: "< 7%" },
          { label: "Acid Insoluble Ash", value: "< 1.5%" },
          { label: "Particle Size", value: "100% passes 60-80 Mesh" },
          { label: "Form", value: "Fine Powder / Whole Fingers" },
        ]
      },
      {
        category: "Certifications & Compliance",
        items: [
          { label: "Quality Standards", value: "ISO 22000:2018, GMP" },
          { label: "Safety", value: "FSSAI, Heavy Metal Compliant" },
          { label: "Dietary", value: "Non-GMO, Halal, Kosher" },
          { label: "Testing", value: "Batch-wise COA Available" },
        ]
      },
      {
        category: "Packaging & Logistics",
        items: [
          { label: "Standard Packing", value: "25kg Multi-wall Kraft Bags with PE Liner" },
          { label: "Minimum Order (MOQ)", value: "1 KG" },
          { label: "Shelf Life", value: "24 Months" },
          { label: "Port of Loading", value: "Nhava Sheva / Kolkata, India" },
          { label: "Container Capacity", value: "18 MT per 20ft FCL" },
        ]
      }
    ]
  },
  {
    id: "organic-turmeric",
    name: "Certified Organic Turmeric",
    origin: "India",
    botanicalName: "Curcuma longa",
    hsCode: "0910.30.20",
    description: "100% Certified Organic Turmeric cultivated using traditional, sustainable farming practices without synthetic fertilizers or pesticides. Clean, traceable, and perfect for health-conscious global brands.",
    image: "/mockups/1kg/ORGANIC TURMERIC - 1KG - WITHOUT BG.png",
    images: [
      "/mockups/1kg/ORGANIC TURMERIC - 1KG - WITHOUT BG.png",
      "/mockups/1kg/BACK%20SIDE/ORGANIC TURMERIC - 1KG - BACK SIDE - WITHOUT BG.png",
      "/mockups/250gms/ORGANIC TURMERIC - 250G - WITHOUT BG.png"
    ],
    specifications: [
      {
        category: "Technical Specifications",
        items: [
          { label: "Curcumin Content", value: "3.0% - 5.0% (HPLC)" },
          { label: "Moisture", value: "< 10%" },
          { label: "Total Ash", value: "< 7%" },
          { label: "Pesticide Residue", value: "Not Detected (Limit of Quantification)" },
          { label: "Particle Size", value: "100% passes 60-80 Mesh" },
          { label: "Form", value: "Fine Powder / Whole Fingers" },
        ]
      },
      {
        category: "Certifications & Compliance",
        items: [
          { label: "Organic Certification", value: "NPOP (India), NOP (USDA), EU Organic" },
          { label: "Quality Standards", value: "ISO 22000:2018, GMP" },
          { label: "Dietary", value: "Non-GMO, Halal, Kosher" },
          { label: "Testing", value: "Eurofins / SGS Tested COA" },
        ]
      },
      {
        category: "Packaging & Logistics",
        items: [
          { label: "Standard Packing", value: "25kg Multi-wall Kraft Bags with PE Liner" },
          { label: "Minimum Order (MOQ)", value: "1 KG" },
          { label: "Shelf Life", value: "24 Months" },
          { label: "Port of Loading", value: "Nhava Sheva, India" },
          { label: "Container Capacity", value: "18 MT per 20ft FCL" },
        ]
      }
    ]
  },
  {
    id: "premium-ginger",
    name: "Premium Indian Ginger",
    origin: "India",
    botanicalName: "Zingiber officinale",
    hsCode: "0910.11.10",
    description: "High-quality, expertly dried and processed ginger sourced from select Indian farms. Known for its strong aroma, pungent flavor, and excellent functional properties for food, beverage, and supplement industries.",
    image: "/mockups/1kg/PREMIUM GINGER - 1KG - WITHOUT BG.png",
    images: [
      "/mockups/1kg/PREMIUM GINGER - 1KG - WITHOUT BG.png",
      "/mockups/1kg/BACK%20SIDE/PREMIUM GINGER - 1KG - BACK SIDE - WITHOUT BG.png",
      "/mockups/250gms/PREMIUM JAINTIA HILLS GINGER - 250G - WITHOUT BG.png"
    ],
    specifications: [
      {
        category: "Technical Specifications",
        items: [
          { label: "Gingerol Content", value: "> 1.5%" },
          { label: "Moisture", value: "< 12%" },
          { label: "Total Ash", value: "< 8%" },
          { label: "Volatile Oil", value: "> 1.5% (v/w)" },
          { label: "Particle Size", value: "100% passes 40-60 Mesh" },
          { label: "Form", value: "Powder / Slices (TBC)" },
        ]
      },
      {
        category: "Certifications & Compliance",
        items: [
          { label: "Quality Standards", value: "ISO 22000:2018, GMP" },
          { label: "Safety", value: "FSSAI, Heavy Metal Compliant" },
          { label: "Dietary", value: "Non-GMO, Halal, Kosher" },
          { label: "Testing", value: "Batch-wise COA Available" },
        ]
      },
      {
        category: "Packaging & Logistics",
        items: [
          { label: "Standard Packing", value: "25kg Multi-wall Kraft Bags with PE Liner" },
          { label: "Minimum Order (MOQ)", value: "1 KG" },
          { label: "Shelf Life", value: "24 Months" },
          { label: "Port of Loading", value: "Nhava Sheva, India" },
          { label: "Container Capacity", value: "15 MT per 20ft FCL" },
        ]
      }
    ]
  },
  {
    id: "organic-ginger",
    name: "Certified Organic Ginger",
    origin: "India",
    botanicalName: "Zingiber officinale",
    hsCode: "0910.11.10",
    description: "Ethically sourced, certified organic ginger cultivated in pristine conditions. Free from synthetic residues, delivering pure flavor and optimal therapeutic benefits for premium organic product lines.",
    image: "/mockups/1kg/ORGANIC GINGER - 1KG - WITHOUT BG.png",
    images: [
      "/mockups/1kg/ORGANIC GINGER - 1KG - WITHOUT BG.png",
      "/mockups/1kg/BACK%20SIDE/ORGANIC GINGER - 1KG - BACK SIDE - WITHOUT BG.png",
      "/mockups/250gms/ORGANIC GINGER - 250G - WITHOUT BG.png"
    ],
    specifications: [
      {
        category: "Technical Specifications",
        items: [
          { label: "Gingerol Content", value: "> 1.5%" },
          { label: "Moisture", value: "< 12%" },
          { label: "Total Ash", value: "< 8%" },
          { label: "Pesticide Residue", value: "Not Detected" },
          { label: "Particle Size", value: "100% passes 40-60 Mesh" },
          { label: "Form", value: "Powder / Slices (TBC)" },
        ]
      },
      {
        category: "Certifications & Compliance",
        items: [
          { label: "Organic Certification", value: "NPOP (India), NOP (USDA), EU Organic" },
          { label: "Quality Standards", value: "ISO 22000:2018, GMP" },
          { label: "Dietary", value: "Non-GMO, Halal, Kosher" },
          { label: "Testing", value: "Eurofins / SGS Tested COA" },
        ]
      },
      {
        category: "Packaging & Logistics",
        items: [
          { label: "Standard Packing", value: "25kg Multi-wall Kraft Bags with PE Liner" },
          { label: "Minimum Order (MOQ)", value: "1 KG" },
          { label: "Shelf Life", value: "24 Months" },
          { label: "Port of Loading", value: "Nhava Sheva, India" },
          { label: "Container Capacity", value: "15 MT per 20ft FCL" },
        ]
      }
    ]
  }
];
