"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LINKS } from "../lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
const proofPoints = [
  "Bezpłatna wycena na miejscu",
  "Stała cena po ustaleniach",
  "Po pracy zostaje porządek",
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex flex-col lg:flex-row">

      {/* Left — forest green text panel */}
      <div className="relative lg:w-[52%] bg-sage-800 flex flex-col justify-center px-10 sm:px-14 lg:px-20 xl:px-28 pt-24 pb-14 lg:pt-0 lg:pb-0 order-last lg:order-first">
        <div className="relative max-w-lg lg:max-w-xl">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-sage-300" />
            <span className="font-body text-white/90 text-sm font-medium tracking-wide uppercase">
              Szczecin i okolice do 50 km
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.28 }}
            className="font-heading font-bold mb-6 leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 1.55rem + 3.7vw, 4.2rem)", color: "#f0ebe3" }}
          >
            Ładny ogród<br />to nie przypadek.<br />
            <span style={{ color: "#c8d6b8" }}>To Piotr.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.52 }}
            className="font-body text-white/65 mb-8 leading-relaxed"
            style={{ fontSize: "clamp(1rem, 0.86rem + 0.52vw, 1.16rem)" }}
          >
            Pielęgnacja, przycinanie, nasadzenia i kostka brukowa w Szczecinie
            i okolicach. Przyjeżdżamy, doradzamy i robimy swoją robotę tak,
            żeby efekt cieszył przez długi czas.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.64 }}
            className="mb-10 flex flex-col gap-3"
          >
            {proofPoints.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-sm text-white/75"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sage-400 shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <a
              href={LINKS.tel}
              className="btn-cta !bg-white !text-forest hover:!bg-linen-200 !shadow-lg"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              Umów bezpłatną wycenę
            </a>
            <a
              href="#uslugi"
              className="btn-secondary !border-white/15 !bg-white/6 !text-white/88 hover:!bg-white/12"
            >
              Zobacz usługi
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Right — photo */}
      <div className="relative lg:w-[48%] h-[50vw] min-h-[260px] lg:h-auto lg:min-h-0 order-first lg:order-last overflow-hidden">
        <Image
          src="/photos/herobg/herobg.webp"
          alt="Pielęgnacja ogrodu"
          fill
          priority
          className="object-cover object-[75%_center]"
          quality={90}
          sizes="(max-width: 1024px) 100vw, 48vw"
        />
        {/* Mobile: fade photo bottom into green panel */}
        <div
          className="absolute inset-x-0 bottom-0 h-28 lg:hidden pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #2d351f)" }}
        />
        {/* Desktop: blend left edge of photo into green panel */}
        <div
          className="absolute inset-y-0 left-0 w-36 hidden lg:block pointer-events-none"
          style={{ background: "linear-gradient(to right, #2d351f, transparent)" }}
        />
      </div>

    </section>
  );
}
