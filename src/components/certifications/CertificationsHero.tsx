"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export function CertificationsHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-brand-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-beige/30 rounded-bl-[100px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-green/5 rounded-tr-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center justify-center w-16 h-16 rounded-full bg-brand-green/10 border border-brand-green/20"
          >
            <ShieldCheck className="w-8 h-8 text-brand-green" />
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-charcoal leading-tight mb-8"
          >
            Uncompromising Quality. <br />
            <span className="text-brand-green italic font-light">Global Compliance.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-brand-charcoal/70 leading-relaxed font-light mb-12 max-w-3xl"
          >
            Exporting premium botanical ingredients requires absolute certainty. Amroot Organics adheres to the world's most stringent food safety, organic, and ethical standards, ensuring seamless customs clearance and product safety for importers across the US, EU, and UAE.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="px-6 py-2 rounded-full border border-brand-charcoal/10 bg-white shadow-sm inline-flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              <span className="text-sm font-semibold tracking-wide text-brand-charcoal uppercase">
                100% Export Ready
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
