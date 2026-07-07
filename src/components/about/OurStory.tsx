"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function OurStory() {
  return (
    <section className="w-full bg-brand-white py-24 lg:py-32 overflow-hidden">
      <div className="w-full px-6 lg:px-12 mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl lg:text-5xl text-brand-charcoal mb-8 leading-tight">
                From the soil of India to the <span className="text-brand-green italic">shelves of the world.</span>
              </h2>
              
              <div className="space-y-6 text-brand-charcoal/70 text-lg font-light leading-relaxed">
                <p>
                  Amroot Organics began with a profound respect for traditional agriculture and a clear vision for the future of global supply chains. We recognized that the journey from farm to factory was often opaque, leading to inconsistent quality and disconnected partnerships.
                </p>
                <p>
                  By forging direct relationships with generations of farmers across India's most fertile regions, we've built a traceable, vertically integrated network. We don't just source ingredients; we cultivate partnerships.
                </p>
                <p>
                  Today, we stand as a trusted partner for global food manufacturers, wellness brands, and importers who demand uncompromising purity, standardized active compounds, and absolute transparency.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Visual Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-brand-green/20 mix-blend-multiply z-10" />
              {/* Replace with an actual image in the future */}
              <div className="absolute inset-0 bg-brand-beige flex items-center justify-center">
                 <span className="text-brand-charcoal/30 font-serif text-2xl">Farm/Processing Visual</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
