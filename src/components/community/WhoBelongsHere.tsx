"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const roles = [
  { title: "Importer", icon: "🚢" },
  { title: "Distributor", icon: "📦" },
  { title: "Retailer", icon: "🏪" },
  { title: "Chef", icon: "🍳" },
  { title: "Nutritionist", icon: "🥑" },
  { title: "Food Manufacturer", icon: "🏭" },
  { title: "Wellness Brand", icon: "✨" },
  { title: "Health Enthusiast", icon: "🌿" },
];

export function WhoBelongsHere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-500, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-brand-beige/20 overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-8 mb-20 text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-4">Who Belongs Here</h2>
        <p className="text-brand-charcoal/60 text-lg">A network of uncompromising professionals.</p>
      </div>

      <div className="flex flex-col gap-8">
        <motion.div style={{ x: x1 }} className="flex gap-6 w-max px-6">
          {roles.slice(0, 4).map((role, idx) => (
            <Card key={idx} role={role} />
          ))}
          {roles.slice(0, 4).map((role, idx) => (
            <Card key={`dup-${idx}`} role={role} />
          ))}
        </motion.div>
        
        <motion.div style={{ x: x2 }} className="flex gap-6 w-max px-6 ml-[-20vw]">
          {roles.slice(4, 8).map((role, idx) => (
            <Card key={idx} role={role} />
          ))}
          {roles.slice(4, 8).map((role, idx) => (
            <Card key={`dup2-${idx}`} role={role} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Card({ role }: { role: { title: string, icon: string } }) {
  return (
    <motion.div 
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative bg-brand-white px-10 py-12 rounded-3xl min-w-[300px] md:min-w-[400px] flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] cursor-pointer"
    >
      <div className="absolute inset-0 rounded-3xl border border-brand-green/0 group-hover:border-brand-green/20 group-hover:shadow-[0_0_30px_rgba(3,79,70,0.1)] transition-all duration-500" />
      <span className="text-3xl mb-12 block grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">{role.icon}</span>
      <h3 className="font-serif text-2xl text-brand-charcoal group-hover:text-brand-green transition-colors duration-500">{role.title}</h3>
    </motion.div>
  );
}
