import type { Metadata } from "next";
import Link from "next/link";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Jak pracujemy | Zielony Warsztat Piotra",
  description: "Dowiedz się jak wygląda współpraca z Zielonym Warsztatem Piotra — od pierwszego kontaktu przez wycenę do realizacji i efektu końcowego.",
};

export default function Page() {
  return (
    <main>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden bg-[#1e2415] pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(106,122,92,0.2),transparent_60%)]" />
        <div className="relative mx-auto w-full max-w-6xl px-8 pb-16 md:pb-20">
          <nav className="mb-6 flex items-center gap-2 font-body text-sm text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Strona główna</Link>
            <span>/</span>
            <span className="text-white/60">Jak pracujemy</span>
          </nav>
          <h1
            className="max-w-[20ch] font-heading font-extrabold text-white"
            style={{ fontSize: "clamp(2.2rem, 1.4rem + 3vw, 4rem)" }}
          >
            Jak wygląda współpraca z Piotrem
          </h1>
          <p className="mt-5 max-w-[48ch] text-base leading-relaxed text-white/65 md:text-lg">
            Od pierwszego telefonu po efekt końcowy — bez niespodzianek, bez podwykonawców, bez bałaganu po robocie.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-8 py-20 md:py-28">
        <p className="font-body text-lg text-foreground/40 italic">
          Treść strony wkrótce...
        </p>
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
