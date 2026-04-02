export type Category =
  | "Trawniki"
  | "Przycinanie"
  | "Nasadzenia"
  | "Wycinki"
  | "Kostka brukowa"
  | "Zakładanie ogrodów";

export interface PostSection {
  heading: string;
  body: string;
  proTip?: string;
}

export interface Post {
  slug: string;
  title: string;
  description: string; // meta description, also used as excerpt
  category: Category;
  publishedAt: string; // ISO date
  readingTime: number; // minutes
  image: string; // path in /public/
  imageAlt: string;
  sections: PostSection[];
  relatedSlugs: string[];
  serviceHref?: string; // link to service page
  serviceLabel?: string;
}

export const CATEGORIES: Category[] = [
  "Trawniki",
  "Przycinanie",
  "Nasadzenia",
  "Wycinki",
  "Kostka brukowa",
  "Zakładanie ogrodów",
];

export const posts: Post[] = [
  /* ─── 1 ─── */
  {
    slug: "kiedy-wertykulowac-trawnik-szczecin",
    title: "Kiedy wertykulować trawnik? Wiosna, jesień — i jak to zrobić dobrze",
    description:
      "Wertykulacja to najważniejszy jednodniowy zabieg dla trawnika — ale żeby zadziałał, termin musi być właściwy. Sprawdź kiedy i jak często ma sens w naszym klimacie.",
    category: "Trawniki",
    publishedAt: "2025-04-10",
    readingTime: 5,
    image: "/photos/blog/trawnik-wiosna.webp",
    imageAlt: "Zadbany trawnik po wertykulacji — gęsta, zielona murawa",
    serviceHref: "/pielegnacja-trawnikow-szczecin",
    serviceLabel: "Pielęgnacja trawników",
    relatedSlugs: [
      "pielegnacja-trawnika-wiosna-szczecin",
      "zolknacy-trawnik-najczestsze-przyczyny",
      "jak-odnowic-ogrod-po-zimie",
    ],
    sections: [
      {
        heading: "Po czym poznać, że trawnik potrzebuje wertykulacji?",
        body: "Główna oznaka to **filc** — brązowawa, sprężysta warstwa obumarłej trawy i mchu tuż nad glebą. Wsadź palec w trawnik: jeśli trafiasz na gąbczastą warstwę grubszą niż centymetr zanim dotkniesz gleby — czas na wertykulator.\n\nInne sygnały: woda stoi po deszczu zamiast wsiąkać, mech rozrasta się szybciej niż trawa, nawóz nie daje efektu mimo regularnego stosowania. Trawnik wygląda cienko i bez siły nawet po podlaniu.",
        proTip:
          "Szybki test: wbij śrubokręt w trawnik. Jeśli zanim trafi w twardą glebę napotka ponad 1,5 cm gąbczastej warstwy — filc jest zdecydowanie za gruby.",
      },
      {
        heading: "Wiosna czy jesień — który termin lepszy?",
        body: "Obydwie pory roku działają, ale z innymi warunkami.\n\n**Wiosna (kwiecień–maj)** to klasyczny termin. Trawa dopiero rusza wegetację, ma przed sobą cały sezon na regenerację. W okolicach Szczecina optymalnie to przełom marca i kwietnia — gdy temperatura nocą przekracza 5°C i gleba jest rozmarznięta. Nie wchodź z wertykulatorem na mokry trawnik zaraz po roztopach.\n\n**Jesień (sierpień–wrzesień)** to drugie okno — szczególnie jeśli wiosna minęła bez zabiegu. Gleba wciąż ciepła, trawa rośnie, opady regularne. Unikaj wertykulacji po połowie września — trawa nie zdąży się zregenerować przed mrozami.\n\nCzego bezwzględnie unikać: środek lata w czasie suszy i późna jesień po pierwszych przymrozkach.",
        proTip:
          "Nigdy nie wertykuluj trawnika gdy jest suchy i popękany od upału. Odczekaj do deszczu lub podlej dzień wcześniej — gleba powinna być lekko wilgotna, nie mokra.",
      },
      {
        heading: "Jak często wertykulować?",
        body: "Na zdrowym, dobrze utrzymanym trawniku wystarczy **raz w roku** — najlepiej wiosną. Jeśli masz problem z rozrastającym się mchem, trawnik na gliniastej glebie albo intensywnie użytkowany plac zabaw — dwa razy rocznie (wiosna + wczesna jesień) przyniesie wyraźną poprawę.\n\nTrawniki na lżejszych glebach piaszczystych — typowych dla wielu działek w okolicach Szczecina, Polic i Goleniowa — filcują się wolniej. Możesz sobie pozwolić na wertykulację co dwa lata jeśli trawnik wygląda dobrze i nie ma problemu z mchem.",
      },
      {
        heading: "Technika — jak ustawić wertykulator i co potem",
        body: "Wertykulator ustaw na głębokość **5–10 mm**. Głębiej niż 10 mm to ryzyko uszkodzenia korzeni. Przejedź cały trawnik dwukrotnie: raz wzdłuż, raz w poprzek pod kątem 90°. Dwustronne przejście rozbija filc skuteczniej niż jedno.\n\nZebrane resztki (pełne mchu i grzybni) wygrabiaj i wyrzucaj z odpadami zielonymi — nie na kompost. Trawnik po wertykulacji wygląda przez 2–3 tygodnie jak po katastrofie: brązowe pasy, rzadka darń, widoczna gleba. To normalne. Po miesiącu będzie gęstszy niż przed zabiegiem.",
        proTip:
          "Przed wertykulacją skos trawę krótko — 4–5 cm. Wertykulator w długiej trawie bardziej ciągnie niż nacina, efekt jest wyraźnie gorszy.",
      },
      {
        heading: "Co zrobić bezpośrednio po wertykulacji",
        body: "Wertykulacja bez dalszych kroków to połowa robotki.\n\n**Tego samego dnia lub następnego:** dosiej na rzadkie i łyse miejsca mieszanką dopasowaną do ekspozycji (słoneczna vs cienista). Wgrabiaj nasiona lekko, dociśnij stopą. Nawożenie startowe: dawka azotu ok. 25–30 g/m² rozrzuć równomiernie i podlej.\n\n**Przez kolejne 3–4 tygodnie:** utrzymuj wilgotną glebę szczególnie w miejscach dosiewu. Nasiona traw kiełkują w 7–21 dni — jak gleba wyschnie, kiełkowanie się zatrzymuje.\n\n**Po 4 tygodniach:** pierwsze koszenie na wysokości 6–7 cm — nie niżej, zanim nowe źdźbła się wzmocnią.",
      },
    ],
  },

  /* ─── 8 ─── */
  {
    slug: "jak-odnowic-ogrod-po-zimie",
    title: "Jak odnowić ogród po zimie? Kolejność prac, które naprawdę mają sens",
    description:
      "Połamane gałęzie, rzadki trawnik, zmarzłe byliny — ogród po zimie to zazwyczaj sporo pracy. Sprawdź jak ocenić straty i zabrać się do porządków w dobrej kolejności.",
    category: "Trawniki",
    publishedAt: "2025-03-28",
    readingTime: 6,
    image: "/photos/blog/trawnik-wiosna.webp",
    imageAlt: "Ogród wiosną — odnowa trawnika i prace porządkowe",
    serviceHref: "/pielegnacja-trawnikow-szczecin",
    serviceLabel: "Pielęgnacja trawników",
    relatedSlugs: [
      "pielegnacja-trawnika-wiosna-szczecin",
      "kiedy-wertykulowac-trawnik-szczecin",
      "jak-przygotowac-ogrod-do-zimy",
    ],
    sections: [
      {
        heading: "Zacznij od oceny — nie od grabienia",
        body: "Pierwszy odruch po zimie to wziąć grabie i brać się do roboty. Błąd. Najpierw przejdź się po ogrodzie i oceń co przeżyło, co wymaga interwencji, a co można zostawić.\n\nNa co zwracać uwagę: pędy z czarnymi, marszczącymi się końcówkami (przemrożone — odetnij do zdrowego drewna), krzewy iglaste z brązowymi partiami (oparzelizna zimowa — poczekaj do maja, część może się odbudować sama), drzewa z pękniętą korą lub rozstępami w rozwidleniach gałęzi.\n\nW okolicach Szczecina zimy bywają łagodne, ale przymrozki do -15°C zdarzają się co kilka lat — szczególnie szkodliwe po ciepłym listopadzie, który nie zdążył zahartować roślin.",
        proTip:
          "Zanim wytniesz 'martwą' roślinę — zadrap paznokciem korę. Zielona lub biała tkanka pod spodem = żyje. Brązowa i sucha = martwa. Zrób test w kilku miejscach zanim zdecydujesz o całym krzewie.",
      },
      {
        heading: "Trawnik po zimie — priorytet numer jeden",
        body: "Trawnik to zazwyczaj największa robota po zimie i największy widoczny efekt od razu.\n\n**Nie wchodź na mokry trawnik.** W pierwszych tygodniach po roztopach gleba jest nasycona wodą — każdy krok ubija korzenie i pozostawia zagłębienia. Odczekaj aż gleba wchłonie wodę i przeschnie na kilka centymetrów w głąb.\n\nPo wyschnięciu oceniasz: łyse miejsca po śniegu, mech który rozrósł się zimą, zagłębienia po kretach, rzadką darnię. To wyznacza zakres pracy — od lekkiego dosiewu po pełną wertykulację z nawożeniem.",
      },
      {
        heading: "Krzewy i drzewa — co sprawdzić po zimie",
        body: "**Krzewy liściaste:** Przed pełnym ruszeniem wegetacji (luty–marzec) przytnij martwe i przemrożone pędy do zdrowego drewna. Jeśli nie wiesz które — poczekaj do maja, suche gałęzie łatwo odróżnić od tych które właśnie rosną.\n\n**Rośliny zimozielone i iglaki:** Brązowienie od strony słońca i wiatru to często oparzenie, nie przemrożenie — efekt utraty wody przez liście gdy gleba była zamarznięta. Wiele roślin odbija w maju bez żadnej interwencji. Przycinaj dopiero w czerwcu kiedy widać co żyje.\n\n**Drzewa:** Szukaj świeżych pęknięć kory — szczególnie w rozwidleniach gałęzi. Głębokie pęknięcie na grubej gałęzi to temat do oceny przez ogrodnika, nie do ignorowania.",
        proTip:
          "Nie nawóź chorych ani przemrożonych roślin. Nawóz stymuluje wzrost — słaba roślina dostaje więcej stresu zamiast czasu na regenerację. Najpierw poczekaj i oceń, nawóz dopiero gdy widać że roślina żyje i rośnie.",
      },
      {
        heading: "Rabaty i byliny — porządki wiosenne",
        body: "Byliny wycinaj dopiero gdy wiesz że wiosna naprawdę przyszła — w okolicach Szczecina zazwyczaj od końca marca. Za wczesne wycinanie odbiera roślinom izolację z własnych zeszłorocznych łodyg.\n\nCo wycinasz: suche łodygi zeszłorocznych bylin (przy ziemi, 5–10 cm nad poziomem gruntu), chwasty które ruszyły wcześniej niż byliny, stare zbite mulcze.\n\nRabaty uzupełnij świeżą ściółką po wygrabieniu — 5–8 cm kory lub zrębek utrzyma wilgoć i zablokuje chwasty przez cały sezon.",
      },
      {
        heading: "Właściwa kolejność prac — żeby nie robić dwa razy tego samego",
        body: "Praca wiosenna w ogrodzie ma swoją logikę. Zrób ją w złej kolejności — nadepniesz na właśnie dosiane trawniki albo wniesiesz gruz do już wyczyszczonych rabat.\n\n**Dobra kolejność:**\n\n1. Wycinka i usuwanie martwych roślin, opróżnianie kompostownika\n2. Korekty terenu — niwelacje, naprawy obrzeży\n3. Trawnik — wertykulacja, nawożenie, dosiew\n4. Rabaty — odchwaszczanie, cięcie bylin, uzupełnienie ściółki\n5. Nasadzenia uzupełniające — gdy gleba ciepła, po połowie kwietnia\n6. Pierwsze koszenie — gdy trawa osiągnie 8–10 cm",
      },
    ],
  },

  /* ─── 9 ─── */
  {
    slug: "zolknacy-trawnik-najczestsze-przyczyny",
    title: "Żółknący trawnik — najczęstsze przyczyny i jak je rozpoznać",
    description:
      "Żółte plamy, cały trawnik blady, trawa żółknie po koszeniu — każda z tych sytuacji ma inną przyczynę i inne rozwiązanie. Sprawdź jak postawić właściwą diagnozę.",
    category: "Trawniki",
    publishedAt: "2025-05-07",
    readingTime: 6,
    image: "/photos/blog/trawnik-wiosna.webp",
    imageAlt: "Trawnik — diagnoza problemów z żółknięciem i mchem",
    serviceHref: "/pielegnacja-trawnikow-szczecin",
    serviceLabel: "Pielęgnacja trawników",
    relatedSlugs: [
      "kiedy-wertykulowac-trawnik-szczecin",
      "pielegnacja-trawnika-wiosna-szczecin",
      "jak-odnowic-ogrod-po-zimie",
    ],
    sections: [
      {
        heading: "Najpierw diagnoza, potem działanie",
        body: "Żółknięcie trawy to objaw, nie choroba. Leczysz symptom bez diagnozy — tracisz czas i pieniądze. Zanim kupisz nawóz czy środek grzybobójczy, odpowiedz na kilka pytań: Czy żółknie cały trawnik równomiernie, czy tylko miejscami? Czy pojawiło się nagle po koszeniu, czy narastało stopniowo? Czy żółte miejsca mają wyraźny wzorzec — okrąg, pasmo wzdłuż ogrodzenia, obszar pod drzewem?\n\nOdpowiedzi wskazują na konkretną przyczynę, a każda wymaga innego działania.",
      },
      {
        heading: "Przyczyna 1: Niedobór azotu — najczęstsza diagnoza",
        body: "**Jak wygląda:** Równomierne, bladozielone lub żółtozielone zabarwienie całego trawnika. Trawa rośnie wolno, jest rzadka. Szczególnie widoczne wiosną i po intensywnych deszczach — azot wypłukuje się z gleby.\n\n**Co robić:** Nawożenie azotem — granulat lub płyn. Efekt widoczny w 7–14 dni. Uwaga: nie nawóź w środku suszy, azot bez wody pali trawę zamiast jej pomagać.",
        proTip:
          "Jeśli żółknie tylko trawa rosnąca pod drzewem liściastym — to prawdopodobnie nie azot. Opadające liście zakwaszają glebę, korzenie drzewa zabierają wodę i składniki. Pomaga wapnowanie i regularny kompost.",
      },
      {
        heading: "Przyczyna 2: Susza i przesuszenie gleby",
        body: "**Jak wygląda:** Trawa żółknie i brązowieje — szczególnie w miejscach słonecznych i na wzniesieniach. Większość traw ogrodowych po deszczu wraca do zieleni w ciągu 2–4 tygodni — to reakcja obronna, nie choroba.\n\n**Co robić:** Podlej głęboko — 20–30 mm wody na sesję. Podlewaj rzadziej ale obficiej: zachęcasz korzenie do wzrostu w głąb. Codzienne skrapianie 5 mm hoduje płytko zakorzeniony trawnik który wysycha przy pierwszym upale.\n\nCzego NIE robić: nie nawóź przesuszonego trawnika i nie wertykuluj w trakcie suszy.",
      },
      {
        heading: "Przyczyna 3: Choroby grzybowe",
        body: "**Jak wygląda:** Okrągłe lub nieregularne plamy — żółte, brązowe lub szarawobiałe — z wyraźną granicą. Rano możesz zobaczyć białawy nalot lub pajęczą grzybnię na trawie.\n\n**Najczęstsze:** Pleśń śniegowa (Microdochium nivale) — pojawia się wiosną po zejściu śniegu, okrągłe jasne plamy 5–30 cm średnicy. Fuzarioza — szarobrązowe plamy z watowatą grzybnią. Rdza trawnikowa — pomarańczowy pył na liściach, głównie jesienią.\n\n**Co robić:** Poprawa cyrkulacji powietrza (aeracja, wertykulacja), ograniczenie azotu późną jesienią. Przy nawracających chorobach — fungicyd kontaktowy i konsultacja, bo przyczyną bywa zły drenaż lub pH gleby.",
      },
      {
        heading: "Przyczyna 4: Zbita gleba i mech zamiast trawy",
        body: "**Jak wygląda:** Trawnik bardziej brązowy niż żółty, pokryty zielonym mchem, woda nie wsiąka po deszczu. Trawa rzadka, bez siły, mech zajmuje coraz więcej powierzchni.\n\n**Dlaczego:** Gleba zbita mechanicznie nie przepuszcza powietrza ani wody do korzeni. Mech świetnie się czuje w warunkach gdzie trawie dzieje się krzywda — cień, wilgoć, kwaśna gleba.\n\n**Co robić:** Aeracja + wertykulacja. Na ciężkich glebach gliniastych — regularna aeracja co roku to konieczność, nie opcja. Samo nawożenie mchem zajętego trawnika nie pomoże — mech zwalczasz działając na przyczynę, nie na symptom.",
      },
    ],
  },

  /* ─── 10 ─── */
  {
    slug: "chwasty-w-kostce-brukowej-jak-sie-pozbyc",
    title: "Chwasty w kostce brukowej — jak się pozbyć i jak zapobiec powrotowi",
    description:
      "Trawa i chwasty między płytkami wracają co roku? Fugi to dla nich idealne środowisko. Sprawdź jak je skutecznie usunąć i co zrobić żeby nie wracały tak szybko.",
    category: "Kostka brukowa",
    publishedAt: "2025-04-25",
    readingTime: 5,
    image: "/photos/blog/kostka-brukowa-podjazd.webp",
    imageAlt: "Kostka brukowa — czyszczenie fug i usuwanie chwastów",
    serviceHref: "/kostka-brukowa-szczecin",
    serviceLabel: "Kostka brukowa",
    relatedSlugs: [
      "jaka-kostka-brukowa-do-podjazdu",
      "ogrod-po-budowie-co-zrobic-najpierw",
      "projektowanie-ogrodu-od-czego-zaczac",
    ],
    sections: [
      {
        heading: "Skąd się biorą chwasty w fudze",
        body: "Fugi między kostką to gotowe środowisko dla roślin: trochę piasku lub ziemi, wilgoć, dostęp światła. Nasiona przynosi wiatr, ptaki, opadające liście. Pierwsze kiełki pojawiają się zazwyczaj w miejscach z najgrubszą warstwą piasku między kostką — tam gleba głębsza, więcej składników.\n\nZanim zaczniesz działać, sprawdź **gdzie dokładnie rosną**: chwasty skupione wzdłuż krawędzi i w cieniu sugerują za grubo wypełnione fugi lub brak szczelności przy obrzeżach. Chwasty rozłożone równomiernie — to efekt naturalnego wietrzenia fug po czasie.",
      },
      {
        heading: "Metoda mechaniczna — najskuteczniejsza na dłużej",
        body: "Wyrywanie chwastów ręcznie lub nożem do fug usuwa całą roślinę łącznie z korzeniem. Żaden inny sposób nie jest tak trwały — herbicydy i wrzątek zabijają część nadziemną, ale korzeń zostaje i często odbudowuje roślinę.\n\n**Nóż do fug lub haczyk** (20–30 zł w każdym markecie): nacinasz i wyciągasz całość. Dla dużych powierzchni — szczotka szczelinowa do kąta szlifierki skraca czas kilkukrotnie.\n\n**Myjka wysokociśnieniowa** (100–150 bar, dysza rotacyjna): wyciągnie chwasty i zdmuchnie część piasku z fug. Skuteczna i szybka, ale po myciu fugi trzeba uzupełnić — inaczej kostka zaczyna się ruszać.",
        proTip:
          "Najlepsza pora na mechaniczne czyszczenie to 2–3 dni po deszczu. Gleba jest wilgotna, chwasty łatwiej wyciągnąć z korzeniem. Na suchej, twardej glebie korzenie urywają się i zostają w fudze.",
      },
      {
        heading: "Domowe sposoby — ocet, sól, wrzątek",
        body: "**Ocet 10%:** Sprawdza się na młodych, cienkich chwastach. Kwas niszczy naskórek liścia, roślina wysycha. Nie sięga korzeni — przy utrwalonych chwastach efekt jest połowiczny i krótkotrwały. Stosuj w słoneczny, bezdeszczowy dzień.\n\n**Wrzątek:** Przelanie wrzątkiem działa doraźnie i ekologicznie na małe powierzchnie. Efektywne jako uzupełnienie, nie jako główna metoda.\n\n**Sól:** Tak, niszczy chwasty. Ale też degraduje strukturę gleby i w nadmiarze może trafić do podbudowy i gruntu. Odradzamy szczególnie przy nasadzeniach w pobliżu.",
      },
      {
        heading: "Herbicydy — kiedy warto i jak stosować",
        body: "Herbicyd totalny na bazie glifosatu skutecznie zabija chwasty łącznie z korzeniami. Efekt po 7–14 dniach.\n\n**Kiedy ma sens:** duże powierzchnie z zaawansowanymi chwastami gdzie mechaniczne czyszczenie zajęłoby cały weekend.\n\n**Jak stosować bezpiecznie:** W dzień bez wiatru i deszczu — minimum 24h bez opadów po aplikacji. Aplikacja precyzyjna — pędzelek lub aplikator, nie oprysk na całość jeśli w pobliżu są rabaty lub trawnik. Herbicyd zabija co posmarujesz — przypadkowy kontakt z trawnikiem lub nasadzeniami jest trudny do naprawienia.",
      },
      {
        heading: "Jak zapobiec powrotowi — trwałe rozwiązanie",
        body: "Chwasty wracają bo fugi wypełnione zwykłym piaskiem to idealne podłoże do kiełkowania. Trwałe zapobieganie to **zmiana materiału wypełnienia**.\n\n**Stabilizator do fug** (piasek kwarcowy ze spoiwem cementowym): po ubiciu i zawilgoceniu twardnieje, utrudniając kiełkowanie. Koszt ok. 3–8 zł/kg. Na 50 m² kostki potrzebujesz 5–20 kg zależnie od głębokości fug.\n\n**Fuga polimerowa:** Najskuteczniejsza opcja. Po wypełnieniu i spryskaniu wodą twardnieje i jest prawie nieprzepuszczalna dla nasion. Droższa i bardziej wymagająca w aplikacji, ale efekt trwa latami.\n\nŻaden sposób nie jest wieczny — fugi wietrzeją po kilku latach. Uzupełnianie stabilizatorem raz na 2–3 lata to realistyczne minimum.",
      },
    ],
  },

  /* ─── 11 ─── */
  {
    slug: "ile-kosztuje-zalozenie-ogrodu",
    title: "Ile kosztuje założenie ogrodu? Realne widełki i co wpływa na cenę",
    description:
      "Trawnik, kostka, nasadzenia, ogrodzenie — ile naprawdę kosztuje urządzenie ogrodu od podstaw? Podajemy konkretne widełki i tłumaczymy gdzie warto zainwestować, a gdzie można zaoszczędzić.",
    category: "Zakładanie ogrodów",
    publishedAt: "2025-05-14",
    readingTime: 6,
    image: "/photos/blog/projektowanie-ogrodu.webp",
    imageAlt: "Projekt ogrodu — planowanie i kosztorys od podstaw",
    serviceHref: "/zakladanie-ogrodow-szczecin",
    serviceLabel: "Zakładanie ogrodów",
    relatedSlugs: [
      "projektowanie-ogrodu-od-czego-zaczac",
      "ogrod-po-budowie-co-zrobic-najpierw",
      "jaka-kostka-brukowa-do-podjazdu",
    ],
    sections: [
      {
        heading: "Dlaczego tak trudno dostać jedną konkretną cenę?",
        body: "Zakładanie ogrodu to nie usługa z katalogowym cennikiem — to projekt, który różni się w każdym przypadku. Kiedy pytasz \"ile kosztuje założenie ogrodu\" i słyszysz \"to zależy\" — to nie wymówka, tylko prawda.\n\nCo decyduje o cenie: **stan terenu** (wyrównana działka po deweloperze czy dzika parcela z chaszczami i kamieniami), **metraż** (300 m² to inny budżet niż 1500 m²), **zakres prac** (sam trawnik i żywopłot vs pełna realizacja z kostką, nawadnianiem i oświetleniem), **jakość materiałów** (rośliny z marketu budowlanego vs sprawdzona szkółka, granit vs beton).\n\nJedno jest pewne: kosztuje więcej niż większość właścicieli spodziewa się na początku.",
      },
      {
        heading: "Orientacyjny budżet — co za co płacisz",
        body: "Ceny dotyczą ogrodu przydomowego w Szczecinie i okolicach, stan na 2025 rok.\n\n**Trawnik z siewu** (przygotowanie terenu + siew + nawożenie startowe): 15–35 zł/m² robocizny i materiału.\n\n**Trawnik z rolki:** 35–65 zł/m² — wyższy koszt startu, natychmiastowy efekt.\n\n**Żywopłot** (posadzenie bez zakupu roślin): 20–50 zł/mb robocizny. Same rośliny: 15–60 zł/sztuka zależnie od gatunku i wielkości sadzonki.\n\n**Kostka brukowa** (podjazd lub taras): 120–280 zł/m² — materiał + robocizna + podbudowa.\n\n**System nawadniania** (strefa trawnikowa): 4000–15 000 zł zależnie od złożoności.\n\n**Projekt ogrodu** z wizualizacją: 1500–6000 zł.",
        proTip:
          "Poproś o kosztorys z rozpisaniem materiałów i robocizny osobno. Firma która odmawia takiego rozpisania — powód do zastanowienia.",
      },
      {
        heading: "Etapy i priorytety — od czego zacząć przy ograniczonym budżecie",
        body: "Nie musisz robić wszystkiego naraz. Ogród można budować etapami — ale niektóre prace muszą być pierwsze, bo zrobione po innych stają się droższe lub niemożliwe.\n\n**Etap 1 (obowiązkowy teraz):** Wyrównanie terenu, drenaż jeśli potrzebny, rury nawadniające i instalacje podziemne. Wszystko co jest pod ziemią — rób zanim wszystko zakryjesz.\n\n**Etap 2:** Twarde elementy — kostka, tarasy, ścieżki, ogrodzenia.\n\n**Etap 3:** Trawnik i podstawowe nasadzenia (drzewa, żywopłot).\n\n**Etap 4 (można odłożyć):** Byliny, trawy ozdobne, oświetlenie, meble ogrodowe.",
      },
      {
        heading: "Gdzie warto zainwestować, a gdzie można zaoszczędzić",
        body: "**Nie oszczędzaj na:** Podbudowie pod kostkę brukową (za słaba = podjazd zapada się po 3 latach), systemie nawadniania (ogrody bez nawadniania giną przy pierwszej suszy), drzewach i żywopłocie — kupując małe sadzonki czekasz 5–10 lat więcej na efekt.\n\n**Możesz zaoszczędzić na:** Bylinach i roślinach ozdobnych (małe sadzonki w dobrym miejscu rosną szybciej niż myślisz), samodzielnym grabieniu i porządkach sezonowych, trawnik z siewu zamiast z rolki (różnica 30–50% kosztu, efekt po 6–8 tygodniach).",
      },
      {
        heading: "Jak dostać realną wycenę bez niespodzianek",
        body: "Zanim podpiszesz umowę — sprawdź kilka rzeczy.\n\n**Co powinna zawierać rzetelna wycena:** Lista materiałów z ilościami i cenami jednostkowymi, opis robocizny z podziałem na etapy, termin realizacji i harmonogram płatności, jasność co jest w zakresie a co poza nim.\n\n**Czerwone flagi:** Cena \"za ogród\" bez szczegółów, brak informacji o podbudowie, płatność gotówką z góry bez umowy.\n\nU nas: bezpłatna wizyta na miejscu, kosztorys z wyszczególnieniem, stała cena po ustaleniu zakresu. Działamy w Szczecinie i okolicach — Police, Goleniów, Stargard, Gryfino, ok. 50 km.",
      },
    ],
  },

  /* ─── 12 ─── */
  {
    slug: "jak-przygotowac-ogrod-do-zimy",
    title: "Jak przygotować ogród do zimy? Co przyciąć, co zabezpieczyć, a czego nie ruszać",
    description:
      "Wrzesień i październik to czas decyzji — co przyciąć, co okryć, a czego absolutnie nie ruszać. Sprawdź jak sprawnie przygotować ogród na zimę bez niepotrzebnej pracy.",
    category: "Przycinanie",
    publishedAt: "2025-09-20",
    readingTime: 6,
    image: "/photos/blog/przycinanie-krzewow.webp",
    imageAlt: "Przycinanie krzewów jesienią — przygotowanie ogrodu do zimy",
    serviceHref: "/przycinanie-krzewow-i-drzewek-szczecin",
    serviceLabel: "Przycinanie krzewów i drzewek",
    relatedSlugs: [
      "kiedy-i-jak-przycinac-krzewy-ozdobne",
      "jak-odnowic-ogrod-po-zimie",
      "jak-posadzic-zywoplot-krok-po-kroku",
    ],
    sections: [
      {
        heading: "Kiedy zaczynać — nie za wcześnie i nie za późno",
        body: "Jesienna pielęgnacja ogrodu ma swoje okno. Zacznij za wcześnie — rośliny są w połowie wegetacji, cięcie pobudzi nowe pędy które przemrzną. Za późno — ziemia zamarznie i utrudni część prac.\n\nOptymalne okno dla Szczecina i zachodniopomorskiego: **wrzesień–październik**, gdy temperatury nocą regularnie schodzą do 5–10°C. Rośliny spowalniają wzrost i przekierowują zasoby do korzeni — to właściwy moment.",
      },
      {
        heading: "Trawnik przed zimą — trzy kluczowe zabiegi",
        body: "**Ostatnie koszenie:** Przed zimą trawnik powinien mieć 5–7 cm. Za długi (powyżej 8–10 cm) tworzy matę z gnijącej trawy — idealne środowisko dla pleśni śniegowej. Za krótki (poniżej 4 cm) — wrażliwy na mróz. Ostatnie koszenie: październik, gdy trawa jeszcze rośnie ale już wyraźnie zwalnia.\n\n**Nawożenie jesienne (potasowo-fosforowe):** Azot odpuszczamy — nie pobudzamy wzrostu przed zimą. Trawa potrzebuje teraz potasu (odporność na mróz i choroby) i fosforu (stymulacja korzeni). Nawozy z etykietą \"jesienny\" mają właśnie taki skład.\n\n**Aeracja jeśli potrzebna:** Gdy widelec wbija się z trudem w twardą ziemię — warto zrobić aerację teraz. Otwory wypełnione piaskiem kwarcowym poprawią drenaż i przezimowanie.",
        proTip:
          "Nie wertykuluj trawnika późno jesienią jeśli nie masz pewności że zdąży się zregenerować przed mrozami. W okolicach Szczecina bezpieczny termin wertykulacji jesiennej to do końca września.",
      },
      {
        heading: "Co przycinać — i czego absolutnie nie ruszać",
        body: "**Przycinasz teraz:**\n\nByliny zielne — łodygi zostawiasz 10–15 cm nad ziemią (osłona korzeni, siedlisko owadów). Krzewy owocowe (porzeczki, agrest) — przed spoczynkiem zimowym. Żywopłoty — ostatnie formowanie przed sezonem.\n\n**Absolutnie nie ruszasz:**\n\nRododendronów i azalii — tworzą teraz pąki kwiatowe na przyszły rok, cięcie pozbawi Cię wiosennego kwitnienia. Krzewów kwitnących wiosną (forsycja, pigwowiec, weigela) — te same zasady. Róż — tylko lekkie cięcie sanitarne, mocne cięcie dopiero wiosną. Hortensji ogrodowych (H. macrophylla) — stare kwiatostany chronią roślinę przed mrozem, zostaw je do marca. Traw ozdobnych — zimą są dekoracyjne i chronią korzeń, wycinasz wiosną.",
      },
      {
        heading: "Zabezpieczenie roślin wrażliwych na mróz",
        body: "Co wymaga okrywania: rośliny strefy 7 i wyżej (palmy, jukki, egzotyczne trawy), różaneczniki w zimnych i wietrznych miejscach, nowe nasadzenia które jeszcze się nie zakorzeniły, rośliny w donicach — korzenie w donicach są znacznie bardziej narażone na mróz niż w gruncie.\n\n**Jak okrywać prawidłowo:** Agrowłóknina (nie folia!) — przepuszcza powietrze, nie powoduje gnicia. Słoma lub igły sosnowe do ściółkowania strefy korzeniowej (5–10 cm). Jutowe opakowanie na pnie młodych drzew — chroni korę przed pękaniem.\n\nFolia PE jako okrycie to błąd — roślina pod nią się poci i gnije przy pierwszym słonecznym dniu.",
      },
      {
        heading: "Porządki i mulczowanie — ostatni etap",
        body: "Jesienne porządki nie oznaczają ogrodu czystego jak płyta szafy. **Część resztek warto zostawić** — liście pod krzewami to naturalna ściółka i schronienie dla jeży i pożytecznych owadów.\n\nCo sprzątnąć: liście z trawnika (gnić będą, przyciągają choroby), martwe pędy z objawami chorób (do worka, nie na kompost), owoce gnijące przy drzewach (źródło chorób na następny sezon).\n\n**Mulczowanie rabat:** 5–8 cm kory lub zrębków to ochrona korzeni, mniej chwastów wiosną i poprawa struktury gleby. Nie mulczuj bezpośrednio przy łodygach i pniach — sprzyja gniciu.",
      },
    ],
  },

  /* ─── 13 ─── */
  {
    slug: "ogrod-po-budowie-co-zrobic-najpierw",
    title: "Ogród po budowie — co zrobić najpierw, żeby nie zaczynać dwa razy",
    description:
      "Ekipa wyjechała i zostaje plac z gruzem i zbitą ziemią. Co zrobić jako pierwsze, żeby ogród miał w ogóle szansę wyglądać normalnie? Sprawdź właściwą kolejność.",
    category: "Zakładanie ogrodów",
    publishedAt: "2025-06-05",
    readingTime: 7,
    image: "/photos/blog/zywoplot-sadzenie.webp",
    imageAlt: "Sadzenie roślin — zakładanie ogrodu od podstaw po budowie",
    serviceHref: "/zakladanie-ogrodow-szczecin",
    serviceLabel: "Zakładanie ogrodów",
    relatedSlugs: [
      "projektowanie-ogrodu-od-czego-zaczac",
      "ile-kosztuje-zalozenie-ogrodu",
      "jaka-kostka-brukowa-do-podjazdu",
    ],
    sections: [
      {
        heading: "Co zwykle zostawia ekipa budowlana",
        body: "Rzeczywistość po budowie jest brutalna: zbita gleba po ciężkim sprzęcie, gruz i odpady wmieszane w warstwę wierzchnią, zniszczona lub całkowicie usunięta próchnica (cenny humus zostaje często wywieziony razem z obcą ziemią), nierówności i zagłębienia po kołach maszyn.\n\nNa takiej glebie nie wyrośnie trawnik. Możesz siać 10 razy i kupować kilogramy nasion — bez przygotowania podłoża tracisz czas i pieniądze.\n\nNajpierw uczciwa ocena: czy grunt można poprawić dostępnymi metodami, czy trzeba wwieźć nową ziemię? To wymaga wizyty i oceny z łopatą w ręku — bez tego każdy plan to wróżenie.",
      },
      {
        heading: "Krok 1: Gleba — bez tego wszystko inne nie ma sensu",
        body: "Zanim cokolwiek posadzisz — usuń gruz. Nie tylko z powierzchni, bo często jest wmieszany kilkanaście centymetrów w głąb. Możesz go wyłowić przesianiem, możesz wwieźć nową warstwę ziemi na wierzch jeśli zanieczyszczenie jest głębsze.\n\n**Jaką ziemię przywieźć:** humus lub ziemia ogrodowa z certyfikatem jakości, nie pierwsza lepsza wywrotka z robót drogowych. Taka ziemia może zawierać gruz, sole albo nasiona chwastów.\n\nMinimalna warstwa świeżej ziemi pod trawnik: 10–15 cm. Pod nasadzenia krzewów i drzew: 30–40 cm. Po nawiezieniu ziemi odczekaj 2–4 tygodnie na osiadnięcie — trawnik posiewany na świeżo nawiezionej, nieubitej ziemi będzie nierówny.",
        proTip:
          "Sprawdź pH gleby przed nasadzeniami — zestaw do pH kosztuje 20–30 zł. Idealne pH dla trawnika to 6,0–7,0. Na nowych działkach gleba bywa silnie zasadowa po cemencie i wapnie z budowy.",
      },
      {
        heading: "Krok 2: Drenaż i niwelacja — co pominięte kosztuje potem",
        body: "Jeśli po deszczu woda stoi w jakimkolwiek miejscu dłużej niż godzinę — masz problem z drenażem. Nie próbuj tego zakryć trawnikiem: mokra gleba = martwy trawnik i gnijące korzenie.\n\n**Rozwiązania od prostych do złożonych:**\n\nNiwelacja terenu ze spadkiem minimum 1–2% od budynku — często samo ukształtowanie terenu wystarczy. Drenaż francuski (rury drenarskie w żwirze odprowadzone do studni chłonnej) — dla poważniejszych problemów. Studnia chłonna — dla terenów bez możliwości odprowadzenia wody.\n\nKoszt drenażu: 2000–15 000 zł zależnie od skali. Zrobiony przed ogrodem — kilka tysięcy. Zrobiony gdy masz już trawnik i nasadzenia — kilkukrotność kosztu plus koszt naprawy zniszczeń.",
      },
      {
        heading: "Krok 3: Twarde elementy zawsze przed zielenią",
        body: "Jeśli planujesz kostkę brukową, taras, chodniki, ogrodzenie — decydujesz teraz i robisz przed trawnikiem.\n\nDlaczego to ważne: podbudowa pod kostkę wymaga wykopu 30–40 cm w głąb. Jeśli masz już ułożony trawnik lub posadzone drzewa — ciężki sprzęt je zniszczy, a gruz z wykopu wyląduje na świeżo przywiezionej glebie.\n\n**Twarda zasada: twarde elementy zawsze pierwsze.** Kolejność: ogrodzenie → kostka i tarasy → ścieżki → instalacje podziemne (nawadnianie, oświetlenie) → dopiero gleba, trawnik, nasadzenia.",
      },
      {
        heading: "Krok 4: Trawnik i nasadzenia — kolejność i timing",
        body: "Po twardych elementach przychodzi czas na zieleń. Tu też kolejność ma znaczenie.\n\n**Najpierw duże drzewa** — wymagają więcej miejsca przy sadzeniu, niekiedy potrzebny jest sprzęt. Sadź przed wypełnieniem drobniejszymi nasadzeniami.\n\n**Żywopłoty i krzewy** — po drzewach. Delimitują przestrzeń i tworzą strukturę ogrodu.\n\n**Trawnik** — po krzewach, żeby nie deptać nowo zasianej trawy podczas sadzenia. Trawnik z siewu: 6–8 tygodni ciepłej pogody zanim można normalnie użytkować. Z rolki: 2–3 tygodnie ukorzeniania.\n\n**Byliny i rabaty** — na końcu, można uzupełniać przez kilka sezonów.\n\nNajgorszy błąd po budowie to pośpiech. Lepiej poczekać jeden sezon z ostatecznymi nasadzeniami niż na złej glebie, w złej kolejności, kupować drogie rośliny które padną w pierwszą zimę.",
      },
    ],
  },

  /* ─── 14 ─── */
  {
    slug: "ile-kosztuje-pielegnacja-ogrodu-szczecin",
    title: "Ile kosztuje pielęgnacja ogrodu w Szczecinie? Cennik 2025",
    description:
      "Koszenie, przycinanie, wertykulacja, porządki sezonowe — ile naprawdę kosztuje regularna pielęgnacja ogrodu w Szczecinie? Podajemy realne widełki i wyjaśniamy co wpływa na cenę.",
    category: "Trawniki",
    publishedAt: "2025-04-18",
    readingTime: 5,
    image: "/photos/blog/projektowanie-ogrodu.webp",
    imageAlt: "Zadbany ogród — efekt regularnej pielęgnacji",
    serviceHref: "/pielegnacja-trawnikow-szczecin",
    serviceLabel: "Pielęgnacja trawników",
    relatedSlugs: [
      "kiedy-wertykulowac-trawnik-szczecin",
      "ile-kosztuje-zalozenie-ogrodu",
      "projektowanie-ogrodu-od-czego-zaczac",
    ],
    sections: [
      {
        heading: "Dlaczego ceny tak się różnią między firmami?",
        body: "Różnica między najtańszą a najdroższą ofertą w Szczecinie potrafi sięgać 100–200% za pozornie tę samą usługę. To nie jest przypadek ani zła wola — wynika z zakresu i podejścia.\n\nNajbardziej wpływa na cenę: **powierzchnia** (koszenie ogrodu 100 m² a 1000 m² to inny czas i sprzęt), **stopień zaniedbania** (ogród niestrzyżony przez rok wymaga wielokrotnie więcej pracy niż regularnie pielęgnowany), **dostępność terenu** (skarpa, wąskie przejścia, schody — czas rośnie) oraz **co wchodzi w zakres** (samo koszenie vs koszenie + grabienie + wywóz).",
      },
      {
        heading: "Orientacyjny cennik pielęgnacji ogrodu w Szczecinie 2025",
        body: "Poniższe ceny to widełki orientacyjne — ostateczna wycena zawsze wymaga wizyty na miejscu.\n\n**Koszenie trawnika:** 0,50–1,20 zł/m² (z grabieniem i wywozem ścinki). Ogród 300 m² to ok. 150–360 zł za jednorazowe koszenie.\n\n**Przycinanie żywopłotu:** 15–40 zł za metr bieżący (zależy od gatunku i wysokości).\n\n**Wertykulacja + dosiew:** 1,50–3,50 zł/m² robocizny, bez materiałów na dosiew.\n\n**Kompleksowe wiosenne porządki** (grabienie, przycinanie krzewów, pierwsze koszenie, wywóz): 400–1200 zł za ogród przydomowy — zależy od powierzchni i stopnia zaniedbania.\n\n**Regularna pielęgnacja w sezonie** (co 2–3 tygodnie): 200–600 zł miesięcznie za ogród 200–500 m².",
        proTip:
          "Ogród regularnie pielęgnowany jest tańszy w utrzymaniu niż zaniedbany, który trzeba za każdym razem 'odbudowywać'. Pierwsza wizyta po przerwie zawsze kosztuje więcej.",
      },
      {
        heading: "Co wpływa na cenę — szczegółowo",
        body: "**Pora roku:** Pierwsze wiosenne porządki po zimie kosztują więcej niż standardowe letnie koszenie — więcej pracy, więcej odpadów.\n\n**Wywóz odpadów:** Jeśli chcesz żeby firma zabrała gałęzie, trawę i liście — to osobna pozycja. Różni się znacznie w zależności od ilości.\n\n**Typ nawierzchni:** Ogród z kostką, schodami, rabatami ze ściółką — więcej czasu na obrzeżnikowanie i czyszczenie fugów.\n\n**Odległość od Szczecina:** Dojeżdżamy w promieniu ok. 50 km — do Polic, Goleniowa, Stargardu, Gryfina. Dla dalszych miejscowości może doliczyć się koszt dojazdu.",
      },
      {
        heading: "Abonament czy jednorazowe zlecenie — co się bardziej opłaca?",
        body: "**Jednorazowe zlecenie:** wybierasz kiedy potrzebujesz, płacisz za każdą wizytę osobno. Wygodne jeśli w większości ogrodem zajmujesz się sam.\n\n**Regularna umowa sezonowa** (co 2–3 tygodnie): niższa cena za wizytę, ogród zawsze zadbany, nie musisz o niczym pamiętać.\n\nWiele osób decyduje się na wariant mieszany — samodzielne koszenie, ale zlecenie wymagających prac jak wertykulacja, przycinanie żywopłotów i wiosenne porządki. To rozsądny kompromis między kosztem a efektem.",
      },
      {
        heading: "Jak dostać rzetelną wycenę bez niespodzianek",
        body: "Każda wycena powinna być po oględzinach na miejscu — zdjęcia telefoniczne nie wystarczą do precyzyjnej oferty.\n\nCzego oczekiwać od dobrego ogrodnika: konkretna kwota za opisany zakres prac, jasność co jest wliczone w cenę (wywóz?), stała cena po ustaleniu — bez dosypywania w trakcie.\n\nU nas działa to prosto: bezpłatna wizyta, ocena ogrodu, konkretna kwota. Żadnych niespodzianek w trakcie roboty. Działamy w Szczecinie i w okolicach — Police, Goleniów, Stargard, Gryfino, do ok. 50 km.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slugs: string[]): Post[] {
  return slugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is Post => p !== undefined);
}

export function getPostsByCategory(category: Category): Post[] {
  return posts.filter((p) => p.category === category);
}
