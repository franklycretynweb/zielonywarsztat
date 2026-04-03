import React from "react";
import Image from "next/image";

const Em = ({ children }: { children: React.ReactNode }) => (
  <em className="not-italic font-bold" style={{ color: "var(--terra-600)", textDecorationLine: "underline", textDecorationColor: "var(--terra-300)", textUnderlineOffset: "3px" }}>
    {children}
  </em>
);

const pains = [
  {
    label: <>
      <Em>Podwykonawców</Em> zamiast kogoś, kto weźmie za to odpowiedzialność
    </>,
    img: "/photos/01_ilustracja.svg",
  },
  {
    label: <>
      <Em>Obietnic</Em> &rsquo;będzie pięknie&rsquo; bez żadnego planu ani zakresu
    </>,
    img: "/photos/02_ilustracja.svg",
    imgOffset: "30px",
  },
  {
    label: <>
      <Em>Cen</Em>, które <Em>rosną</Em> po tym jak się już zgodzisz
    </>,
    img: "/photos/03_ilustracja.svg",
  },
];

export default function PainSection() {
  return (
    <section className="bg-linen-100 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-5xl">
        <h2
          className="text-foreground"
          style={{ fontSize: "clamp(1.9rem, 1.2rem + 2.4vw, 3rem)" }}
        >
          My też mamy dość:
        </h2>

        <ul className="mt-8 grid gap-3 sm:grid-cols-3">
          {pains.map((pain, index) => (
            <li
              key={index}
              className="flex flex-col overflow-hidden rounded-2xl border border-foreground/8 bg-white"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-linen-200">
                <Image
                  src={pain.img}
                  alt=""
                  aria-hidden
                  fill
                  unoptimized
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                  style={"imgOffset" in pain ? { transform: `translateY(${pain.imgOffset})` } : undefined}
                />
                <span
                  className="absolute left-4 top-4 font-heading font-bold leading-none text-foreground/20"
                  style={{ fontSize: "clamp(3rem, 4vw, 4.5rem)" }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="px-6 py-5">
                <span className="block text-base leading-relaxed text-foreground" style={{ textWrap: "balance" } as React.CSSProperties}>
                  {pain.label}
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p
          className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center font-bold text-foreground"
          style={{ fontSize: "clamp(1.5rem, 1rem + 1.6vw, 2.2rem)" }}
        >
          <span>Dlatego stworzyliśmy</span>
          <Image
            src="/photos/logo_duze.webp"
            alt="Zielony Warsztat Piotra"
            width={160}
            height={160}
            className="inline-block h-10 w-auto"
          />
          <span>Zielony Warsztat Piotra.</span>
        </p>

      </div>
    </section>
  );
}
