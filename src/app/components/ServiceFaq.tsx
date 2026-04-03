"use client";

import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

export default function ServiceFaq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col divide-y divide-foreground/8">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-6 text-left"
          >
            <h3 className={`font-heading text-lg font-bold transition-colors ${openIndex === i ? "text-terra-600" : "text-foreground hover:text-terra-600"}`}>
              {item.q}
            </h3>
            <span className={`shrink-0 text-2xl font-light leading-none text-terra-400 transition-transform duration-200 ${openIndex === i ? "rotate-45" : ""}`}>
              +
            </span>
          </button>
          {openIndex === i && (
            <p className="pb-6 font-body text-base leading-relaxed text-foreground/70">
              {item.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
