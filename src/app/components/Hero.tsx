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
      className="relative flex min-h-svh items-end overflow-hidden"
    >
      {/* Background */}
      <Image
        src="/photos/herobg/herobg2.jpg"
        alt="Zadbany ogród po pielęgnacji"
        fill
        priority
        className="object-cover object-center"
        quality={90}
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(10,18,11,0.55)_0%,rgba(10,18,11,0.25)_45%,rgba(10,18,11,0.05)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(10,18,11,0.55)_0%,transparent_50%)]" />

      {/* H1 + CTA — lewy dół */}
      <div className="relative px-8 pb-16 md:px-14 md:pb-24">

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.05 }}
          className="mb-8"
        >
          <a href={LINKS.tel} className="btn-cta">
            Umów bezpłatną wycenę
          </a>
        </motion.div>

        {/* Clip reveal na H1 */}
        <div style={{ overflow: "hidden" }}>
          <motion.h1
            initial={{ y: "105%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.0, ease, delay: 0.3 }}
            className="font-heading font-extrabold text-white"
            style={{ fontSize: "clamp(2.6rem, 1.6rem + 4vw, 5.5rem)" }}
          >
            Zaplanuj swój<br />ogród na sezon 2026.
          </motion.h1>
        </div>
      </div>

      {/* Chips + p — prawy dół */}
      <div className="absolute bottom-16 right-8 md:bottom-24 md:right-14">
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
