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
    <section className="py-24 md:py-32 px-5 bg-sage-50">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-sage-400 text-sm uppercase tracking-widest mb-3">
          Zasięg
        </p>
        <h2
          className="font-heading font-bold mb-12"
          style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
        >
          Gdzie działamy
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {towns.map((town) => (
            <span
              key={town}
              className="bg-white text-sage-700 font-body font-medium px-5 py-2.5 rounded-full text-base border border-sage-100"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              {town}
            </span>
          ))}
          <span
            className="bg-sage-100 text-sage-600 font-body font-medium px-5 py-2.5 rounded-full text-base border border-sage-200/50"
          >
            + okolice do 50 km
          </span>
        </div>

        <p className="font-body text-brown-400 text-base">
          Nie ma Cię na liście?{" "}
          <a
            href="tel:+48123456789"
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
