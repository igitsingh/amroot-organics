"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { generateImageAlt, generateImageTitle } from "@/lib/seo/image";
import { productIntelligence } from "@/lib/seo/intelligence";

const PRODUCTS = [
  {
    name: "Organic Turmeric",
    image: "/mockups/1kg/ORGANIC TURMERIC - 1KG - WITHOUT BG.png",
    id: "organic-turmeric"
  },
  {
    name: "Premium Turmeric",
    image: "/mockups/1kg/PREMIUM TURMERIC - 1KG - WITHOUT BG.png",
    id: "lakadong-turmeric"
  },
  {
    name: "Organic Ginger",
    image: "/mockups/1kg/ORGANIC GINGER - 1KG - WITHOUT BG.png",
    id: "organic-ginger"
  },
  {
    name: "Premium Ginger",
    image: "/mockups/1kg/PREMIUM GINGER - 1KG - WITHOUT BG.png",
    id: "premium-ginger"
  }
];

function AngledMarquee({ text, direction, className, textClassName }: { text: React.ReactNode, direction: 1 | -1, className?: string, textClassName?: string }) {
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
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  // Mouse movement light effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const scrollLeft = () => {
    setActiveIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const scrollRight = () => {
    setActiveIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const getOffset = (index: number) => {
    let diff = index - activeIndex;
    if (diff < -1) diff += PRODUCTS.length;
    if (diff > 1) diff -= PRODUCTS.length;
    return diff;
  };

  return (
    <section 
      className="bg-[#F4D03F] relative w-full py-32 lg:py-40 overflow-hidden flex flex-col justify-center min-h-screen group"
      onMouseMove={handleMouseMove}
    >
      
      {/* Mouse spotlight soil mask effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 z-0"
        style={{
          backgroundImage: `url('/images/soil-texture.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          WebkitMaskImage: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `,
          maskImage: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              black 0%,
              transparent 100%
            )
          `
        }}
      />

      {/* 1. Top Moving Line */}
      <AngledMarquee 
        text="RARE HARVEST" 
        direction={-1} 
        className="top-10 lg:top-16 rotate-[-2deg] bg-brand-charcoal py-1.5 lg:py-2 z-20 shadow-xl"
        textClassName="text-white font-[family-name:var(--font-outfit)] text-lg lg:text-2xl font-bold tracking-widest uppercase"
      />

      {/* 3. Bottom Moving Line */}
      <AngledMarquee 
        text="RARE ORIGIN" 
        direction={-1} 
        className="bottom-10 lg:bottom-16 rotate-[1deg] bg-brand-green py-1.5 lg:py-2 z-20 shadow-xl"
        textClassName="text-[#F4D03F] font-[family-name:var(--font-outfit)] text-lg lg:text-2xl font-bold tracking-widest uppercase"
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-4 items-center justify-between w-full">
          
          {/* Left Side: Secondary Content */}
          <div className="w-full lg:w-5/12 shrink-0 flex flex-col justify-center text-center lg:text-left z-10">
            <div className="relative w-[150%] lg:w-[800px] max-w-none mx-auto lg:mx-0 lg:-ml-24 scale-125 lg:scale-150 transform lg:origin-left">
              <img 
                src="/rare nature rare turmeric rare ginger.png" 
                alt={generateImageAlt("generic", undefined, "Rare Single-Origin Turmeric and Ginger from Meghalaya")}
                title={generateImageTitle("generic", undefined, "Rare Single-Origin Turmeric and Ginger")}
                loading="lazy"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side: Interactive 3D Carousel */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center group/carousel h-[350px] sm:h-[450px] lg:h-[600px] [perspective:1000px] mt-8 lg:mt-0">
            {/* Navigation Buttons */}
            <button 
              onClick={scrollLeft} 
              className="absolute top-1/2 left-4 lg:-left-8 -translate-y-1/2 z-40 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg text-brand-charcoal transition-all opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 hover:scale-110"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={scrollRight} 
              className="absolute top-1/2 right-4 lg:-right-8 -translate-y-1/2 z-40 p-3 bg-white/90 hover:bg-white rounded-full shadow-lg text-brand-charcoal transition-all opacity-100 lg:opacity-0 lg:group-hover/carousel:opacity-100 hover:scale-110"
              aria-label="Next product"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* 3D Carousel Container */}
            <div 
              className="relative w-full max-w-[280px] sm:max-w-[380px] h-full flex items-center justify-center [transform-style:preserve-3d]"
              onPointerDown={(e) => {
                // Simple touch swipe for mobile
                const startX = e.clientX;
                const handlePointerUp = (upEvent: PointerEvent) => {
                  const diff = startX - upEvent.clientX;
                  if (diff > 50) scrollRight();
                  if (diff < -50) scrollLeft();
                  window.removeEventListener('pointerup', handlePointerUp);
                };
                window.addEventListener('pointerup', handlePointerUp);
              }}
            >
              {PRODUCTS.map((product, index) => {
                const offset = getOffset(index);
                const isActive = offset === 0;
                
                return (
                  <motion.div 
                    key={product.name}
                    initial={false}
                    animate={{
                      x: offset === 0 ? "0%" : offset === 1 ? "60%" : offset === -1 ? "-60%" : "0%",
                      scale: offset === 0 ? 1 : offset === 1 || offset === -1 ? 0.75 : 0.5,
                      rotateY: offset === 0 ? 0 : offset === 1 ? -20 : offset === -1 ? 20 : 0,
                      opacity: Math.abs(offset) >= 2 ? 0 : 1,
                      zIndex: offset === 0 ? 30 : 20,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={() => {
                      if (isActive) {
                        router.push(`/products/${product.id}`);
                      } else {
                        setActiveIndex(index);
                      }
                    }}
                    className="absolute w-full h-full flex flex-col items-center justify-center cursor-pointer"
                  >
                    <div className={`relative w-full h-4/5 transform transition-transform duration-500 ${isActive ? 'hover:scale-105' : ''}`}>
                      <Image
                        src={product.image}
                        alt={generateImageAlt("product", product.id as keyof typeof productIntelligence)}
                        title={generateImageTitle("product", product.id as keyof typeof productIntelligence)}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                      />
                    </div>
                    <motion.div 
                      animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
                      className="absolute bottom-8 bg-brand-white/95 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg border border-white/20 pointer-events-none"
                    >
                      <h3 className="font-semibold text-brand-charcoal text-sm tracking-wide">
                        {product.name}
                      </h3>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>



        </div>
      </div>
    </section>
  );
}
