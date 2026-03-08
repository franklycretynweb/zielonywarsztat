import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-5 pt-20 pb-28 overflow-hidden"
    >
      {/* Background photo */}
      <Image
        src="/photos/herobg/herobg.webp"
        alt=""
        fill
        priority
        className="object-cover"
        quality={85}
        sizes="100vw"
      />
      {/* Strong dark overlay for text readability */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,26,12,0.82) 0%, rgba(25,32,16,0.70) 50%, rgba(20,26,12,0.85) 100%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-8">
          <div className="w-2 h-2 rounded-full bg-sage-300" />
          <span className="font-body text-sage-200 text-sm">Szczecin i okolice</span>
        </div>

        <h1
          className="font-heading font-bold text-white mb-7 leading-[1.05] tracking-tight drop-shadow-lg"
          style={{ fontSize: "clamp(2.5rem, 1.5rem + 5vw, 4.5rem)" }}
        >
          Twój ogród<br className="hidden sm:block" /> w dobrych rękach
        </h1>

        <p
          className="font-body text-white/85 mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ fontSize: "clamp(1.05rem, 0.9rem + 0.8vw, 1.35rem)" }}
        >
          Pielęgnacja, przycinanie, nasadzenia, kostka brukowa i zakładanie
          ogrodów — przyjedziemy do Ciebie bezpłatnie i wycenimy bez zobowiązań.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="tel:+48123456789"
            className="btn-cta !px-8 !py-4 !min-h-[56px] !text-lg shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Zadzwoń po bezpłatną wycenę
          </a>
          <a
            href="#uslugi"
            className="text-white/70 hover:text-white font-body text-base underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition-colors"
          >
            Zobacz nasze usługi
          </a>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          {[
            { label: "Bezpłatna wizyta", sub: "bez zobowiązań" },
            { label: "Stała cena", sub: "bez niespodzianek" },
            { label: "Odpowiedź w 24h", sub: "zwykle szybciej" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/[0.08] backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 text-center min-w-[160px]"
            >
              <p className="font-heading font-semibold text-white text-base leading-tight">
                {item.label}
              </p>
              <p className="font-body text-white/50 text-xs mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
