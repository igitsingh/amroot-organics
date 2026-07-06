"use client";

import { motion } from "framer-motion";

export function ComingSoon() {
  return (
    <div className="min-h-screen bg-brand-charcoal flex flex-col items-center justify-center relative font-sans selection:bg-brand-green/30 selection:text-white px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div 
        className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none animate-pulse"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/dust.png")',
          animationDuration: '10s' 
        }}
      ></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-white/5 rounded-full pointer-events-none"></div>

      {/* Content */}
      <main className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
        
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-brand-pink text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-8 block"
        >
          Coming Soon
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 text-white"
        >
          Something exceptional is growing.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/50 font-light mb-12 leading-relaxed"
        >
          Amroot Organics is currently invite-only. <br className="hidden md:block" /> Join the waitlist for exclusive early access.
        </motion.p>

        {/* Waitlist Form */}
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          onSubmit={(e) => e.preventDefault()} 
          className="w-full max-w-md flex flex-col gap-4"
        >
          <input 
            type="email" 
            placeholder="Enter your business email" 
            required
            className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 text-center text-white placeholder:text-white/30 focus:outline-none focus:border-brand-green transition-colors text-lg"
          />
          <button 
            type="submit"
            className="w-full bg-brand-white text-brand-charcoal rounded-full px-8 py-5 font-medium hover:bg-brand-pink hover:text-white transition-colors duration-300 text-lg"
          >
            Request Invitation
          </button>
        </motion.form>

      </main>

    </div>
  );
}
