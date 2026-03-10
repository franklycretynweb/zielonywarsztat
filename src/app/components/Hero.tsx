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
      {/* Dark overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,26,12,0.7) 0%, rgba(20,26,12,0.6) 40%, rgba(20,26,12,0.65) 70%, rgba(20,26,12,0.8) 100%)",
        }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-1.5 mb-8 mx-auto flex w-max">
          <div className="w-2 h-2 rounded-full bg-sage-300 shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
          <span className="font-body text-white/90 text-sm font-medium tracking-wide uppercase">Szczecin i okolice</span>
        </div>

        <h1
          className="font-heading font-bold mb-7 leading-[1.05] tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 1.5rem + 5vw, 4.5rem)", textShadow: "0 2px 24px rgba(0,0,0,0.5)", color: "#f5f0e6" }}
        >
          Ogród, z którego<br className="hidden sm:block" />{" "}
          <span style={{ color: "#c8d6b8" }}>będziesz dumny</span>
        </h1>

        <p
          className="font-body text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md"
          style={{ fontSize: "clamp(1.05rem, 0.9rem + 0.8vw, 1.35rem)" }}
        >
          Pielęgnacja, przycinanie, nasadzenia, kostka — przyjedziemy,
          wycenimy za darmo. Cena z wyceny to cena na fakturze.
          Żadnych niespodzianek.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+48578816720"
            className="btn-cta !px-8 !py-4 !min-h-[56px] !text-lg shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Zadzwoń po bezpłatną wycenę
          </a>
          <a
            href="#uslugi"
            className="text-white hover:text-white font-body text-base font-medium underline underline-offset-8 decoration-white/40 hover:decoration-white/100 transition-all duration-300 drop-shadow-md"
          >
            Zobacz nasze usługi
          </a>
        </div>
      </div>
    </section>
  );
}
