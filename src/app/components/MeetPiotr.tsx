"use client";

import Image from "next/image";
import ScrollReveal, { StaggerReveal, StaggerChild } from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { LINKS } from "../lib/site";

const proofFacts = [
  "Brak podwykonawców – zawsze przyjeżdża ten sam sprawdzony zespół",
  "Prowadzę realizację bezpośrednio od darmowej wyceny aż do odbioru",
  "Dysponujemy własnym, profesjonalnym sprzętem do każdej usługi",
  "Wywóz odpadów po pracy i gwarancja jakości u nas to standard",
];

export default function MeetPiotr() {
  return (
    <section id="o-mnie" className="relative bg-forest px-6 py-24 md:py-32">
      <SectionDivider variant="services-to-meetpiotr" />

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-[5fr_7fr] lg:gap-24 lg:items-center">
          
          {/* Left: Cinematic Photo */}
          <ScrollReveal variant="left" duration={1.2} blur className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="/photos/about_section.webp"
                alt="Piotr - praca w ogrodzie"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              {/* Subtle inner border for premium magazine feel */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
            </div>
          </ScrollReveal>

          {/* Right: Editorial Content */}
          <div className="flex flex-col justify-center">
            
            <ScrollReveal variant="right" duration={0.8} delay={200} blur>
              <span className="section-kicker section-kicker-left mb-6 font-body text-sage-300">
                Właściciel firmy
              </span>
              
              <h2
                className="mb-8 text-balance font-heading font-bold leading-tight text-white"
                style={{ fontSize: "clamp(2rem, 1.5rem + 2.5vw, 3.5rem)" }}
              >
                Ogród to nie poligon. Traktujemy Twoją posesję z szacunkiem.
              </h2>
              
              <p className="mb-12 text-balance font-body text-xl font-medium leading-relaxed text-linen-100/90 md:text-2xl">
                &quot;Każdy ogród traktuję jak własną wizytówkę. Liczy się dla mnie szybkość, ale nie kosztem dokładności i przejrzystej komunikacji na każdym etapie prac.&quot;
              </p>
            </ScrollReveal>

            <StaggerReveal staggerDelay={0.15} delayChildren={0.6} className="mb-14 flex flex-col gap-5">
              {proofFacts.map((fact) => (
                <StaggerChild key={fact} variant="scale" blur>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 shrink-0 rounded-full bg-terra-500/20 p-1.5 text-terra-400">
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="font-body text-lg leading-snug text-white/80">{fact}</p>
                  </div>
                </StaggerChild>
              ))}
            </StaggerReveal>

            {/* Footer / CTA area */}
            <ScrollReveal variant="up" duration={0.8} delay={800} className="flex flex-col items-start gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-[var(--font-caveat),cursive] text-5xl tracking-widest text-white opacity-90">
                  Piotr
                </p>
                <p className="mt-2 font-body text-sm uppercase tracking-[0.2em] text-sage-300">
                  Założyciel & Wykonawca
                </p>
              </div>
              
              <a
                href={LINKS.tel}
                className="btn-cta w-full text-center sm:w-auto"
              >
                Umów darmową wycenę
              </a>
            </ScrollReveal>

          </div>
        </div>
      </div>
    </section>
  );
}
