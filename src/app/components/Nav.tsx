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
            href="https://wa.me/48123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta !min-h-[40px] !py-2 !px-5 !text-sm"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile: phone button + hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <a
            href="https://wa.me/48123456789"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta !min-h-[40px] !py-2 !px-4 !text-sm !gap-1.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
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
              href="https://wa.me/48123456789"
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
    </nav>
  );
}
