import Image from "next/image";

const values = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: "Punktualność",
    desc: "Jeśli mówimy 8:00, jesteśmy o 8:00",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Szacunek do Twojej posesji",
    desc: "Chronimy trawnik, podjazd i ogrodzenie — sprzątamy po sobie",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Słowo to słowo",
    desc: "Umowa cenowa jest ostateczna — nie dokładamy kosztów w trakcie",
  },
];

export default function MeetPiotr() {
  return (
    <section id="o-mnie" className="py-24 md:py-32 px-5 bg-linen-50">

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 mb-16">
          {/* Photo — real work photo in circular frame */}
          <div className="flex-shrink-0 relative">
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full border-4 border-sage-200 overflow-hidden"
              style={{ boxShadow: "var(--shadow-md)" }}>
              <Image
                src="/photos/services/transplanting.webp"
                alt="Praca w ogrodzie"
                width={224}
                height={224}
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative leaf */}
            <div className="absolute -top-3 -right-3 w-12 h-6 bg-sage-300/30 rounded-[0_80%_0_80%] -rotate-12" />
            <div className="absolute -bottom-2 -left-2 w-10 h-5 bg-sage-300/25 rounded-[80%_0_80%_0] rotate-[25deg]" />
          </div>

          {/* Story */}
          <div className="max-w-xl lg:pt-4">
            <p className="font-body text-sage-400 text-sm uppercase tracking-widest mb-3">
              O mnie
            </p>
            <h2
              className="font-heading font-bold mb-8"
              style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
            >
              Poznaj Piotra
            </h2>
            <p className="font-body text-brown-600 text-lg leading-relaxed mb-5">
              Przez lata naprawiałem samochody. Nauczyłem się, że dobra robota to
              dobra robota — niezależnie od tego, czy to silnik czy ogród.
            </p>
            <p className="font-body text-brown-600 text-lg leading-relaxed mb-5">
              Punktualność, porządek i szacunek do cudzej własności — to biorę z
              warsztatu. Dokładam do tego miłość do roślin i zieleń, która
              sprawia, że codziennie rano chcę wyjść do pracy.
            </p>
            <p className="font-body text-brown-500 text-lg leading-relaxed italic">
              Jestem nowy w branży ogrodniczej, ale nie jestem nowy w ciężkiej
              pracy. Każdy klient, każdy ogród — to moja wizytówka.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {values.map((v) => (
            <div
              key={v.title}
              className="card-hover bg-white rounded-2xl p-7 border border-sage-100/80 text-center"
              style={{ boxShadow: "var(--shadow-sm)" }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-sage-50 border border-sage-100 flex items-center justify-center text-sage-500">
                {v.icon}
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2 text-brown-700">
                {v.title}
              </h3>
              <p className="font-body text-brown-500 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
