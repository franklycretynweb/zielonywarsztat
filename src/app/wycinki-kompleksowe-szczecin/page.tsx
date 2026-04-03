import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Wycinki kompleksowe Szczecin | Zielony Warsztat Piotra",
  description: "Wycinki drzew i krzewów w Szczecinie i okolicach. Kompleksowa wycinka z wywozem i uprzątnięciem terenu. Bezpłatna wycena.",
};

export default function Page() {
  return (
    <ServicePageLayout
      title="Wycinki kompleksowe w Szczecinie"
      heroImage="/photos/blog/wycinka-drzew.webp"
      description="Wycinka drzew i krzewów z pełnym uprzątnięciem terenu. Wywóz i utylizacja w cenie — zostawiamy posesję gotową do dalszych prac."
      forWhom={[
        "Masz drzewo lub krzew który zagraża budynkowi, sieci energetycznej albo sąsiedniej posesji",
        "Potrzebujesz oczyścić działkę z samosiejek, starych drzew i zarośli — i chcesz żeby po robocie nie zostało nic do sprzątania",
        "Planujesz nowy ogród lub inwestycję i potrzebujesz najpierw uporządkować teren",
      ]}
      whatWeDo={[
        { label: "Wycinka drzew i krzewów", text: "Wycinamy drzewa w trudnym terenie — przy budynkach, ogrodzeniach i liniach energetycznych. Pracujemy z planem: bez ryzyka dla Twojej posesji i sąsiadów." },
        { label: "Frezowanie pniaków", text: "Usuwamy pniaki frezarką — teren jest gotowy do dalszych prac bez kopania i niepotrzebnego trudu. Frezowanie do 20–30 cm w głąb." },
        { label: "Wywóz i utylizacja", text: "Wszystkie odpady wywozimy na bieżąco. Grube kłody możemy zostawić na Twój użytek lub zabrać — ustalamy przed pracą." },
      ]}
      whenToOrder={[
        "Drzewo jest suche, próchnieje lub grozi wywróceniem",
        "Korzenie lub gałęzie naruszają ogrodzenie, fundament lub instalacje",
        "Przed budową ogrodu — teren musi być wolny zanim zaczniesz cokolwiek planować",
        "Zarośnięta działka, której nie możesz użytkować — potrzebujesz zacząć od zera",
      ]}
      faq={[
        { q: "Czy potrzebne jest pozwolenie na wycinkę?", a: "Drzewa do 80 cm obwodu pnia (mierzonego na wys. 130 cm) na działkach prywatnych nie wymagają zgłoszenia. Przy większych informujemy Cię co jest potrzebne — można też zlecić nam załatwienie formalności." },
        { q: "Czy frezowanie pniaka jest wliczone w cenę?", a: "Frezowanie wyceniamy oddzielnie — zależy od średnicy pniaka i dostępności terenu. Zawsze podajemy cenę łączną przed startem." },
        { q: "Co z drewnem po wycince?", a: "Grube kłody możemy zostawić na opał lub zabrać — ustalamy na miejscu. Drobne gałęzie i odpady wywozimy zawsze." },
      ]}
      relatedPosts={[
        { slug: "jak-odnowic-ogrod-po-zimie", title: "Jak odnowić ogród po zimie? Kolejność prac, które naprawdę mają sens", readingTime: 6 },
      ]}
    />
  );
}
