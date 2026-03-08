export default function StarterOffer() {
  return (
    <section className="py-24 md:py-32 px-5 bg-sage-800">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5 mb-8">
          <span className="font-body text-sage-200 text-sm">Oferta dla nowych klientów</span>
        </div>

        <h2
          className="font-heading font-bold text-white mb-6"
          style={{ fontSize: "clamp(1.75rem, 1.2rem + 2.5vw, 2.75rem)" }}
        >
          Pierwsze realizacje w Twojej okolicy
        </h2>
        <p className="font-body text-sage-200/90 text-lg leading-relaxed mb-5 max-w-2xl mx-auto">
          Jesteśmy nową firmą i zależy nam na zbudowaniu reputacji w Szczecinie.
          Dla pierwszych klientów oferujemy bezpłatną konsultację i projekt
          koncepcyjny w cenie wykonania.
        </p>
        <p className="font-body text-sage-300/70 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
          To okazja dla obu stron — Ty zyskujesz więcej za tę samą cenę, a my
          możliwość pokazania, co potrafimy.
        </p>
        <a
          href="#kontakt"
          className="btn-cta !bg-white !text-sage-800 hover:!bg-linen-100"
        >
          Sprawdź czy Twój projekt się kwalifikuje
        </a>
      </div>
    </section>
  );
}
