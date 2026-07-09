"use client";

import { motion } from "framer-motion";
import { Factory, Leaf, Beaker, Apple } from "lucide-react";
import Image from "next/image";

export function IndustriesHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/turmeric-roots-shutterstock_2136388251.jpg"
          alt="Premium Turmeric Roots"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand-charcoal/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-charcoal/50 via-transparent to-brand-charcoal/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md text-xs font-bold tracking-[0.2em] text-white/90 uppercase">
              B2B Applications
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif leading-[1.1] mb-8 text-white"
          >
            Powering Global <br />
            <span className="text-brand-beige italic font-light">Industries</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/80 leading-relaxed font-light mb-12 max-w-2xl"
          >
            From nutraceutical formulations to culinary masterpieces, we supply standardized, fully traceable botanical ingredients that meet the exacting standards of the world's leading brands.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-90"
          >
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-brand-green/20 group-hover:border-brand-green/50 transition-colors duration-300">
                <Beaker className="w-5 h-5 text-white group-hover:text-brand-green transition-colors" />
              </div>
              <span className="text-xs tracking-widest text-white/70 uppercase">Nutraceuticals</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-brand-orange/20 group-hover:border-brand-orange/50 transition-colors duration-300">
                <Apple className="w-5 h-5 text-white group-hover:text-brand-orange transition-colors" />
              </div>
              <span className="text-xs tracking-widest text-white/70 uppercase">Food & Beverage</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-brand-green/20 group-hover:border-brand-green/50 transition-colors duration-300">
                <Leaf className="w-5 h-5 text-white group-hover:text-brand-green transition-colors" />
              </div>
              <span className="text-xs tracking-widest text-white/70 uppercase">Cosmetics</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-brand-beige/20 group-hover:border-brand-beige/50 transition-colors duration-300">
                <Factory className="w-5 h-5 text-white group-hover:text-brand-beige transition-colors" />
              </div>
              <span className="text-xs tracking-widest text-white/70 uppercase">Bulk Processing</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
