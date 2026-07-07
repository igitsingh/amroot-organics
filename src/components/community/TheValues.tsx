"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const values = [
  { id: "01", title: "Origin", desc: "We map the exact soil our ingredients grow in." },
  { id: "02", title: "Evidence", desc: "Scientific validation replaces marketing claims." },
  { id: "03", title: "Transparency", desc: "Full traceability from the farm to your formulation." },
  { id: "04", title: "Consistency", desc: "Standardized active compounds in every single batch." },
];

export function TheValues() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      
      gsap.fromTo(
        card,
        {
          opacity: 0.3,
          rotationX: 45,
          y: 100,
          scale: 0.9,
        },
        {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
          opacity: 1,
          rotationX: 0,
          y: 0,
          scale: 1,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-brand-charcoal text-brand-white perspective-[2000px]">
      <div className="w-full mx-auto px-6 lg:px-8 space-y-32">
        {values.map((val, idx) => (
          <div 
            key={val.id}
            ref={(el) => { cardsRef.current[idx] = el; }}
            className="w-full min-h-[70vh] flex flex-col justify-center rounded-3xl border border-white/10 bg-white/5 p-12 md:p-24 relative overflow-hidden group"
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Subtle background glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_center,rgba(241,103,117,0.1)_0%,transparent_70%)] transition-opacity duration-1000 pointer-events-none" />
            
            <span className="text-brand-pink font-sans text-sm md:text-base font-semibold tracking-[0.2em] mb-8 block">
              {val.id}
            </span>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 relative z-10">{val.title}</h2>
            <p className="text-xl md:text-3xl text-white/50 max-w-3xl font-light leading-relaxed relative z-10">
              {val.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
