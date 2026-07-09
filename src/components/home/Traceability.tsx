import Link from "next/link";

export function Traceability() {
  return (
    <section className="w-full bg-[#F4EFE6]">
      <div className="flex flex-col md:flex-row min-h-[500px] 2xl:min-h-[600px]">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24 xl:px-32">
          <p className="text-sm font-medium text-brand-charcoal/70 mb-4 uppercase tracking-wider">
            FULL FARM TO TABLE TRACEABILITY
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-brand-charcoal mb-6 font-medium">
            Trace your Products
          </h2>
          <p className="text-brand-charcoal/80 text-lg leading-relaxed mb-10 max-w-md">
            It's important to know about your food journey from farm to pack, now it's easy to know your farmer and where your food is coming from !
          </p>
          <Link
            href="/trace"
            className="inline-flex items-center justify-center gap-2 bg-[#1C1C1C] text-white px-8 py-4 rounded-full font-medium hover:bg-black transition-all hover:scale-105 active:scale-95 w-fit"
          >
            Trace Now
          </Link>
        </div>

        {/* Right Video */}
        <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full overflow-hidden">
          <video
            src="/lush-green-crop-field-under-blue-sky-2025-12-17-20-44-54-utc_comp.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
