"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

export function CommunityHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  
  // Mouse movement light effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    if (!containerRef.current || !headlineRef.current) return;
    
    // Initial reveal animation
    const tl = gsap.timeline();
    
    // Split text (simulated without SplitText plugin by wrapping spans in markup)
    const chars = headlineRef.current.querySelectorAll('.char');
    
    tl.fromTo(
      chars,
      { y: 100, opacity: 0, rotateX: -90 },
      { y: 0, opacity: 1, rotateX: 0, stagger: 0.05, duration: 1.5, ease: "power4.out" }
    )
    .fromTo(
      subheadRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(
      buttonsRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.6"
    );

    // Scroll compression effect
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      y: -150,
      scale: 0.95,
      opacity: 0.2,
      ease: "none"
    });

  }, []);

  const headline = "The AMROOT Circle";

  return (
    <section 
      ref={containerRef}
      className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-brand-charcoal text-brand-white group"
      onMouseMove={handleMouseMove}
    >
      {/* Slow moving organic texture background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] animate-[pulse_10s_ease-in-out_infinite] opacity-50" />
      </div>

      {/* Mouse spotlight effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-1000 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(3, 79, 70, 0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <h1 
          ref={headlineRef}
          className="font-serif text-6xl md:text-8xl lg:text-9xl tracking-tighter mb-8 perspective-[1000px]"
          style={{ perspective: "1000px" }}
        >
          {headline.split("").map((char, index) => (
            <span 
              key={index} 
              className={`char inline-block ${char === " " ? "w-4 md:w-8" : ""}`}
              style={{ transformOrigin: "50% 100%" }}
            >
              {char}
            </span>
          ))}
        </h1>

        <p 
          ref={subheadRef}
          className="text-lg md:text-2xl text-brand-white/70 font-light mb-12 max-w-2xl opacity-0"
        >
          A global community for people who believe quality begins at the source.
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center gap-6 opacity-0">
          <motion.button 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-brand-white text-brand-charcoal rounded-full font-medium tracking-wide hover:bg-brand-pink transition-colors duration-500"
          >
            Join the Circle
          </motion.button>
          <motion.button 
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent border border-brand-white/20 text-brand-white rounded-full font-medium tracking-wide hover:border-brand-white/60 transition-colors duration-500"
          >
            Explore the Movement
          </motion.button>
        </div>
      </div>
    </section>
  );
}
