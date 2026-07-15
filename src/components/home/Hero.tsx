"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { generateImageAlt, generateImageTitle } from "@/lib/seo/image";

export function Hero() {
  return (
    <section className="relative w-full min-h-[100vh] lg:min-h-0 bg-[#FAF8F5] flex flex-col justify-center overflow-hidden">
      {/* Image Background - Defines Section Height on Desktop */}
      <div className="absolute lg:relative inset-0 lg:inset-auto w-full h-full lg:h-auto z-0">
        <img 
          src="/images/FULL PRODUCTS HERO IMAGE_02.png" 
          alt={generateImageAlt("hero")}
          title={generateImageTitle("hero")}
          className="w-full h-full lg:h-auto object-cover"
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 w-full h-full pointer-events-none">
        
        {/* Left Button (Under RARE NATURE) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[38%] sm:top-[34%] lg:top-[31%] left-[7%] lg:left-[10%] xl:left-[11%] pointer-events-auto flex justify-start"
        >
          <Link
            href="/export-quantity"
            className="group flex items-center gap-2 bg-brand-green text-brand-white px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base font-medium hover:bg-[#023A33] transition-all duration-300 shadow-lg"
          >
            Export Quantity
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
        
        {/* Right Button (Under RARE ORIGIN) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[38%] sm:top-[34%] lg:top-[31%] right-[9%] lg:right-[12%] xl:right-[13%] pointer-events-auto flex justify-end"
        >
          <Link
            href="/products"
            className="group flex items-center gap-2 px-6 lg:px-8 py-3 lg:py-4 rounded-full text-sm lg:text-base font-bold text-brand-green bg-[#EAB308] hover:bg-[#D9A05B] transition-all duration-300 shadow-lg"
          >
            Explore Products
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
