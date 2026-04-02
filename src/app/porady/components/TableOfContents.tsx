"use client";

import { useState, useEffect, useRef } from "react";
import type { PostSection } from "../lib/posts";

interface TableOfContentsProps {
  sections: PostSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const headings = sections.map((_, i) =>
      document.getElementById(`section-${i}`)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = headings.indexOf(entry.target as HTMLElement);
            if (idx !== -1) setActiveIdx(idx);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );

    headings.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      className="sticky top-28 rounded-2xl border border-sage-100/80 bg-white p-6"
      aria-label="Spis treści artykułu"
    >
      <p className="mb-4 font-heading text-xs font-bold uppercase tracking-[0.2em] text-foreground/40">
        Spis treści
      </p>
      <ol className="flex flex-col gap-1">
        {sections.map((section, i) => (
          <li key={i}>
            <a
              href={`#section-${i}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(`section-${i}`)?.scrollIntoView({ behavior: "smooth" });
              }}
              className={`flex items-start gap-3 rounded-lg px-3 py-2 font-body text-sm leading-snug transition-all ${
                activeIdx === i
                  ? "bg-terra-50 font-semibold text-terra-600"
                  : "text-foreground/60 hover:bg-sage-50 hover:text-foreground"
              }`}
            >
              <span
                className={`mt-0.5 shrink-0 text-[10px] font-bold tabular-nums ${
                  activeIdx === i ? "text-terra-400" : "text-foreground/30"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
