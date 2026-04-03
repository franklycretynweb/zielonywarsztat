"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT, LINKS, SERVICES } from "../lib/site";

const navLinks = [
  { label: "Strona główna", href: "/", hasDropdown: false },
  { label: "Usługi", href: "#uslugi", hasDropdown: true },
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
          <Link href="/" className="shrink-0">
            <Image
              src="/photos/logo_duze.webp"
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

          {/* placeholder żeby justify-between działał na mobile */}
          <div className="h-10 w-10 lg:hidden" />
        </div>
      </nav>

      {/* Hamburger / X — standalone fixed, zawsze na wierzchu */}
      <button
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
        aria-expanded={menuOpen}
        className={`fixed right-8 top-3 z-[70] flex h-10 w-10 flex-col items-center justify-center lg:hidden ${
          menuOpen ? "text-white" : scrolled ? "text-brown-800" : "text-white"
        }`}
      >
        <span className={`absolute block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
          menuOpen ? "rotate-45 translate-y-0" : "-translate-y-[7px]"
        }`} />
        <span className={`absolute block h-0.5 w-5 rounded-full bg-current transition-all duration-200 ease-in-out ${
          menuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
        }`} />
        <span className={`absolute block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ease-in-out ${
          menuOpen ? "-rotate-45 translate-y-0" : "translate-y-[7px]"
        }`} />
      </button>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-[60] flex flex-col bg-[#1e2415] text-white transition-opacity duration-300 lg:hidden ${
        menuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}>

        {/* Top bar z logo */}
        <div className="flex items-center px-6 pt-5">
          <Link href="/" onClick={() => setMenuOpen(false)}>
            <Image
              src="/photos/logo_duze.webp"
              width={140}
              height={42}
              alt="Zielony Warsztat Piotra"
              className="h-8 w-auto"
            />
          </Link>
        </div>

        {/* Linki */}
        <div className="flex flex-1 flex-col justify-center px-6">
          <div className="divide-y divide-white/8">

            {/* Usługi z expandem */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((v) => !v)}
                className="flex w-full items-center justify-between py-5"
              >
                <span className="font-heading text-2xl font-bold text-white">Usługi</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className={`h-5 w-5 text-white/50 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="mb-3 flex flex-col gap-0.5 pl-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => { setMenuOpen(false); setMobileServicesOpen(false); }}
                      className="flex items-center gap-2 py-2.5 font-body text-base text-white/55 transition-colors hover:text-white"
                    >
                      <span className="h-px w-4 bg-white/20" />
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/porady"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-5"
            >
              <span className="font-heading text-2xl font-bold text-white">Porady</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 text-white/30">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <Link
              href="#kontakt"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-between py-5"
            >
              <span className="font-heading text-2xl font-bold text-white">Kontakt</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 text-white/30">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

          </div>
        </div>

        {/* Dół — tel + CTA */}
        <div className="flex flex-col gap-3 px-6 pb-10">
          <a
            href={LINKS.tel}
            className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 py-3.5 font-body text-base font-medium text-white/70 transition-colors hover:text-white"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {CONTACT.phoneDisplay}
          </a>
          <a href="/kontakt" onClick={() => setMenuOpen(false)} className="btn-cta text-center">
            Umów bezpłatną wycenę
          </a>
        </div>

      </div>
    </>
  );
}
