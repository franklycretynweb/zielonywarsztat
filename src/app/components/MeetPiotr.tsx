"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";


const reasons = [
  {
    title: "Bezpłatna wizyta",
    desc: "Przyjedziemy, ocenimy teren i wycenimy — bez zobowiązań i ukrytych kosztów.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Gwarancja jakości",
    desc: "Coś nie wyszło? Wracamy i poprawiamy bezpłatnie. Bez dyskusji, bez drobnego druku.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    title: "Bezpośredni kontakt z Piotrem",
    desc: "Przez cały projekt masz mój numer. Żadnych pośredników, żadnych konsultantów.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    title: "Własny profesjonalny sprzęt",
    desc: "Pracujemy własnym, profesjonalnym sprzętem — nie pożyczonym, nie z wypożyczalni.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Wywóz odpadów w cenie",
    desc: "Trawa, gałęzie, korzenie — wywozimy wszystko. Teren zostawiamy czysty.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <polyline points="3 6 5 6 21 6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      </svg>
    ),
  },
  {
    title: "Bez podwykonawców",
    desc: "Zawsze przyjeżdżamy my — nie wynajmujemy obcych ekip. Wiesz dokładnie, kto pojawi się na Twojej posesji.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export default function MeetPiotr() {
  return (
    <section id="o-mnie" className="relative py-24 md:py-32 px-5 bg-sage-100">

      <div className="max-w-5xl mx-auto relative z-[1]">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mb-16">
            {/* Photo — real work photo in circular frame */}
            <div className="flex-shrink-0 relative">
              <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full border-4 border-sage-200 overflow-hidden"
                style={{ boxShadow: "var(--shadow-md)" }}>
                <Image
                  src="/photos/services/transplanting.webp"
                  alt="Praca w ogrodzie"
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                />
              </div>
              {/* Decorative leaf */}
              <div className="absolute -top-3 -right-3 w-12 h-6 bg-sage-300/30 rounded-[0_80%_0_80%] -rotate-12" />
              <div className="absolute -bottom-2 -left-2 w-10 h-5 bg-sage-300/25 rounded-[80%_0_80%_0] rotate-[25deg]" />
            </div>

            {/* Story */}
            <div className="max-w-xl lg:pt-4">
              <span className="section-kicker font-body text-sage-400">
                O mnie
              </span>
              <h2
                className="font-heading font-bold mb-8"
                style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
              >
                Poznaj Piotra
              </h2>
              <p className="font-body text-brown-600 text-lg leading-relaxed mb-5">
                Najbardziej lubię pracę, w której na koniec dnia widać, że coś
                naprawdę się zmieniło. Ogród daje właśnie takie poczucie — z czasem
                staje się piękniejszy i bardziej uporządkowany.
              </p>
              <p className="font-body text-brown-600 text-lg leading-relaxed mb-5">
                W swojej pracy stawiam na dokładność, porządek i szacunek do
                miejsca, w którym pracuję.
              </p>
              <p className="font-body text-brown-500 text-lg leading-relaxed italic mb-8">
                Każdy ogród traktuję jak swoją wizytówkę. Dlatego dbam o to, żeby
                efekt cieszył właściciela przez długi czas.
              </p>
              <div className="mt-8 pt-6 border-t border-sage-200/50">
                <p className="font-[var(--font-caveat),cursive] text-5xl text-brown-800 opacity-90 tracking-wider">Piotr</p>
                <p className="font-body text-sm text-sage-500 mt-2 uppercase tracking-widest">Założyciel & Główny Wykonawca</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Differentiators */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <span className="section-kicker font-body text-sage-400">Dlaczego my</span>
            <h2
              className="font-heading font-bold"
              style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
            >
              Kilka rzeczy, których inni nie obiecują
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-sage-200/70 rounded-2xl overflow-hidden border border-sage-200/70">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="flex flex-col items-center text-center gap-3 px-4 py-7 bg-sage-50 hover:bg-white transition-colors duration-200"
              >
                <div className="text-sage-500">{r.icon}</div>
                <p className="font-heading font-semibold text-sm text-brown-700 leading-snug">{r.title}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
