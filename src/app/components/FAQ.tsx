"use client";

import { useState } from "react";
import SectionDivider from "./SectionDivider";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Czy cena z wyceny może się zmienić w trakcie prac?",
    a: "Nie. Cena, którą podajemy po bezpłatnej wizycie, jest ostateczna. Jedyny wyjątek — jeśli Ty sam zdecydujesz się na dodatkowe prace, których nie było w pierwotnym planie. Wtedy wyceniamy je osobno i czekamy na Twoją zgodę.",
  },
  {
    q: "Co się stanie, jeśli coś pójdzie nie tak?",
    a: "Wracamy i poprawiamy bezpłatnie. Bez dyskusji, bez drobnego druku. Nasza reputacja zależy od każdego jednego klienta i traktujemy to poważnie.",
  },
  {
    q: "Jak długo czeka się na realizację?",
    a: "Bezpłatną wizytę umawiamy zwykle w ciągu 2–3 dni. Termin realizacji zależy od zakresu prac — mniejsze projekty zaczynamy w ciągu tygodnia, większe planujemy wspólnie tak, żeby termin Ci pasował.",
  },
  {
    q: "Czy przyjeżdżacie za miasto / do okolicznych miejscowości?",
    a: "Tak. Działamy w Szczecinie i promieniu ok. 50 km — Police, Goleniów, Stargard, Gryfino, Nowe Warpno, Świnoujście. Jeśli nie ma Cię na liście, i tak zadzwoń — prawdopodobnie przyjedziemy.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 md:py-32 px-5 bg-sage-100">
      <SectionDivider variant="testimonials-to-faq" />

      <div className="max-w-3xl mx-auto relative z-[1]">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-kicker font-body text-sage-400">
              FAQ
            </span>
            <h2
              className="font-heading font-bold"
              style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
            >
              Często zadawane pytania
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-sage-100/80 overflow-hidden"
              style={{ boxShadow: open === i ? "var(--shadow-md)" : "var(--shadow-sm)" }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-6 text-left cursor-pointer"
              >
                <span className="font-heading font-semibold text-brown-700 text-[1.05rem] leading-snug pr-4">
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-9 h-9 rounded-full bg-sage-50 border border-sage-100 flex items-center justify-center text-sage-500 transition-transform duration-200"
                  style={{
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: open === i ? "300px" : "0",
                  opacity: open === i ? 1 : 0,
                }}
              >
                <p className="px-7 pb-6 font-body text-brown-500 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-brown-400">
            Masz inne pytanie?{" "}
            <a href="tel:+48578816720" className="text-terra-500 hover:text-terra-600 font-medium underline underline-offset-2 transition-colors">
              Zadzwoń — chętnie odpowiemy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
