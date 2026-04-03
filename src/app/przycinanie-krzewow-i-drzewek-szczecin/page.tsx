import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Przycinanie krzewów i drzewek Szczecin | Zielony Warsztat Piotra",
  description: "Przycinanie krzewów i drzewek ozdobnych w Szczecinie i okolicach. Formowanie żywopłotów, cięcia pielęgnacyjne i sanitarne. Bezpłatna wycena.",
};

export default function Page() {
  return (
    <ServicePageLayout
      title="Przycinanie krzewów i drzewek w Szczecinie"
      heroImage="/photos/blog/przycinanie-krzewow.webp"
      description="Formowanie żywopłotów, cięcia pielęgnacyjne i sanitarne. Pracujemy z planem — nie tniemy na oślep, tylko tak żeby roślina zdrowo rosła i ładnie wyglądała."
      forWhom={[
        "Żywopłot wyrósł za bardzo, wychodzi na chodnik albo zasłania wjazd — i nie chcesz go niszczyć nieumiejętnym cięciem",
        "Krzewy ozdobne kwitną słabiej niż kiedyś albo wyglądają na skołtunione i bez formy",
        "Nie wiesz kiedy i jak przycinać konkretne rośliny żeby im nie zaszkodzić",
      ]}
      whatWeDo={[
        { label: "Formowanie żywopłotów", text: "Cięcie na właściwą szerokość i wysokość z zachowaniem kształtu. Pracujemy narzędziami które nie zgniatają gałązek — cięcie jest czyste, roślina goi się szybciej." },
        { label: "Cięcia pielęgnacyjne krzewów", text: "Usuwamy martwe, krzyżujące się i zagęszczające pędy. Krzewy kwitnące tniemy we właściwym terminie — po kwitnieniu wiosennym lub przed sezonem, zależnie od gatunku." },
        { label: "Cięcia sanitarne i redukcyjne drzewek", text: "Usuwamy suche i chore gałęzie, redukujemy koronę gdy drzewo wyrasta za bardzo. Przy trudniejszych pracach używamy zwyżki." },
      ]}
      whenToOrder={[
        "Żywopłot wychodzi poza granicę działki lub zasłania widoczność przy wyjeździe",
        "Krzewy kwitną słabiej niż rok temu — to często sygnał że potrzebują odmładzającego cięcia",
        "Wiosna przed sezonem — żeby ogród wyglądał zadbanie przez cały rok",
        "Jesień — ostatnie formowanie przed zimą i usunięcie martwych pędów po sezonie",
      ]}
      faq={[
        { q: "Czy przycinacie wszystkie gatunki?", a: "Tak — żywopłoty, krzewy ozdobne liściaste i iglaste, owocowe, róże, hortensje, drzewka ozdobne. Przy każdym gatunku znamy właściwy termin i sposób cięcia." },
        { q: "Kiedy NIE ciąć krzewów?", a: "Krzewów kwitnących wiosną nie tniemy przed kwitnieniem — stracisz kwiaty. Rododendronów i azalii nie tniemy jesienią — tworzą pąki na przyszły rok. Zawsze sprawdzamy co mamy przed nami, zanim weźmiemy nożyce." },
        { q: "Czy przywoziecie własny sprzęt?", a: "Tak, mamy własny sprzęt — nożyce akumulatorowe, żywopłotniki, sekatury i piły. Nie potrzebujesz nic zapewniać." },
      ]}
      relatedPosts={[
        { slug: "jak-przygotowac-ogrod-do-zimy", title: "Jak przygotować ogród do zimy? Co przyciąć, co zabezpieczyć, a czego nie ruszać", readingTime: 6 },
      ]}
    />
  );
}
