import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Pielęgnacja trawników Szczecin | Zielony Warsztat Piotra",
  description: "Profesjonalna pielęgnacja trawników w Szczecinie i okolicach. Koszenie, nawożenie, aeracja, odchwaszczanie. Bezpłatna wycena.",
};

export default function Page() {
  return (
    <ServicePageLayout
      title="Pielęgnacja trawników w Szczecinie"
      heroImage="/photos/blog/trawnik-wiosna.webp"
      description="Koszenie, nawożenie, aeracja i odchwaszczanie. Dbamy o trawnik regularnie, żeby zawsze wyglądał na dopilnowany — bez Twojego zaangażowania."
      forWhom={[
        "Masz trawnik, który wygląda słabo — jest za rzadki, pełen mchu albo żółknie bez wyraźnego powodu",
        "Nie masz czasu ani ochoty kosić co 10–14 dni przez cały sezon, a trawnik wymaga właśnie takiej regularności",
        "Zależy Ci na efekcie przez cały sezon, nie tylko po pierwszym koszeniu wiosną",
      ]}
      whatWeDo={[
        { label: "Koszenie i obrzeżnikowanie", text: "Koszenie na właściwą wysokość dla danej pory roku, obrzeżnikowanie przy chodnikach i rabatach. Ścinki grabimy lub mulczujemy — zależnie od potrzeb." },
        { label: "Wertykulacja, aeracja i dosiew", text: "Rozcinamy filc, napowietrzamy glebę i dosiewamy w miejscach łysych. Zabiegi które realnie poprawiają kondycję murawy — nie tylko ją odświeżają." },
        { label: "Nawożenie i odchwaszczanie", text: "Dobieramy nawóz do pory roku i stanu trawnika. Odchwaszczamy ręcznie lub preparatem — bez ryzyka dla murawy i roślin w pobliżu." },
      ]}
      whenToOrder={[
        "Trawnik ma mech, łyse miejsca lub żółte plamy i nie wiesz dlaczego",
        "Nie masz czasu kosić regularnie — a bez regularności trawnik się sypie",
        "Przed sezonem — żeby wiosna zaczęła się od zadbanych trawników, nie od doganiania zaległości",
        "Po zimie, kiedy po roztopach widać że murawa potrzebuje odnowy",
      ]}
      faq={[
        { q: "Jak często przyjeżdżacie kosić?", a: "W szczycie sezonu (maj–sierpień) co 10–14 dni. Wiosną i jesienią rzadziej — dostosowujemy częstotliwość do tempa wzrostu trawy." },
        { q: "Czy wywozicie skoszoną trawę?", a: "Tak, wywóz ścinki jest standardowo wliczony w zakres. Jeśli trawnik nadaje się do mulczowania — informujemy i zostawiamy ściętą trawę jako nawóz." },
        { q: "Czy zajmujecie się też trawnikiem z mchem?", a: "Tak. Mech to objaw — przyczyna to zazwyczaj zbita gleba, złe pH albo za dużo cienia. Diagnozujemy i dobieramy właściwy zabieg: wertykulacja, wapnowanie, aeracja lub dosiew." },
        { q: "Czy mogę zamówić jednorazową wizytę?", a: "Tak, robimy zarówno jednorazowe wizyty jak i regularną opiekę przez cały sezon. Przy regularnej umowie cena za wizytę jest niższa." },
      ]}
      relatedPosts={[
        { slug: "kiedy-wertykulowac-trawnik-szczecin", title: "Kiedy wertykulować trawnik? Wiosna, jesień — i jak to zrobić dobrze", readingTime: 5 },
        { slug: "zolknacy-trawnik-najczestsze-przyczyny", title: "Żółknący trawnik — najczęstsze przyczyny i jak je rozpoznać", readingTime: 6 },
        { slug: "jak-odnowic-ogrod-po-zimie", title: "Jak odnowić ogród po zimie? Kolejność prac, które naprawdę mają sens", readingTime: 6 },
      ]}
    />
  );
}
