import SectionDivider from "./SectionDivider";
import ScrollReveal from "./ScrollReveal";

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
  return (
    <section id="opinie" className="relative py-24 md:py-32 px-5 bg-sage-50">
      <SectionDivider variant="meetpiotr-to-testimonials" />

      <div className="max-w-5xl mx-auto relative z-[1]">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="section-kicker font-body text-sage-400">
              Opinie
            </span>
            <h2
              className="font-heading font-bold"
              style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
            >
              Klienci wracają do nas i polecają nas dalej
            </h2>
            <p className="font-body text-brown-500 max-w-2xl mx-auto mt-4 leading-relaxed">
              Najczęściej słyszymy to samo: dobra robota, spokojna współpraca
              i żadnych przykrych niespodzianek po drodze.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 120}>
              <div
                key={t.name}
                className={`bg-white rounded-2xl border border-sage-100/80 relative ${
                  i === 0 ? "p-9 md:col-span-2 xl:col-span-1" : "p-8"
                }`}
                style={{ boxShadow: "var(--shadow-sm)" }}
              >
                {/* Green accent bar */}
                <div className="absolute top-0 left-8 right-8 h-1 bg-sage-300 rounded-b-full" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-5 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 20 20" fill="var(--terra-400)" className="w-5 h-5">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className={`font-body text-brown-600 leading-relaxed mb-6 ${i === 0 ? "text-base" : "text-[0.95rem]"}`}>
                  &ldquo;{t.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-sage-100/80">
                  <div className="w-10 h-10 rounded-full bg-sage-100 flex items-center justify-center">
                    <span className="font-heading font-semibold text-sage-500 text-sm">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-brown-700 text-sm">
                      {t.name}
                    </p>
                    <p className="font-body text-brown-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
