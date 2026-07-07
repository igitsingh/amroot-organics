"use client";

import { motion } from "framer-motion";

export function OriginHero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center bg-brand-charcoal overflow-hidden pt-20">
      {/* Background Graphic / Texture (Placeholder for Farm Image) */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay bg-brand-green">
        {/* We would place a beautiful full-bleed image/video of Meghalaya or Kerala here */}
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-beige/20 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 w-full px-6 lg:px-12 flex flex-col items-center text-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-brand-pink font-sans font-medium uppercase tracking-[0.2em] mb-6 block"
        >
          Our Terroir
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-white leading-tight max-w-5xl"
        >
          Born in the soil.<br />
          <span className="text-brand-green italic font-light">Forged by climate.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-brand-white/80 text-lg md:text-xl max-w-2xl font-light leading-relaxed"
        >
          True potency cannot be engineered; it must be grown. Discover the specific Indian microclimates that give Amroot Organics its unparalleled active compound concentrations.
        </motion.p>
      </div>
    </section>
  );
}
