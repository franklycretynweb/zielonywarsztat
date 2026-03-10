const promises = [
  {
    title: "Bezpłatna wycena",
    text: "Przyjeżdżamy, oglądamy teren i od razu mówimy, co warto zrobić.",
  },
  {
    title: "Stała cena po ustaleniach",
    text: "To, co ustalamy przed pracą, ma zgadzać się także na końcu.",
  },
  {
    title: "Porządek po zakończeniu",
    text: "Po pracy ogród ma wyglądać lepiej, a nie zostawiać bałagan do sprzątania.",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-sage-800 py-10 md:py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid gap-4 md:grid-cols-3">
          {promises.map((item) => (
            <div
              key={item.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm"
            >
              <p className="font-heading text-linen-100 text-lg font-semibold mb-2">
                {item.title}
              </p>
              <p className="font-body text-sage-200/90 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
