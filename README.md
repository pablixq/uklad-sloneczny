# Układ Słoneczny — strona z ciekawostkami + kody QR

**Live:** https://pablixq.github.io/uklad-sloneczny/

Interaktywna plansza dydaktyczna: dziecko rysuje Układ Słoneczny, przy każdej planecie
przykleja kod QR, a kod prowadzi do strony z ciekawostkami o tej planecie.

## Jak to działa

- `index.html` — cała strona (statyczna, bez budowania, bez zależności z CDN)
- `#slonce`, `#merkury`, … `#neptun` — każdy kod QR prowadzi do widoku jednej planety
- postęp „Odkryto X z 10” zapisuje się w `localStorage` przeglądarki
- strzałki ← → na klawiaturze przełączają planety

## Uruchomienie lokalne

```bash
cd ~/Projekty/uklad-sloneczny-qr
python3 -m http.server 8000
# otwórz http://localhost:8000
```

## Kody QR

```bash
~/venvs/qrgen/bin/python qr/generate_qr.py --base-url https://twoj-adres.pl
```

Efekt:
- `qr/qr-<planeta>.png` i `.svg` — pojedyncze kody
- `qr/do-druku.html` — arkusz A4 z 10 kodami gotowy do wydruku (Ctrl+P)

**Ważne:** najpierw publikujesz stronę, potem generujesz QR z docelowym adresem
i dopiero wtedy drukujesz. QR z `localhost` zadziała tylko na tym komputerze.

## Publikacja (dowolna z opcji)

**GitHub Pages** (najprościej, darmowo):

```bash
cd ~/Projekty/uklad-sloneczny-qr
git init && git add . && git commit -m "Układ Słoneczny — ciekawostki"
gh repo create uklad-sloneczny --public --source=. --push
gh api -X POST repos/{owner}/uklad-sloneczny/pages -f source[branch]=main -f source[path]=/
# adres: https://<user>.github.io/uklad-sloneczny/
```

**Netlify drop:** wejdź na app.netlify.com/drop i przeciągnij folder — dostajesz adres od razu.

## Edycja treści

Wszystkie ciekawostki siedzą w `assets/dane.js` — jedna tablica `PLANETY`.
Zmieniasz tekst i odświeżasz stronę, nic więcej.
