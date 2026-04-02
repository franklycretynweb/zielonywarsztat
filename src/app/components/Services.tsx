import Image from "next/image";
import ScrollReveal, { StaggerReveal, StaggerChild } from "./ScrollReveal";
import { LINKS } from "../lib/site";

import SectionDivider from "./SectionDivider";

const services = [
  {
    name: "Projektowanie i zakładanie ogrodów",
    desc: "Od pustej działki do gotowego ogrodu z trawnikiem, rabatami i sensownym układem przestrzeni.",
    image: "/photos/services/gardendesign.webp",
    colClass: "md:col-span-2 lg:col-span-2",
  },
  {
    name: "Przycinanie krzewów i drzewek",
    desc: "Formowanie żywopłotów i cięcie roślin tak, żeby ogród był zadbany przez cały sezon.",
    image: "/photos/services/pruning.webp",
    colClass: "col-span-1",
  },
  {
    name: "Pielęgnacja trawników",
    desc: "Koszenie, nawożenie i wertykulacja, dzięki którym trawnik znowu wygląda równo i zdrowo.",
    image: "/photos/services/lawncare.webp",
    colClass: "md:col-span-2 lg:col-span-2",
  },
  {
    name: "Wycinki kompleksowe",
    desc: "Usuwamy drzewa i krzewy, wywozimy odpady i zostawiamy po sobie czysty teren.",
    image: "/photos/services/treeremoval.webp",
    colClass: "col-span-1",
  },
  {
    name: "Układanie kostki brukowej",
    desc: "Podjazdy, tarasy i ścieżki wykonane równo i na solidnej podbudowie.",
    image: "/photos/services/paving.webp",
    colClass: "md:col-span-2 lg:col-span-2",
  },
  {
    name: "Nasadzanie i przesadzanie",
    desc: "Dobieramy rośliny do gleby, światła i stylu ogrodu, żeby miały szansę naprawdę się przyjąć.",
    image: "/photos/services/planting.webp",
    colClass: "col-span-1",
  },
];

export default function Services() {
  return (
    <section id="uslugi" className="relative bg-linen-50 px-6 py-20 md:py-28">
      <SectionDivider variant="trustbar-to-services" />
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center md:mb-24">
          <ScrollReveal>
            <h2
              className="mx-auto max-w-[20ch] font-heading font-bold leading-tight text-foreground text-balance"
              style={{ fontSize: "clamp(2.5rem, 2rem + 3.5vw, 4.5rem)" }}
            >
              Zajmiemy się ogrodem od porządków po pełną realizację.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/75 md:mt-8 md:text-xl text-balance">
              Robimy pojedyncze prace i większe realizacje. Jeśli nie wiesz
              jeszcze, czego dokładnie potrzebujesz, podczas bezpłatnej wizyty
              podpowiemy najrozsądniejszy zakres prac.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <StaggerReveal staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-6 md:gap-8">
          {services.map((service, index) => {
            const isBig = service.colClass.includes("col-span-2");

            return (
              <StaggerChild key={service.name} className={service.colClass} variant="up" blur>
                <article
                  className="card-hover group relative flex h-full flex-col overflow-hidden rounded-2xl border border-foreground/8 bg-white"
                >
                  {/* Image Header */}
                  <div className="relative h-56 w-full shrink-0 overflow-hidden bg-sand-100 md:h-64 lg:h-72">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                      sizes={isBig ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
                    />

                    {/* Number Overlay */}
                    <span
                      className="absolute left-6 top-6 font-heading font-bold leading-none text-white/80 drop-shadow-md mix-blend-overlay"
                      style={{ fontSize: "clamp(3rem, 4vw, 4.5rem)" }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                    <div>
                      <h3 className="mb-3 font-heading text-xl font-bold text-foreground md:text-2xl text-balance">
                        {service.name}
                      </h3>
                      <p className="text-base text-foreground/80 leading-relaxed text-balance">
                        {service.desc}
                      </p>
                    </div>

                    {/* CTA Footer */}
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 pt-2">
                      {isBig && (
                        <a
                          href={LINKS.tel}
                          className="btn-secondary min-h-0 whitespace-nowrap px-5 py-2.5 text-sm"
                        >
                          Umów wycenę
                        </a>
                      )}
                      <a
                        href="#"
                        className={`group/link inline-flex items-center gap-2 text-sm font-bold text-accent transition-colors hover:text-accent-hover ${!isBig ? "w-full justify-end" : ""
                          }`}
                      >
                        Szczegóły usługi
                        <span className="transition-transform group-hover/link:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              </StaggerChild>
            );
          })}
        </StaggerReveal>

        {/* Minimalist CTA Bottom */}
        <ScrollReveal>
          <div className="mt-20 overflow-hidden rounded-3xl bg-sage-50 px-8 py-16 md:mt-28 md:px-16 md:py-24 relative">
            <div className="absolute top-0 right-0 p-8 text-[400px] leading-none text-sage-100/50 font-heading opacity-50 select-none pointer-events-none transform translate-x-1/4 -translate-y-1/4">
              ?
            </div>
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h3 className="mb-6 font-heading text-3xl font-bold text-foreground max-w-xl text-balance md:text-4xl lg:text-5xl">
                Nie wiesz jeszcze, od czego zacząć?
              </h3>
              <p className="mb-10 text-lg leading-relaxed text-foreground/75 md:text-xl text-balance">
                Wyślij zdjęcie ogrodu na WhatsApp. Napisz, co Ci przeszkadza
                albo co chcesz osiągnąć, a podpowiemy Ci najlepszy pierwszy krok.
              </p>
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta"
              >
                Wyślij zdjęcie ogrodu
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
