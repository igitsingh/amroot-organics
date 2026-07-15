"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function QualityCommitment() {
  return (
    <section className="py-24 bg-[#F4D03F] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        
        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6 leading-tight">
              A Guarantee <br /> We Stand By.
            </h2>
            <p className="text-lg text-brand-charcoal/80 mb-8 leading-relaxed max-w-lg">
              Amroot Organics was founded on the principle that true health begins at the root. We do not aggregate blindly; we monitor our partner farms, control the harvest, and oversee the processing in our dedicated facilities. 
            </p>
            <p className="text-lg text-brand-charcoal/80 mb-8 leading-relaxed max-w-lg">
              When you order a metric ton of our turmeric or ginger, you receive a product that matches the sample exactly. Uniform color, consistent mesh size, and verified potency.
            </p>

            <div className="flex gap-4">
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-brand-charcoal/10 flex-1">
                <div className="text-4xl font-serif text-brand-charcoal mb-2">100%</div>
                <div className="text-sm font-semibold tracking-wide uppercase text-brand-charcoal/70">Traceable</div>
              </div>
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-brand-charcoal/10 flex-1">
                <div className="text-4xl font-serif text-brand-charcoal mb-2">0%</div>
                <div className="text-sm font-semibold tracking-wide uppercase text-brand-charcoal/70">Adulteration</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual / Image */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/mockups/1kg/PREMIUM TURMERIC - 1KG - WITHOUT BG.png" 
              alt="Premium Quality Turmeric" 
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-brand-green/20 mix-blend-overlay" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
