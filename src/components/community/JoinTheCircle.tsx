"use client";

import { motion } from "framer-motion";

export function JoinTheCircle() {
  return (
    <section className="py-40 bg-brand-charcoal text-brand-white border-t border-white/5 relative overflow-hidden">
      {/* Subtle organic background ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-white/2 rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-12 tracking-tight">
          Become Part of the Future of Ingredient Excellence.
        </h2>

        <form className="max-w-xl mx-auto flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col md:flex-row gap-6">
            <input 
              type="email" 
              placeholder="Business Email" 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-green transition-colors"
            />
            <input 
              type="text" 
              placeholder="Country" 
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-green transition-colors"
            />
          </div>
          
          <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white/70 focus:outline-none focus:border-brand-green transition-colors appearance-none">
            <option value="" disabled>Profession</option>
            <option value="importer">Importer</option>
            <option value="distributor">Distributor</option>
            <option value="chef">Chef</option>
            <option value="manufacturer">Food Manufacturer</option>
            <option value="retailer">Retailer</option>
            <option value="other">Other</option>
          </select>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-4 bg-brand-white text-brand-charcoal py-5 rounded-xl font-medium tracking-wide hover:bg-brand-pink transition-colors duration-300"
          >
            Request Invitation
          </motion.button>
        </form>

        <p className="mt-12 text-sm text-white/40 tracking-widest uppercase">
          Membership is free. <br/> <span className="text-brand-pink">Standards are not.</span>
        </p>
      </div>
    </section>
  );
}
