"use client";

import { motion } from "framer-motion";
import { PackageOpen } from "lucide-react";

export function ApplicationsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-charcoal text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F4D03F]/20 rounded-bl-[100px] blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-orange/20 rounded-tr-[100px] blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm"
          >
            <PackageOpen className="w-8 h-8 text-[#F4D03F]" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight mb-8"
          >
            Formulate with <br />
            <span className="text-[#F4D03F] italic font-light">Confidence.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-12 max-w-3xl"
          >
            From high-absorption nutraceuticals to premium culinary blends and organic cosmetics, our potent botanical extracts provide the foundation for industry-leading products.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
