import type { Metadata } from "next";
import ServicePageLayout from "../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Zakładanie ogrodów Szczecin | Zielony Warsztat Piotra",
  description: "Zakładanie ogrodów w Szczecinie i okolicach od podstaw. Projekt, przygotowanie terenu, nasadzenia, trawnik. Bezpłatna wycena.",
};

export default function Page() {
  return (
    <ServicePageLayout
      title="Zakładanie ogrodów w Szczecinie"
      heroImage="/photos/blog/projektowanie-ogrodu.webp"
      description="Ogród od zera — przygotowanie terenu, trawnik, nasadzenia, obrzeża. Robimy to z planem, żeby efekt był spójny i trwały, a nie przypadkowy."
      forWhom={[
        "Masz działkę po budowie — zbita gleba, gruz, brak zieleni — i chcesz to ogarnąć kompleksowo bez koordynowania kilku ekip",
        "Planujesz ogród od zera i potrzebujesz kogoś kto zaproponuje sensowny układ, nie tylko wykona co powiesz",
        "Chcesz ogród który za 3 lata wygląda tak samo dobrze jak po wykonaniu — dobrze zaprojektowany i posadzony w odpowiedniej kolejności",
      ]}
      whatWeDo={[
        { label: "Przygotowanie terenu", text: "Wyrównanie, wywóz gruzu, poprawa gleby lub nawiezienie świeżej ziemi. Drenaż i niwelacja — zanim cokolwiek posadzisz, teren musi na to pozwalać." },
        { label: "Twarde elementy i trawnik", text: "Obrzeża, ścieżki, trawnik z siewu lub rolki. Twarde elementy zawsze przed zielenią — to zasada której przestrzegamy i dlatego nie trzeba niczego poprawiać po nas." },
        { label: "Nasadzenia z planem", text: "Drzewa, żywopłoty, krzewy ozdobne i byliny dobrane do miejsca i stylu. Sadzenie w kolejności od dużych do małych — ogród buduje się warstwowo." },
      ]}
      whenToOrder={[
        "Ekipa budowlana właśnie wyjechała i zostaje plac z gruntem po sprzęcie",
        "Masz działkę od kilku sezonów i wciąż nie wiesz od czego zacząć",
        "Chcesz zaplanować ogród wiosną żeby jesień i kolejny sezon zacząć z gotową zielenią",
        "Budujesz nieruchomość pod wynajem lub sprzedaż — ogród to pierwsza rzecz którą widzi kupujący",
      ]}
      faq={[
        { q: "Czy robicie projekt przed realizacją?", a: "Dla większych ogrodów robimy plan nasadzeń i układ stref — żebyś wiedział co dostaniesz zanim zaczniemy. Przy prostszych zleceniach planujemy na miejscu w trakcie wyceny." },
        { q: "Jak długo trwa założenie ogrodu?", a: "Zależy od zakresu. Przygotowanie terenu + trawnik + podstawowe nasadzenia to 1–3 dni robocze. Kompleksowe projekty z kostką i pełnymi nasadzeniami — od tygodnia wzwyż." },
        { q: "Czy można rozłożyć prace na etapy?", a: "Tak i często to polecamy. Kluczowe jest żeby twarde elementy i drenaż zrobić na początku — reszta może poczekać. Pomagamy zaplanować sensowną kolejność etapów." },
      ]}
      relatedPosts={[
        { slug: "ogrod-po-budowie-co-zrobic-najpierw", title: "Ogród po budowie — co zrobić najpierw, żeby nie zaczynać dwa razy", readingTime: 7 },
        { slug: "ile-kosztuje-zalozenie-ogrodu", title: "Ile kosztuje założenie ogrodu? Realne widełki i co wpływa na cenę", readingTime: 6 },
      ]}
    />
  );
}
