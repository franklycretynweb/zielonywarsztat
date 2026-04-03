"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { LINKS } from "../lib/site";

const services = [
  "Pielęgnacja trawników",
  "Przycinanie i wycinki",
  "Nasadzenia roślin",
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
        src="/photos/herobg/herobg.webp"
        alt="Zadbany ogród po pielęgnacji"
        fill
        priority
        className="object-cover object-[center_20%] md:object-center"
        quality={82}
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
            Masz ogród.<br />My mamy na niego czas.
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
          <Link href="/porady" className="btn-hero-secondary">
            Zobacz nasze porady
          </Link>
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
            Masz ogród.<br />My mamy na niego czas.
          </motion.h1>
        </div>
      </div>

      {/* Numbered services list — prawy środek, tylko desktop */}
      <div className="absolute right-14 top-1/2 hidden -translate-y-1/2 md:block">
        <div className="flex flex-col gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease, delay: 0.7 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              <span className="font-heading text-sm font-medium text-white/50 tabular-nums">
                0{i + 1}
              </span>
              <span className="h-px w-6 bg-white/30" />
              <span className="font-body text-base font-medium text-white/85">
                {service}
              </span>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease, delay: 1.2 }}
          className="mt-5 text-right font-body text-xs text-white/50"
        >
          Szczecin i okolice do 50 km.
        </motion.p>
      </div>
    </section>
  );
}
