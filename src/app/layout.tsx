import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";

const cabinetGrotesk = localFont({
  src: [
    { path: "./fonts/CabinetGrotesk/CabinetGrotesk-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/CabinetGrotesk/CabinetGrotesk-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/CabinetGrotesk/CabinetGrotesk-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/CabinetGrotesk/CabinetGrotesk-Extrabold.otf", weight: "800", style: "normal" },
  ],
  variable: "--font-cabinet",
  display: "swap",
});

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi/Satoshi-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi/Satoshi-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi/Satoshi-Bold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zielony Warsztat Piotra — Usługi ogrodnicze Szczecin",
  description:
    "Pielęgnacja trawników, przycinanie krzewów, nasadzenia, kostka brukowa i zakładanie ogrodów w Szczecinie i okolicach. Bezpłatna wycena. Zadzwoń: +48 578 816 720",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${cabinetGrotesk.variable} ${satoshi.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
