"use client";

import { motion } from "framer-motion";

export function OurMission() {
  return (
    <section className="w-full bg-brand-green py-32 overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-pink via-brand-green to-brand-green" />
      
      <div className="w-full px-6 lg:px-12 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl lg:text-6xl text-brand-white mb-8"
          >
            Uncompromising Quality. <br />
            <span className="text-brand-pink italic">Unyielding Standards.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-brand-white/80 text-xl md:text-2xl font-light leading-relaxed mb-16"
          >
            We believe that global health and wellness begins at the source. Our mission is to bridge the gap between India's most exceptional agricultural yields and the world's leading brands, providing an infrastructure built on trust, transparency, and scientific validation.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {[
              { title: "Sourcing", desc: "100% Traceable to origin" },
              { title: "Processing", desc: "State-of-the-art facilities" },
              { title: "Validation", desc: "Rigorous third-party lab testing" }
            ].map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                className="bg-brand-white/5 border border-brand-white/10 rounded-2xl p-8 backdrop-blur-sm"
              >
                <h3 className="font-serif text-2xl text-brand-pink mb-3">{pillar.title}</h3>
                <p className="text-brand-white/70 font-light">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
