import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Ogród, z którego znowu chce się korzystać",
    location: "Szczecin, Pogodno",
    description:
      "Porządki, cięcia i nowe nasadzenia potrafią zmienić ogród szybciej niż wielki remont. Najpierw odzyskujemy ład, potem dopiero dokładamy kolejne warstwy.",
    image: "/photos/services/gardendesign.webp",
  },
  {
    title: "Nasadzenia, które pasują do miejsca",
    location: "Bezrzecze",
    description:
      "Dobór roślin do światła, gleby i stylu posesji. Bez sadzenia pod zdjęcie. Z myślą o tym, jak ogród ma wyglądać za kilka sezonów.",
    image: "/photos/services/planting.webp",
  },
  {
    title: "Trawnik i obrzeża doprowadzone do porządku",
    location: "Police",
    description:
      "Kiedy ogród jest zadbany w podstawach, cała przestrzeń od razu wygląda spokojniej i drożej.",
    image: "/photos/services/lawncare.webp",
  },
];

export default function FeaturedWork() {
  return (
    <section
      id="realizacje"
      className="relative overflow-hidden px-5 py-24 md:py-32"
    >
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-[#d9ccba]/70 to-transparent" />

      <div className="relative mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <span className="section-kicker text-moss-700">Efekt pracy</span>
              <h2
                className="mt-5 text-foreground"
                style={{ fontSize: "clamp(2.2rem, 1.6rem + 2.2vw, 3.6rem)" }}
              >
                Prace, po których ogród od razu wygląda inaczej.
              </h2>
            </div>
            <p className="max-w-2xl text-lg text-muted">
              Najpierw trzeba zobaczyć standard, a dopiero potem zakres prac.
              To właśnie ten moment buduje zaufanie najszybciej.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <ScrollReveal className="h-full">
            <article className="editorial-frame card-hover h-full min-h-[420px]">
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-x-0 bottom-0 z-10 p-7 md:p-9 text-sand-50">
                <p className="mb-3 text-sm uppercase tracking-[0.24em] text-gold-300">
                  {projects[0].location}
                </p>
                <h3 className="max-w-xl text-3xl font-bold md:text-4xl">
                  {projects[0].title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-sand-50/84">
                  {projects[0].description}
                </p>
              </div>
            </article>
          </ScrollReveal>

          <div className="grid gap-5">
            {projects.slice(1).map((project, index) => (
              <ScrollReveal key={project.title} delay={(index + 1) * 110}>
                <article className="soft-panel card-hover overflow-hidden rounded-[1.35rem]">
                  <div className="relative h-56">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 38vw"
                    />
                  </div>
                  <div className="p-6 md:p-7">
                    <p className="mb-3 text-xs uppercase tracking-[0.22em] text-clay-600">
                      {project.location}
                    </p>
                    <h3 className="max-w-[15ch] text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {project.description}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
