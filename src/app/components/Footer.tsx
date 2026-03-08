import Image from "next/image";

const services = [
  "Pielęgnacja trawników",
  "Przycinanie krzewów",
  "Wycinki kompleksowe",
  "Nasadzanie roślin",
  "Zakładanie ogrodów",
  "Kostka brukowa",
];

export default function Footer() {
  return (
    <footer className="bg-sage-900 pt-16 pb-24 lg:pb-10 px-5">
      <div className="max-w-5xl mx-auto">
        {/* Top — CTA strip */}
        <div className="bg-sage-800 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <div>
            <p className="font-heading font-bold text-white text-xl md:text-2xl mb-1">
              Gotowy na piękny ogród?
            </p>
            <p className="font-body text-sage-300 text-sm">
              Zadzwoń — bezpłatna wycena, bez zobowiązań
            </p>
          </div>
          <a
            href="tel:+48123456789"
            className="btn-cta shrink-0 !bg-white !text-sage-800 hover:!bg-linen-100"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            +48 123 456 789
          </a>
        </div>

        {/* Middle — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-14">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo.webp"
              height={44}
              width={140}
              alt="Zielony Warsztat Piotra"
              className="h-11 w-auto brightness-125 mb-4"
            />
            <p className="font-body text-sage-400 text-sm leading-relaxed text-center md:text-left">
              Usługi ogrodnicze w Szczecinie i okolicach. Pielęgnacja, przycinanie, nasadzenia i zakładanie ogrodów.
            </p>
          </div>

          {/* Services quick links */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-heading font-semibold text-sage-200 text-sm uppercase tracking-widest mb-4">
              Usługi
            </p>
            <ul className="space-y-2 text-center md:text-left">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#uslugi"
                    className="font-body text-sage-400 text-sm hover:text-sage-200 transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center md:items-start">
            <p className="font-heading font-semibold text-sage-200 text-sm uppercase tracking-widest mb-4">
              Kontakt
            </p>
            <div className="space-y-3 text-center md:text-left">
              <a
                href="tel:+48123456789"
                className="flex items-center gap-2 font-body text-sage-300 hover:text-white transition-colors text-sm justify-center md:justify-start"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 shrink-0">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +48 123 456 789
              </a>
              <a
                href="mailto:piotr@zielonywarsztat.pl"
                className="flex items-center gap-2 font-body text-sage-300 hover:text-white transition-colors text-sm justify-center md:justify-start"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 shrink-0">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M22 7l-10 7L2 7" />
                </svg>
                piotr@zielonywarsztat.pl
              </a>
              <p className="flex items-center gap-2 font-body text-sage-400 text-sm justify-center md:justify-start">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 shrink-0">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Pon–Sob 7:00–18:00
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-sage-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-body text-sage-600 text-xs">
            &copy; 2025 Zielony Warsztat Piotra. Wszystkie prawa zastrzeżone.
          </p>
          <p className="font-body text-sage-700 text-xs">
            Szczecin i okolice do 50 km
          </p>
        </div>
      </div>
    </footer>
  );
}
