import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";

export function ComparisonTable() {
  return (
    <section className="py-24 bg-brand-white relative overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal text-center mb-16">
          What Sets Us Apart
        </h2>

        <div className="w-full overflow-x-auto pb-8">
          <div className="min-w-[800px] border border-brand-charcoal/10 rounded-2xl overflow-hidden bg-white">
            {/* Header Row */}
            <div className="grid grid-cols-4 bg-brand-beige/20 border-b border-brand-charcoal/10">
              <div className="p-6 flex items-center justify-center font-medium text-brand-charcoal">
                
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center bg-brand-pink/10 border-x border-brand-pink/20">
                <span className="font-outfit text-xl tracking-tight text-brand-charcoal font-semibold lowercase mb-1">
                  amroot
                </span>
                <span className="font-sans font-medium text-brand-pink text-[10px] uppercase tracking-[0.2em]">
                  Organics
                </span>
              </div>
              <div className="p-6 flex items-center justify-center font-medium text-brand-charcoal/70 text-center">
                Conventional Bulk Suppliers
              </div>
              <div className="p-6 flex items-center justify-center font-medium text-brand-charcoal/70 text-center">
                Other Importers
              </div>
            </div>

            {/* Row 1 */}
            <div className="grid grid-cols-4 border-b border-brand-charcoal/10 group hover:bg-brand-beige/10 transition-colors">
              <div className="p-6 flex items-center font-medium text-brand-charcoal">
                Single Origin Traceability
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center bg-brand-pink/5 border-x border-brand-pink/20 gap-2">
                <CheckCircle2 className="w-6 h-6 text-brand-pink" />
                <span className="text-xs text-brand-charcoal/80">Direct from partner farms in India</span>
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center gap-2">
                <XCircle className="w-5 h-5 text-brand-charcoal/40" />
                <span className="text-xs text-brand-charcoal/60">Unknown, mixed origins</span>
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center gap-2">
                <HelpCircle className="w-5 h-5 text-brand-charcoal/40" />
                <span className="text-xs text-brand-charcoal/60">Bought through middlemen</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-4 border-b border-brand-charcoal/10 group hover:bg-brand-beige/10 transition-colors">
              <div className="p-6 flex items-center font-medium text-brand-charcoal">
                Premium Active Compounds
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center bg-brand-pink/5 border-x border-brand-pink/20 gap-2">
                <CheckCircle2 className="w-6 h-6 text-brand-pink" />
                <span className="text-xs text-brand-charcoal/80">Standardized high Curcumin & volatile oils</span>
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center gap-2">
                <XCircle className="w-5 h-5 text-brand-charcoal/40" />
                <span className="text-xs text-brand-charcoal/60">Usually low-grade or spent material</span>
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center gap-2">
                <HelpCircle className="w-5 h-5 text-brand-charcoal/40" />
                <span className="text-xs text-brand-charcoal/60">Rarely tested for actives</span>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-4 border-b border-brand-charcoal/10 group hover:bg-brand-beige/10 transition-colors">
              <div className="p-6 flex items-center font-medium text-brand-charcoal">
                Guaranteed Freshness
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center bg-brand-pink/5 border-x border-brand-pink/20 gap-2">
                <CheckCircle2 className="w-6 h-6 text-brand-pink" />
                <span className="text-xs text-brand-charcoal/80">Current harvest only</span>
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center gap-2">
                <XCircle className="w-5 h-5 text-brand-charcoal/40" />
                <span className="text-xs text-brand-charcoal/60">Often sits in warehouses for years</span>
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center gap-2">
                <HelpCircle className="w-5 h-5 text-brand-charcoal/40" />
                <span className="text-xs text-brand-charcoal/60">Transparency varies</span>
              </div>
            </div>

            {/* Row 4 */}
            <div className="grid grid-cols-4 group hover:bg-brand-beige/10 transition-colors">
              <div className="p-6 flex items-center font-medium text-brand-charcoal">
                Rigorous Quality Standards
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center bg-brand-pink/5 border-x border-brand-pink/20 gap-2">
                <CheckCircle2 className="w-6 h-6 text-brand-pink" />
                <span className="text-xs text-brand-charcoal/80">Lab tested for heavy metals, pesticides, microbes</span>
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center gap-2">
                <XCircle className="w-5 h-5 text-brand-charcoal/40" />
                <span className="text-xs text-brand-charcoal/60">Frequent recalls & contamination</span>
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center gap-2">
                <HelpCircle className="w-5 h-5 text-brand-charcoal/40" />
                <span className="text-xs text-brand-charcoal/60">Often uses cheap fillers</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
