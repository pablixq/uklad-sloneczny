/* ============ dane planet ============ */
/* Każdy obiekt: id (używane w QR), nazwa, typ, kolor, lead, ciekawostki, fakty, misja */
const PLANETY = [
  {
    id: "slonce",
    nazwa: "Słońce",
    typ: "Gwiazda — nasz silnik",
    kolor: "#ffb648",
    lead: "Największy obiekt w całym Układzie Słonecznym. To od niego zaczyna się wszystko: światło, ciepło i życie na Ziemi.",
    ciekawostki: [
      "Słońce ma <b>99,86% masy całego Układu Słonecznego</b> — wszystkie planety, księżyce i asteroidy razem to tylko okruch przy nim.",
      "Światło potrzebuje <b>8 minut i 20 sekund</b>, żeby dolecieć ze Słońca do Ziemi. Patrząc na Słońce, widzisz je takim, jakie było 8 minut temu.",
      "Na powierzchni jest około <b>5500 °C</b>, a w środku (w jądrze) jakieś <b>15 milionów °C</b>. Tam wodór zamienia się w hel i powstała cała ta energia.",
      "Za około <b>5 miliardów lat</b> Słońce spuchnie i stanie się <i>czerwonym olbrzymem</i> — na szczęście mamy jeszcze trochę czasu 😅"
    ],
    fakty: [
      ["Średnica", "1,39 mln km"],
      ["Masa", "333 000 Ziem"],
      ["Temperatura", "5500 °C"],
      ["Wiek", "4,6 mld lat"]
    ],
    misja: "Słońce to nie planeta, tylko gwiazda — kulka gazu tak ciężka, że w jej środku zachodzi fuzja jądrowa. Dzięki niej świeci."
  },
  {
    id: "merkury",
    nazwa: "Merkury",
    typ: "Planeta skalista",
    kolor: "#b9b3a7",
    lead: "Najmniejsza i najszybsza planeta. Pędzi wokół Słońca z prędkością 47 km/s — jakbyś leciał Warszawę–Gdańsk w 8 sekund.",
    ciekawostki: [
      "Merkury jest <b>mniejszy niż Ganimedes i Tytan</b> — dwa księżyce, które krążą wokół Jowisza i Saturna. Planetą został tylko dlatego, że krąży wokół Słońca, a nie wokół planety.",
      "Rok na Merkurym trwa <b>88 dni ziemskich</b>, ale jeden dzień (od wschodu do wschodu Słońca) aż <b>176 dni</b> — czyli dzień jest tam dwa razy dłuższy niż rok!",
      "Temperatury skaczą od <b>−180 °C</b> w nocy do <b>+430 °C</b> w dzień. To rekord w całym Układzie Słonecznym.",
      "Nie ma atmosfery, która chroniłaby go przed meteorytami — dlatego jego powierzchnia jest cała w kraterach, podobnie jak Księżyc."
    ],
    fakty: [
      ["Od Słońca", "58 mln km"],
      ["Rok", "88 dni"],
      ["Obrót", "59 dni"],
      ["Księżyce", "0"]
    ],
    misja: "Najgorętsza planeta to nie Merkury, a Wenus — sprawdź dlaczego. Merkury wygrywa tylko w konkursie na największe skoki temperatury."
  },
  {
    id: "wenus",
    nazwa: "Wenus",
    typ: "Planeta skalista",
    kolor: "#e8b46a",
    lead: "Najgorętsza planeta Układu Słonecznego — i to nie dlatego, że jest najbliżej Słońca. Winna jest jej atmosfera.",
    ciekawostki: [
      "Na Wenus jest około <b>465 °C</b> — goręcej niż na Merkurym, mimo że Wenus krąży dalej od Słońca. Gęsta atmosfera z CO₂ działa jak <b>kołdra</b> i zatrzymuje ciepło (efekt cieplarniany).",
      "Ciśnienie na powierzchni jest <b>92 razy większe</b> niż na Ziemi — jakbyś zanurzył się 900 metrów pod wodę. Sondy wytrzymywały tam około godziny.",
      "Wenus obraca się <b>w przeciwną stronę</b> niż inne planety i bardzo powoli: jeden obrót trwa 243 dni, a rok 225 dni. Dzień jest tam dłuższy niż rok!",
      "Z Ziemi wygląda jak bardzo jasna gwiazda — nazywamy ją <b>Gwiazdą Wieczorną</b> lub <b>Jutrzenką</b>. To najjaśniejszy obiekt na nocnym niebie po Księżycu."
    ],
    fakty: [
      ["Od Słońca", "108 mln km"],
      ["Rok", "225 dni"],
      ["Obrót", "243 dni"],
      ["Księżyce", "0"]
    ],
    misja: "Wenus to przestroga: planeta podobna rozmiarem do Ziemi, a przez atmosferę zamieniła się w piekarnik. Dlatego tak uważnie badamy jej klimat."
  },
  {
    id: "ziemia",
    nazwa: "Ziemia",
    typ: "Nasz dom",
    kolor: "#5aa9e6",
    lead: "Jedyna znana planeta z życiem. I jedyna, na której ktoś napisał tę stronę 😉",
    ciekawostki: [
      "Aż <b>71% powierzchni</b> Ziemi to woda — dlatego z kosmosu wygląda jak niebieska kulka. Ale tylko 3% tej wody to woda słodka.",
      "Ziemia obraca się wokół własnej osi w <b>23 godziny 56 minut</b>. To daje nam dzień i noc, a nachylenie osi (23,5°) — pory roku.",
      "Pole magnetyczne Ziemi działa jak <b>niewidzialna tarcza</b> i odchyla cząstki z wiatru słonecznego. Gdy część wpada w atmosferę, powstają <b>zorze polarne</b>.",
      "Światło ze Słońca leci do nas <b>8 minut i 20 sekund</b>. Gdyby Słońce nagle zniknęło, dowiedzielibyśmy się o tym dopiero po 8 minutach."
    ],
    fakty: [
      ["Od Słońca", "150 mln km"],
      ["Rok", "365,25 dnia"],
      ["Dzień", "24 godziny"],
      ["Księżyce", "1"]
    ],
    misja: "Ziemia nie jest za blisko ani za daleko Słońca — leży w tzw. strefie zamieszkiwalnej, gdzie woda może być płynna. To warunek życia, jakie znamy."
  },
  {
    id: "ksiezyc",
    nazwa: "Księżyc",
    typ: "Naturalny satelita Ziemi",
    kolor: "#c9c9d4",
    lead: "Nasz jedyny naturalny satelita. Widzimy go codziennie, a wciąż potrafi zaskoczyć.",
    ciekawostki: [
      "Księżyc <b>oddala się od Ziemi o 3,8 cm rocznie</b>. Zmierzyli to laserem, świecąc w lustra zostawione przez astronautów Apollo.",
      "Zawsze pokazuje nam <b>tę samą stronę</b> — obraca się wokół siebie dokładnie w tym samym czasie, w jakim obiega Ziemię. Drugiej strony nie widać nigdy z Ziemi.",
      "Jego grawitacja podnosi wodę w oceanach — dlatego mamy <b>przypływy i odpływy</b>.",
      "Na Księżycu stanęło <b>12 ludzi</b> (misje Apollo, 1969–1972). Ich ślady wciąż tam są, bo nie ma wiatru ani deszczu, które by je zatarły.",
      "Pełny obieg wokół Ziemi zajmuje mu <b>27,3 dnia</b>, a światło z Księżyca dociera do nas w 1,3 sekundy."
    ],
    fakty: [
      ["Odległość", "384 400 km"],
      ["Obieg", "27,3 dnia"],
      ["Średnica", "3474 km"],
      ["Grawitacja", "1/6 Ziemi"]
    ],
    misja: "Fazy Księżyca (nowy, pierwsza kwadra, pełnia, ostatnia kwadra) to efekt tego, jak Słońce oświetla jego kulę widzianą z Ziemi."
  },
  {
    id: "mars",
    nazwa: "Mars",
    typ: "Planeta skalista",
    kolor: "#d1603d",
    lead: "Czerwona planeta. Kolor zawdzięcza rdzewiejącemu żelazu w gruncie — to dosłownie rdzawy pył.",
    ciekawostki: [
      "Na Marsie stoi <b>Olympus Mons</b> — wulkan wysoki na 22 km, prawie trzy razy wyższy niż Mount Everest. To najwyższa góra w całym Układzie Słonecznym.",
      "Przez Marsa ciągnie się <b>Valles Marineris</b> — kanion długi na 4000 km. Przecięcie go samochodem zajęłoby kilka dni.",
      "Mars ma dwa małe księżyce: <b>Fobos</b> i <b>Deimos</b>. Fobos powoli zbliża się do planety i za jakieś 50 mln lat rozpadnie się lub w nią uderzy.",
      "Dawno temu płynęły tu rzeki i były jeziora — łaziki znajdują ślady wody i lód pod powierzchnią. Dlatego Mars jest głównym kandydatem na ludzką bazę."
    ],
    fakty: [
      ["Od Słońca", "228 mln km"],
      ["Rok", "687 dni"],
      ["Dzień", "24 h 37 min"],
      ["Księżyce", "2"]
    ],
    misja: "Na Marsie jeżdżą łaziki Curiosity i Perseverance, a razem z Perseverance poleciał helikopter Ingenuity — pierwszy pojazd, który latał w atmosferze innej planety."
  },
  {
    id: "jowisz",
    nazwa: "Jowisz",
    typ: "Gazowy olbrzym",
    kolor: "#d9a066",
    lead: "Największa planeta Układu Słonecznego. Gdyby był pusty w środku, zmieściłoby się w nim ponad 1300 Ziem.",
    ciekawostki: [
      "Jowisz ma <b>11 razy większą średnicę</b> od Ziemi, a jego masa to <b>2,5 razy masa wszystkich pozostałych planet razem</b>.",
      "<b>Wielka Czerwona Plama</b> to gigantyczna burza — większa od Ziemi. Obserwujemy ją od ponad 350 lat i wciąż nie chce się skończyć.",
      "Jowisz obraca się najszybciej ze wszystkich planet: pełny obrót w <b>9 godzin 55 minut</b>. Dlatego jest lekko spłaszczony na biegunach.",
      "Ma <b>95 znanych księżyców</b>. Cztery największe — Io, Europa, Ganimedes i Kallisto — zauważył już Galileusz w 1610 roku.",
      "Na <b>Io</b> jest ponad 400 aktywnych wulkanów — to najbardziej wulkaniczne ciało Układu Słonecznego. Pod lodem <b>Europy</b> prawdopodobnie kryje się ocean, w którym mogłoby istnieć życie."
    ],
    fakty: [
      ["Od Słońca", "778 mln km"],
      ["Rok", "11,9 lat"],
      ["Obrót", "9 h 55 min"],
      ["Księżyce", "95"]
    ],
    misja: "Jowisz działa jak odkurzacz Układu Słonecznego — swoją grawitacją przyciąga komety i asteroidy, chroniąc trochę planety wewnętrzne."
  },
  {
    id: "saturn",
    nazwa: "Saturn",
    typ: "Gazowy olbrzym",
    kolor: "#e3cf9a",
    lead: "Planeta z najpiękniejszymi pierścieniami. Na zdjęciach wygląda jak dzieło sztuki, a w środku jest gazowym olbrzymem.",
    ciekawostki: [
      "Pierścienie Saturna są <b>szerokie na 280 000 km</b>, ale bardzo cienkie — w niektórych miejscach mają zaledwie kilkanaście metrów grubości. Zbudowane są z lodu i skał, od pyłku po domy wielkości.",
      "Saturn ma <b>mniejszą gęstość niż woda</b> — gdybyś znalazł wystarczająco wielką wannę, ta planeta by w niej pływała!",
      "Ma <b>ponad 270 księżyców</b> — najwięcej w całym Układzie Słonecznym. Rekord ustanowiono dopiero w 2025 roku.",
      "<b>Tytan</b>, największy księżyc Saturna, ma gęstą atmosferę i jeziora z ciekłego metanu. To jedyne miejsce poza Ziemią z jeziorami na powierzchni.",
      "Księżyc <b>Enceladus</b> wyrzuca z siebie gejzery wody — pod lodem ma ocean, który interesuje naukowców szukających życia."
    ],
    fakty: [
      ["Od Słońca", "1,4 mld km"],
      ["Rok", "29,5 lat"],
      ["Obrót", "10 h 33 min"],
      ["Księżyce", "274"]
    ],
    misja: "Pierścienie to nie jedna bryła — to miliardy kawałków lodu krążących razem wokół planety, każdy po swojej orbicie."
  },
  {
    id: "uran",
    nazwa: "Uran",
    typ: "Lodowy olbrzym",
    kolor: "#7fd6d6",
    lead: "Planeta, która „toczy się” na boku. Prawdopodobnie dawno temu uderzyło w nią coś bardzo dużego i przewróciło ją na bok.",
    ciekawostki: [
      "Oś obrotu Urana jest <b>przechylona o 98°</b> — planeta kręci się praktycznie leżąc. Przez to bieguny mają po 42 lata dnia i 42 lata nocy.",
      "Ma <b>najzimniejszą atmosferę</b> w Układzie Słonecznym: około <b>−224 °C</b>. Zimniej niż na znacznie dalszym Neptunie.",
      "Jeden obieg wokół Słońca zajmuje Uranowi <b>84 lata ziemskie</b>. Odkryto go w 1781 roku, więc wykonał dopiero nieco ponad dwa pełne okrążenia.",
      "Został odkryty przez <b>Williama Herschela</b> — jako pierwsza planeta w historii znaleziona za pomocą teleskopu, a nie gołym okiem.",
      "Ma <b>28 księżyców</b>, a ich nazwy pochodzą z dzieł Szekspira: Tytania, Oberon, Miranda, Ariel, Umbriel."
    ],
    fakty: [
      ["Od Słońca", "2,9 mld km"],
      ["Rok", "84 lata"],
      ["Obrót", "17 h 14 min"],
      ["Księżyce", "28"]
    ],
    misja: "Uran i Neptun nazywamy lodowymi olbrzymami, bo pod atmosferą mają wodę, amoniak i metan w stanie lodowym — nie tak jak gazowe Jowisz i Saturn."
  },
  {
    id: "neptun",
    nazwa: "Neptun",
    typ: "Lodowy olbrzym",
    kolor: "#4d6fd4",
    lead: "Najdalsza planeta od Słońca i najbardziej wietrzne miejsce w Układzie Słonecznym.",
    ciekawostki: [
      "Wieją tam wiatry do <b>2100 km/h</b> — najszybsze w całym Układzie Słonecznym. Huragan na Ziemi to przy tym podmuch.",
      "Neptun został odkryty <b>najpierw na papierze</b>. Matematycy policzyli, gdzie musi być planeta, która zaburza orbitę Urana — i rzeczywiście tam była (1846 rok).",
      "Jeden rok na Neptunie to <b>165 lat ziemskich</b>. Od odkrycia w 1846 roku zdążył okrążyć Słońce tylko raz — w 2011 roku.",
      "Jego największy księżyc <b>Tryton</b> krąży w przeciwną stronę niż obrót planety. To prawdopodobnie przechwycone ciało z pasa Kuipera i jedno z najzimniejszych miejsc w Układzie (−235 °C)."
    ],
    fakty: [
      ["Od Słońca", "4,5 mld km"],
      ["Rok", "165 lat"],
      ["Obrót", "16 h 6 min"],
      ["Księżyce", "16"]
    ],
    misja: "Światło ze Słońca leci do Neptuna ponad 4 godziny. Gdybyś stał na jego powierzchni, Słońce byłoby tylko bardzo jasną gwiazdą."
  }
];
