import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { SERVICES } from "../lib/site";

export default function Footer({ hideCta = false }: { hideCta?: boolean }) {
  return (
    <footer className="relative bg-linen-100 overflow-hidden pt-24">
      {/* Background Image anchored to the absolute bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none w-full">
        {/* We use an unconstrained img or Next Image here so it anchors to the bottom and scales width */}
        <Image
          src="/photos/footerbg/footer_bg.png"
          alt="Krajobraz ogrodowy"
          width={1920}
          height={1080}
          className="w-full h-auto object-bottom object-cover min-h-[400px] opacity-90"
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Huge Pre-Footer CTA */}
        {!hideCta && <div className="mb-24 md:mb-32 text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <h2
              className="mb-6 font-heading font-bold leading-tight text-foreground"
              style={{ fontSize: "clamp(2.5rem, 4vw, 4.5rem)" }}
            >
              Chcesz wreszcie ogarnąć ogród?
            </h2>
            <p className="mb-10 text-lg leading-relaxed text-foreground/75 md:text-xl">
              Zadzwoń i umów bezpłatną wycenę bez zobowiązań. Powiedz co Ci
              przeszkadza, a ja podpowiem jak to rozwiązać.
            </p>
            <a
              href="tel:+48578816720"
              className="btn-cta inline-flex text-lg"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                className="mr-2 h-5 w-5"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Zadzwoń teraz
            </a>
          </ScrollReveal>
        </div>}

        {/* Zmniejszony padding-bottom, aby tekst linkow leżał bliżej ilustracji (zgodnie z życzeniem) */}
        <div className="mb-8 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 pb-[250px] sm:pb-[350px] lg:pb-[450px] xl:pb-[500px]">
          {/* Brand */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <Image
              src="/photos/logo_duze.png"
              height={160}
              width={500}
              alt="Zielony Warsztat Piotra"
              className="mb-6 h-32 w-auto drop-shadow-sm"
            />
            <p className="max-w-sm font-body text-base leading-relaxed text-foreground/80 font-medium">
              Usługi ogrodnicze w Szczecinie i okolicach. Pielęgnacja,
              przycinanie, nasadzenia, porządki i zakładanie ogrodów.
            </p>
          </div>

          {/* Services quick links */}
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-6 font-heading text-base font-bold uppercase tracking-[0.2em] text-foreground">
              Usługi
            </p>
            <ul className="space-y-3 text-center md:text-left">
              {SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="font-body font-medium text-foreground/80 transition-colors hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center md:items-start">
            <p className="mb-6 font-heading text-base font-bold uppercase tracking-[0.2em] text-foreground">
              Kontakt
            </p>
            <div className="space-y-4 text-center md:text-left">
              <a
                href="tel:+48578816720"
                className="flex items-center justify-center gap-3 font-body font-medium text-foreground/80 transition-colors hover:text-foreground md:justify-start"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5 shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +48 578 816 720
              </a>
              <a
                href="mailto:biuro@zielonywarsztat.com"
                className="flex items-center justify-center gap-3 font-body font-medium text-foreground/80 transition-colors hover:text-foreground md:justify-start"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5 shrink-0"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
                biuro@zielonywarsztat.com
              </a>
              <p className="flex items-center justify-center gap-3 font-body font-medium text-foreground/80 md:justify-start">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  className="h-5 w-5 shrink-0"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Pon–Sob 7:00–18:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar - positioned at the very bottom, over the image */}
        <div className="absolute bottom-0 left-0 w-full px-6 pb-6">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
            <p className="rounded-full bg-white/90 px-4 py-2 font-body text-sm font-bold text-foreground backdrop-blur-sm shadow-sm">
              &copy; {new Date().getFullYear()} Zielony Warsztat Piotra.
            </p>
            <p className="rounded-full bg-white/90 px-4 py-2 font-body text-sm font-bold text-foreground backdrop-blur-sm shadow-sm">
              Szczecin i okolice do 50 km
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
