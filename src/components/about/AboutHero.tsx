"use client";

import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-brand-charcoal overflow-hidden pt-20">
      {/* Background Graphic / Texture (Placeholder) */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-green/40 via-brand-charcoal to-brand-charcoal pointer-events-none" />

      <div className="relative z-10 w-full px-6 lg:px-12 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-pink font-sans font-medium uppercase tracking-[0.2em] mb-6 block"
        >
          Our Story
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-white leading-tight max-w-5xl"
        >
          Rooted in purity. <br />
          <span className="text-brand-beige italic font-light">Scaled for the world.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-brand-white/70 text-lg md:text-xl max-w-2xl font-light"
        >
          Amroot Organics was founded on a simple premise: the world's finest ingredients shouldn't be compromised by complex supply chains.
        </motion.p>
      </div>
    </section>
  );
}
