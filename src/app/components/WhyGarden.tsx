import Image from "next/image";

export default function WhyGarden() {
  return (
    <section className="py-24 md:py-32 px-5 bg-sage-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left — real garden photo in organic shape */}
          <div className="flex-shrink-0 w-72 h-72 lg:w-96 lg:h-96 relative">
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" }}
            >
              <Image
                src="/photos/services/gardeninstalation.webp"
                alt="Piękny ogród"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 288px, 384px"
              />
            </div>
            <div
              className="absolute -inset-2 border-2 border-sage-300/30"
              style={{ borderRadius: "60% 40% 55% 45% / 50% 60% 40% 50%" }}
            />
          </div>

          <div className="max-w-xl">
            <p className="font-body text-sage-400 text-sm uppercase tracking-widest mb-3">
              Dlaczego warto
            </p>
            <h2
              className="font-heading font-bold mb-8"
              style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
            >
              Ogród to wizytówka Twojego domu
            </h2>
            <p className="font-body text-brown-600 text-lg leading-relaxed mb-5">
              Wracasz do domu po długim dniu. Otwierasz furtkę i zamiast chaosu
              widzisz porządek, zieleń, kolory. To uczucie — że masz swoje miejsce
              — jest bezcenne.
            </p>
            <p className="font-body text-brown-600 text-lg leading-relaxed mb-5">
              Zadbany ogród to też realna wartość. Podnosi cenę nieruchomości,
              robi wrażenie na gości i daje Ci przestrzeń do odpoczynku, jakiej
              nie zastąpi żaden salon.
            </p>
            <p className="font-body text-brown-500 text-lg leading-relaxed italic">
              Nie musisz być ogrodnikiem. Wystarczy, że zadzwonisz do kogoś, kto
              się na tym zna.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
