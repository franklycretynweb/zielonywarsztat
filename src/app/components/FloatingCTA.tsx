"use client";

import { useEffect, useState } from "react";

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

  if (!visible) return null;

  return (
    <a
      href="tel:+48123456789"
      className="hidden lg:flex fixed bottom-8 right-8 z-50 btn-cta animate-pulse-glow !rounded-full !px-6 !py-4 shadow-xl"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      Zadzwoń teraz
    </a>
  );
}
