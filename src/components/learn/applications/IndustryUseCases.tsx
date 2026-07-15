"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Pill, Coffee, Droplets } from "lucide-react";

const industries = [
  {
    icon: <Pill className="w-6 h-6 text-brand-green" />,
    title: "Nutraceuticals & Pharma",
    description: "Because of our guaranteed 7-9% curcumin content, supplement manufacturers require less raw material per capsule. Ideal for anti-inflammatory blends, immunity boosters, and Ayurvedic formulations.",
    image: "/mockups/1kg/PREMIUM TURMERIC - 1KG - WITHOUT BG.png" // Placeholder
  },
  {
    icon: <Coffee className="w-6 h-6 text-brand-orange" />,
    title: "Food & Beverage",
    description: "Our pristine extraction process leaves natural oils intact, delivering robust flavor and vibrant color. Perfect for functional teas, golden milks, spice blends, and organic snack manufacturing.",
    image: "/mockups/1kg/PREMIUM INDIAN GINGER - 1KG - WITHOUT BG.png" // Placeholder
  },
  {
    icon: <Droplets className="w-6 h-6 text-[#F4D03F]" />,
    title: "Cosmetics & Skincare",
    description: "High antioxidant profiles make our turmeric and ginger highly desirable for organic skincare lines. Our microbial controls ensure the powders are safe for topical applications.",
    image: "/mockups/250gms/PREMIUM TURMERIC - 250GM - WITHOUT BG.png" // Placeholder
  }
];

export function IndustryUseCases() {
  return (
    <section className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-24">
          {industries.map((industry, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full aspect-square rounded-[3rem] overflow-hidden bg-white/50 border border-brand-charcoal/10 flex items-center justify-center p-12"
                  >
                    <Image 
                      src={industry.image} 
                      alt={industry.title} 
                      fill
                      className="object-contain p-8 drop-shadow-xl"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </motion.div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-brand-charcoal/5">
                      {industry.icon}
                    </div>
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-charcoal mb-6">
                      {industry.title}
                    </h2>
                    <p className="text-lg text-brand-charcoal/70 leading-relaxed">
                      {industry.description}
                    </p>
                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
