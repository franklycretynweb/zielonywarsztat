import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Nasadzanie i przesadzanie roślin Szczecin | Zielony Warsztat Piotra",
  description: "Nasadzanie i przesadzanie roślin w Szczecinie i okolicach. Dobór roślin do gleby, światła i charakteru miejsca. Bezpłatna wycena.",
};

export default function Page() {
  return (
    <ServicePageLayout
      title="Nasadzanie i przesadzanie roślin w Szczecinie"
      heroImage="/photos/blog/zywoplot-sadzenie.webp"
      description="Dobieramy rośliny do gleby, ekspozycji i charakteru miejsca. Sadzenie z myślą o tym, jak ogród ma wyglądać za kilka sezonów — nie tylko zaraz po robocie."
      forWhom={[
        "Chcesz uzupełnić ogród nowymi roślinami, ale nie wiesz co sprawdzi się w Twoich warunkach — glebie, nasłonecznieniu, klimacie Szczecina",
        "Masz rośliny które trzeba przenieść — stary żywopłot, drzewa kolizyjne z nową inwestycją, byliny do poddziału",
        "Zakładasz nowy ogród lub urządzasz rabatę i potrzebujesz kogoś kto dobierze rośliny z głową, nie przypadkowo",
      ]}
      whatWeDo={[
        { label: "Dobór roślin do miejsca", text: "Przed zakupem pytamy o glebę, ekspozycję i to jak ogród ma wyglądać za kilka lat. Dobieramy rośliny które mają szansę się przyjąć — nie tylko wyglądać dobrze na zdjęciu z marketu." },
        { label: "Sadzenie z właściwą głębokością i podłożem", text: "Każda roślina dostaje właściwy dół, nawóz startowy i podlewanie po posadzeniu. Iglaki i rośliny wrażliwe zabezpieczamy na pierwszą zimę." },
        { label: "Przesadzanie drzew i krzewów", text: "Przesadzamy rośliny które muszą zmienić miejsce — z zachowaniem odpowiedniej bryły korzeniowej. Omawiamy ryzyko i warunki powodzenia przed pracą." },
      ]}
      whenToOrder={[
        "Wiosna (kwiecień–maj) lub jesień (wrzesień–październik) — to najlepsze okna do sadzenia",
        "Po budowie domu — teren jest gotowy i czas zacząć ogród od roślin strukturalnych",
        "Kiedy rośliny w złym miejscu kolidują z nową inwestycją lub rozrosły się za bardzo",
        "Kiedy rabata wygląda pusto i potrzeba dosadzenia bez ryzyka złego doboru",
      ]}
      faq={[
        { q: "Czy kupujecie rośliny za mnie?", a: "Tak, możemy kupić rośliny we własnym zakresie — ze sprawdzonej szkółki, w odpowiednim terminie i rozmiarze. Koszt materiałów jest wtedy oddzielny od robocizny." },
        { q: "Czy sadzenie obejmuje gwarancję?", a: "Jeśli roślina posadzona przez nas nie przeżyje pierwszej zimy z przyczyn innych niż susza lub mróz, wrócimy i to naprawimy. Dbamy o swoje realizacje." },
        { q: "Jak duże rośliny można przesadzić?", a: "Krzewy do ok. 2 m i drzewa do ok. 5–6 cm grubości pnia — z ręcznym wykopem. Większe wymagają sprzętu i oceny na miejscu." },
      ]}
      relatedPosts={[
        { slug: "ogrod-po-budowie-co-zrobic-najpierw", title: "Ogród po budowie — co zrobić najpierw, żeby nie zaczynać dwa razy", readingTime: 7 },
      ]}
    />
  );
}
