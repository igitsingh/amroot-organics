import { CheckCircle2, XCircle, HelpCircle } from "lucide-react";

const COMPARISONS = [
  {
    title: "Single Origin Traceability",
    amroot: "Direct from partner farms in India",
    conventional: "Unknown, mixed origins",
    other: "Bought through middlemen",
  },
  {
    title: "Premium Active Compounds",
    amroot: "Standardized high Curcumin & volatile oils",
    conventional: "Usually low-grade or spent material",
    other: "Rarely tested for actives",
  },
  {
    title: "Guaranteed Freshness",
    amroot: "Current harvest only",
    conventional: "Often sits in warehouses for years",
    other: "Transparency varies",
  },
  {
    title: "Rigorous Quality Standards",
    amroot: "Lab tested for heavy metals, pesticides, microbes",
    conventional: "Frequent recalls & contamination",
    other: "Often uses cheap fillers",
  }
];

export function ComparisonTable() {
  return (
    <section className="py-24 bg-brand-white relative overflow-hidden">
      <div className="w-full mx-auto px-6 lg:px-8">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-charcoal text-center mb-16">
          What Sets Us Apart
        </h2>

        {/* MOBILE VIEW (Stacked Cards) */}
        <div className="lg:hidden flex flex-col gap-8">
          {COMPARISONS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-brand-charcoal/10 overflow-hidden shadow-sm">
              <div className="bg-brand-charcoal text-white p-4 text-center font-medium">
                {item.title}
              </div>
              
              <div className="p-5 flex flex-col gap-4">
                {/* Amroot */}
                <div className="flex items-start gap-3 p-3 bg-brand-pink/10 rounded-xl border border-brand-pink/20">
                  <CheckCircle2 className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-charcoal text-[13px] uppercase tracking-wider mb-1">Amroot Organics</span>
                    <span className="text-sm text-brand-charcoal/80 leading-snug">{item.amroot}</span>
                  </div>
                </div>

                {/* Conventional */}
                <div className="flex items-start gap-3 p-3">
                  <XCircle className="w-5 h-5 text-brand-charcoal/40 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-charcoal/60 text-[11px] uppercase tracking-wider mb-1">Conventional Suppliers</span>
                    <span className="text-sm text-brand-charcoal/60 leading-snug">{item.conventional}</span>
                  </div>
                </div>

                {/* Other */}
                <div className="flex items-start gap-3 p-3 pt-0">
                  <HelpCircle className="w-5 h-5 text-brand-charcoal/40 shrink-0 mt-0.5" />
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-charcoal/60 text-[11px] uppercase tracking-wider mb-1">Other Importers</span>
                    <span className="text-sm text-brand-charcoal/60 leading-snug">{item.other}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW (Table) */}
        <div className="hidden lg:block w-full overflow-x-auto pb-8">
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

            {COMPARISONS.map((item, idx) => (
              <div key={idx} className="grid grid-cols-4 border-b border-brand-charcoal/10 group hover:bg-brand-beige/10 transition-colors last:border-b-0">
                <div className="p-6 flex items-center font-medium text-brand-charcoal">
                  {item.title}
                </div>
                <div className="p-6 flex flex-col items-center justify-center text-center bg-brand-pink/5 border-x border-brand-pink/20 gap-2">
                  <CheckCircle2 className="w-6 h-6 text-brand-pink" />
                  <span className="text-xs text-brand-charcoal/80">{item.amroot}</span>
                </div>
                <div className="p-6 flex flex-col items-center justify-center text-center gap-2">
                  <XCircle className="w-5 h-5 text-brand-charcoal/40" />
                  <span className="text-xs text-brand-charcoal/60">{item.conventional}</span>
                </div>
                <div className="p-6 flex flex-col items-center justify-center text-center gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-charcoal/40" />
                  <span className="text-xs text-brand-charcoal/60">{item.other}</span>
                </div>
              </div>
            ))}
            
          </div>
        </div>

      </div>
    </section>
  );
}
