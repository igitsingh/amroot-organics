"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function WhyThisExists() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const words = textRef.current.querySelectorAll('.keyword');

    words.forEach((word) => {
      gsap.fromTo(
        word,
        {
          fontWeight: 300,
          color: "rgba(31, 41, 55, 0.6)", // text-brand-charcoal/60 roughly
        },
        {
          scrollTrigger: {
            trigger: word,
            start: "top 70%",
            end: "top 50%",
            scrub: true,
          },
          fontWeight: 600,
          color: "#034F46", // brand-green
          ease: "none",
        }
      );
    });

  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-40 bg-brand-white text-brand-charcoal px-6 lg:px-8 flex items-center justify-center min-h-[70vh]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p 
          ref={textRef}
          className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.4] tracking-tight font-light"
        >
          We are not building customers. We are building a movement that raises the global standard of food. A collective dedicated to uncompromising <span className="keyword transition-all duration-300">Quality</span>, true <span className="keyword transition-all duration-300">Origin</span>, unwavering <span className="keyword transition-all duration-300">Integrity</span>, and absolute <span className="keyword transition-all duration-300">Transparency</span>. Because excellence is not a solitary pursuit—it requires a <span className="keyword transition-all duration-300">Community</span>.
        </p>
      </div>
    </section>
  );
}
