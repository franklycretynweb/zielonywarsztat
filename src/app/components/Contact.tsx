"use client";

import { useState, type FormEvent } from "react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Zadzwoń lub napisz",
    desc: "Opisz co potrzebujesz — doradzimy już przy pierwszej rozmowie.",
  },
  {
    num: "02",
    title: "Bezpłatna wizyta",
    desc: "Przyjedziemy, ocenimy teren i przedstawimy wycenę. Bez zobowiązań.",
  },
  {
    num: "03",
    title: "Wykonujemy pracę",
    desc: "Terminowo, ze sprzątaniem po sobie — Ty odbierasz gotowy ogród.",
  },
];

const towns = ["Szczecin", "Police", "Goleniów", "Stargard", "Gryfino", "Nowe Warpno", "Świnoujście"];

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
    <section id="kontakt" className="relative py-24 md:py-32 px-5 bg-sage-100">
      <div className="max-w-5xl mx-auto relative z-[1]">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-kicker font-body text-sage-400">
              Kontakt
            </span>
            <h2
              className="font-heading font-bold"
              style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
            >
              Umów bezpłatną wizytę
            </h2>
          </div>
        </ScrollReveal>

        {/* How it works — 3 steps */}
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mb-16">
            {steps.map((s, i) => (
              <div key={s.num} className="text-center">
                <span
                  className="font-heading font-bold text-sage-500 leading-none"
                  style={{ fontSize: "clamp(3rem, 2.5rem + 1.5vw, 4.5rem)" }}
                >
                  {s.num}
                </span>
                <h3 className="font-heading text-xl font-bold mt-3 mb-2 text-brown-800">
                  {s.title}
                </h3>
                <p className="font-body text-brown-600 text-base leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left — contact info */}
          <div className="lg:col-span-2">
            <div className="mb-10">
              <p className="font-body text-brown-400 text-xs uppercase tracking-widest mb-2">
                Telefon
              </p>
              <a
                href="tel:+48578816720"
                className="font-heading font-bold text-brown-700 hover:text-terra-500 transition-colors"
                style={{ fontSize: "clamp(1.5rem, 1.2rem + 1.5vw, 2rem)" }}
              >
                +48 578 816 720
              </a>
            </div>

            <a
              href="https://wa.me/48578816720"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white font-body font-semibold px-6 py-3 rounded-xl mb-10 hover:bg-[#20bd5a] transition-colors min-h-[48px]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

            <div className="mb-10">
              <p className="font-body text-brown-400 text-xs uppercase tracking-widest mb-2">
                Email
              </p>
              <a
                href="mailto:piotr@zielonywarsztat.pl"
                className="font-body text-lg text-brown-600 hover:text-terra-500 transition-colors underline underline-offset-2 decoration-brown-200"
              >
                piotr@zielonywarsztat.pl
              </a>
            </div>

            <div className="mb-10">
              <p className="font-body text-brown-400 text-xs uppercase tracking-widest mb-2">
                Godziny pracy
              </p>
              <p className="font-body text-brown-600 text-lg">
                Pon–Sob 7:00–18:00
              </p>
            </div>

            <div className="bg-sage-50 rounded-xl p-5 border border-sage-100">
              <p className="font-body text-sage-600 text-sm leading-relaxed">
                Większość zapytań odpowiadamy <strong>w ciągu 2 godzin</strong>. Zadzwoń
                lub zostaw wiadomość — odezwiemy się szybko.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="bg-sage-50 rounded-2xl p-12 text-center border border-sage-100" style={{ boxShadow: "var(--shadow-md)" }}>
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-sage-200 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-8 h-8 text-sage-600">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="font-heading text-2xl font-bold mb-2 text-brown-700">
                  Wiadomość wysłana!
                </h3>
                <p className="font-body text-brown-500">
                  Piotr oddzwoni osobiście — zwykle w ciągu 2 godzin, najdalej następnego dnia.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 lg:p-10 border border-sage-100/80"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <p className="font-heading font-semibold text-brown-700 text-lg mb-1">
                  Otrzymaj bezpłatną wycenę
                </p>
                <p className="font-body text-brown-400 text-sm mb-7">
                  Wypełnienie zajmuje mniej niż 30 sekund
                </p>

                <div className="mb-8">
                  <label className="block font-body text-brown-600 text-xs uppercase tracking-widest mb-2">
                    Imię
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="np. Jan Kowalski"
                    className="w-full px-0 py-2 border-b-2 border-sage-200 font-body text-brown-800 text-lg focus:outline-none focus:border-brown-800 transition-colors bg-transparent placeholder:text-brown-200"
                  />
                </div>

                <div className="mb-8">
                  <label className="block font-body text-brown-600 text-xs uppercase tracking-widest mb-2">
                    Numer telefonu
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="np. 600 123 456"
                    className="w-full px-0 py-2 border-b-2 border-sage-200 font-body text-brown-800 text-lg focus:outline-none focus:border-brown-800 transition-colors bg-transparent placeholder:text-brown-200"
                  />
                </div>

                <div className="mb-8">
                  <label className="block font-body text-brown-600 text-xs uppercase tracking-widest mb-2">
                    Czego potrzebujesz?
                  </label>
                  <select
                    required
                    className="w-full px-0 py-2 border-b-2 border-sage-200 font-body text-brown-800 text-lg focus:outline-none focus:border-brown-800 transition-colors bg-transparent appearance-none rounded-none"
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

                <div className="mb-10">
                  <label className="block font-body text-brown-600 text-xs uppercase tracking-widest mb-2">
                    Wiadomość{" "}
                    <span className="text-brown-300 font-normal lowercase tracking-normal">(opcjonalne)</span>
                  </label>
                  <textarea
                    rows={1}
                    placeholder="Opisz krótko co potrzebujesz..."
                    className="w-full px-0 py-2 border-b-2 border-sage-200 font-body text-brown-800 text-lg focus:outline-none focus:border-brown-800 transition-colors bg-transparent resize-none placeholder:text-brown-200"
                  />
                </div>

                <button type="submit" className="btn-cta w-full !text-lg !py-4">
                  Wyślij — oddzwonimy szybko
                </button>

                <p className="text-center font-body text-brown-300 text-xs mt-4 flex items-center justify-center gap-1.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3.5 h-3.5">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  Twoje dane służą tylko do odpowiedzi na zapytanie
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Service area */}
        <ScrollReveal>
          <div className="mt-16 pt-10 border-t border-sage-300/60 text-center">
            <p className="font-heading font-semibold text-brown-700 text-base uppercase tracking-widest mb-5">Gdzie jesteśmy?</p>
            <div className="flex flex-wrap justify-center gap-2">
              {towns.map((town) => (
                <span
                  key={town}
                  className="bg-white text-brown-700 font-body font-semibold px-4 py-2 rounded-full text-sm border border-sage-300"
                  style={{ boxShadow: "var(--shadow-sm)" }}
                >
                  {town}
                </span>
              ))}
              <span className="bg-sage-200 text-sage-700 font-body font-semibold px-4 py-2 rounded-full text-sm border border-sage-300">
                + okolice do 50 km
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
