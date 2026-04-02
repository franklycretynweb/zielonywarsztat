import Link from "next/link";
import Footer from "./Footer";
import { LINKS, SERVICES } from "../lib/site";

interface ProcessStep {
  title: string;
  text: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface ServicePageLayoutProps {
  title: string;
  description: string;
  forWhom?: string[];
  whatWeDo?: { label: string; text: string }[];
  whenToOrder?: string[];
  process?: ProcessStep[];
  faq?: FaqItem[];
}

const defaultForWhom = [
  "Właściciele domów z ogrodami, które potrzebują regularnej opieki",
  "Osoby, które chcą efektu bez własnego angażowania się w prace",
  "Klienci, którym zależy na stałej cenie i terminowości",
];

const defaultWhatWeDo = [
  { label: "Ocena stanu", text: "Przyjeżdżamy i oceniamy aktualny stan. Ustalamy zakres i priorytet prac." },
  { label: "Realizacja", text: "Wykonujemy prace zgodnie z ustaleniami. Piotr osobiście nadzoruje każdy etap." },
  { label: "Porządek po pracy", text: "Wywóz resztek i posprzątanie terenu jest zawsze wliczone w zakres." },
];

const defaultWhenToOrder = [
  "Kiedy ogród wymaga regularnej opieki, ale nie masz na to czasu",
  "Po sezonie, kiedy nakumulowały się zaległości",
  "Przed ważnym wydarzeniem — spotkanie, sprzedaż nieruchomości",
  "Kiedy nie wiesz od czego zacząć i potrzebujesz oceny fachowca",
];

const defaultProcess: ProcessStep[] = [
  { title: "Kontakt i wstępna rozmowa", text: "Dzwonisz lub piszesz. Rozmawiamy o tym, czego potrzebujesz i ustalamy termin wizyty." },
  { title: "Bezpłatna wycena na miejscu", text: "Piotr przyjeżdża, ogląda ogród i mówi co naprawdę warto zrobić. Zakres i cena są jasne przed startem." },
  { title: "Realizacja prac", text: "Pracujemy w ustalonym terminie. Bezpośredni kontakt z Piotrem przez cały czas trwania zlecenia." },
  { title: "Odbiór i efekt końcowy", text: "Kończymy z posprzątanym terenem i efektem, który widać od razu. Możliwość stałej współpracy." },
];

const defaultFaq: FaqItem[] = [
  {
    q: "Czy wycena jest bezpłatna?",
    a: "Tak, wycena na miejscu jest zawsze bezpłatna i bez zobowiązań. Przyjeżdżamy, oglądamy ogród i mówimy co naprawdę warto zrobić.",
  },
  {
    q: "Jak szybko możecie zacząć?",
    a: "Zależy od terminarza, ale zazwyczaj realizujemy zlecenia w ciągu 1–2 tygodni od ustalenia zakresu prac.",
  },
  {
    q: "Czy cena może się zmienić w trakcie?",
    a: "Nie. Zakres i cena są ustalane przed startem. Jeśli w trakcie pojawi się coś nieprzewidzianego, informujemy od razu i pytamy o zgodę.",
  },
  {
    q: "Czy pracujecie poza Szczecinem?",
    a: "Tak, obsługujemy okolice Szczecina w promieniu do 50 km. Zadzwoń i sprawdź czy Twoja lokalizacja jest w zasięgu.",
  },
];

export default function ServicePageLayout({
  title,
  description,
  forWhom = defaultForWhom,
  whatWeDo = defaultWhatWeDo,
  whenToOrder = defaultWhenToOrder,
  process = defaultProcess,
  faq = defaultFaq,
}: ServicePageLayoutProps) {
  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[55vh] items-end overflow-hidden bg-[#1e2415] pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(106,122,92,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(90,60,30,0.12),transparent_50%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-8 pb-16 md:pb-20">
          <nav className="mb-6 flex items-center gap-2 font-body text-sm text-white/40">
            <Link href="/" className="transition-colors hover:text-white/70">Strona główna</Link>
            <span>/</span>
            <Link href="/#uslugi" className="transition-colors hover:text-white/70">Usługi</Link>
            <span>/</span>
            <span className="text-white/60">{title}</span>
          </nav>
          <h1
            className="max-w-[22ch] font-heading font-extrabold text-white"
            style={{ fontSize: "clamp(2.2rem, 1.4rem + 3vw, 4.2rem)" }}
          >
            {title}
          </h1>
          <p className="mt-5 max-w-[52ch] text-base leading-relaxed text-white/65 md:text-lg">
            {description}
          </p>
          <div className="mt-8">
            <a href={LINKS.tel} className="btn-cta">
              Umów bezpłatną wycenę
            </a>
          </div>
        </div>
      </section>

      {/* Dla kogo */}
      <section className="border-b border-foreground/8 px-8 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.2em] text-terra-500">
            Dla kogo
          </p>
          <h2
            className="mb-10 max-w-[28ch] font-heading font-bold text-foreground"
            style={{ fontSize: "clamp(1.6rem, 1rem + 2vw, 2.4rem)" }}
          >
            Ta usługa jest dla Ciebie, jeśli...
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {forWhom.map((item, i) => (
              <div key={i} className="rounded-2xl border border-foreground/8 bg-white px-6 py-5">
                <span className="mb-3 block font-heading text-3xl font-bold text-foreground/8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-body text-base leading-relaxed text-foreground/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Co dokładnie robimy */}
      <section className="border-b border-foreground/8 bg-[#faf8f4] px-8 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.2em] text-terra-500">
            Zakres prac
          </p>
          <h2
            className="mb-10 max-w-[28ch] font-heading font-bold text-foreground"
            style={{ fontSize: "clamp(1.6rem, 1rem + 2vw, 2.4rem)" }}
          >
            Co dokładnie robimy
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {whatWeDo.map((item, i) => (
              <div key={i} className="flex flex-col gap-3">
                <div className="h-px w-10 bg-terra-400" />
                <h3 className="font-heading text-xl font-bold text-foreground">{item.label}</h3>
                <p className="font-body text-base leading-relaxed text-foreground/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kiedy warto zamówić */}
      <section className="border-b border-foreground/8 px-8 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.2em] text-terra-500">
            Kiedy warto
          </p>
          <h2
            className="mb-10 max-w-[28ch] font-heading font-bold text-foreground"
            style={{ fontSize: "clamp(1.6rem, 1rem + 2vw, 2.4rem)" }}
          >
            Kiedy warto to zamówić
          </h2>
          <div className="flex flex-wrap gap-3">
            {whenToOrder.map((item, i) => (
              <span
                key={i}
                className="rounded-full border border-foreground/10 bg-white px-5 py-3 font-body text-sm font-medium leading-relaxed text-foreground/80"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Jak wygląda proces */}
      <section className="border-b border-foreground/8 bg-[#faf8f4] px-8 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.2em] text-terra-500">
            Proces
          </p>
          <h2
            className="mb-10 max-w-[28ch] font-heading font-bold text-foreground"
            style={{ fontSize: "clamp(1.6rem, 1rem + 2vw, 2.4rem)" }}
          >
            Jak wygląda współpraca
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <div key={i} className="flex flex-col gap-4">
                <span
                  className="font-heading font-bold leading-none text-foreground/10"
                  style={{ fontSize: "clamp(3rem, 4vw, 4.5rem)" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground">{step.title}</h3>
                <p className="font-body text-sm leading-relaxed text-foreground/65">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zdjęcia / efekty */}
      <section className="border-b border-foreground/8 px-8 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.2em] text-terra-500">
            Realizacje
          </p>
          <h2
            className="mb-10 max-w-[28ch] font-heading font-bold text-foreground"
            style={{ fontSize: "clamp(1.6rem, 1rem + 2vw, 2.4rem)" }}
          >
            Efekty naszej pracy
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl bg-foreground/5 flex items-center justify-center"
              >
                <span className="font-body text-sm text-foreground/25">Zdjęcie wkrótce</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-foreground/8 bg-[#faf8f4] px-8 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-2 font-body text-sm font-medium uppercase tracking-[0.2em] text-terra-500">
            FAQ
          </p>
          <h2
            className="mb-10 font-heading font-bold text-foreground"
            style={{ fontSize: "clamp(1.6rem, 1rem + 2vw, 2.4rem)" }}
          >
            Najczęstsze pytania
          </h2>
          <div className="flex flex-col divide-y divide-foreground/8">
            {faq.map((item, i) => (
              <div key={i} className="py-6">
                <h3 className="mb-3 font-heading text-lg font-bold text-foreground">{item.q}</h3>
                <p className="font-body text-base leading-relaxed text-foreground/70">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e2415] px-8 py-16 text-white md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="mb-5 font-heading font-extrabold text-white"
            style={{ fontSize: "clamp(1.8rem, 1.2rem + 2.5vw, 3rem)" }}
          >
            Gotowy żeby ogarnąć ogród?
          </h2>
          <p className="mb-8 font-body text-base leading-relaxed text-white/60 md:text-lg">
            Zadzwoń lub napisz — Piotr odezwie się tego samego dnia i umówi bezpłatną wycenę na miejscu.
          </p>
          <a href={LINKS.tel} className="btn-cta">
            Umów bezpłatną wycenę
          </a>
        </div>
      </section>

      {/* Inne usługi */}
      <section className="border-t border-foreground/8 px-8 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 font-heading text-sm font-bold uppercase tracking-[0.2em] text-foreground/40">
            Inne usługi
          </p>
          <div className="flex flex-wrap gap-3">
            {SERVICES.filter((s) => s.label !== title).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-full border border-foreground/12 bg-white px-5 py-2.5 font-body text-sm font-medium text-brown-700 transition-colors hover:border-terra-300 hover:text-terra-600"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
