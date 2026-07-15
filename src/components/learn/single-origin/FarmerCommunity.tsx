"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FarmerCommunity() {
  return (
    <section className="py-24 bg-brand-charcoal text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/mockups/texture.png')] opacity-10 mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl bg-brand-green/20"
          >
            {/* Using a placeholder for now - the client can replace with an actual farm image */}
            <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-white/50 border-2 border-dashed border-white/20 rounded-[3rem] m-4">
              <span className="font-serif italic text-xl">Farm / Community Image</span>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-1/2">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              Ethical Partnerships. <br />
              <span className="text-brand-green italic font-light">Sustainable Growth.</span>
            </h2>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              We work directly with indigenous farming cooperatives in Meghalaya. By eliminating middlemen, we ensure that the farmers receive fair compensation for their labor and ancestral knowledge.
            </p>
            <p className="text-lg text-white/70 mb-8 leading-relaxed">
              This direct relationship allows us to implement stringent organic farming practices at the root level, providing our B2B partners with ingredients that are not only pure but ethically sourced.
            </p>

            <ul className="space-y-4">
              {[
                "Direct Trade Verification",
                "Fair Compensation Guarantee",
                "Sustainable Harvesting Training",
                "Women-led Farming Cooperatives"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-green" />
                  <span className="text-white/90 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
