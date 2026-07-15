"use client";

import { motion } from "framer-motion";

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

        {/* Visual / CSS Stamp in Glass Shape */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl flex items-center justify-center bg-brand-green/5 backdrop-blur-md"
          >
            {/* Overlay pattern or color */}
            <div className="absolute inset-0 bg-brand-green/10 mix-blend-overlay" />

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center rounded-full border-[10px] border-brand-charcoal/10 bg-white/20 backdrop-blur-lg shadow-xl"
            >
              {/* Inner Ring */}
              <div className="absolute inset-2 border-[2px] border-brand-charcoal/20 rounded-full" />
              
              {/* Center Logo/Text */}
              <div className="text-center flex flex-col items-center justify-center z-10">
                <span className="font-[family-name:var(--font-outfit)] text-4xl text-brand-charcoal font-semibold tracking-tight lowercase">
                  amroot
                </span>
                <span className="font-sans font-bold text-brand-charcoal text-[10px] uppercase tracking-[0.3em] mt-1">
                  ORGANICS
                </span>
                <div className="w-12 h-[2px] bg-brand-green my-3" />
                <span className="font-serif italic text-brand-charcoal/70 text-sm">
                  Certified Export
                </span>
              </div>

              {/* Rotating Outer Text */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 z-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible opacity-60">
                  <path
                    id="stampPath"
                    d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                    fill="transparent"
                  />
                  <text className="text-[9px] font-bold uppercase tracking-widest fill-brand-charcoal">
                    <textPath href="#stampPath" startOffset="0%">
                      • PURE & NATURAL • LAB TESTED • ZERO ADULTERATION
                    </textPath>
                  </text>
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
