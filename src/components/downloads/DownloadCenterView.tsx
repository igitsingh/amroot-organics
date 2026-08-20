"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, ArrowRight, Beaker, FileCheck } from "lucide-react";
import Link from "next/link";

const PRODUCTS_DATA = {
  "lakadong-turmeric": {
    name: "Lakadong Turmeric",
    subtitle: "Premium Single-Origin",
    specs: [
      { label: "Origin", value: "Jaintia Hills, Meghalaya, India" },
      { label: "Curcumin Range", value: "7.0% - 9.0% (HPLC method)" },
      { label: "Mesh Sizes", value: "60, 80, 100 Mesh" },
      { label: "Moisture", value: "< 10%" },
      { label: "Packaging Options", value: "25kg Kraft Paper Bags with double PE Liner" },
      { label: "MOQ", value: "100 KG" },
      { label: "Lead Time", value: "14-21 Days (Air) / 45-60 Days (Sea)" },
      { label: "Storage Conditions", value: "Cool, dry place away from direct sunlight" },
      { label: "Shelf Life", value: "24 Months from manufacturing date" },
    ],
    documents: [
      "Technical Data Sheet (TDS)",
      "Material Safety Data Sheet (MSDS)",
      "Certificate of Analysis (COA) - Batch Specific",
      "Organic Certificate (NPOP/NOP)",
      "Phytosanitary Certificate",
    ]
  },
  "jaintia-hills-ginger": {
    name: "Jaintia Hills Ginger",
    subtitle: "High-Volatile Oil Origin",
    specs: [
      { label: "Origin", value: "Jaintia Hills, Meghalaya, India" },
      { label: "Gingerol Range", value: "1.5% - 2.5%" },
      { label: "Mesh Sizes", value: "60, 80 Mesh" },
      { label: "Moisture", value: "< 12%" },
      { label: "Packaging Options", value: "25kg Kraft Paper Bags with double PE Liner" },
      { label: "MOQ", value: "100 KG" },
      { label: "Lead Time", value: "14-21 Days (Air) / 45-60 Days (Sea)" },
      { label: "Storage Conditions", value: "Cool, dry place away from direct sunlight" },
      { label: "Shelf Life", value: "24 Months from manufacturing date" },
    ],
    documents: [
      "Technical Data Sheet (TDS)",
      "Material Safety Data Sheet (MSDS)",
      "Certificate of Analysis (COA) - Batch Specific",
      "Organic Certificate (NPOP/NOP)",
      "Phytosanitary Certificate",
    ]
  }
};

type ProductId = keyof typeof PRODUCTS_DATA;

export function DownloadCenterView() {
  const [activeTab, setActiveTab] = useState<ProductId>("lakadong-turmeric");

  const product = PRODUCTS_DATA[activeTab];

  return (
    <div className="min-h-screen bg-brand-white pt-32 pb-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="mb-16">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-brand-charcoal/60 mb-4 block">
            B2B Procurement
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal mb-6">
            Download Center
          </h1>
          <p className="font-sans text-brand-charcoal/70 max-w-2xl leading-relaxed">
            Access detailed technical specifications, certifications, and compliance documentation for our premium single-origin exports.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Sidebar Navigation */}
          <div className="w-full lg:w-1/4 shrink-0 flex flex-col gap-2 border-b lg:border-b-0 lg:border-r border-brand-charcoal/10 pb-8 lg:pb-0 lg:pr-8">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-brand-charcoal/40 mb-4">
              Select Product
            </h3>
            {(Object.keys(PRODUCTS_DATA) as ProductId[]).map((id) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`text-left px-4 py-3 rounded-xl transition-all duration-300 font-medium font-sans text-sm ${
                  activeTab === id 
                    ? "bg-brand-charcoal text-brand-white shadow-lg" 
                    : "text-brand-charcoal/60 hover:bg-brand-beige hover:text-brand-charcoal"
                }`}
              >
                {PRODUCTS_DATA[id].name}
              </button>
            ))}
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                <div className="mb-12 border-b border-brand-charcoal/10 pb-8">
                  <h2 className="font-serif text-3xl lg:text-4xl text-brand-charcoal mb-2">
                    {product.name}
                  </h2>
                  <p className="font-sans text-brand-green font-medium uppercase tracking-widest text-xs">
                    {product.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                  
                  {/* Specifications */}
                  <div>
                    <h3 className="font-serif text-xl text-brand-charcoal mb-6 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-brand-charcoal/50" /> 
                      Product Specifications
                    </h3>
                    <ul className="flex flex-col border-t border-brand-charcoal/10">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-brand-charcoal/10 gap-2 sm:gap-6">
                          <span className="font-sans text-xs uppercase tracking-wider text-brand-charcoal/50 w-40 shrink-0 font-bold">
                            {spec.label}
                          </span>
                          <span className="font-sans text-sm font-medium text-brand-charcoal">
                            {spec.value}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Documentation Available */}
                  <div>
                    <h3 className="font-serif text-xl text-brand-charcoal mb-6 flex items-center gap-2">
                      <FileCheck className="w-5 h-5 text-brand-charcoal/50" /> 
                      Documentation Available
                    </h3>
                    <div className="bg-brand-beige/30 rounded-2xl p-6 border border-brand-charcoal/5">
                      <ul className="flex flex-col gap-4">
                        {product.documents.map((doc, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-green/40" />
                            <span className="font-sans text-sm text-brand-charcoal/80">
                              {doc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 flex items-center justify-center gap-3 bg-brand-charcoal text-brand-white py-4 px-6 rounded-full font-sans text-sm hover:bg-brand-green transition-colors shadow-xl group">
                    <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    Download Specification Sheet
                  </button>
                  <Link href="/contact" className="flex-1 flex items-center justify-center gap-3 bg-brand-beige text-brand-charcoal py-4 px-6 rounded-full font-sans text-sm hover:bg-brand-green hover:text-brand-white transition-colors group border border-brand-charcoal/10">
                    <Beaker className="w-4 h-4" />
                    Request Sample
                  </Link>
                  <Link href="/contact" className="flex-1 flex items-center justify-center gap-3 bg-white text-brand-charcoal border border-brand-charcoal/20 py-4 px-6 rounded-full font-sans text-sm hover:bg-brand-beige transition-colors group">
                    <FileCheck className="w-4 h-4" />
                    Request COA
                  </Link>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
