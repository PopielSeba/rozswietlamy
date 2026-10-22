export const company = {
  name: 'REKORD HALE NAMIOTOWE SP. Z O.O.',
  phone: '+48571294344',
  phoneDisplay: '+48 571 294 344',
  email: 'dystrybucja@halenamiotowe.com.pl',
  address: 'ul. Kazimierza Wielkiego 1',
  city: 'Wrocław',
  postalCode: '50-077',
  sourceUrl: 'https://www.pozyczmnie.pl/maszty-oswietleniowe',
};

export const equipment = [
  {
    slug: 'atlas-copco-hilight',
    name: 'Atlas Copco HiLight',
    brand: 'Atlas Copco',
    model: 'HiLight — seria LED',
    displayValue: 'LED',
    displayLabel: 'Technologia oświetlenia',
    note: 'Prezentujemy serię HiLight. Model, wysokość i parametry konkretnej jednostki potwierdzamy w ofercie.',
    description: 'Mobilne maszty oświetleniowe LED do placów budowy, imprez i obiektów tymczasowych. Dobieramy jednostki oraz ich rozmieszczenie do kształtu terenu, rodzaju zadań i planowanych godzin pracy.',
    application: 'Budowy, place robocze, wydarzenia plenerowe i obiekty tymczasowe.',
    details: [
      {
        title: 'Światło dopasowane do terenu',
        text: 'Seria Atlas Copco HiLight obejmuje różne konfiguracje masztów. Zaczynamy od planu terenu, wymaganych stref oświetlenia i przeszkód, które mogą tworzyć cienie. Na tej podstawie ustalamy propozycję sprzętu oraz miejsc ustawienia.',
      },
      {
        title: 'Konkretny model w indywidualnej ofercie',
        text: 'Wysokość masztu, układ reflektorów, sposób zasilania i czas pracy zależą od jednostki. Potwierdzamy je przy przygotowaniu zamówienia. Jeśli masz wymagania dotyczące natężenia światła, godzin pracy albo dostępu do miejsca ustawienia, przekaż je w zapytaniu.',
      },
      {
        title: 'Od doboru po dostawę',
        text: 'Przy wynajmie ustalamy okres użytkowania, lokalizację i zakres logistyki. Przy zapytaniu o zakup potwierdzamy dostępny egzemplarz, jego stan i wyposażenie. Parametry pracy oraz przygotowanie miejsca odnosimy do dokumentacji konkretnego urządzenia.',
      },
    ],
    specs: [
      { label: 'Producent', value: 'Atlas Copco' },
      { label: 'Seria w ofercie', value: 'HiLight' },
      { label: 'Oświetlenie', value: 'LED' },
      { label: 'Model i wysokość masztu', value: 'Potwierdzane w indywidualnej ofercie' },
      { label: 'Zasilanie i wyposażenie', value: 'Dobierane do konkretnego urządzenia i zadania' },
    ],
    sourceUrl: 'https://www.pozyczmnie.pl/maszty-oswietleniowe',
    image: '/assets/atlas-copco-hilight.webp',
    imageAlt: 'Maszt oświetleniowy Atlas Copco z oferty REKORD',
  },
  {
    slug: 'generac-v20-pro',
    name: 'Generac V20 PRO',
    brand: 'Generac Mobile',
    model: 'V20 PRO',
    displayValue: '8,2 m',
    displayLabel: 'Maks. wysokość masztu',
    note: 'Zdjęcie pokazuje zestaw z Solar Kit PRO. Wersję urządzenia, wyposażenie i sposób zasilania potwierdzamy w ofercie.',
    description: 'Mobilna wieża oświetleniowa LED z hydraulicznie podnoszonym masztem. Platforma V20 PRO pozwala dopasować sposób zasilania do harmonogramu pracy; konfigurację urządzenia i akcesoriów ustalamy dla konkretnego projektu.',
    application: 'Tereny imprez, place robocze, zaplecza i miejsca wymagające oświetlenia tymczasowego.',
    details: [
      {
        title: 'Maszt podnoszony hydraulicznie',
        text: 'Karta REKORD opisuje V20 PRO z maksymalną wysokością 8,2 m i podnoszeniem hydraulicznym. Miejsce ustawienia oraz docelowe położenie reflektorów dobieramy do terenu i rodzaju zadania. Warunki rozstawienia wynikają z dokumentacji wybranego egzemplarza.',
      },
      {
        title: 'Zasilanie dopasowane do godzin pracy',
        text: 'Rodzina V20 PRO łączy rozwiązania zasilania spalinowego, akumulatorowego i zewnętrznego. Wybór trybu wymaga ustalenia wyposażenia jednostki, zapotrzebowania na światło i harmonogramu. Opisz także wymagania dotyczące dźwięku oraz dostęp do sieci.',
      },
      {
        title: 'Możliwość konfiguracji z Solar Kit PRO',
        text: 'Oferta REKORD opisuje zestaw z Solar Kit PRO, a producent wskazuje go jako dodatkowe źródło ładowania. W zapytaniu możesz uwzględnić taką konfigurację. Dostępność akcesorium i zakres zestawu potwierdzamy w ofercie; udział energii słonecznej zależy od warunków na miejscu.',
      },
    ],
    specs: [
      { label: 'Producent / model', value: 'Generac Mobile / V20 PRO' },
      { label: 'Maksymalna wysokość w karcie REKORD', value: '8,2 m' },
      { label: 'Podnoszenie masztu', value: 'Hydrauliczne' },
      { label: 'Technologia światła', value: 'LED' },
      { label: 'Solar Kit PRO', value: '3 × 300 Wp — zakres zestawu do uzgodnienia' },
    ],
    sourceUrl: 'https://halenamiotowe.com.pl/wp-content/uploads/2025/01/20_09_Produkty_Zaplecze-techniczne-Wieza-oswietleniowa-V20-PRO.pdf',
    image: '/assets/generac-v20-pro.webp',
    imageAlt: 'Wieża oświetleniowa Generac V20 PRO z zestawem paneli Solar Kit PRO w ofercie REKORD',
  },
];

export const faq = [
  {
    q: 'Jakie maszty oświetleniowe oferujecie?',
    a: 'W ofercie są mobilne maszty LED Atlas Copco z serii HiLight oraz wieża Generac V20 PRO. Konkretny model, wersję wyposażenia i dostępność na wskazany termin potwierdzamy podczas przygotowania oferty.',
  },
  {
    q: 'Jak dobieracie liczbę masztów?',
    a: 'Uwzględniamy powierzchnię i kształt terenu, rodzaj wykonywanych zadań, przeszkody oraz oczekiwane warunki oświetlenia. Ważne są także możliwe miejsca ustawienia. Sama liczba metrów kwadratowych nie określa jeszcze potrzebnej liczby masztów.',
  },
  {
    q: 'Czy potrzebny jest dostęp do prądu?',
    a: 'Sposób zasilania zależy od wybranej jednostki i konfiguracji. Możemy omówić rozwiązanie dla miejsca bez stałego przyłącza oraz wykorzystanie dostępnej sieci. Podaj planowane godziny pracy i warunki na miejscu.',
  },
  {
    q: 'Na jak długo można wynająć maszt?',
    a: 'Przygotowujemy wynajem krótkoterminowy i długoterminowy: na wydarzenie, etap robót lub dłuższe użytkowanie placu. Przekaż datę rozpoczęcia i przewidywany okres wynajmu, a sprawdzimy dostępność oraz warunki.',
  },
  {
    q: 'Czy dostarczacie maszty na miejsce?',
    a: 'Koordynujemy transport, harmonogram dostawy i przygotowanie sprzętu do pracy w Polsce oraz Unii Europejskiej. Dostęp do terenu, miejsce rozładunku i zakres realizacji ustalamy przed zamówieniem.',
  },
  {
    q: 'Ile kosztuje wynajem masztu oświetleniowego?',
    a: 'Cena zależy od sprzętu, liczby jednostek, okresu wynajmu, lokalizacji i zakresu dostawy. Podaj opis terenu, harmonogram oraz wymagania dotyczące zasilania. Na tej podstawie przygotujemy indywidualną wycenę.',
  },
  {
    q: 'Czy V20 PRO można zamówić z panelami słonecznymi?',
    a: 'Możesz zapytać o konfigurację z Solar Kit PRO. Katalog REKORD opisuje ten zestaw, a jego dostępność oraz zakres wyposażenia potwierdzamy w ofercie. Warunki słoneczne i harmonogram pracy wpływają na udział takiego źródła energii.',
  },
  {
    q: 'Czy można kupić maszt oświetleniowy?',
    a: 'Przyjmujemy indywidualne zapytania o zakup. Dostępność egzemplarza, stan, parametry, wyposażenie, cenę i warunki dostawy przedstawimy w ofercie dla konkretnego zamówienia.',
  },
];

export const useCases = [
  {
    slug: 'oswietlenie-budowy',
    title: 'Budowy i roboty terenowe',
    eyebrow: 'Oświetlenie placu budowy',
    metaTitle: 'Oświetlenie budowy — wynajem masztów LED | Rozświetlamy',
    metaDescription: 'Wynajem masztów oświetleniowych na budowę i roboty terenowe. Dobór sprzętu, rozmieszczenia, zasilania i dostawy do harmonogramu prac.',
    description: 'Zaplanuj oświetlenie placu budowy, robót terenowych i zaplecza. Dobieramy maszty do układu terenu, wykonywanych zadań oraz godzin pracy. Wspólnie ustalamy miejsca ustawienia i dostawę dopasowaną do etapu realizacji.',
    details: [
      'Powierzchnia, kształt terenu i strefy wymagające oświetlenia.',
      'Praca maszyn, przeszkody i zmiany układu placu w czasie.',
      'Godziny robót oraz przewidywany okres wynajmu.',
      'Warunki dojazdu, rozładunku, ustawienia i zasilania.',
    ],
    sections: [
      {
        title: 'Światło tam, gdzie prowadzone są prace',
        text: 'Inaczej planuje się oświetlenie rozległego placu, a inaczej wydłużonego odcinka robót lub pojedynczego stanowiska. Pomocny jest plan z zaznaczeniem obszarów pracy, ciągów komunikacyjnych i zaplecza. Jeśli projekt określa wymagane natężenie światła, przekaż te dane wraz z zapytaniem.',
      },
      {
        title: 'Układ dopasowany do etapu budowy',
        text: 'Składowane materiały, maszyny i nowe elementy obiektu mogą zmieniać rozkład cieni. Warto wskazać, które strefy będą użytkowane w kolejnych etapach. Omówimy liczbę masztów, miejsca ich ustawienia i potrzebę zmian konfiguracji w trakcie wynajmu.',
      },
      {
        title: 'Dostawa i harmonogram pracy',
        text: 'Podaj termin rozpoczęcia robót, godziny pracy oraz dostępne okna dostawy. Przygotowanie oferty obejmuje również rozmowę o dojeździe, podłożu i możliwościach zasilania. Parametry rozstawienia oraz obsługi odnosimy do konkretnego urządzenia i jego dokumentacji.',
      },
    ],
    faq: [
      {
        q: 'Czy jeden maszt wystarczy na mój plac budowy?',
        a: 'Do oceny potrzebujemy wymiarów, kształtu terenu i opisu zadań. Znaczenie mają również przeszkody, miejsca ustawienia i oczekiwane oświetlenie stanowisk. Dobór nie opiera się wyłącznie na powierzchni działki.',
      },
      {
        q: 'Czy można wynająć sprzęt tylko na jeden etap robót?',
        a: 'Tak, przygotowujemy także oferty krótkoterminowe. Podaj daty i przewidywany czas użytkowania. Dostępność, zakres dostawy oraz warunki wynajmu potwierdzimy przed zamówieniem.',
      },
      {
        q: 'Co jeśli budowa nie ma stałego przyłącza?',
        a: 'Opisz dostępne źródła zasilania i planowaną liczbę godzin pracy dziennie. Omówimy odpowiednią konfigurację urządzeń oraz organizację ich użytkowania w warunkach Twojej budowy.',
      },
    ],
  },
  {
    slug: 'oswietlenie-imprez',
    title: 'Eventy i imprezy plenerowe',
    eyebrow: 'Oświetlenie terenu imprezy',
    metaTitle: 'Oświetlenie imprez — wynajem masztów LED | Rozświetlamy',
    metaDescription: 'Mobilne oświetlenie terenu imprez, parkingów i zaplecza eventowego. Dobór masztów LED, konfiguracji i dostawy do planu wydarzenia.',
    description: 'Przygotuj oświetlenie wejść, parkingów, zaplecza i terenu imprezy plenerowej. Uwzględniamy plan wydarzenia, przepływ uczestników i pracę ekip technicznych. Dostawę oraz okres użytkowania uzgadniamy z harmonogramem organizatora.',
    details: [
      'Układ wejść, parkingów, stref technicznych i ciągów komunikacyjnych.',
      'Godziny wydarzenia, przygotowań i demontażu.',
      'Miejsca ustawienia względem uczestników oraz sąsiednich obiektów.',
      'Dostępne zasilanie i wymagania dotyczące dźwięku.',
    ],
    sections: [
      {
        title: 'Podział terenu na strefy',
        text: 'Parking, wejście dla gości i zaplecze dostaw pełnią inne funkcje. Zaznacz je na planie i określ godziny użytkowania każdej strefy. Ułatwia to rozmowę o rozmieszczeniu masztów, kierunku światła i obszarach, które powinny być oświetlone po zakończeniu programu.',
      },
      {
        title: 'Światło przed wydarzeniem i po nim',
        text: 'Oświetlenie może być potrzebne już podczas montażu, a później przy pracy ekip demontażowych. Ustalmy pełny harmonogram, obejmujący także odbiór sprzętu. W planie ustawienia uwzględniamy ruch gości i pojazdów oraz wymagania organizatora dotyczące światła i dźwięku.',
      },
      {
        title: 'Zasilanie w planie wydarzenia',
        text: 'Podaj, czy teren ma przyłącze, czy organizator zapewnia zasilanie tymczasowe. Możemy omówić konfigurację masztów z własnym zasilaniem oraz możliwości V20 PRO. Wariant pracy i akcesoria dobieramy do jednostki, godzin użytkowania i warunków na miejscu.',
      },
    ],
    faq: [
      {
        q: 'Czy maszty mogą oświetlać parking i zaplecze koncertu?',
        a: 'Takie strefy należą do zastosowań oświetlenia mobilnego. Prześlij plan parkingu i zaplecza wraz z godzinami pracy oraz miejscami możliwego ustawienia. Dobór uzgodnimy dla konkretnego układu.',
      },
      {
        q: 'Czy dobieracie rozwiązanie do ograniczeń hałasu?',
        a: 'Przekaż wymagania organizatora i informacje o sąsiedztwie. Przy wyborze sprzętu omawiamy jego konfigurację i sposób zasilania. Parametry wybranego wariantu potwierdzamy w ofercie.',
      },
      {
        q: 'Kiedy należy zaplanować dostawę?',
        a: 'Podaj daty montażu, wydarzenia i demontażu oraz godziny dostępu dla transportu. Termin dostawy i odbioru uzgodnimy po sprawdzeniu dostępności i możliwości dojazdu na teren.',
      },
    ],
  },
  {
    slug: 'oswietlenie-placow',
    title: 'Place, parkingi i zaplecza',
    eyebrow: 'Oświetlenie placów i parkingów',
    metaTitle: 'Oświetlenie placów i parkingów — maszty | Rozświetlamy',
    metaDescription: 'Wynajem masztów do oświetlenia placów roboczych, parkingów i zaplecza. Plan rozmieszczenia, dobór zasilania i dostawa w Polsce oraz UE.',
    description: 'Zaplanuj tymczasowe oświetlenie placu, parkingu lub zaplecza obiektu. Dobieramy maszty do rozkładu terenu, ruchu pojazdów i godzin użytkowania. Możemy omówić uzupełnienie istniejącego oświetlenia albo konfigurację dla nowej przestrzeni.',
    details: [
      'Wymiary placu oraz miejsca pracy, przejazdu i postoju.',
      'Przeszkody, składowane materiały i istniejące punkty świetlne.',
      'Godziny użytkowania oraz planowana długość wynajmu.',
      'Możliwości ustawienia urządzeń, dojazdu i zasilania.',
    ],
    sections: [
      {
        title: 'Oświetlenie zgodne z organizacją placu',
        text: 'Rozpoczynamy od rozróżnienia stanowisk pracy, ciągów przejazdu i obszarów postoju. Sam obrys działki nie pokazuje, gdzie światło będzie potrzebne najbardziej. Prześlij plan z przeszkodami i istniejącymi lampami, abyśmy mogli omówić rozstawienie urządzeń.',
      },
      {
        title: 'Uzupełnienie lub rozwiązanie tymczasowe',
        text: 'Maszty można uwzględnić w planie oświetlenia dodatkowej części placu albo na czas zmian w stałej instalacji. Określ, które strefy mają pracować po zmroku i czy ich układ będzie się zmieniał. Pozwala to dopasować zakres wynajmu do rzeczywistego użytkowania.',
      },
      {
        title: 'Plan pracy na kolejne dni',
        text: 'Przy dłuższym wynajmie istotne są godziny świecenia, sposób zasilania i dostęp do urządzeń. Uzgadniamy również harmonogram dostawy oraz miejsca ustawienia poza planowanym ruchem. Wymagania dotyczące podłoża i rozstawienia potwierdzamy dla wybranego sprzętu.',
      },
    ],
    faq: [
      {
        q: 'Czy mogę doświetlić tylko część placu?',
        a: 'Tak. Wskaż obszar, który wymaga światła, i miejsca, w których działają już lampy. Dobór liczby urządzeń zależy od układu tej strefy, przeszkód i rodzaju wykonywanych zadań.',
      },
      {
        q: 'Czy wynajem może obejmować kilka miesięcy?',
        a: 'Przygotowujemy oferty długoterminowe. Podaj okres użytkowania i godziny pracy dziennie. Sprawdzimy dostępność, omówimy konfigurację oraz warunki dostawy i wynajmu.',
      },
      {
        q: 'Co przygotować do wyceny oświetlenia parkingu?',
        a: 'Potrzebujemy wymiarów lub planu, liczby i układu stref, godzin użytkowania oraz informacji o zasilaniu. Wskaż też sąsiednie obiekty, przeszkody i miejsca dostępne dla masztów.',
      },
    ],
  },
];

export const benefits = [
  {
    title: 'Mobilne oświetlenie LED',
    description: 'Atlas Copco HiLight i Generac V20 PRO. Sprzęt do budów, wydarzeń i przestrzeni użytkowanych tymczasowo.',
  },
  {
    title: 'Dobór do układu terenu',
    description: 'Uwzględniamy kształt obszaru, przeszkody, rodzaj zadań oraz możliwe miejsca ustawienia urządzeń.',
  },
  {
    title: 'Plan zasilania i pracy',
    description: 'Omawiamy dostępne zasilanie i godziny użytkowania. Konfigurację ustalamy dla wybranych jednostek.',
  },
  {
    title: 'Dostawa w Polsce i UE',
    description: 'Koordynujemy transport, harmonogram dostawy i przygotowanie sprzętu zgodnie z uzgodnionym zakresem.',
  },
];

export const process = [
  {
    title: 'Opisz teren i zadanie',
    description: 'Podaj lokalizację, powierzchnię lub wymiary, termin i godziny pracy. Wskaż strefy wymagające światła.',
  },
  {
    title: 'Dobierzmy maszty',
    description: 'Omówimy liczbę jednostek, miejsca ustawienia i sposób zasilania. Przygotujemy indywidualną ofertę.',
  },
  {
    title: 'Zaplanujmy dostawę',
    description: 'Po uzgodnieniu zamówienia ustalamy transport i przygotowanie sprzętu według harmonogramu projektu.',
  },
];

export const servicePages = {
  rental: {
    eyebrow: 'Wynajem masztów oświetleniowych',
    title: 'Wynajem masztów oświetleniowych LED',
    metaTitle: 'Wynajem masztów oświetleniowych LED | Rozświetlamy',
    metaDescription: 'Wynajem masztów Atlas Copco i Generac na budowy, eventy i place. Dobór sprzętu, rozmieszczenia, zasilania i dostawy w Polsce oraz UE.',
    intro: 'Wynajem masztów oświetleniowych do placów budowy, imprez plenerowych i obiektów tymczasowych. Dobieramy urządzenia Atlas Copco i Generac do warunków terenu, planowanych godzin pracy oraz dostępnego zasilania.',
    sections: [
      {
        title: 'Na wydarzenie, etap robót lub dłuższy okres',
        text: 'Oferujemy wynajem krótkoterminowy i długoterminowy. Podaj datę rozpoczęcia, miejsce realizacji i przewidywany czas użytkowania. Dostępność urządzeń oraz warunki rozliczenia potwierdzamy w indywidualnej ofercie.',
      },
      {
        title: 'Dobór obejmuje więcej niż powierzchnię',
        text: 'Znaczenie mają kształt terenu, przeszkody, wykonywane zadania i oczekiwane warunki oświetlenia. Plan z zaznaczonymi strefami pracy ułatwia ustalenie liczby masztów i miejsc ustawienia. Wymagania natężenia światła warto przekazać już w zapytaniu.',
      },
      {
        title: 'Sprzęt, zasilanie i harmonogram',
        text: 'Ustalamy konkretną jednostkę, konfigurację i sposób zasilania. Podaj liczbę godzin pracy dziennie oraz informacje o dostępnym przyłączu. Zakres wyposażenia i obsługi określamy przed realizacją.',
      },
      {
        title: 'Dostawa dopasowana do miejsca',
        text: 'Koordynujemy transport i przygotowanie sprzętu w Polsce oraz Unii Europejskiej. Omawiamy dostęp dla pojazdu, miejsce rozładunku i warunki ustawienia. Koszt oferty zależy od urządzeń, czasu wynajmu, lokalizacji i uzgodnionego zakresu.',
      },
    ],
    faq: [
      {
        q: 'Co podać w zapytaniu o wynajem masztów?',
        a: 'Przekaż lokalizację, daty, powierzchnię lub wymiary terenu, zastosowanie i godziny pracy. Wskaż dostępne zasilanie, przeszkody oraz miejsca ustawienia. Plan lub szkic pomoże dobrać konfigurację.',
      },
      {
        q: 'Czy możecie pomóc określić liczbę urządzeń?',
        a: 'Tak. Opis zadania i plan terenu pozwalają omówić rozmieszczenie masztów. Jeśli znasz wymagane natężenie światła lub masz projekt oświetlenia, dołącz te informacje do zapytania.',
      },
      {
        q: 'Czy paliwo i transport są w cenie?',
        a: 'Zakres transportu, zasilania, paliwa i pozostałych elementów ustalamy w ofercie. Podaj harmonogram i warunki na miejscu, abyśmy mogli przygotować wycenę odpowiadającą Twojemu zamówieniu.',
      },
      {
        q: 'Czy można przedłużyć wynajem?',
        a: 'Przekaż przewidywany nowy termin możliwie wcześnie. Możliwość przedłużenia, dostępność urządzenia i warunki ustalamy indywidualnie dla trwającego zamówienia.',
      },
      {
        q: 'Jak otrzymać cenę wynajmu?',
        a: 'Zadzwoń pod numer +48 571 294 344 lub przygotuj zapytanie z opisem terenu i terminem. Po ustaleniu sprzętu, okresu i zakresu dostawy przedstawimy indywidualną ofertę.',
      },
    ],
  },
  sale: {
    eyebrow: 'Sprzedaż masztów oświetleniowych',
    title: 'Sprzedaż masztów oświetleniowych',
    metaTitle: 'Sprzedaż masztów oświetleniowych — oferta | Rozświetlamy',
    metaDescription: 'Zapytaj o zakup masztu oświetleniowego Atlas Copco lub Generac V20 PRO. Dobór urządzenia, wyposażenia i warunków dostawy do projektu.',
    intro: 'Sprzedaż masztów oświetleniowych w formie indywidualnej oferty. Zapytaj o Atlas Copco HiLight lub Generac V20 PRO. Omówimy zadania urządzenia, a następnie potwierdzimy dostępność konkretnego egzemplarza i warunki zakupu.',
    sections: [
      {
        title: 'Najpierw sposób użytkowania',
        text: 'Opisz teren, rodzaj zadań, godziny świecenia i częstotliwość przenoszenia sprzętu. Ważne są również dostęp do zasilania i warunki transportu. Na tej podstawie pomagamy ustalić wymagania wobec urządzenia.',
      },
      {
        title: 'Konkretny egzemplarz i wyposażenie',
        text: 'Przy propozycji zakupu potwierdzamy model, wersję, stan i parametry jednostki. Atlas Copco HiLight jest serią urządzeń, dlatego dobór wymaga wskazania konkretnego modelu. Dla V20 PRO ustalamy także wariant zasilania i zakres akcesoriów.',
      },
      {
        title: 'Warunki zamówienia przed decyzją',
        text: 'Cena, dostępność, zakres dostawy oraz ewentualne warunki gwarancji i wsparcia są częścią indywidualnej oferty. Nie musisz znać dokładnego modelu na początku — możesz opisać zadanie i poprosić o dobór.',
      },
      {
        title: 'Dostawa i przygotowanie do użytkowania',
        text: 'Podaj docelową lokalizację, termin i możliwości dojazdu. Omówimy transport oraz zakres przygotowania sprzętu. Warunki ustawienia i obsługi wynikają z dokumentacji konkretnej jednostki.',
      },
    ],
    faq: [
      {
        q: 'Jak zapytać o zakup masztu?',
        a: 'Wskaż interesujący sprzęt lub opisz zastosowanie. Podaj lokalizację, planowany termin, godziny pracy i sposób zasilania. Potwierdzimy dostępność oraz warunki konkretnej propozycji.',
      },
      {
        q: 'Czy dostępne są urządzenia nowe czy używane?',
        a: 'Stan, wersję i wyposażenie potwierdzamy dla konkretnego egzemplarza. Przekaż swoje wymagania w zapytaniu, abyśmy mogli odnieść się do nich w indywidualnej ofercie.',
      },
      {
        q: 'Czy mogę zamówić V20 PRO z Solar Kit PRO?',
        a: 'Możesz uwzględnić taki zestaw w zapytaniu. Możliwość zakupu akcesorium, jego zgodność z proponowanym egzemplarzem i zakres dostawy potwierdzamy podczas przygotowania oferty.',
      },
      {
        q: 'Czy pomożecie dobrać maszt przed zakupem?',
        a: 'Tak. Omawiamy teren, rodzaj pracy, harmonogram oraz warunki zasilania. Na tej podstawie pomagamy określić parametry masztu i konfigurację potrzebną w Twoim projekcie.',
      },
      {
        q: 'Czy organizujecie dostawę?',
        a: 'Możemy skoordynować transport w Polsce lub Unii Europejskiej. Termin, dojazd, rozładunek i pozostały zakres dostawy ustalamy w indywidualnej ofercie.',
      },
    ],
  },
};
