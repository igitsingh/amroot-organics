"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download, Building2, Store, Tags, Factory } from "lucide-react";
import { generateImageAlt, generateImageTitle } from "@/lib/seo/image";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-0 bg-[#FAF8F5] flex flex-col justify-center overflow-hidden">
      
      {/* Image Background - Defines Section Height on Desktop */}
      <div className="absolute lg:relative inset-0 lg:inset-auto w-full h-full lg:h-auto z-0 lg:-mt-[4%] lg:-mb-[1%]">
        <img
          src="/mockups/FULL PRODUCTS HERO IMAGE_FULL.png"
          alt={generateImageAlt("hero")}
          title={generateImageTitle("hero")}
          className="w-full h-full lg:h-auto object-cover"
        />
      </div>

      {/* Main Content Overlay */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none flex flex-col items-center pt-24 lg:pt-32">
        
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-sans text-xs uppercase tracking-[0.2em] text-brand-green font-bold mb-6 block"
        >
          B2B Procurement & Wholesale
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-brand-charcoal leading-[1.1] mb-8"
        >
          Premium Single-Origin Indian Spices For <span className="italic">Global Brands.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-sans text-base sm:text-lg lg:text-xl text-brand-charcoal/70 max-w-3xl leading-relaxed mb-12"
        >
          Export-ready turmeric and ginger sourced from Meghalaya and supplied to importers, manufacturers, distributors and private-label brands worldwide.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pointer-events-auto"
        >
          <Link
            href="/download-center"
            className="group flex justify-center items-center gap-3 bg-brand-charcoal text-brand-white px-8 py-4 rounded-full font-sans text-sm tracking-wide shadow-xl hover:bg-brand-green transition-all duration-300"
          >
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Request Product Specifications
          </Link>
          <Link
            href="/contact"
            className="group flex justify-center items-center gap-3 bg-white text-brand-charcoal border border-brand-charcoal/20 px-8 py-4 rounded-full font-sans text-sm tracking-wide shadow-sm hover:bg-brand-beige transition-all duration-300"
          >
            Request Export Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>

      {/* Trusted By Banner (Bottom of Hero) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="w-full mt-auto border-t border-brand-charcoal/10 bg-white/50 backdrop-blur-md py-6 z-10 absolute bottom-0 left-0 pointer-events-auto"
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-16">
          <span className="font-sans text-xs uppercase tracking-widest text-brand-charcoal/40 font-bold whitespace-nowrap">
            Trusted By
          </span>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
            <div className="flex items-center gap-2 text-brand-charcoal/60 hover:text-brand-charcoal transition-colors">
              <GlobeIcon className="w-4 h-4" />
              <span className="font-sans text-sm font-medium tracking-wide">Importers</span>
            </div>
            <div className="flex items-center gap-2 text-brand-charcoal/60 hover:text-brand-charcoal transition-colors">
              <Factory className="w-4 h-4" />
              <span className="font-sans text-sm font-medium tracking-wide">Manufacturers</span>
            </div>
            <div className="flex items-center gap-2 text-brand-charcoal/60 hover:text-brand-charcoal transition-colors">
              <Store className="w-4 h-4" />
              <span className="font-sans text-sm font-medium tracking-wide">Retailers</span>
            </div>
            <div className="flex items-center gap-2 text-brand-charcoal/60 hover:text-brand-charcoal transition-colors">
              <Tags className="w-4 h-4" />
              <span className="font-sans text-sm font-medium tracking-wide">Private Label Brands</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

// Custom simple globe icon to avoid importing extra lucide icons if unnecessary, or just use one
function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      <path d="M2 12h20" />
    </svg>
  );
}
