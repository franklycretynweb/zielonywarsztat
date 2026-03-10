"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LINKS } from "../lib/site";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const contactSection = document.getElementById("kontakt");
    const heroSection = document.getElementById("hero");

    const observers: IntersectionObserver[] = [];

    // Hide when contact section visible
    if (contactSection) {
      const contactObs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setVisible(false);
        },
        { threshold: 0.1 }
      );
      contactObs.observe(contactSection);
      observers.push(contactObs);
    }

    // Show after scrolling past hero
    if (heroSection) {
      const heroObs = new IntersectionObserver(
        ([entry]) => {
          if (!entry.isIntersecting) {
            setVisible(true);
          } else {
            setVisible(false);
          }
        },
        { threshold: 0.3 }
      );
      heroObs.observe(heroSection);
      observers.push(heroObs);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={LINKS.tel}
          className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center gap-2 rounded-full border border-white/70 bg-white/95 px-5 py-3.5 text-brown-700 shadow-xl backdrop-blur-md sm:bottom-6 sm:left-auto sm:right-5 sm:w-auto sm:px-6 lg:bottom-8 lg:right-8"
          initial={{ opacity: 0, y: 20, scale: 0.94 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.94 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span className="font-heading text-base font-semibold sm:text-lg">
            Zadzwoń po wycenę
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
