"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProductSpecTable } from "./ProductSpecTable";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";
import { b2bProducts } from "@/lib/data/products";

export function ProductsCatalog({ initialActiveProduct }: { initialActiveProduct?: string }) {
  useEffect(() => {
    if (initialActiveProduct) {
      const el = document.getElementById(initialActiveProduct);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [initialActiveProduct]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen pb-32">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 text-center">
        <motion.p 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-brand-green uppercase tracking-[0.2em] text-sm font-bold mb-6"
        >
          The Amroot Collection
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-serif text-brand-charcoal mb-8"
        >
          Uncompromising Purity
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-brand-charcoal/70 leading-relaxed"
        >
          Sourced from the rarest soils of India, meticulously processed, and packaged for the world's most discerning brands and households.
        </motion.p>
      </div>

      {/* 1KG+ Category */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
        <div className="border-b border-brand-charcoal/20 pb-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-3">1KG & Bulk Portfolio</h2>
          <p className="text-brand-charcoal/60 uppercase tracking-widest text-sm font-medium">For Wholesalers • Importers • Distributors • Retailers</p>
        </div>

        <div className="space-y-32">
          {b2bProducts.map((product, idx) => (
            <div id={product.id} key={product.id} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-start scroll-mt-32`}>
              
              {/* Image Section */}
              <div className="w-full lg:w-1/2 lg:sticky top-32">
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden bg-gradient-to-b from-[#F4EFE6] to-white shadow-xl border border-white/50 group flex items-center justify-center p-8 lg:p-12">
                  <div className="absolute inset-0 w-full h-full">
                    <Image
                      src={product.images ? product.images[0] : product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-12 drop-shadow-2xl group-hover:scale-105 transition-transform duration-1000 ease-out"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  {/* Subtle Luxury Badges */}
                  <div className="absolute top-8 left-8 flex flex-col gap-2">
                    <span className="bg-brand-charcoal text-white text-xs px-4 py-1.5 rounded-full tracking-widest uppercase font-medium shadow-md">1 KG+</span>
                    <span className="bg-brand-green text-white text-xs px-4 py-1.5 rounded-full tracking-widest uppercase font-medium shadow-md">Export Grade</span>
                  </div>
                </div>
                
                {/* Secondary Images/Thumbnails */}
                {product.images && product.images.length > 1 && (
                  <div className="flex gap-4 mt-6">
                    <div className="w-20 h-20 rounded-2xl bg-white border border-brand-charcoal/10 relative overflow-hidden flex items-center justify-center p-2 shadow-sm">
                       <Image src={product.images[0]} alt="Front" fill className="object-contain p-2" />
                    </div>
                    {product.images[1] && product.images[1].includes("BACK") && (
                      <div className="w-20 h-20 rounded-2xl bg-white border border-brand-charcoal/10 relative overflow-hidden flex items-center justify-center p-2 shadow-sm">
                         <Image src={product.images[1]} alt="Back" fill className="object-contain p-2" />
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Details Section */}
              <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-8">
                <ProductSpecTable product={product} />
                
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Link href="/request-samples" className="bg-brand-green text-white px-8 py-4 rounded-full font-medium hover:bg-brand-green/90 transition-colors flex items-center gap-2 shadow-lg shadow-brand-green/20">
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                  <button className="flex items-center gap-2 px-8 py-4 border border-brand-charcoal/20 rounded-full font-medium text-brand-charcoal hover:bg-white transition-colors shadow-sm">
                    <Download className="w-4 h-4" /> Tech Data Sheet
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* 500G Category */}
      <div className="bg-brand-yellow py-32 text-brand-charcoal border-y border-brand-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border-b border-brand-charcoal/20 pb-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-green mb-3">500gms Collection</h2>
              <p className="text-brand-charcoal/60 uppercase tracking-widest text-sm font-medium">For Wholesalers • Importers • Distributors • Retailers</p>
            </div>
            <div className="bg-brand-charcoal/5 backdrop-blur-md border border-brand-charcoal/10 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-charcoal shrink-0 shadow-sm">
              Coming Soon
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {b2bProducts.map((product) => (
              <div key={product.id} className="group relative rounded-[2rem] bg-white/50 border border-brand-charcoal/10 overflow-hidden aspect-[3/4] flex flex-col items-center justify-center p-8 hover:bg-white/80 transition-all duration-500 cursor-not-allowed shadow-lg">
                <div className="absolute inset-0 bg-white/40 z-10 group-hover:bg-white/60 backdrop-blur-[2px] transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                  <span className="bg-brand-charcoal backdrop-blur-md text-white px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-bold shadow-xl border border-brand-charcoal/20">Coming Soon</span>
                </div>
                
                <div className="relative w-full h-full z-0">
                  <Image
                    src={product.images && product.images[3] ? product.images[3] : product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-xl opacity-90 group-hover:opacity-70 transition-opacity duration-500"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-20 text-center pointer-events-none">
                  <h3 className="font-serif text-lg text-brand-charcoal mb-1">{product.name}</h3>
                  <p className="text-[10px] text-brand-green uppercase tracking-widest font-bold">500 gms</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 250G Category */}
      <div className="bg-brand-green py-32 text-brand-beige">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="border-b border-brand-beige/20 pb-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-brand-beige mb-3">250gms Collection</h2>
              <p className="text-brand-beige/70 uppercase tracking-widest text-sm font-medium">Direct to Customers</p>
            </div>
            <div className="bg-brand-beige/10 border border-brand-beige/20 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] text-brand-beige shrink-0 shadow-sm">
              Coming Soon
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {b2bProducts.map((product) => (
              <div key={product.id} className="group relative rounded-[2rem] bg-white/10 border border-white/10 overflow-hidden aspect-[3/4] flex flex-col items-center justify-center p-8 hover:bg-white/15 transition-all duration-500 cursor-not-allowed shadow-2xl">
                <div className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/60 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-95 group-hover:scale-100">
                  <span className="bg-brand-beige text-brand-charcoal px-6 py-3 rounded-full text-xs tracking-[0.2em] uppercase font-bold shadow-2xl">Coming Soon</span>
                </div>
                
                <div className="relative w-full h-full z-0 opacity-90 group-hover:opacity-70 transition-opacity duration-500">
                  <Image
                    src={product.images && product.images[2] ? product.images[2] : product.image}
                    alt={product.name}
                    fill
                    className="object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]"
                  />
                </div>
                <div className="absolute bottom-6 left-6 right-6 z-20 text-center pointer-events-none">
                  <h3 className="font-serif text-lg text-brand-beige mb-1">{product.name}</h3>
                  <p className="text-[10px] text-brand-pink uppercase tracking-widest font-bold">250 gms</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}
