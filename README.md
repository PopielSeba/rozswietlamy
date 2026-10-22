# Rozświetlamy

Strona marki REKORD dotycząca wynajmu masztów oświetleniowych, doboru mobilnego oświetlenia i indywidualnych zapytań o zakup. Domena docelowa: **rozswietlamy.pl**.

## Budowanie i sprawdzanie

Wymagany **Node.js 22 lub nowszy**. Projekt nie ma zależności npm — instalacja pakietów nie jest potrzebna.

```bash
npm run build
npm run check
npm test
```

Generator zapisuje kompletną statyczną stronę w `dist/`. Katalog ten jest wynikiem budowania; zmiany treści i wyglądu należy wprowadzać w źródłach. Podgląd wymaga udostępnienia `dist/` przez serwer statyczny.

Kontrola projektu obejmuje m.in. adresy stron, metadane, canonical, JSON-LD, sitemapę, obrazy i lokalne odnośniki. Testy sprawdzają przygotowanie zapytania o wynajem lub zakup.

### Konfiguracja adresu

Domyślne wartości:

```text
SITE_URL=https://rozswietlamy.pl
BASE_PATH=
```

`SITE_URL` określa adres publiczny używany w canonical, metadanych i sitemapie. `BASE_PATH` pozostaje pusty przy publikacji w katalogu głównym domeny. W przypadku innego adresu przekaż identyczne wartości do budowania i sprawdzania:

```bash
SITE_URL=https://rozswietlamy.pl BASE_PATH="" npm run build
SITE_URL=https://rozswietlamy.pl BASE_PATH="" npm run check
```

## Struktura strony

**10 publicznych stron oraz strona błędu 404:**

```text
/
/wynajem-masztow-oswietleniowych/
/sprzedaz-masztow-oswietleniowych/
/maszty-oswietleniowe/
/maszty-oswietleniowe/atlas-copco-hilight/
/maszty-oswietleniowe/generac-v20-pro/
/zastosowania/oswietlenie-budowy/
/zastosowania/oswietlenie-imprez/
/zastosowania/oswietlenie-placow/
/kontakt/
/404.html
```

Treści znajdują się w generowanym HTML. Publiczne podstrony mają własne tytuły, opisy i adresy kanoniczne. Projekt zawiera dane strukturalne, sitemapę XML, robots.txt, opisy obrazów i lokalne fonty. Strona 404 ma oznaczenie wyłączające indeksowanie.

## Pliki źródłowe

| Plik lub katalog | Zastosowanie |
| --- | --- |
| `src/content.mjs` | Dane firmy, oferta, urządzenia, zastosowania i FAQ. |
| `src/templates.mjs` | HTML, nawigacja, formularz i metadane. |
| `public/styles.css` | Wygląd i układ responsywny. |
| `public/app.js` | Interakcje i przygotowanie wiadomości e-mail. |
| `public/assets/` | Fotografie, fonty i licencje; źródła w `SOURCES.json`. |
| `scripts/build.mjs` i `scripts/check.mjs` | Generator i weryfikacja wyniku. |
| `tests/inquiry.test.mjs` | Testy logiki formularza. |
| `docs/source-review.md` | Źródła i decyzje dotyczące parametrów. |
| `vercel.json` | Konfiguracja publikacji. |

Dane urządzeń wykorzystują pola `displayValue`, `displayLabel` i `note`. Atlas Copco pokazuje technologię **LED**, a V20 PRO maksymalną wysokość **8,2 m**; nie należy interpretować tych wartości jako mocy.

## Sprzęt i wiarygodność oferty

- **Atlas Copco HiLight** jest prezentowany jako seria masztów LED. Model, wysokość i wyposażenie konkretnego egzemplarza są potwierdzane w ofercie.
- **Generac V20 PRO** jest potwierdzonym modelem z hydraulicznie podnoszonym masztem. Zdjęcie REKORD przedstawia zestaw z Solar Kit PRO; dostępność tej konfiguracji uzgadnia się indywidualnie.

Nie przypisano parametrów całej serii Atlas na podstawie jednej karty. Nie podano gwarantowanej powierzchni oświetlenia ani czasu autonomii. Warunki zakupu, stan, cena i dostępność pozostają elementami indywidualnej oferty.

Podstawowe źródła to [oferta pozyczmnie.pl](https://www.pozyczmnie.pl/maszty-oswietleniowe), [zaplecze techniczne REKORD](https://halenamiotowe.com.pl/nasze-produkty/zaplecze-techniczne/) i [Generac Mobile](https://www.towerlight.com/pl/products/light-towers-pl/linia-pro/v20-pro-agm-wieza-oswietleniowa/?region=poland). Szczegóły oraz rozbieżności opisuje [przegląd źródeł](docs/source-review.md).

## Formularz zapytania

Formularz przygotowuje wiadomość w przeglądarce. Użytkownik określa wynajem lub zakup, sprzęt albo prośbę o dobór, lokalizację, zastosowanie, powierzchnię lub wymiary terenu, godziny pracy i dostępne zasilanie. Przy wynajmie może podać termin i okres użytkowania.

Po przygotowaniu tekstu można skopiować wiadomość albo otworzyć ją we własnej poczcie. **Wiadomość nie jest wysyłana automatycznie; formularz nie ma backendu.** Adresat: `dystrybucja@halenamiotowe.com.pl`. Telefon do oferty: **+48 571 294 344**.

Link może wstępnie wybrać zakup i model, np. `/kontakt/?oferta=zakup&model=generac-v20-pro#zapytanie`. Przy zmianie adresata zachowaj zgodność danych w `src/content.mjs` i `public/app.js`.

## Publikacja

**Status: opublikowano 22.10.2026.** Hosting: Vercel, projekt `rozswietlamy`, zespół **Sebastian's projects**. Domena **rozswietlamy.pl** jest dodana do produkcji i oczekuje na zmianę DNS w UT.

- Działająca strona: <https://rozswietlamy.vercel.app/>
- Repozytorium: <https://github.com/PopielSeba/rozswietlamy>
- Projekt: <https://vercel.com/sebastians-projects-e047c519/rozswietlamy>
- Ustawienia domen: <https://vercel.com/sebastians-projects-e047c519/rozswietlamy/settings/domains>

Konfiguracja `vercel.json` wykonuje `npm run build && npm run check && npm test`, publikuje katalog `dist` i ustawia `trailingSlash: true`. Instalacja pakietów nie jest wykonywana. Nagłówki HTTP są skonfigurowane w `vercel.json`; plik `_headers` służy hostingom obsługującym ten format.

### Rekordy DNS w UT

Wartości odczytane z ustawień domen tego projektu w Vercelu 22.10.2026:

| Nazwa / host | Typ | Wartość |
| --- | --- | --- |
| `@` | `A` | `216.198.79.1` |
| `www` | `CNAME` | `893686cade47c779.vercel-dns-017.com.` |

Zmień istniejący rekord A domeny głównej wskazujący `54.38.201.206`. Dla `www` zastąp dotychczasowy rekord A rekordem CNAME z tabeli. Rekord A i CNAME nie powinny współistnieć pod nazwą `www`. TTL może pozostać domyślny, np. 3600 s.

Zachowaj pozostałe rekordy, w szczególności MX `10 plhost.ut.pl.`, rekordy poczty i weryfikacji. Nie trzeba zmieniać serwerów nazw `ns1.ut.pl` i `ns2.ut.pl`.

W Vercelu `rozswietlamy.pl` jest połączona z Production, a `www.rozswietlamy.pl` ma przekierowanie **308** na domenę główną. Status **Invalid Configuration** przed aktualizacją DNS jest oczekiwany. Po propagacji należy potwierdzić konfigurację, certyfikat HTTPS i przekierowanie www.

### Weryfikacja publikacji

- Lokalny build, kontrola 11 stron HTML, 11 bloków JSON-LD, 499 lokalnych referencji i sitemap — poprawne.
- Testy logiki zapytania — poprawne.
- Widok komputerowy i mobilny 375 px, menu, galeria, wybór modelu, zakup/wynajem i kopiowanie treści — sprawdzone w przeglądarce.
- 10 publicznych podstron wdrożenia — HTTP 200, unikalne metadane i canonical dla `rozswietlamy.pl`.
- Sitemap, robots.txt i zasoby — HTTP 200; nieistniejąca ścieżka — rzeczywiste HTTP 404.
- Przekierowanie HTTP do HTTPS i uzupełnienie końcowego slasha — 308.

Mapa witryny na docelowej domenie: `https://rozswietlamy.pl/sitemap.xml`. Po uruchomieniu własnej domeny można zgłosić ją w Google Search Console. Weryfikacja Search Console nie została skonfigurowana w ramach tego wdrożenia.
