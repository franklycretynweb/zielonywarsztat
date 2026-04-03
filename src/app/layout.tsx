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
  metadataBase: new URL("https://www.zielonywarsztat.com"),
  title: {
    default: "Zielony Warsztat Piotra — Usługi ogrodnicze Szczecin",
    template: "%s | Zielony Warsztat Piotra",
  },
  description:
    "Pielęgnacja trawników, przycinanie krzewów, nasadzenia, kostka brukowa i zakładanie ogrodów w Szczecinie i okolicach. Bezpłatna wycena. Zadzwoń: +48 578 816 720",
  keywords: [
    "usługi ogrodnicze Szczecin",
    "pielęgnacja ogrodu Szczecin",
    "ogrodnik Szczecin",
    "koszenie trawy Szczecin",
    "zakładanie ogrodów Szczecin",
    "przycinanie krzewów Szczecin",
    "kostka brukowa Szczecin",
  ],
  alternates: {
    canonical: "https://www.zielonywarsztat.com",
  },
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://www.zielonywarsztat.com",
    siteName: "Zielony Warsztat Piotra",
    title: "Zielony Warsztat Piotra — Usługi ogrodnicze Szczecin",
    description:
      "Pielęgnacja trawników, przycinanie krzewów, nasadzenia, kostka brukowa i zakładanie ogrodów w Szczecinie i okolicach. Bezpłatna wycena. Zadzwoń: +48 578 816 720",
    images: [
      {
        url: "/photos/og_image.webp",
        width: 896,
        height: 1200,
        alt: "Zielony Warsztat Piotra — Usługi ogrodnicze Szczecin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zielony Warsztat Piotra — Usługi ogrodnicze Szczecin",
    description:
      "Pielęgnacja trawników, przycinanie krzewów, nasadzenia, kostka brukowa i zakładanie ogrodów w Szczecinie i okolicach.",
    images: ["/photos/og_image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.zielonywarsztat.com/#business",
  name: "Zielony Warsztat Piotra",
  description:
    "Profesjonalne usługi ogrodnicze w Szczecinie i okolicach: pielęgnacja trawników, przycinanie krzewów i żywopłotów, wycinki, nasadzenia, zakładanie ogrodów, kostka brukowa.",
  url: "https://www.zielonywarsztat.com",
  telephone: "+48578816720",
  email: "biuro@zielonywarsztat.com",
  image: "https://www.zielonywarsztat.com/photos/og_image.webp",
  logo: "https://www.zielonywarsztat.com/photos/logo_duze.webp",
  priceRange: "$$",
  currenciesAccepted: "PLN",
  paymentAccepted: "Gotówka, przelew",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Szczecin",
    addressRegion: "zachodniopomorskie",
    postalCode: "70-001",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.4285,
    longitude: 14.5528,
  },
  areaServed: [
    { "@type": "City", name: "Szczecin" },
    { "@type": "City", name: "Police" },
    { "@type": "City", name: "Goleniów" },
    { "@type": "City", name: "Stargard" },
    { "@type": "City", name: "Gryfino" },
    { "@type": "City", name: "Nowe Warpno" },
    { "@type": "City", name: "Świnoujście" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usługi ogrodnicze",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pielęgnacja trawników",
          url: "https://www.zielonywarsztat.com/pielegnacja-trawnikow-szczecin",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Przycinanie krzewów i drzewek",
          url: "https://www.zielonywarsztat.com/przycinanie-krzewow-i-drzewek-szczecin",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Wycinki kompleksowe",
          url: "https://www.zielonywarsztat.com/wycinki-kompleksowe-szczecin",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Nasadzanie i przesadzanie roślin",
          url: "https://www.zielonywarsztat.com/nasadzanie-i-przesadzanie-roslin-szczecin",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Zakładanie ogrodów",
          url: "https://www.zielonywarsztat.com/zakladanie-ogrodow-szczecin",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Układanie kostki brukowej",
          url: "https://www.zielonywarsztat.com/kostka-brukowa-szczecin",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${cabinetGrotesk.variable} ${satoshi.variable} antialiased`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
