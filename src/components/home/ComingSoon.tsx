"use client";

import { motion } from "framer-motion";
import { useForm, ValidationError } from '@formspree/react';

export function ComingSoon() {
  const [state, handleSubmit] = useForm('xqevjdal');

  return (
    <div className="min-h-screen bg-brand-white flex flex-col items-center justify-center relative font-sans selection:bg-brand-green/30 selection:text-brand-charcoal px-6 overflow-hidden">
      
      {/* Background Decor */}
      <div 
        className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none animate-pulse"
        style={{ 
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/dust.png")',
          animationDuration: '10s' 
        }}
      ></div>
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-brand-green/5 rounded-full pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-brand-green/5 rounded-full pointer-events-none"></div>

      {/* Content */}
      <main className="relative z-10 max-w-3xl w-full text-center flex flex-col items-center">
        
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-brand-terracotta text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-8 block"
        >
          Coming Soon
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight mb-8 text-brand-charcoal"
        >
          Something exceptional is growing.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-2xl text-brand-charcoal/70 font-light mb-12 leading-relaxed"
        >
          Amroot Organics is currently invite-only. <br className="hidden md:block" /> Join the waitlist for exclusive early access.
        </motion.p>

        {/* Waitlist Form or Success Message */}
        {state.succeeded ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-md bg-brand-beige/50 border border-brand-green/20 rounded-3xl p-10 text-center shadow-sm"
          >
            <h3 className="text-3xl font-serif text-brand-green mb-3">You're on the list.</h3>
            <p className="text-brand-charcoal/70 text-lg font-light">We'll be in touch as soon as the first wave of invitations is ready.</p>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            onSubmit={handleSubmit} 
            className="w-full max-w-md flex flex-col gap-4"
          >
            <input 
              type="email" 
              name="email"
              placeholder="Enter your business email" 
              required
              className="w-full bg-brand-beige border border-brand-charcoal/10 rounded-full px-8 py-5 text-center text-brand-charcoal placeholder:text-brand-charcoal/40 focus:outline-none focus:border-brand-green transition-colors text-lg"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm" />
            
            <button 
              type="submit"
              disabled={state.submitting}
              className="w-full bg-brand-green text-white rounded-full px-8 py-5 font-medium hover:bg-brand-charcoal transition-colors duration-300 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "Sending..." : "Request Invitation"}
            </button>
          </motion.form>
        )}

      </main>

    </div>
  );
}
