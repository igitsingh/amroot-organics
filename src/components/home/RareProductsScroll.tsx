"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const PRODUCTS = [
  {
    name: "Organic Turmeric",
    image: "/mockups/ORGANIC TURMERIC - 1KG - WITHOUT BG.png"
  },
  {
    name: "Premium Turmeric",
    image: "/mockups/PREMIUM TURMERIC - 1KG - WITHOUT BG.png"
  },
  {
    name: "Organic Ginger",
    image: "/mockups/ORGANIC GINGER - 1KG - WITHOUT BG.png"
  },
  {
    name: "Premium Ginger",
    image: "/mockups/PREMIUM GINGER - 1KG - WITHOUT BG.png"
  }
];

function AngledMarquee({ text, direction, className, textClassName }: { text: string, direction: 1 | -1, className?: string, textClassName?: string }) {
  return (
    <div className={`absolute w-[120%] -left-[10%] flex overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === 1 ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        <div className="flex shrink-0">
          {[...Array(12)].map((_, i) => (
            <span key={i} className={`px-4 ${textClassName}`}>
              {text} <span className="mx-4 opacity-50 px-2">•</span>
            </span>
          ))}
        </div>
        <div className="flex shrink-0">
          {[...Array(12)].map((_, i) => (
            <span key={`dup-${i}`} className={`px-4 ${textClassName}`}>
              {text} <span className="mx-4 opacity-50 px-2">•</span>
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export function RareProductsScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-[#F4D03F] relative w-full py-32 lg:py-40 overflow-hidden flex flex-col justify-center min-h-screen">
      
      {/* 1. Top Moving Line */}
      <AngledMarquee 
        text="RARE HARVEST" 
        direction={-1} 
        className="top-10 lg:top-16 rotate-[-2deg] bg-brand-charcoal py-3 lg:py-4 z-20 shadow-xl"
        textClassName="text-white font-[family-name:var(--font-outfit)] text-2xl lg:text-4xl font-bold tracking-widest uppercase"
      />

      {/* 2. Middle Moving Background */}
      <AngledMarquee 
        text="RARE NATURE" 
        direction={1} 
        className="top-1/2 -translate-y-1/2 rotate-[3deg] z-0 opacity-15"
        textClassName="text-brand-charcoal font-[family-name:var(--font-outfit)] text-7xl lg:text-[12rem] font-black tracking-tight uppercase leading-none"
      />

      {/* 3. Bottom Moving Line */}
      <AngledMarquee 
        text="RARE ORIGIN" 
        direction={-1} 
        className="bottom-10 lg:bottom-16 rotate-[1deg] bg-brand-green py-3 lg:py-4 z-20 shadow-xl"
        textClassName="text-[#F4D03F] font-[family-name:var(--font-outfit)] text-2xl lg:text-4xl font-bold tracking-widest uppercase"
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 items-center justify-between w-full">
          
          {/* Left Side: Secondary Content */}
          <div className="w-full lg:w-1/3 shrink-0 flex flex-col justify-center">
            <h2 className="font-[family-name:var(--font-outfit)] text-5xl sm:text-6xl text-brand-charcoal mb-4 leading-[1.1] font-medium tracking-tight">
              <span className="block italic">rare</span>
              <span className="block text-brand-green italic lowercase font-light tracking-normal">turmeric.</span>
              <span className="block text-brand-green italic lowercase font-light tracking-normal">ginger.</span>
            </h2>
          </div>

          {/* Center: Interactive Horizontal Carousel */}
          <div className="w-full lg:w-1/3 relative flex items-center justify-center group">
            {/* Navigation Buttons */}
            <button 
              onClick={scrollLeft} 
              className="absolute top-1/2 left-0 lg:-left-12 -translate-y-1/2 z-20 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg text-brand-charcoal transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 hover:scale-110"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={scrollRight} 
              className="absolute top-1/2 right-0 lg:-right-12 -translate-y-1/2 z-20 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg text-brand-charcoal transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 hover:scale-110"
              aria-label="Next product"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Scroll Container */}
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto snap-x snap-mandatory w-full max-w-[500px] aspect-[4/5] [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] z-10"
            >
              {PRODUCTS.map((product) => (
                <div 
                  key={product.name} 
                  className="w-full shrink-0 snap-center flex flex-col items-center justify-center relative p-4 cursor-grab active:cursor-grabbing"
                >
                  <div className="relative w-full h-full transform transition-transform duration-500 hover:scale-105">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                  <div className="absolute bottom-8 bg-brand-white/95 backdrop-blur-sm px-6 py-2 rounded-full shadow-md">
                    <h3 className="font-semibold text-brand-charcoal text-sm tracking-wide">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Description Content */}
          <div className="w-full lg:w-1/3 shrink-0 flex flex-col justify-center lg:pl-8">
            <div className="w-12 h-1 bg-brand-green mb-8 rounded-full"></div>
            <p className="text-brand-charcoal/90 text-lg sm:text-xl font-medium leading-relaxed mb-10 max-w-sm bg-white/40 p-6 rounded-3xl backdrop-blur-sm border border-white/50 shadow-xl">
              An exclusive collection of just two pristine ingredients—Turmeric and Ginger—spanning four meticulously crafted SKUs. Reserved for discerning global importers and distributors who demand the absolute finest.
            </p>
            <Link
              href="/products"
              className="group flex w-max items-center gap-2 bg-brand-charcoal text-white px-6 py-3 rounded-full font-bold tracking-widest text-sm hover:bg-brand-green transition-all uppercase shadow-lg hover:shadow-brand-green/30"
            >
              PLACE YOUR RARE ORDER
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
