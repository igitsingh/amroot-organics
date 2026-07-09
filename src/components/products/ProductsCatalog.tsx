"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProductSpecTable, B2BProduct } from "./ProductSpecTable";
import { ArrowRight, Download, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const b2bProducts: B2BProduct[] = [
  {
    id: "lakadong-turmeric",
    name: "Premium Lakadong Turmeric",
    origin: "Meghalaya, India",
    botanicalName: "Curcuma longa",
    hsCode: "0910.30.20",
    description: "Sourced directly from the pristine hills of Meghalaya, Lakadong Turmeric is globally renowned for its exceptionally high curcumin content, offering superior potency, vibrant color, and robust flavor profile ideal for premium nutraceutical and culinary applications.",
    image: "/mockups/amroot_Premium LakadongTurmeric - Doypack 1KG_TEMP01.png",
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
    image: "/mockups/amroot_OrganicTurmeric - Doypack 1KG_TEMP01.png",
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
    image: "/mockups/amroot_PremiumGinger - Doypack 1KG_TEMP01.png",
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
    image: "/mockups/amroot_OrganicGinger - Doypack 1KG_TEMP01.png",
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

export function ProductsCatalog() {
  const [activeProduct, setActiveProduct] = useState<string>(b2bProducts[0].id);

  return (
    <div className="bg-[#FAF8F5] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-sm font-bold text-brand-green uppercase tracking-widest mb-4">
            Product Portfolio
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-charcoal mb-6">
            Export-Grade Ingredients
          </h1>
          <p className="text-lg text-brand-charcoal/70">
            Sourced responsibly from India, processed to global standards, and ready for international distribution. Explore our detailed B2B specifications below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Sidebar / Product Selection */}
          <div className="lg:w-1/3 shrink-0 flex flex-col gap-4">
            <h3 className="text-xl font-serif text-brand-charcoal mb-4">Select Product</h3>
            {b2bProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product.id)}
                className={`text-left px-6 py-5 rounded-2xl transition-all flex items-center justify-between border ${
                  activeProduct === product.id
                    ? "bg-white border-brand-green/30 shadow-md"
                    : "bg-transparent border-brand-charcoal/10 hover:border-brand-charcoal/30 hover:bg-white/50"
                }`}
              >
                <div>
                  <div className={`font-medium mb-1 ${activeProduct === product.id ? "text-brand-green" : "text-brand-charcoal"}`}>
                    {product.name}
                  </div>
                  <div className="text-xs text-brand-charcoal/60 font-mono">HS: {product.hsCode}</div>
                </div>
                {activeProduct === product.id && (
                  <CheckCircle2 className="w-5 h-5 text-brand-green" />
                )}
              </button>
            ))}

            <div className="mt-8 p-6 bg-brand-charcoal text-white rounded-2xl">
              <h4 className="font-serif text-xl mb-3">Bulk Inquiry</h4>
              <p className="text-sm text-white/70 mb-6">Need a custom specification, private labeling, or bulk pricing? Contact our export team.</p>
              <Link
                href="/request-samples"
                className="inline-flex items-center justify-center gap-2 bg-brand-orange text-white w-full py-3 rounded-full font-medium hover:bg-brand-orange/90 transition-colors text-sm"
              >
                Request Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Product Details Area */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {b2bProducts.map((product) => 
                product.id === activeProduct ? (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-8"
                  >
                    {/* Hero Image for Product */}
                    <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-white to-[#F4EFE6]/50 shadow-sm border border-white/60 flex items-center justify-center p-8 sm:p-12">
                      <div className="relative w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          priority
                        />
                      </div>
                    </div>
                    
                    {/* B2B Specs Table */}
                    <ProductSpecTable product={product} />

                    {/* Action buttons */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-brand-charcoal/10">
                      <button className="flex items-center gap-2 px-6 py-3 border border-brand-charcoal/20 rounded-full text-sm font-medium text-brand-charcoal hover:bg-white transition-colors">
                        <Download className="w-4 h-4" /> Download Tech Data Sheet
                      </button>
                      <button className="flex items-center gap-2 px-6 py-3 border border-brand-charcoal/20 rounded-full text-sm font-medium text-brand-charcoal hover:bg-white transition-colors">
                        <Download className="w-4 h-4" /> Sample COA
                      </button>
                    </div>

                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
