import Link from "next/link";

export function Traceability() {
  return (
    <section className="w-full relative min-h-[500px] 2xl:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        src="/lush-green-crop-field-under-blue-sky-2025-12-17-20-44-54-utc_comp.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Content */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center px-8 py-16 text-center">
        <p className="text-sm font-medium text-white/90 mb-4 uppercase tracking-wider">
          FULL FARM-TO-LAND TRACEABILITY
        </p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 font-medium">
          Trace your Products
        </h2>
        <p className="text-white/90 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
          It's important to know about your food journey from farm to pack, now it's easy to know your farmer and where your food is coming from !
        </p>
        <Link
          href="/trace"
          className="inline-flex items-center justify-center gap-2 bg-white text-brand-charcoal px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 w-fit uppercase"
        >
          TRACE NOW
        </Link>
      </div>
    </section>
  );
}
