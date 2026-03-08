"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Usługi", href: "#uslugi" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "Realizacje", href: "#opinie" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-linen-50/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex-shrink-0 relative z-50">
          <Image
            src="/logo.webp"
            height={48}
            width={160}
            alt="Zielony Warsztat Piotra"
            className="h-11 w-auto"
          />
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-body text-sm font-medium transition-colors ${
                scrolled
                  ? "text-brown-600 hover:text-terra-500"
                  : "text-linen-100 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop phone + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <span
            className={`font-body text-sm tracking-wide ${
              scrolled ? "text-brown-500" : "text-sage-200"
            }`}
          >
            +48 123 456 789
          </span>
          <a
            href="tel:+48123456789"
            className="btn-cta !min-h-[40px] !py-2 !px-5 !text-sm"
          >
            Zadzwoń teraz
          </a>
        </div>

        {/* Mobile: phone button + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="tel:+48123456789"
            className="btn-cta !min-h-[40px] !py-2 !px-4 !text-sm !gap-1.5"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="w-4 h-4"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Zadzwoń
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg transition-colors ${
              scrolled || menuOpen ? "text-brown-700" : "text-linen-50"
            }`}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            <span
              className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                menuOpen ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${
                menuOpen ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 bg-linen-50 z-40 flex flex-col transition-all duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center flex-1 gap-6 pt-16">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-heading text-2xl font-semibold text-brown-700 hover:text-terra-500 transition-colors"
            >
              {link.label}
            </a>
          ))}

          <div className="mt-6 flex flex-col items-center gap-4">
            <a
              href="tel:+48123456789"
              className="font-heading text-xl text-terra-500 font-bold"
            >
              +48 123 456 789
            </a>
            <a
              href="tel:+48123456789"
              onClick={() => setMenuOpen(false)}
              className="btn-cta !text-lg !px-8"
            >
              Zadzwoń po wycenę
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
