import Image from "next/image";

const services = [
  {
    name: "Pielęgnacja trawników",
    desc: "Koszenie, nawożenie, wertykulacja — trawnik, który wygląda jak powinien. Regularnie albo jednorazowo.",
    image: "/photos/services/lawncare.webp",
  },
  {
    name: "Przycinanie krzewów i drzewek",
    desc: "Formowanie żywopłotów i cięcie krzewów — z głową, precyzyjnie, z efektem który widać przez cały sezon.",
    image: "/photos/services/pruning.webp",
  },
  {
    name: "Wycinki kompleksowe",
    desc: "Usuwamy drzewa i krzewy z korzeniami, wywozimy wszystko i zostawiamy czysty teren. Żadnych śladów.",
    image: "/photos/services/treeremoval.webp",
  },
  {
    name: "Nasadzanie i przesadzanie",
    desc: "Dobieramy rośliny do gleby i nasłonecznienia Twojej działki — i sadzimy tam, gdzie będą rosły najlepiej.",
    image: "/photos/services/planting.webp",
  },
  {
    name: "Projektowanie i zakładanie ogrodów",
    desc: "Od pustej działki do ogrodu, który robi wrażenie — projekt, trawnik, rabaty, ścieżki. Wszystko pod klucz.",
    image: "/photos/services/gardendesign.webp",
  },
  {
    name: "Układanie kostki brukowej",
    desc: "Podjazdy, tarasy i ścieżki — ułożone na solidnej podbudowie. Równo, bez opadania, bez trawy między fugami.",
    image: "/photos/services/paving.webp",
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="py-24 md:py-32 px-5 bg-linen-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-body text-sage-400 text-sm uppercase tracking-widest mb-3">
            Nasze usługi
          </p>
          <h2
            className="font-heading font-bold"
            style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
          >
            Co robimy
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((s) => (
            <div
              key={s.name}
              className="card-hover group bg-white rounded-2xl overflow-hidden border border-sage-100/80"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-lg font-semibold mb-2 text-brown-700">
                  {s.name}
                </h3>
                <p className="font-body text-brown-400 leading-relaxed text-sm">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <p className="font-body text-brown-400 mb-5 text-lg">
            Nie wiesz od czego zacząć? Zadzwoń — powiemy Ci szczerze, co ma sens, a co nie.
          </p>
          <a href="tel:+48123456789" className="btn-cta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +48 123 456 789
          </a>
        </div>
      </div>
    </section>
  );
}
