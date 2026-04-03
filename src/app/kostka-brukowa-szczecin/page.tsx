import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Kostka brukowa Szczecin | Zielony Warsztat Piotra",
  description: "Układanie kostki brukowej w Szczecinie i okolicach. Podjazdy, ścieżki, tarasy, obrzeża. Solidna podbudowa i estetyczne wykończenie. Bezpłatna wycena.",
};

export default function Page() {
  return (
    <ServicePageLayout
      title="Kostka brukowa w Szczecinie"
      heroImage="/photos/blog/kostka-brukowa-podjazd.webp"
      description="Podjazdy, ścieżki, tarasy i obrzeża. Pilnujemy podbudowy i proporcji — kostka ma porządkować przestrzeń i służyć przez lata, nie tylko wyglądać na zdjęciu."
      forWhom={[
        "Planujesz nowy podjazd, taras lub ścieżkę i chcesz żeby wytrzymała lata bez zapadania się i przesuwania",
        "Masz starą kostkę która się podnosi, krzywo leży lub ma rozjeżdżone fugi — i potrzebujesz renowacji",
        "Inwestujesz w nieruchomość i wiesz że podjazd z kostki to pierwsza rzecz którą widzi każdy gość i klient",
      ]}
      whatWeDo={[
        { label: "Podbudowa i odwodnienie", text: "Wykop na właściwą głębokość, geowłóknina, zagęszczone kruszywo i piasek — taka podbudowa trzyma kostkę przez 15–20 lat. Nie oszczędzamy na tym co niewidoczne." },
        { label: "Układanie i spoinowanie", text: "Kostka układana z zachowaniem spadków i wzoru. Fugi piaskowe lub polimerowe — doradzamy co lepiej sprawdzi się w danym miejscu i użytkowaniu." },
        { label: "Obrzeża i wykończenie", text: "Obrzeża betonowe lub stalowe stabilizują układanie na brzegach. Teren po pracy jest uprzątnięty — wywóz gruzu i ziemi jest wliczony." },
      ]}
      whenToOrder={[
        "Budujesz dom i podjazd to jeden z ostatnich elementów wykończenia terenu",
        "Stara kostka unosi się, krzywo leży lub odpływ jest zły i woda stoi przy domu",
        "Taras lub ścieżka wyglądają zaniedbanie i chcesz to zmienić przed sezonem",
        "Robisz ogrodzenie lub bramę i potrzebujesz jednocześnie utwardzić wjazd",
      ]}
      faq={[
        { q: "Jak gruba powinna być podbudowa?", a: "Pod podjazd samochodowy minimum 25–30 cm zagęszczonego kruszywa. Pod chodnik pieszy 15–20 cm wystarczy. Robimy zawsze właściwą głębokość — nie cienimy żeby zaoszczędzić na wykopu." },
        { q: "Jaka kostka sprawdzi się najlepiej?", a: "Do podjazdów: grubość 6–8 cm, beton klasy min. B35. Do tarasów i chodników: 4–6 cm. Co do koloru i faktury — przywozimy próbki i pomagamy wybrać na miejscu." },
        { q: "Ile trwa ułożenie podjazdu?", a: "Standardowy podjazd 50–80 m² to 2–4 dni robocze zależnie od dostępności i złożoności terenu. Informujemy o realnym terminie na etapie wyceny." },
      ]}
      relatedPosts={[
        { slug: "chwasty-w-kostce-brukowej-jak-sie-pozbyc", title: "Chwasty w kostce brukowej — jak się pozbyć i jak zapobiec powrotowi", readingTime: 5 },
      ]}
    />
  );
}
