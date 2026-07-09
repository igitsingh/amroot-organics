import React from "react";
import clsx from "clsx";

export interface ProductSpecification {
  category: string;
  items: { label: string; value: string }[];
}

export interface B2BProduct {
  id: string;
  name: string;
  origin: string;
  botanicalName: string;
  hsCode: string;
  description: string;
  image: string;
  specifications: ProductSpecification[];
}

export function ProductSpecTable({ product }: { product: B2BProduct }) {
  return (
    <div className="w-full bg-white border border-brand-charcoal/10 rounded-2xl overflow-hidden shadow-sm">
      <div className="bg-[#F4EFE6] px-6 py-4 border-b border-brand-charcoal/10 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h3 className="text-xl font-serif text-brand-charcoal font-medium">{product.name}</h3>
          <p className="text-sm text-brand-charcoal/70">{product.origin} • {product.botanicalName}</p>
        </div>
        <div className="bg-white px-3 py-1 rounded-full border border-brand-charcoal/10 text-xs font-medium text-brand-charcoal shrink-0 w-fit">
          HS Code: {product.hsCode}
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-brand-charcoal/80 text-sm leading-relaxed mb-8">
          {product.description}
        </p>

        <div className="space-y-8">
          {product.specifications.map((specGroup, idx) => (
            <div key={idx}>
              <h4 className="text-sm font-bold text-brand-charcoal uppercase tracking-wider mb-4 border-b border-brand-charcoal/5 pb-2">
                {specGroup.category}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                {specGroup.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex justify-between items-center py-1 border-b border-brand-charcoal/5 last:border-0 sm:last:border-b sm:nth-last-child(-n+2):border-0">
                    <span className="text-sm text-brand-charcoal/70">{item.label}</span>
                    <span className="text-sm font-medium text-brand-charcoal text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
