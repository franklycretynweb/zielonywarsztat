import SectionDivider from "./SectionDivider";

const stats = [
  { number: "200+", label: "zadowolonych klientów" },
  { number: "10 lat", label: "w ogrodnictwie" },
  { number: "50 km", label: "zasięg od Szczecina" },
  { number: "100%", label: "cena bez niespodzianek" },
];

export default function Stats() {
  return (
    <section className="relative py-14 md:py-20 px-5 bg-linen-200">
      <SectionDivider variant="trustbar-to-stats" />

      <div className="max-w-5xl mx-auto relative z-[1]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p
                className="font-heading font-bold text-sage-700 leading-none mb-2"
                style={{ fontSize: "clamp(2.25rem, 2rem + 1.5vw, 3.25rem)" }}
              >
                {s.number}
              </p>
              <p className="font-body text-brown-500 text-sm leading-snug">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
