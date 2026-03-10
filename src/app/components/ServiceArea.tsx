import SectionDivider from "./SectionDivider";
import ScrollReveal from "./ScrollReveal";

const towns = [
  "Szczecin",
  "Police",
  "Goleniów",
  "Stargard",
  "Gryfino",
  "Nowe Warpno",
  "Świnoujście",
];

export default function ServiceArea() {
  return (
    <section className="relative py-24 md:py-32 px-5 bg-forest">
      <SectionDivider variant="faq-to-servicearea" />

      <div className="max-w-4xl mx-auto text-center relative z-[1]">
        <ScrollReveal>
          <span className="section-kicker font-body text-sage-300">
            Zasięg
          </span>
          <h2
            className="font-heading font-bold mb-12 text-linen-100"
            style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
          >
            Gdzie działamy
          </h2>
        </ScrollReveal>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {towns.map((town) => (
            <span
              key={town}
              className="bg-white text-sage-700 font-body font-medium px-5 py-2.5 rounded-full text-base border border-white/20"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              {town}
            </span>
          ))}
          <span
            className="bg-sage-700 text-sage-200 font-body font-medium px-5 py-2.5 rounded-full text-base border border-sage-500/30"
          >
            + okolice do 50 km
          </span>
        </div>

        <p className="font-body text-linen-300 text-base">
          Nie ma Cię na liście?{" "}
          <a
            href="tel:+48578816720"
            className="text-terra-500 hover:text-terra-600 underline underline-offset-2 font-medium transition-colors"
          >
            Zadzwoń
          </a>{" "}
          — i tak przyjedziemy sprawdzić.
        </p>
      </div>
    </section>
  );
}
