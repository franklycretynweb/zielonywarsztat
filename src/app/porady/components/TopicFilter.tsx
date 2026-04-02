"use client";

import { useState } from "react";
import type { Category } from "../lib/posts";
import { CATEGORIES } from "../lib/posts";

interface TopicFilterProps {
  onFilterChange: (category: Category | null) => void;
  activeCategory: Category | null;
  counts: Record<string, number>;
}

export default function TopicFilter({ onFilterChange, activeCategory, counts }: TopicFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filtruj artykuły po kategorii">
      {/* All */}
      <button
        onClick={() => onFilterChange(null)}
        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-body text-sm font-semibold transition-all duration-200 ${
          activeCategory === null
            ? "bg-[#1e2415] text-white shadow-sm"
            : "bg-white text-foreground/70 border border-sage-200/80 hover:border-sage-300 hover:text-foreground"
        }`}
      >
        Wszystkie
        <span
          className={`inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
            activeCategory === null ? "bg-white/20 text-white" : "bg-sage-100 text-sage-600"
          }`}
        >
          {Object.values(counts).reduce((a, b) => a + b, 0)}
        </span>
      </button>

      {/* Per category */}
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat;
        const count = counts[cat] ?? 0;
        return (
          <button
            key={cat}
            onClick={() => onFilterChange(cat)}
            className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 font-body text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-terra-500 text-white shadow-sm"
                : "bg-white text-foreground/70 border border-sage-200/80 hover:border-terra-200 hover:text-terra-600"
            }`}
          >
            {cat}
            <span
              className={`inline-flex items-center justify-center rounded-full px-1.5 py-0.5 text-[10px] font-bold leading-none ${
                isActive ? "bg-white/20 text-white" : "bg-sage-100 text-sage-600"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
