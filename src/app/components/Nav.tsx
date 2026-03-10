"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { CONTACT, LINKS } from "../lib/site";

const links = [
  { label: "Usługi", href: "#uslugi" },
  { label: "O mnie", href: "#o-mnie" },
  { label: "Opinie", href: "#opinie" },
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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 pt-4">
        <div
          className={`max-w-6xl mx-auto rounded-full px-3 h-14 flex items-center justify-between border transition-all duration-300 ${
            scrolled
              ? "bg-white/96 border-white/70 shadow-xl backdrop-blur-xl"
              : "bg-white/10 border-white/15 shadow-[0_8px_30px_rgba(16,24,10,0.12)] backdrop-blur-md"
          }`}
        >
          <a href="#" className="flex-shrink-0 pl-2">
            <Image
              src="/photos/logo/logo.webp"
              height={48}
              width={160}
              alt="Zielony Warsztat Piotra"
              className="h-9 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-brown-600 hover:text-terra-500"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4 pr-1">
            <a
              href={LINKS.tel}
              className={`font-body text-sm tracking-wide transition-colors ${
                scrolled
                  ? "text-brown-500 hover:text-brown-700"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {CONTACT.phoneDisplay}
            </a>
            <a
              href="#kontakt"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                scrolled
                  ? "bg-sage-50 text-brown-700 hover:bg-sage-100"
                  : "bg-white/14 text-white hover:bg-white/20"
              }`}
            >
              Umów wycenę
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          <div className="flex lg:hidden items-center gap-2 pr-1">
            <a
              href={LINKS.tel}
              className={`inline-flex min-h-11 items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                scrolled
                  ? "bg-sage-50 text-brown-700"
                  : "bg-white/14 text-white"
              }`}
            >
              Zadzwoń
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full transition-colors ${
                scrolled ? "text-brown-700 hover:bg-sage-50" : "text-white hover:bg-white/10"
              }`}
              aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "translate-y-[8px] rotate-45" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-linen-50 z-40 flex flex-col lg:hidden transition-opacity duration-300 ${
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
              href={LINKS.tel}
              className="font-heading text-xl text-terra-500 font-bold"
            >
              {CONTACT.phoneDisplay}
            </a>
            <a
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="btn-cta !text-lg !px-8"
            >
              Umów bezpłatną wycenę
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
