"use client";

import { motion } from "framer-motion";
import { Leaf, Droplets, Sun, Sprout } from "lucide-react";

const PRACTICES = [
  {
    icon: Leaf,
    title: "100% Organic Certified",
    description: "Our partner farms strictly avoid synthetic pesticides, fertilizers, and GMOs, maintaining the absolute purity of the crop."
  },
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Advanced irrigation techniques and rainwater harvesting ensure sustainable water usage across all agricultural zones."
  },
  {
    icon: Sprout,
    title: "Crop Rotation",
    description: "Natural soil health is preserved through traditional crop rotation, naturally replenishing vital nutrients cycle after cycle."
  },
  {
    icon: Sun,
    title: "Solar Drying",
    description: "Gentle, natural solar drying methods protect the volatile oils and active compounds from degradation."
  }
];

export function FarmingPractices() {
  return (
    <section className="py-24 lg:py-40 bg-brand-white relative overflow-hidden">
      <div className="w-full px-6 lg:px-12 mx-auto">
        
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl lg:text-5xl text-brand-charcoal mb-6 leading-tight"
          >
            Cultivated with <span className="text-brand-green italic">Conscience.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-charcoal/70 text-lg lg:text-xl font-light leading-relaxed"
          >
            We don't just extract from the land; we nurture it. Our network of partner farmers 
            employ sustainable, traditional methods elevated by modern agronomy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PRACTICES.map((practice, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-brand-beige/20 p-8 lg:p-10 rounded-3xl border border-brand-charcoal/5 hover:border-brand-pink/30 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-8 group-hover:bg-brand-pink/10 group-hover:text-brand-pink transition-colors duration-300">
                <practice.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-2xl text-brand-charcoal mb-4 group-hover:text-brand-green transition-colors duration-300">
                {practice.title}
              </h3>
              <p className="text-brand-charcoal/70 font-light leading-relaxed">
                {practice.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
