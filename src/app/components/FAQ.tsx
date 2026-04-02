"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionDivider from "./SectionDivider";
import ScrollReveal, { StaggerReveal, StaggerChild } from "./ScrollReveal";

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
    <section id="faq" className="relative py-24 md:py-32 px-6 bg-sage-800">
      <SectionDivider variant="testimonials-to-faq" />

      <div className="max-w-6xl mx-auto relative z-[1]">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* LEWA KOLUMNA: STICKY HEADER */}
          <div className="lg:w-1/3 shrink-0">
            <div className="sticky top-32">
              <ScrollReveal variant="right" blur>
                <div className="mb-8">
                  <span className="section-kicker section-kicker-left font-body text-sage-300">
                    FAQ
                  </span>
                  <h2
                    className="font-heading font-bold text-linen-100 mt-4 leading-[1.1]"
                    style={{ fontSize: "clamp(2rem, 1.5rem + 2.5vw, 3.5rem)" }}
                  >
                    Pytania, które słyszymy najczęściej
                  </h2>
                  <p className="font-body text-white/55 mt-6 leading-relaxed max-w-sm">
                    Krótko i konkretnie. Jeśli nie widzisz tu swojej sytuacji, 
                    <a href="tel:+48578816720" className="text-sage-300 hover:text-sage-200 ml-1 font-medium underline underline-offset-4 transition-colors">
                      zadzwoń — chętnie odpowiemy.
                    </a>
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* PRAWA KOLUMNA: AKORDEON MINIMALIST (LINIE) */}
          <div className="lg:w-2/3">
            <StaggerReveal className="flex flex-col border-t border-white/10">
              {faqs.map((faq, i) => {
                const isOpen = open === i;
                
                return (
                  <StaggerChild 
                    key={i} 
                    variant="left" 
                    blur 
                    className="border-b border-white/10"
                  >
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-8 text-left cursor-pointer group"
                    >
                      <span className={`font-heading font-semibold text-[1.15rem] leading-snug pr-8 transition-colors ${isOpen ? "text-terra-400" : "text-linen-100 group-hover:text-terra-400"}`}>
                        {faq.q}
                      </span>
                      
                      {/* Minimalist Plus/Minus Icon */}
                      <span className="flex-shrink-0 relative w-6 h-6 flex items-center justify-center text-sage-300">
                        {/* Horyzontalna kreska (zawsze widoczna) */}
                        <span className={`absolute w-full h-[2px] bg-current transition-colors duration-300 ${isOpen ? "bg-terra-400" : "group-hover:bg-terra-400"}`} />
                        {/* Wertykalna kreska (znika przy otwarciu) */}
                        <span 
                          className={`absolute w-[2px] h-full bg-current transition-all duration-300 ${
                            isOpen ? "rotate-90 opacity-0 bg-terra-400" : "rotate-0 opacity-100 group-hover:bg-terra-400"
                          }`} 
                        />
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 font-body text-white/60 leading-relaxed text-[1.05rem] max-w-2xl">
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </StaggerChild>
                );
              })}
            </StaggerReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
