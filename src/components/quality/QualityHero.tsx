"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function QualityHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-charcoal text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/20 rounded-bl-[100px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-beige/5 rounded-tr-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20"
          >
            <Sparkles className="w-8 h-8 text-brand-green" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight mb-8"
          >
            Purity Through <br />
            <span className="text-brand-green italic font-light">Precision.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/70 leading-relaxed font-light mb-12 max-w-3xl"
          >
            At Amroot Organics, quality is not just a standard—it's a physical reality. From rigorous optical sorting to advanced metal detection, every batch undergoes a meticulous processing journey to ensure absolutely pure, potent, and safe ingredients.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="px-6 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-sm font-semibold tracking-wide uppercase">
                Zero Compromise
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
