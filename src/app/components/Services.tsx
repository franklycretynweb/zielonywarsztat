import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";
import { LINKS } from "../lib/site";

const services = [
  {
    name: "Pielęgnacja trawników",
    desc: "Koszenie, nawożenie i wertykulacja, dzięki którym trawnik znowu wygląda równo i zdrowo.",
    image: "/photos/services/lawncare.webp",
  },
  {
    name: "Przycinanie krzewów i drzewek",
    desc: "Formowanie żywopłotów i cięcie roślin tak, żeby ogród był zadbany przez cały sezon.",
    image: "/photos/services/pruning.webp",
  },
  {
    name: "Wycinki kompleksowe",
    desc: "Usuwamy drzewa i krzewy, wywozimy odpady i zostawiamy po sobie czysty teren.",
    image: "/photos/services/treeremoval.webp",
  },
  {
    name: "Nasadzanie i przesadzanie",
    desc: "Dobieramy rośliny do gleby, światła i stylu ogrodu, żeby miały szansę naprawdę się przyjąć.",
    image: "/photos/services/planting.webp",
  },
  {
    name: "Projektowanie i zakładanie ogrodów",
    desc: "Od pustej działki do gotowego ogrodu z trawnikiem, rabatami i sensownym układem przestrzeni.",
    image: "/photos/services/gardendesign.webp",
  },
  {
    name: "Układanie kostki brukowej",
    desc: "Podjazdy, tarasy i ścieżki wykonane równo i na solidnej podbudowie.",
    image: "/photos/services/paving.webp",
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="relative py-28 md:py-40 px-5 bg-sage-50">
      <SectionDivider variant="trustbar-to-services" />
      <div className="max-w-6xl mx-auto relative z-[1]">
        <ScrollReveal>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-end mb-16 md:mb-20">
            <div className="max-w-2xl">
              <span className="section-kicker section-kicker-left font-body text-sage-400 text-left">
                Usługi ogrodnicze
              </span>
              <h2
                className="font-heading font-bold text-left"
                style={{ fontSize: "clamp(2rem, 1.35rem + 2.2vw, 3.15rem)" }}
              >
                Zajmiemy się ogrodem od porządków po pełną realizację
              </h2>
            </div>
            <p className="font-body text-brown-600 text-base md:text-lg leading-relaxed max-w-xl lg:ml-auto">
              Robimy pojedyncze prace i większe realizacje. Jeśli nie wiesz
              jeszcze, czego dokładnie potrzebujesz, podczas bezpłatnej wizyty
              podpowiemy najrozsądniejszy zakres prac.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.name} delay={index * 90}>
              <article
                className="card-hover overflow-hidden rounded-[1.75rem] border border-sage-200/80 bg-white"
                style={{ boxShadow: "var(--shadow-md)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-heading text-2xl font-bold text-brown-700 mb-3 leading-tight">
                    {service.name}
                  </h3>
                  <p className="font-body text-brown-500 leading-relaxed text-base">
                    {service.desc}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div
            className="mt-14 rounded-[1.75rem] border border-sage-200/80 bg-linen-50 px-6 py-8 md:px-10 md:py-10"
            style={{ boxShadow: "var(--shadow-sm)" }}
          >
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p
                  className="font-heading font-bold text-brown-800 mb-2"
                  style={{ fontSize: "clamp(1.35rem, 1.05rem + 0.95vw, 1.8rem)" }}
                >
                  Nie wiesz jeszcze, od czego zacząć?
                </p>
                <p className="font-body text-brown-600 text-base leading-relaxed">
                  Wyślij zdjęcie ogrodu na WhatsApp. Napisz, co Ci przeszkadza
                  albo co chcesz osiągnąć, a podpowiemy Ci najlepszy pierwszy krok.
                </p>
              </div>

              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary shrink-0"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Wyślij zdjęcie ogrodu
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
