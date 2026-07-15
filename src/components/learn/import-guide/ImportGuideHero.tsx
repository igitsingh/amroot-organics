"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";

export function ImportGuideHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-charcoal text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#3498DB]/20 rounded-bl-[100px] blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-green/20 rounded-tr-[100px] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
          >
            <Globe className="w-8 h-8 text-[#3498DB]" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight mb-8"
          >
            Global Imports <br />
            <span className="text-[#3498DB] italic font-light">Made Simple.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-12 max-w-3xl"
          >
            Navigating international logistics and customs for agricultural commodities can be daunting. We provide end-to-end documentation, phytosanitary certificates, and seamless CIF/FOB logistics for our B2B partners across the US, EU, and UAE.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
