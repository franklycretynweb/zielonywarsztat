"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LINKS } from "../lib/site";

const chips = [
  "Pielęgnacja",
  "Nasadzenia",
  "Porządki",
  "Kostka brukowa",
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-svh overflow-hidden bg-[#1a2818]"
    >
      {/* Background */}
      <Image
        src="/photos/herobg/herobg2.jpg"
        alt="Zadbany ogród po pielęgnacji"
        fill
        priority
        className="object-cover object-[center_20%] md:object-center"
        quality={90}
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,18,11,0.55)_0%,rgba(10,18,11,0.25)_45%,rgba(10,18,11,0.05)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,18,11,0.88)_0%,rgba(10,18,11,0.4)_40%,transparent_65%)]" />

      {/* ── MOBILE: H1 góra, CTA dół ── */}

      {/* H1 + subtitle mobile — top */}
      <div className="absolute left-6 right-6 top-24 md:hidden">
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.0, ease, delay: 0.3 }}
            className="font-heading font-extrabold text-white"
            style={{ fontSize: "clamp(3rem, 2rem + 4vw, 5.5rem)" }}
          >
            Zaplanuj swój<br />ogród na sezon 2026.
          </motion.h1>
        </div>

      </div>

      {/* H2 + CTA mobile — bottom (przy kciuku) */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease, delay: 0.05 }}
        className="absolute bottom-10 left-6 right-6 md:hidden"
      >
        <p
          className="mb-5 text-lg leading-relaxed text-white"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.7)" }}
        >
          Kiedy ogród zaczyna bardziej męczyć niż cieszyć, dobrze mieć po swojej stronie kogoś, kto zrobi z tym porządek.
        </p>
        <a href={LINKS.tel} className="btn-cta w-full justify-center">
          Umów bezpłatną wycenę
        </a>
      </motion.div>

      {/* ── DESKTOP: CTA + H1 stacked, bottom-left ── */}
      <div className="absolute bottom-14 left-14 hidden md:block">
        {/* CTA desktop */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="mb-8 flex items-center gap-4"
        >
          <a href={LINKS.tel} className="btn-cta">
            Umów bezpłatną wycenę
          </a>
          <a href="/porady" className="btn-hero-secondary">
            Zobacz nasze porady
          </a>
        </motion.div>

        {/* H1 desktop */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.0, ease, delay: 0.3 }}
            className="font-heading font-extrabold text-white"
            style={{ fontSize: "clamp(3rem, 2rem + 4vw, 5.5rem)" }}
          >
            Zaplanuj swój<br />ogród na sezon 2026.
          </motion.h1>
        </div>
      </div>

      {/* Chips + p — prawy dół, tylko desktop */}
      <div className="absolute bottom-14 right-14 hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 0.75 }}
          className="flex flex-nowrap gap-2"
        >
          {chips.map((chip, i) => (
            <motion.span
              key={chip}
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.8 + i * 0.07 }}
              className="rounded-full bg-[#e0a580] px-3 py-1 font-heading text-sm font-bold text-[#2d351f]"
            >
              {chip}
            </motion.span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 1.1 }}
          className="mt-3 text-right text-sm leading-relaxed text-white/65"
        >
          Szczecin i okolice. Bezpośredni kontakt z Piotrem.
        </motion.p>
      </div>
    </section>
  );
}
