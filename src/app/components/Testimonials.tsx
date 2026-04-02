import SectionDivider from "./SectionDivider";
import ScrollReveal, { StaggerReveal, StaggerChild } from "./ScrollReveal";

const testimonials = [
  {
    name: "Małgorzata K.",
    location: "Szczecin, Pogodno",
    text: "Piotr przyjechał punktualnie, wycena zgadzała się co do złotówki z końcowym rachunkiem. Ogród wygląda pięknie, a po zakończeniu prac posesja była czystsza niż przed ich przyjazdem.",
  },
  {
    name: "Tomasz W.",
    location: "Police",
    text: "Profesjonalny sprzęt, jasny plan działania i codziennie sprzątali po sobie. Widać, że Piotr traktuje każde zlecenie poważnie. Polecam każdemu.",
  },
  {
    name: "Anna i Marek D.",
    location: "Szczecin, Bezrzecze",
    text: "Przez cały projekt rozmawialiśmy bezpośrednio z Piotrem, nie z żadnym pośrednikiem. Wiedzieliśmy co się dzieje na każdym etapie. Cena nie zmieniła się ani o grosz.",
  },
];

export default function Testimonials() {
  const [featured, ...others] = testimonials;

  return (
    <section id="opinie" className="relative py-24 md:py-32 px-5 bg-sage-50">
      <SectionDivider variant="meetpiotr-to-testimonials" />

      <div className="max-w-6xl mx-auto relative z-[1]">
        <ScrollReveal variant="up" blur>
          <div className="mb-16 md:mb-24">
            <span className="section-kicker section-kicker-left font-body text-sage-400">
              Opinie klientów
            </span>
            <h2
              className="font-heading font-bold text-foreground mt-4"
              style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3.5rem)" }}
            >
              Cicha i spokojna współpraca.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerReveal className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          
          {/* LEWA STRONA: FEATURED QUOTE (Editorial Style) */}
          <StaggerChild variant="right" blur className="lg:w-3/5 flex flex-col justify-center">
            <div className="relative">
              {/* Huge subtle quote mark */}
              <span 
                className="absolute -top-10 -left-6 md:-left-10 text-[8rem] leading-none font-serif text-sage-200/50 pointer-events-none select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              
              <p 
                className="relative z-10 font-heading font-medium text-foreground text-balance"
                style={{ fontSize: "clamp(1.5rem, 2vw + 1rem, 2.2rem)", lineHeight: 1.3 }}
              >
                {featured.text}
              </p>
              
              <div className="mt-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-sage-200/50 flex items-center justify-center border border-sage-300/30">
                  <span className="font-heading font-semibold text-sage-700 text-lg">
                    {featured.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-lg">
                    {featured.name}
                  </p>
                  <p className="font-body text-foreground/60 text-sm">{featured.location}</p>
                </div>
              </div>
            </div>
          </StaggerChild>

          {/* PRAWA STRONA: OTHERS (Minimalist cards stack) */}
          <StaggerChild variant="left" blur className="lg:w-2/5 flex flex-col gap-6 lg:gap-8 justify-center">
            {others.map((t, i) => (
              <div 
                key={t.name}
                className="group relative bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-white/40 shadow-sm transition-all hover:bg-white/90 hover:shadow-md"
              >
                {/* 5 subtle stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, idx) => (
                    <svg key={idx} viewBox="0 0 20 20" fill="var(--terra-400)" className="w-4 h-4 opacity-80">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                <p className="font-body text-foreground/80 leading-relaxed mb-6 text-[0.95rem]">
                  &ldquo;{t.text}&rdquo;
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-sage-100 flex items-center justify-center">
                    <span className="font-heading font-semibold text-sage-600 text-xs">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm">
                      {t.name}
                    </p>
                    <p className="font-body text-foreground/50 text-[0.7rem] uppercase tracking-wider">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </StaggerChild>

        </StaggerReveal>
      </div>
    </section>
  );
}
