"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const milestones = [
  { era: "The Beginning", title: "A Question of Quality", desc: "It started with a simple observation: the spice trade was broken. Opaque supply chains, rampant adulteration, and farmers disconnected from the end consumer." },
  { era: "Today", title: "The Standard Raised", desc: "A global network of uncompromising professionals demanding traceability. We mapped the farms, tested the batches, and proved that ethical sourcing scales." },
  { era: "The Future", title: "The Amroot Standard", desc: "A world where every premium ingredient is fully transparent. Where 'Organic' is just the baseline, and active compound consistency is the true measure of quality." }
];

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    // Animate the central line
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          end: "bottom 80%",
          scrub: true,
        },
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
      }
    );

    // Fade in timeline items
    itemsRef.current.forEach((item, index) => {
      if (!item) return;
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: item,
            start: "top 75%",
          },
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="py-40 bg-brand-charcoal text-brand-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
        
        {/* Progress Line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10">
          <div ref={lineRef} className="absolute top-0 left-0 w-full h-full bg-brand-green origin-top" />
        </div>

        <div className="space-y-32">
          {milestones.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div 
                key={item.era} 
                ref={(el) => { itemsRef.current[idx] = el; }}
                className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
              >
                {/* Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 top-2 w-3 h-3 rounded-full bg-brand-white shadow-[0_0_10px_rgba(255,255,255,0.5)] z-10" />
                
                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-5/12 ${isEven ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'}`}>
                  <span className="text-brand-pink font-sans text-sm tracking-[0.2em] uppercase mb-4 block">{item.era}</span>
                  <h3 className="font-serif text-3xl md:text-4xl mb-4">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
