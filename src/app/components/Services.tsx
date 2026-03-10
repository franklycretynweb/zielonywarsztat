import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

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
    <section id="uslugi" className="relative py-32 md:py-44 px-5 bg-sage-100">
      <SectionDivider variant="trustbar-to-services" />
      <div className="max-w-6xl mx-auto relative z-[1]">
        <ScrollReveal>
          <div className="text-center mb-20">
            <span className="section-kicker font-body text-sage-400">
              Pełen zakres — jedna ekipa
            </span>
            <h2
              className="font-heading font-bold"
              style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
            >
              Co robimy
            </h2>
          </div>
        </ScrollReveal>

        {/* Mobile carousel — no ScrollReveal to avoid intersection observer conflicts */}
        <div className="sm:hidden -mx-5">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-5 scroll-pl-5 pb-4">
            {services.map((s) => (
              <div key={s.name} className="snap-start shrink-0 w-[78vw]">
                <div
                  className="group relative rounded-2xl overflow-hidden aspect-[3/2]"
                  style={{ boxShadow: "var(--shadow-md)" }}
                >
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover"
                    sizes="78vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(30,36,21,0.97) 0%, rgba(30,36,21,0.75) 40%, rgba(30,36,21,0.2) 70%, transparent 100%)",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3
                      className="font-heading text-lg font-bold text-white mb-1.5 leading-snug"
                      style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
                    >
                      {s.name}
                    </h3>
                    <p
                      className="font-body text-white/85 text-sm leading-relaxed"
                      style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet + Desktop grid */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {services.map((s, i) => (
            <ScrollReveal key={s.name} delay={i * 100}>
              <div
                className="card-hover group relative rounded-2xl overflow-hidden aspect-[3/2] cursor-default"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <Image
                  src={s.image}
                  alt={s.name}
                  fill
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(30,36,21,0.97) 0%, rgba(30,36,21,0.75) 40%, rgba(30,36,21,0.2) 70%, transparent 100%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3
                    className="font-heading text-xl font-bold text-white mb-2 leading-snug"
                    style={{ textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
                  >
                    {s.name}
                  </h3>
                  <p
                    className="font-body text-white/85 text-sm leading-relaxed"
                    style={{ textShadow: "0 1px 4px rgba(0,0,0,0.5)" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center mt-14">
            <p className="font-heading font-bold text-brown-800 mb-2" style={{ fontSize: "clamp(1.25rem, 1rem + 1vw, 1.5rem)" }}>
              Nie wiesz, od czego zacząć?
            </p>
            <p className="font-body text-brown-600 mb-6 text-base max-w-md mx-auto leading-relaxed">
              Wyślij nam zdjęcie swojego ogrodu na WhatsApp — odpiszemy szczerze, co warto zrobić i od czego zacząć.
            </p>
            <a
              href="https://wa.me/48578816720"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Napisz na WhatsApp
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
