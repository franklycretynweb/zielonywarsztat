import Image from "next/image";
import SectionDivider from "./SectionDivider";

export default function WhyGarden() {
  return (
    <section className="relative py-12 md:py-20 px-5 bg-forest">
      <SectionDivider variant="services-to-whygarden" />

      <div className="max-w-6xl mx-auto relative z-[1]">
        <div className="relative rounded-2xl overflow-hidden" style={{ minHeight: "clamp(400px, 50vh, 600px)" }}>
          <Image
            src="/photos/services/gardeninstalation.webp"
            alt="Piękny, zadbany ogród"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 lg:p-16">
            <h2
              className="font-heading font-bold text-white mb-4 max-w-2xl"
              style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
            >
              Ogród to wizytówka Twojego domu
            </h2>
            <p className="font-body text-white/85 text-lg leading-relaxed max-w-xl mb-4">
              Podnosi wartość nieruchomości, robi wrażenie na gości i daje
              przestrzeń do odpoczynku, jakiej nie zastąpi żaden salon.
            </p>
            <p className="font-body text-white/60 text-base italic">
              Nie musisz wiedzieć nic o ogrodnictwie. My to wiemy za Ciebie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
