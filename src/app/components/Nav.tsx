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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 pt-4">
        <div
          className={`max-w-6xl mx-auto bg-white rounded-full px-3 h-14 flex items-center justify-between transition-shadow duration-300 ${
            scrolled ? "shadow-xl" : "shadow-md"
          }`}
        >
          {/* Logo */}
          <a href="#" className="flex-shrink-0 pl-2">
            <Image
              src="/logo.webp"
              height={48}
              width={160}
              alt="Zielony Warsztat Piotra"
              className="h-9 w-auto"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium text-brown-600 hover:text-terra-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop phone + CTA */}
          <div className="hidden lg:flex items-center gap-4 pr-1">
            <span className="font-body text-sm text-brown-400 tracking-wide">
              +48 578 816 720
            </span>
            <a
              href="https://wa.me/48578816720"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[var(--cta)] hover:bg-[var(--cta-hover)] text-white font-body font-semibold text-sm px-5 py-2.5 rounded-full transition-colors"
            >
              WhatsApp
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-3.5 h-3.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          {/* Mobile: WhatsApp + hamburger */}
          <div className="flex lg:hidden items-center gap-2 pr-1">
            <a
              href="https://wa.me/48578816720"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[var(--cta)] text-white font-body font-semibold text-sm px-4 py-2 rounded-full"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full text-brown-700"
              aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            >
              <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "translate-y-[8px] rotate-45" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "-translate-y-[8px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay — outside <nav> to avoid fixed positioning containment issues */}
      <div
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
              href="tel:+48578816720"
              className="font-heading text-xl text-terra-500 font-bold"
            >
              +48 578 816 720
            </a>
            <a
              href="https://wa.me/48578816720"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn-cta !text-lg !px-8"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
