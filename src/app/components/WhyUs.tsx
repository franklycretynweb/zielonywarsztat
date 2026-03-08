const reasons = [
  {
    title: "Stała cena",
    desc: "Cena z wyceny to cena z faktury. Bez rozmowy, bez drobnego druku.",
  },
  {
    title: "Punktualność",
    desc: "Jeśli mówimy 8:00, jesteśmy o 8:00. Nie o 8:15.",
  },
  {
    title: "Porządek",
    desc: "Sprzątamy trawnik, podjazd i ogrodzenie. Posesja jak przed nami — albo lepiej.",
  },
  {
    title: "Kontakt z Piotrem",
    desc: "Przez cały projekt rozmawiasz ze mną, nie z biurem",
  },
  {
    title: "Bezpłatna wizyta",
    desc: "Przyjedziemy, ocenimy i wycenimy — bez zobowiązań",
  },
  {
    title: "Gwarancja",
    desc: "Coś nie wyszło? Wracamy i poprawiamy — bezpłatnie, bez dyskusji.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 md:py-32 px-5 bg-sage-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sage-400 text-sm uppercase tracking-widest mb-3">
            Dlaczego my
          </p>
          <h2
            className="font-heading font-bold"
            style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
          >
            Kilka rzeczy, których inni nie obiecują
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="bg-white rounded-2xl p-7 border border-sage-100/80"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <h3 className="font-heading font-semibold text-lg text-brown-700 mb-2">
                {r.title}
              </h3>
              <p className="font-body text-brown-400 text-sm leading-relaxed">
                {r.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
