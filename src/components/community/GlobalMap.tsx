"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const nodes = [
  { top: "40%", left: "20%", name: "North America", users: "1,200+" },
  { top: "35%", left: "48%", name: "Europe", users: "850+" },
  { top: "55%", left: "68%", name: "India (HQ)", users: "3,400+" },
  { top: "45%", left: "62%", name: "Middle East", users: "420+" },
  { top: "70%", left: "85%", name: "Oceania", users: "150+" },
];

export function GlobalMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Fade in nodes one by one
    gsap.fromTo(
      nodesRef.current,
      { scale: 0, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 50%",
        },
        scale: 1,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-40 bg-brand-charcoal overflow-hidden relative border-t border-white/10">
      <div className="w-full mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-white mb-6">A Global Network</h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">Connecting premium ingredient buyers with the absolute best of origin.</p>
        </div>

        <div className="relative w-full aspect-[2/1] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-no-repeat bg-center bg-contain opacity-20">
          {/* We use absolute dots over the map graphic */}
          {nodes.map((node, idx) => (
            <div 
              key={node.name}
              ref={(el) => { nodesRef.current[idx] = el; }}
              className="absolute group"
              style={{ top: node.top, left: node.left }}
            >
              {/* Pulsing ring */}
              <div className="absolute -inset-3 bg-brand-green/30 rounded-full animate-ping opacity-75" />
              {/* Core dot */}
              <div className="relative w-3 h-3 bg-brand-green rounded-full shadow-[0_0_15px_#034F46]" />
              
              {/* Tooltip */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                <p className="text-white font-medium text-sm">{node.name}</p>
                <p className="text-brand-pink text-xs">{node.users} Members</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
