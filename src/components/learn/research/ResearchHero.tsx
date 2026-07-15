"use client";

import { motion } from "framer-motion";
import { Beaker } from "lucide-react";

export function ResearchHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#E2E8F0] text-brand-charcoal">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center justify-center w-16 h-16 rounded-full bg-white border border-brand-charcoal/10 shadow-sm"
          >
            <Beaker className="w-8 h-8 text-brand-charcoal" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight mb-8"
          >
            Backed by <br />
            <span className="text-brand-green italic font-light">Science.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-charcoal/70 leading-relaxed font-light mb-12 max-w-3xl"
          >
            We bridge the gap between ancient Ayurvedic wisdom and modern clinical data. Explore the peer-reviewed studies that validate the immense therapeutic potential of high-curcumin Lakadong turmeric and premium ginger extracts.
          </motion.p>

        </div>
      </div>
    </section>
  );
}
