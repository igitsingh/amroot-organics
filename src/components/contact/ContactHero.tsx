"use client";

import { motion } from "framer-motion";

export function ContactHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-green">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-charcoal/20" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-[family-name:var(--font-outfit)] text-5xl lg:text-7xl font-bold text-brand-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg lg:text-xl text-brand-off-white/90 leading-relaxed font-light">
            Whether you&apos;re looking to partner, request a sample, or simply have a question, our team is here to help. Reach out and let&apos;s build something pure together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
