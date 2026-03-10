import type { Metadata } from "next";
import { Lora, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin", "latin-ext"],
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
      <body className={`${lora.variable} ${dmSans.variable} ${caveat.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
