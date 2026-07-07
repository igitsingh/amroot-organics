"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const testimonials = [
  { quote: "Amroot has completely transformed how we source our raw materials. The consistency is unmatched.", author: "Elena R.", role: "Head of Procurement, Wellness Co" },
  { quote: "Finally, a supplier that understands the science behind the spice. Their lab reports are flawless.", author: "Dr. James M.", role: "Nutritionist & Formulator" },
  { quote: "The traceability back to the Meghalaya farms gave our brand the story we needed.", author: "Sarah K.", role: "Founding Chef" },
  { quote: "We used to reject 10% of our ginger imports. Since joining the Circle, our rejection rate is 0%.", author: "David P.", role: "Global Distributor" },
  { quote: "It’s not just buying ingredients; it feels like a partnership in quality.", author: "Aisha T.", role: "Supplement Manufacturer" },
  { quote: "The community insights on crop yields have saved us thousands in forecasting errors.", author: "Michael B.", role: "Supply Chain Director" },
];

export function CommunityWall() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.masonry-card');
    
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-brand-white">
      <div className="w-full mx-auto px-6 lg:px-8">
        <div className="mb-20">
          <h2 className="font-serif text-4xl md:text-5xl text-brand-charcoal mb-4">Inside the Circle</h2>
          <p className="text-brand-charcoal/60 text-lg">Hear from the pioneers raising the standard.</p>
        </div>

        {/* CSS Masonry */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="masonry-card break-inside-avoid bg-brand-beige/10 border border-brand-charcoal/5 p-8 rounded-3xl hover:bg-brand-beige/30 transition-colors duration-500"
            >
              <p className="font-serif text-xl md:text-2xl text-brand-charcoal leading-relaxed mb-8">
                "{item.quote}"
              </p>
              <div>
                <p className="font-medium text-brand-charcoal text-sm">{item.author}</p>
                <p className="text-brand-green text-xs mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
