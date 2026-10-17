#!/usr/bin/env python3
"""
Generator kodów QR do planszy Układu Słonecznego.
Każdy kod prowadzi do strony z ciekawostkami konkretnej planety.

Użycie:
    python generate_qr.py --base-url https://twoj-adres.pl/
    python generate_qr.py --base-url https://twoj-adres.pl/ --out qr
"""
import argparse
import base64
import pathlib

import segno

NAZWY = [
    ("slonce", "Słońce", "☀"),
    ("merkury", "Merkury", "☿"),
    ("wenus", "Wenus", "♀"),
    ("ziemia", "Ziemia", "⊕"),
    ("ksiezyc", "Księżyc", "☾"),
    ("mars", "Mars", "♂"),
    ("jowisz", "Jowisz", "♃"),
    ("saturn", "Saturn", "♄"),
    ("uran", "Uran", "♅"),
    ("neptun", "Neptun", "♆"),
]

CIEMNY = "#0a0f1e"
JASNY = "#ffffff"


def link(base_url: str, ident: str) -> str:
    base = base_url.rstrip("/")
    return f"{base}/#{ident}"


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--base-url", default="http://localhost:8000",
                    help="Adres, pod którym będzie stała strona (bez #)")
    ap.add_argument("--out", default="qr", help="Katalog na pliki QR")
    ap.add_argument("--scale", type=int, default=10)
    args = ap.parse_args()

    out = pathlib.Path(args.out)
    out.mkdir(parents=True, exist_ok=True)

    karty = []
    for ident, nazwa, symbol in NAZWY:
        url = link(args.base_url, ident)
        qr = segno.make(url, error="h")

        png = out / f"qr-{ident}.png"
        qr.save(png, scale=args.scale, border=3, dark=CIEMNY, light=JASNY)
        qr.save(out / f"qr-{ident}.svg", scale=args.scale, border=3, dark=CIEMNY, light=JASNY)

        b64 = base64.b64encode(png.read_bytes()).decode()
        karty.append(
            f'<div class="karta">'
            f'<div class="symbol">{symbol}</div>'
            f'<img src="data:image/png;base64,{b64}" alt="Kod QR — {nazwa}">'
            f'<div class="nazwa">{nazwa}</div>'
            f'<div class="instrukcja">Zeskanuj i sprawdź ciekawostki</div>'
            f'<div class="url">{url}</div>'
            f'</div>'
        )
        print(f"OK  {nazwa:8s} -> {png}  ({url})")

    html = f"""<!DOCTYPE html>
<html lang="pl"><head><meta charset="utf-8">
<title>Kody QR — Układ Słoneczny</title>
<style>
  @page {{ size: A4; margin: 9mm; }}
  * {{ box-sizing: border-box; }}
  body {{ font-family: -apple-system, "Segoe UI", Roboto, sans-serif; margin: 0; color: #0a0f1e; background: #fff; }}
  h1 {{ font-size: 20px; margin: 0 0 2px; letter-spacing: -.02em; }}
  .pod {{ font-size: 12px; color: #5b6579; margin: 0 0 10mm; }}
  .siatka {{ display: grid; grid-template-columns: repeat(3, 1fr); gap: 5mm; }}
  .karta {{ border: 1.5px dashed #b9c0d0; border-radius: 3mm; padding: 3mm 3mm 2.5mm; text-align: center; break-inside: avoid; }}
  .symbol {{ font-size: 18px; color: #c0223a; line-height: 1; margin-bottom: 1.5mm; }}
  img {{ width: 100%; max-width: 33mm; height: auto; display: block; margin: 0 auto; }}
  .nazwa {{ font-size: 15px; font-weight: 700; margin-top: 2mm; letter-spacing: -.01em; }}
  .instrukcja {{ font-size: 9.5px; color: #46506a; margin-top: .5mm; }}
  .url {{ font-size: 6.5px; color: #8b93a5; margin-top: 1.2mm; word-break: break-all; }}
  @media print {{ .karta {{ border-color: #d6dbe6; }} }}
</style></head>
<body>
<h1>Układ Słoneczny — kody QR do planszy</h1>
<p class="pod">Wydrukuj, wytnij po przerywanej linii i przyklej przy odpowiedniej planecie na planszy. Baza: {args.base_url}</p>
<div class="siatka">{''.join(karty)}</div>
</body></html>
"""
    (out / "do-druku.html").write_text(html, encoding="utf-8")
    print(f"\nArkusz do druku: {out / 'do-druku.html'}")


if __name__ == "__main__":
    main()
