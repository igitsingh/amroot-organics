"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ProductSpecTable } from "./ProductSpecTable";
import { ArrowRight, Download, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { b2bProducts } from "@/lib/data/products";

export function ProductsCatalog({ initialActiveProduct }: { initialActiveProduct?: string }) {
  const [activeProduct, setActiveProduct] = useState<string>(
    initialActiveProduct || b2bProducts[0].id
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
                onClick={() => {
                  setActiveProduct(product.id);
                  setActiveImageIndex(0);
                }}
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
                    <div className="flex flex-col gap-4">
                      {/* Main Image */}
                      <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-[2.5rem] overflow-hidden bg-gradient-to-b from-white to-[#F4EFE6]/50 shadow-sm border border-white/60 flex items-center justify-center p-8 sm:p-12">
                        <div className="relative w-full h-full">
                          <Image
                            src={product.images ? product.images[activeImageIndex] : product.image}
                            alt={product.name}
                            fill
                            className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
                            sizes="(max-width: 1024px) 100vw, 66vw"
                            priority
                          />
                        </div>
                      </div>
                      
                      {/* Thumbnails */}
                      {product.images && product.images.length > 1 && (
                        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 no-scrollbar">
                          {product.images.map((img, idx) => (
                            <button 
                              key={idx} 
                              onClick={() => setActiveImageIndex(idx)}
                              className={`snap-start shrink-0 relative w-24 h-24 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-white shadow-sm border flex items-center justify-center p-3 transition-all ${activeImageIndex === idx ? 'border-brand-green ring-2 ring-brand-green/20' : 'border-brand-charcoal/10 hover:border-brand-charcoal/30'}`}
                            >
                              <Image
                                src={img}
                                alt={`${product.name} view ${idx + 1}`}
                                fill
                                className="object-contain hover:scale-110 transition-transform duration-300"
                                sizes="128px"
                              />
                            </button>
                          ))}
                        </div>
                      )}
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
