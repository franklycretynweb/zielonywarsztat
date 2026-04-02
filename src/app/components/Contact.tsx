"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal, { StaggerReveal, StaggerChild } from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

const steps = [
  {
    num: "01",
    title: "Zadzwoń albo napisz",
    desc: "Powiedz krótko, czego potrzebujesz.",
  },
  {
    num: "02",
    title: "Bezpłatna wizyta",
    desc: "Przyjeżdżamy, oglądamy i wyceniamy.",
  },
  {
    num: "03",
    title: "Robimy robotę",
    desc: "Terminowo, z porządkiem po sobie.",
  },
];

const towns = [
  "Szczecin",
  "Police",
  "Goleniów",
  "Stargard",
  "Gryfino",
  "Nowe Warpno",
  "Świnoujście",
];

const serviceOptions = [
  "Pielęgnacja trawników",
  "Przycinanie krzewów i drzewek",
  "Wycinki kompleksowe",
  "Nasadzanie i przesadzanie roślin",
  "Projektowanie i zakładanie ogrodów",
  "Układanie kostki brukowej",
  "Nie wiem — chcę porozmawiać",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="kontakt" className="relative py-24 md:py-32 px-6 bg-linen-100">
      <SectionDivider variant="faq-to-contact" />

      <div className="max-w-6xl mx-auto relative z-[1]">
        {/* Section Header — left-aligned, editorial */}
        <ScrollReveal variant="up" blur>
          <div className="mb-16 md:mb-20">
            <span className="section-kicker section-kicker-left font-body text-sage-400">
              Kontakt
            </span>
            <h2
              className="font-heading font-bold text-foreground mt-4 max-w-xl"
              style={{ fontSize: "clamp(2rem, 1.5rem + 2.5vw, 3.5rem)" }}
            >
              Porozmawiajmy o Twoim ogrodzie
            </h2>
          </div>
        </ScrollReveal>

        {/* Split-Screen Conversion Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* ===== LEFT: IMMEDIATE ACTION ===== */}
          <ScrollReveal variant="right" blur>
            <div className="flex flex-col gap-10">
              {/* Giant Phone CTA */}
              <div>
                <p className="font-body text-foreground/70 text-xs uppercase tracking-[0.2em] mb-3 font-medium">
                  Najszybszy kontakt
                </p>
                <a
                  href="tel:+48578816720"
                  className="group flex items-center gap-4 font-heading font-bold text-foreground hover:text-terra-500 transition-colors"
                  style={{ fontSize: "clamp(1.8rem, 1.5rem + 1.5vw, 2.8rem)" }}
                >
                  <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-sage-100 border border-sage-200 group-hover:bg-terra-50 group-hover:border-terra-200 transition-colors shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-sage-600 group-hover:text-terra-500 transition-colors">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  +48 578 816 720
                </a>
              </div>

              {/* WhatsApp Block */}
              <a
                href="https://wa.me/48578816720"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 w-fit"
              >
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 group-hover:bg-[#25D366]/20 transition-colors shrink-0">
                  <svg viewBox="0 0 24 24" fill="#25D366" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                <div>
                  <span className="font-heading font-bold text-lg text-foreground group-hover:text-[#25D366] transition-colors">
                    Napisz na WhatsApp
                  </span>
                  <span className="block font-body text-sm text-foreground/60">
                    Odpiszę najdalej w kilka minut
                  </span>
                </div>
              </a>

              {/* Personal reassurance */}
              <div className="rounded-2xl bg-sage-50/80 border border-sage-200/60 p-6">
                <p className="font-body text-foreground/70 text-[0.95rem] leading-relaxed">
                  <span className="font-bold text-foreground">Odbieram osobiście.</span>{" "}
                  Jeśli akurat pracuję i nie słyszę — napisz SMS lub WhatsApp, oddzwonię najszybciej jak mogę.
                </p>
              </div>

              {/* Compact Vertical Timeline */}
              <div className="mt-2">
                <p className="font-body text-foreground/70 text-xs uppercase tracking-[0.2em] mb-6 font-medium">
                  Jak to wygląda?
                </p>
                <div className="flex flex-col gap-0">
                  {steps.map((s, i) => (
                    <div key={s.num} className="flex gap-5 group">
                      {/* Timeline line + dot */}
                      <div className="flex flex-col items-center shrink-0">
                        <div className="w-10 h-10 rounded-full border-2 border-sage-300 bg-white flex items-center justify-center">
                          <span className="font-heading font-bold text-sage-600 text-sm">{s.num}</span>
                        </div>
                        {i < steps.length - 1 && (
                          <div className="w-[2px] h-full min-h-[40px] bg-sage-200" />
                        )}
                      </div>
                      {/* Content */}
                      <div className={`pb-8 ${i === steps.length - 1 ? "pb-0" : ""}`}>
                        <p className="font-heading font-bold text-foreground text-base leading-snug">
                          {s.title}
                        </p>
                        <p className="font-body text-foreground/70 text-sm mt-1">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Email & Hours — compact */}
              <div className="flex flex-col sm:flex-row gap-8 pt-2 border-t border-sage-200/60">
                <div>
                  <p className="font-body text-foreground/60 text-xs uppercase tracking-[0.15em] mb-1 font-medium">Email</p>
                  <a
                    href="mailto:biuro@zielonywarsztat.com"
                    className="font-body text-foreground/80 hover:text-terra-500 transition-colors underline underline-offset-2 decoration-foreground/20"
                  >
                    biuro@zielonywarsztat.com
                  </a>
                </div>
                <div>
                  <p className="font-body text-foreground/60 text-xs uppercase tracking-[0.15em] mb-1 font-medium">Godziny</p>
                  <p className="font-body text-foreground/80">Pon–Sob 7:00–18:00</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* ===== RIGHT: FORM ===== */}
          <ScrollReveal variant="left" blur delay={150}>
            {submitted ? (
              <div
                className="bg-white rounded-3xl p-12 text-center border border-sage-100/80"
                style={{ boxShadow: "var(--shadow-lg)" }}
              >
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-sage-100 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8 text-sage-600">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3 text-foreground">
                  Wiadomość wysłana!
                </h3>
                <p className="font-body text-foreground/60 leading-relaxed">
                  Piotr oddzwoni osobiście — zwykle w ciągu 2 godzin, najdalej następnego dnia roboczego.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 md:p-10 lg:p-12 border border-sage-100/60 sticky top-24"
                style={{ boxShadow: "var(--shadow-lg)" }}
              >
                {/* Warm personal header */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-sage-100 border border-sage-200 overflow-hidden">
                        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <rect width="48" height="48" fill="#e6ece0"/>
                          <circle cx="24" cy="18" r="9" fill="#a3b18a"/>
                          <path d="M6 44c0-9.941 8.059-18 18-18s18 8.059 18 18" fill="#a3b18a"/>
                        </svg>
                      </div>
                      {/* Online dot */}
                      <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-[#25D366] rounded-full border-2 border-white" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-foreground text-lg leading-snug">
                        Poproś o bezpłatną wycenę
                      </p>
                      <p className="font-body text-foreground/65 text-sm">
                        Piotr odpowiada osobiście
                      </p>
                    </div>
                  </div>
                  <p className="font-body text-foreground/65 text-[0.9rem] leading-relaxed">
                    Nie lubisz dzwonić? Zostaw kontakt — odezwę się w ciągu 2 godzin.
                  </p>
                </div>

                {/* Fields */}
                <div className="space-y-7">
                  <div>
                    <label className="block font-body text-foreground/80 text-xs uppercase tracking-[0.15em] mb-2 font-medium">
                      Imię
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="np. Jan Kowalski"
                      className="w-full px-0 py-2.5 border-b-2 border-sage-300 font-body text-foreground text-lg focus:outline-none focus:border-foreground transition-colors bg-transparent placeholder:text-foreground/40"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-foreground/80 text-xs uppercase tracking-[0.15em] mb-2 font-medium">
                      Numer telefonu
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="np. 600 123 456"
                      className="w-full px-0 py-2.5 border-b-2 border-sage-300 font-body text-foreground text-lg focus:outline-none focus:border-foreground transition-colors bg-transparent placeholder:text-foreground/40"
                    />
                  </div>

                  <div>
                    <label className="block font-body text-foreground/80 text-xs uppercase tracking-[0.15em] mb-2 font-medium">
                      Czego potrzebujesz?
                    </label>
                    <select
                      required
                      className="w-full px-0 py-2.5 border-b-2 border-sage-300 font-body text-foreground text-lg focus:outline-none focus:border-foreground transition-colors bg-transparent appearance-none rounded-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Wybierz usługę...
                      </option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-body text-foreground/80 text-xs uppercase tracking-[0.15em] mb-2 font-medium">
                      Wiadomość{" "}
                      <span className="text-foreground/45 font-normal lowercase tracking-normal">(opcjonalne)</span>
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Opisz krótko co potrzebujesz..."
                      className="w-full px-0 py-2.5 border-b-2 border-sage-300 font-body text-foreground text-lg focus:outline-none focus:border-foreground transition-colors bg-transparent resize-none placeholder:text-foreground/40"
                    />
                  </div>
                </div>

                <button type="submit" className="btn-cta w-full !text-lg !py-4 mt-10">
                  Wyślij — odpiszemy w 2h
                </button>

                <p className="text-center font-body text-foreground/45 text-xs mt-4 flex items-center justify-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Twoje dane służą tylko do odpowiedzi na zapytanie
                </p>
              </form>
            )}
          </ScrollReveal>
        </div>

        {/* Service Area — compact footer */}
        <ScrollReveal>
          <div className="mt-20 pt-12 border-t border-sage-200/60 text-center">
            <p className="font-heading font-semibold text-foreground/80 text-sm uppercase tracking-[0.2em] mb-5">
              Gdzie pracujemy?
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {towns.map((town) => (
                <span
                  key={town}
                  className="bg-white text-foreground/70 font-body font-medium px-4 py-2 rounded-full text-sm border border-sage-200/80"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  {town}
                </span>
              ))}
              <span className="bg-sage-100 text-sage-700 font-body font-semibold px-4 py-2 rounded-full text-sm border border-sage-200">
                + okolice do 50 km
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
