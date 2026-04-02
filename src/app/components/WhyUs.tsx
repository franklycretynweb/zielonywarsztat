"use client";

import SectionDivider from "./SectionDivider";
import ScrollReveal, { StaggerReveal, StaggerChild } from "./ScrollReveal";

const reasons = [
  {
    iconSrc: "/icons/free-visit.svg",
    title: "Bezpłatna wizyta",
    desc: "Przyjedziemy, ocenimy teren i wycenimy — bez zobowiązań i ukrytych kosztów.",
  },
  {
    iconSrc: "/icons/guarantee.svg",
    title: "Gwarancja jakości",
    desc: "Coś nie wyszło? Wracamy i poprawiamy bezpłatnie. Bez dyskusji, bez drobnego druku.",
  },
  {
    iconSrc: "/icons/direct-contact.svg",
    title: "Bezpośredni kontakt z Piotrem",
    desc: "Przez cały projekt masz mój numer. Żadnych pośredników, żadnych konsultantów.",
  },
  {
    iconSrc: "/icons/equipment.svg",
    title: "Własny profesjonalny sprzęt",
    desc: "Pracujemy własnym, profesjonalnym sprzętem — nie pożyczonym, nie z wypożyczalni.",
  },
  {
    iconSrc: "/icons/waste-removal.svg",
    title: "Wywóz odpadów w cenie",
    desc: "Trawa, gałęzie, korzenie — wywozimy wszystko. Teren zostawiamy czysty.",
  },
  {
    iconSrc: "/icons/team.svg",
    title: "Bez podwykonawców",
    desc: "Zawsze przyjeżdżamy my — nie wynajmujemy obcych ekip. Wiesz dokładnie, kto pojawi się na Twojej posesji.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative py-24 md:py-32 px-5 bg-forest">
      <SectionDivider variant="meetpiotr-to-whyus" />

      <div className="max-w-5xl mx-auto relative z-[1]">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-kicker font-body text-sage-300">
              Dlaczego my
            </span>
            <h2
              className="font-heading font-bold text-linen-100"
              style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
            >
              Kilka rzeczy, których inni nie obiecują
            </h2>
          </div>
        </ScrollReveal>

        <StaggerReveal staggerDelay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map((r, i) => (
              <StaggerChild key={r.title} variant="up" blur>
                <div
                  className="bg-white rounded-2xl p-7 border border-sage-100/80 h-full"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  <div className="w-12 h-12 mb-5 rounded-xl bg-sage-50 border border-sage-100 flex items-center justify-center overflow-hidden">
                    <img
                      src={r.iconSrc}
                      alt=""
                      className="w-7 h-7 object-contain"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display = "none";
                      }}
                    />
                  </div>
                  <h3 className="font-heading font-semibold text-lg text-brown-700 mb-2">
                    {r.title}
                  </h3>
                  <p className="font-body text-brown-400 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </StaggerChild>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
}
