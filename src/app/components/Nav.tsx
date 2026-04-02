"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, LINKS, SERVICES } from "../lib/site";

const navLinks = [
  { label: "Usługi", href: "#uslugi", hasDropdown: true },
  { label: "Realizacje", href: "#realizacje", hasDropdown: false },
  { label: "Porady", href: "/porady", hasDropdown: false },
  { label: "Kontakt", href: "/kontakt", hasDropdown: false },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Zamknij dropdown przy kliknięciu poza nim
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50">

        {/* Tło po scrollu */}
        <div className={`absolute inset-0 transition-all duration-500 ${
          scrolled ? "bg-[#faf8f4] shadow-[0_1px_0_0_rgba(45,53,31,0.08)]" : ""
        }`} />

        <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-8">

          {/* Logo */}
          <Link href="/" className={`shrink-0 transition-all duration-300 ${scrolled ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <Image
              src="/photos/logo_duze.png"
              width={160}
              height={48}
              alt="Zielony Warsztat Piotra"
              className="h-9 w-auto"
            />
          </Link>

          {/* Linki — wycentrowane */}
          <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 lg:flex">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.href} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setDropdownOpen((v) => !v)}
                    className={`flex items-center gap-1.5 font-body text-sm font-medium tracking-wide transition-colors duration-300 ${
                      scrolled ? "text-brown-700 hover:text-terra-500" : "text-white/85 hover:text-white"
                    }`}
                  >
                    {link.label}
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  {dropdownOpen && (
                    <div className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-2xl border border-foreground/8 bg-[#faf8f4] py-2 shadow-lg">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          onClick={() => setDropdownOpen(false)}
                          className="block px-5 py-2.5 font-body text-sm font-medium text-brown-700 transition-colors hover:bg-[#f0ebe3] hover:text-terra-500"
                        >
                          {service.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-body text-sm font-medium tracking-wide transition-colors duration-300 ${
                    scrolled ? "text-brown-700 hover:text-terra-500" : "text-white/85 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA — desktop */}
          <div className="hidden lg:block">
            {scrolled ? (
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-[#e0a580] px-5 py-2.5 font-heading text-sm font-bold text-white
                  shadow-[0_4px_0_0_#7a4330]
                  transition-all duration-100 ease-in-out
                  hover:translate-y-[3px] hover:shadow-[0_1px_0_0_#7a4330]
                  active:translate-y-[4px] active:shadow-none"
              >
                Umów wycenę
              </a>
            ) : (
              <a
                href="/kontakt"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 font-heading text-sm font-bold text-white transition-all duration-200 hover:bg-white/18"
              >
                Umów wycenę
              </a>
            )}
          </div>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={menuOpen}
            className={`flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full lg:hidden ${
              scrolled ? "text-brown-800" : "text-white"
            }`}
          >
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 flex flex-col bg-[#1e2415] text-white transition-opacity duration-300 lg:hidden ${
        menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}>
        <div className="flex flex-1 flex-col items-center justify-center gap-1">

          {/* Usługi z expandem */}
          <div className="flex flex-col items-center">
            <button
              onClick={() => setMobileServicesOpen((v) => !v)}
              className="flex items-center gap-2 py-4 font-heading text-4xl font-bold text-white/80 transition-colors hover:text-white"
            >
              Usługi
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                className={`h-6 w-6 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {mobileServicesOpen && (
              <div className="flex flex-col items-center gap-1 pb-2">
                {SERVICES.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                    className="py-1.5 font-body text-lg text-white/60 transition-colors hover:text-white"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a href="#realizacje" onClick={() => setMenuOpen(false)} className="py-4 font-heading text-4xl font-bold text-white/80 transition-colors hover:text-white">
            Realizacje
          </a>
          <a href="/kontakt" onClick={() => setMenuOpen(false)} className="py-4 font-heading text-4xl font-bold text-white/80 transition-colors hover:text-white">
            Kontakt
          </a>
        </div>

        <div className="flex flex-col items-center gap-4 pb-16">
          <a href={LINKS.tel} className="font-body text-base text-white/50">
            {CONTACT.phoneDisplay}
          </a>
          <a href="/kontakt" onClick={() => setMenuOpen(false)} className="btn-cta">
            Umów bezpłatną wycenę
          </a>
        </div>
      </div>
    </>
  );
}
