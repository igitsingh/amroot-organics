"use client";

import { motion } from "framer-motion";

export function TheTerroir() {
  return (
    <section className="w-full bg-brand-beige/30 py-24 lg:py-40 overflow-hidden">
      <div className="w-full px-6 lg:px-12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-brand-pink font-sans font-medium uppercase tracking-[0.2em] mb-4 block text-sm">
                The Science of Soil
              </span>
              <h2 className="font-serif text-4xl lg:text-6xl text-brand-charcoal mb-8 leading-tight">
                Meghalaya & <span className="text-brand-green italic">Kerala</span>
              </h2>
              
              <div className="space-y-6 text-brand-charcoal/70 text-lg font-light leading-relaxed">
                <p>
                  Not all soil is created equal. The renowned Lakadong turmeric derives its exceptional high-curcumin content directly from the unique topography, high rainfall, and mineral-rich soils of the Jaintia Hills in Meghalaya.
                </p>
                <p>
                  Similarly, the spice estates of Kerala provide the perfect blend of humidity and elevation required to produce ginger with unparalleled volatile oil content. It's a delicate balance of geography and climate that cannot be replicated anywhere else in the world.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Visual Content */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/5] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-brand-charcoal/10 mix-blend-multiply z-10" />
              {/* Replace with an actual image in the future */}
              <div className="absolute inset-0 bg-brand-white flex items-center justify-center border border-brand-charcoal/10">
                 <span className="text-brand-charcoal/30 font-serif text-2xl text-center px-4">
                   Lush Hills of Meghalaya<br/>Visual Placeholder
                 </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
