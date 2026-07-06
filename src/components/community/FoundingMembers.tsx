"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

export function FoundingMembers() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, 2400, {
        duration: 3,
        ease: "circOut",
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [isInView]);

  return (
    <section ref={containerRef} className="py-40 bg-brand-white text-brand-charcoal text-center">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-brand-green font-medium tracking-widest uppercase text-sm mb-8">The Movement</p>
        
        <div className="font-serif text-[6rem] md:text-[10rem] lg:text-[14rem] leading-none mb-6 tabular-nums tracking-tighter">
          {count.toLocaleString()}
        </div>
        
        <p className="text-xl md:text-2xl text-brand-charcoal/50 font-light">
          Founding Members & Growing Every Week
        </p>
      </div>
    </section>
  );
}
