import type { Metadata } from "next";
import Link from "next/link";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Kontakt — Umów bezpłatną wycenę | Zielony Warsztat Piotra Szczecin",
  description:
    "Zadzwoń lub napisz do Piotra: +48 578 816 720. Bezpłatna wycena ogrodnicza w Szczecinie i okolicach (Police, Goleniów, Stargard, Gryfino). Odpowiadamy tego samego dnia.",
};

const faq = [
  {
    q: "Czy wycena jest naprawdę bezpłatna?",
    a: "Tak, zawsze. Przyjeżdżamy, oglądamy ogród i mówimy co naprawdę warto zrobić — bez żadnych kosztów i bez zobowiązań z Twojej strony.",
  },
  {
    q: "Jak szybko możecie przyjechać?",
    a: "Zazwyczaj umawiamy wizytę w ciągu 2–5 dni roboczych. W sezonie terminy mogą być dłuższe — warto się odezwać z wyprzedzeniem.",
  },
  {
    q: "Jaki jest obszar działania?",
    a: "Obsługujemy Szczecin i okolice w promieniu do 50 km — m.in. Police, Goleniów, Stargard, Gryfino, Nowe Warpno i Świnoujście.",
  },
  {
    q: "Czy mogę wysłać zdjęcia ogrodu przed wizytą?",
    a: "Tak i bardzo to polecamy. Wyślij zdjęcia na WhatsApp — Piotr od razu powie, co widzi i czy to jest coś w naszym zakresie.",
  },
];

export default function Page() {
  return (
    <>
      {/* LocalBusiness JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Zielony Warsztat Piotra",
            telephone: "+48578816720",
            email: "biuro@zielonywarsztat.com",
            url: "https://zielonywarsztat.pl",
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 53.4285,
                longitude: 14.5528,
              },
              geoRadius: "50000",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                opens: "07:00",
                closes: "18:00",
              },
            ],
            priceRange: "$$",
          }),
        }}
      />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-[38vh] items-end overflow-hidden bg-[#1e2415] pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(106,122,92,0.22),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(90,60,30,0.1),transparent_50%)]" />
          <div className="relative mx-auto w-full max-w-6xl px-8 pb-12 md:pb-16">
            <nav className="mb-6 flex items-center gap-2 font-body text-sm text-white/40">
              <Link href="/" className="transition-colors hover:text-white/70">Strona główna</Link>
              <span>/</span>
              <span className="text-white/60">Kontakt</span>
            </nav>

            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <span className="mb-3 block font-body text-sm font-medium uppercase tracking-[0.2em] text-sage-300">
                  Szczecin i okolice do 50 km
                </span>
                <h1
                  className="max-w-[22ch] font-heading font-extrabold text-white"
                  style={{ fontSize: "clamp(2.2rem, 1.4rem + 3vw, 4rem)" }}
                >
                  Porozmawiajmy o Twoim ogrodzie
                </h1>
              </div>
              <div className="flex flex-col gap-1 lg:text-right">
                <a
                  href="tel:+48578816720"
                  className="font-heading font-bold text-white transition-colors hover:text-[#e0a580]"
                  style={{ fontSize: "clamp(1.4rem, 1rem + 1.5vw, 2rem)" }}
                >
                  +48 578 816 720
                </a>
                <span className="font-body text-sm text-white/45">Pon–Sob 7:00–18:00</span>
              </div>
            </div>
          </div>
        </section>

        {/* Główna sekcja kontaktowa */}
        <Contact />

        {/* FAQ */}
        <section className="border-t border-foreground/8 bg-[#faf8f4] px-8 py-16 md:py-20">
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
              {faq.map((item) => (
                <div key={item.q} className="py-6">
                  <h3 className="mb-3 font-heading text-lg font-bold text-foreground">
                    {item.q}
                  </h3>
                  <p className="font-body text-base leading-relaxed text-foreground/70">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer hideCta />
      </main>
    </>
  );
}
