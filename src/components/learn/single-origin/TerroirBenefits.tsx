"use client";

import { motion } from "framer-motion";
import { Mountain, CloudRain, Sprout } from "lucide-react";

export function TerroirBenefits() {
  const benefits = [
    {
      icon: <Mountain className="w-8 h-8 text-brand-green" />,
      title: "Pristine Altitude",
      description: "Cultivated in the high-altitude Jaintia Hills, far removed from urban pollution. The unique topography forces the plant to develop hardier roots, resulting in higher concentrations of bioactives."
    },
    {
      icon: <CloudRain className="w-8 h-8 text-brand-orange" />,
      title: "Heavy Monsoons",
      description: "Meghalaya is one of the wettest places on earth. The intense, natural irrigation combined with well-draining slopes creates the perfect stress environment for synthesizing curcuminoids and gingerols."
    },
    {
      icon: <Sprout className="w-8 h-8 text-brand-charcoal" />,
      title: "Virgin Soil",
      description: "Untouched by synthetic fertilizers or modern intensive farming. The nutrient-dense, loamy soil of these ancient forests imparts a deep, complex flavor profile and vibrant color."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-serif text-brand-charcoal mb-6">
            The Power of Terroir
          </h2>
          <p className="text-lg text-brand-charcoal/70">
            Just like fine wine, the quality of medicinal spices is entirely dictated by where they grow. Lakadong turmeric and Jaintia Hills ginger cannot be replicated anywhere else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full bg-brand-beige flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-serif font-medium text-brand-charcoal mb-4">{benefit.title}</h3>
              <p className="text-brand-charcoal/70 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
