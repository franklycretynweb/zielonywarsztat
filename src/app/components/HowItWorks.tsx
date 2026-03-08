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
    desc: "Wykonujemy pracę terminowo, sprzątamy po sobie — Ty odbierasz gotowy ogród.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 md:py-32 px-5 bg-linen-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sage-400 text-sm uppercase tracking-widest mb-3">
            Prosty proces
          </p>
          <h2
            className="font-heading font-bold"
            style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
          >
            Jak to działa
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <span
                className="font-heading font-bold text-sage-200 leading-none"
                style={{ fontSize: "clamp(3.5rem, 3rem + 2vw, 5rem)" }}
              >
                {s.num}
              </span>
              <h3 className="font-heading text-xl font-semibold mt-4 mb-3 text-brown-700">
                {s.title}
              </h3>
              <p className="font-body text-brown-400 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center bg-white rounded-2xl p-8 border border-sage-100/80" style={{ boxShadow: "var(--shadow-sm)" }}>
          <p className="font-body text-brown-500 mb-5 text-lg">
            Większość klientów dzwoni i umawia wizytę tego samego dnia
          </p>
          <a href="tel:+48123456789" className="btn-cta">
            Umów bezpłatną wizytę &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
