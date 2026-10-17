/* ====== Układ Słoneczny — logika ====== */
const app = document.getElementById("app");
const KLUCZ = "us-odkryte-v1";

function odkryte() {
  try { return new Set(JSON.parse(localStorage.getItem(KLUCZ) || "[]")); }
  catch (e) { return new Set(); }
}
function zapiszOdkryte(set) {
  try { localStorage.setItem(KLUCZ, JSON.stringify([...set])); } catch (e) {}
}

function kulaKlasa(p) {
  let k = "kula";
  if (p.id === "slonce") k += " slonce";
  if (p.id === "saturn") k += " pierscienie";
  if (p.id === "uran") k += " bok";
  return k;
}

function esc(s) { return s; } // treści są nasze, mogą zawierać <b>

/* ---------- panorama ---------- */
function renderPanorama() {
  const set = odkryte();
  document.title = "Układ Słoneczny — ciekawostki";

  const kafle = PLANETY.map((p, i) => `
    <a class="kafel ${set.has(p.id) ? "odkryta" : ""}" href="#${p.id}"
       style="--kolor:${p.kolor}" aria-label="${p.nazwa} — ciekawostki">
      <div class="${kulaKlasa(p)}"></div>
      <div class="kafel-nazwa">${p.nazwa}<span class="znaczek">ODKRYTA</span></div>
      <div class="kafel-typ">${p.typ}</div>
      <div class="kafel-cta">Wejdź do środka <span aria-hidden="true">→</span></div>
    </a>`).join("");

  app.innerHTML = `
    <section class="naglowek">
      <p class="nadtytul">Interaktywna plansza dydaktyczna</p>
      <h1 class="tytul">Układ Słoneczny</h1>
      <p class="podtytul">
        Przyklej kody QR do swojej planszy. Zeskanuj telefonem ten przy planecie,
        a przeniesiesz się prosto do jej ciekawostek. Możesz też po prostu klikać tutaj —
        lećmy od Słońca do Neptuna.
      </p>
    </section>

    <div class="panorama-grid">${kafle}</div>

    <div class="odkrycia-info">
      <span>Odkryto ${set.size} z ${PLANETY.length} ciał niebieskich</span>
      ${set.size > 0 ? `<button class="link-przycisk" id="reset">wyczyść postęp</button>` : ""}
    </div>
  `;

  const reset = document.getElementById("reset");
  if (reset) reset.addEventListener("click", () => { zapiszOdkryte(new Set()); render(); });
}

/* ---------- widok planety ---------- */
function renderPlaneta(p) {
  const idx = PLANETY.findIndex(x => x.id === p.id);
  const prev = PLANETY[(idx - 1 + PLANETY.length) % PLANETY.length];
  const next = PLANETY[(idx + 1) % PLANETY.length];

  const set = odkryte();
  const nowa = !set.has(p.id);
  set.add(p.id);
  zapiszOdkryte(set);

  document.title = `${p.nazwa} — Układ Słoneczny`;

  app.innerHTML = `
    <article class="widok" style="--akcent:${p.kolor}">
      <header class="hero">
        <div class="${kulaKlasa(p)} duza" style="--kolor:${p.kolor}"></div>
        <div class="hero-tekst">
          <p class="nadtytul">${p.typ}</p>
          <h1 class="nazwa">${p.nazwa}</h1>
          <p class="hero-lead">${p.lead}</p>
          ${nowa ? `<div class="talia"><span class="zaleta">✨ Nowa planeta odkryta</span></div>` : ""}
        </div>
      </header>

      <h2 class="sekcja-tytul">Czy wiesz, że…</h2>
      <div class="ciekawostki">
        ${p.ciekawostki.map(c => `<div class="ciekawostka">${c}</div>`).join("")}
      </div>

      <h2 class="sekcja-tytul">W skrócie</h2>
      <div class="fakty">
        ${p.fakty.map(([k, v]) => `<div class="fakt"><span class="fakt-k">${k}</span><span class="fakt-v">${v}</span></div>`).join("")}
      </div>

      <div class="misja">
        <p class="misja-label">Dla dociekliwych</p>
        <p>${p.misja}</p>
      </div>

      <nav class="nawigacja">
        <a class="btn prev" href="#${prev.id}"><span class="strzalka">←</span> ${prev.nazwa}</a>
        <a class="btn glowny" href="#">Mapa Układu</a>
        <a class="btn" href="#${next.id}">${next.nazwa} <span class="strzalka">→</span></a>
      </nav>
    </article>
  `;

  window.scrollTo({ top: 0, behavior: "auto" });
  aktualizujPostep();
}

/* ---------- pasek postępu ---------- */
function aktualizujPostep() {
  const el = document.getElementById("postep");
  if (!el) return;
  const n = odkryte().size;
  if (n === 0) { el.hidden = true; return; }
  el.hidden = false;
  document.getElementById("postep-fill").style.width = (n / PLANETY.length * 100) + "%";
  document.getElementById("postep-label").textContent = `Odkryto ${n} z ${PLANETY.length}`;
}

/* ---------- router ---------- */
function render() {
  const id = decodeURIComponent(location.hash.replace(/^#\/?/, "")).trim().toLowerCase();
  const p = PLANETY.find(x => x.id === id);
  if (p) renderPlaneta(p);
  else renderPanorama();
  if (!p) document.getElementById("postep").hidden = odkryte().size === 0;
  aktualizujPostep();
}

window.addEventListener("hashchange", () => {
  if (document.startViewTransition) document.startViewTransition(render);
  else render();
});

/* klawiatura: strzałki = poprzednia/następna planeta */
document.addEventListener("keydown", (e) => {
  if (e.target.matches("input,textarea")) return;
  if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
  const id = location.hash.replace(/^#\/?/, "");
  const idx = PLANETY.findIndex(x => x.id === id);
  if (idx === -1) return;
  const d = e.key === "ArrowRight" ? 1 : -1;
  location.hash = PLANETY[(idx + d + PLANETY.length) % PLANETY.length].id;
});

render();
