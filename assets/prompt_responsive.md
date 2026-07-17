# Prompt — Responsive sistematico
## GM Studio Lab — style.css

Apri `style.css` nella cartella:
`F:\GRAFICA LAVORI\SITIART\sito-gmstudiolab`

## ISTRUZIONI FERREE

1. Esegui SOLO le sostituzioni elencate qui sotto.
2. Trova il testo ESATTO indicato in "TROVA" e sostituisci con "SOSTITUISCI".
3. NON toccare nulla che non sia elencato.
4. NON aggiungere nulla.
5. NON interpretare. Solo trova e sostituisci.
6. Dopo ogni sostituzione vai avanti con la prossima.
7. Alla fine esegui `git status` e mostrami i file modificati.

---

## SOSTITUZIONI

---

### 1 — BODY: overflow orizzontale bloccato

TROVA:
```
body {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.65;
  color: var(--color-text);
  background-color: var(--bg-page);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

SOSTITUISCI CON:
```
body {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 16px;
  line-height: 1.65;
  color: var(--color-text);
  background-color: var(--bg-page);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
}
```

---

### 2 — CONTAINER: padding fluido

TROVA:
```
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
```

SOSTITUISCI CON:
```
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 40px);
}
```

---

### 3 — SECTION: padding verticale fluido

TROVA:
```
section {
  padding: 72px 0;
}
```

SOSTITUISCI CON:
```
section {
  padding: clamp(48px, 8vw, 96px) 0;
}
```

---

### 4 — SECTION-HEADER: margin-bottom fluido

TROVA:
```
.section-header {
  margin-bottom: 48px;
}
```

SOSTITUISCI CON:
```
.section-header {
  margin-bottom: clamp(28px, 5vw, 48px);
}
```

---

### 5 — H3: font-size fluido

TROVA:
```
h3 {
  font-size: 1.05rem;
  font-weight: 700;
}
```

SOSTITUISCI CON:
```
h3 {
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  font-weight: 700;
}
```

---

### 6 — BTN-PRIMARY: padding fluido e min-height 48px

TROVA:
```
.btn-primary {
  display: inline-block;
  padding: 14px 32px;
  background: var(--color-cta);
  color: #0a0e1a;
  font-weight: 700;
  font-size: 1rem;
  border-radius: 999px;
  border: 2px solid transparent;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
}
```

SOSTITUISCI CON:
```
.btn-primary {
  display: inline-block;
  padding: clamp(12px, 2vw, 14px) clamp(24px, 4vw, 32px);
  background: var(--color-cta);
  color: #0a0e1a;
  font-weight: 700;
  font-size: clamp(0.9rem, 2vw, 1rem);
  border-radius: 999px;
  border: 2px solid transparent;
  transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
```

---

### 7 — NAVBAR: height fluida

TROVA:
```
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 72px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 0;
  background: var(--bg-white);
  z-index: 1000;
  transition: box-shadow var(--transition);
}
```

SOSTITUISCI CON:
```
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 8px 0;
  background: var(--bg-white);
  z-index: 1000;
  transition: box-shadow var(--transition);
  max-width: 100vw;
  overflow: hidden;
}
```

---

### 8 — HERO: padding-top fluido

TROVA:
```
.hero-layout {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 64px;
  padding-bottom: 64px;
}
```

SOSTITUISCI CON:
```
.hero-layout {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: clamp(24px, 4vw, 40px);
  padding-top: clamp(40px, 6vw, 64px);
  padding-bottom: clamp(40px, 6vw, 64px);
}
```

---

### 9 — HERO-CONTENT: padding-top fluido

TROVA:
```
.hero-content {
  text-align: center;
  /* Respiro sotto la navbar fissa */
  padding-top: calc(var(--nav-height) + 48px);
}
```

SOSTITUISCI CON:
```
.hero-content {
  text-align: center;
  padding-top: calc(var(--nav-height) + clamp(24px, 4vw, 48px));
  max-width: 100%;
}
```

---

### 10 — HERO-SUB: font-size fluido

TROVA:
```
.hero-sub {
  color: var(--color-text-light-secondary);
  font-size: 1.1rem;
  max-width: 580px;
  margin: 0 auto 24px;
  line-height: 1.6;
}
```

SOSTITUISCI CON:
```
.hero-sub {
  color: var(--color-text-light-secondary);
  font-size: clamp(0.95rem, 2vw, 1.1rem);
  max-width: min(580px, 100%);
  margin: 0 auto 24px;
  line-height: 1.6;
}
```

---

### 11 — HERO-TAGS: wrap sempre attivo

TROVA:
```
.hero-tags {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: center;
  margin-bottom: 32px;
}
```

SOSTITUISCI CON:
```
.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  margin-bottom: clamp(20px, 3vw, 32px);
}
```

---

### 12 — SERVICE-CARD: min-height fluido

TROVA:
```
.service-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 280px;
  background: var(--bg-white);
  border: 1px solid var(--border-color);
  border-top: 3px solid transparent;
  border-radius: var(--radius-lg);
  padding: 28px 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
  transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
}
```

SOSTITUISCI CON:
```
.service-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: clamp(200px, 20vw, 280px);
  background: var(--bg-white);
  border: 1px solid var(--border-color);
  border-top: 3px solid transparent;
  border-radius: var(--radius-lg);
  padding: clamp(20px, 3vw, 28px) clamp(16px, 2.5vw, 24px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1),
    0 2px 4px rgba(0, 0, 0, 0.06);
  transition: border-color var(--transition), box-shadow var(--transition), transform var(--transition);
}
```

---

### 13 — SERVICE-CARD H3: min-height rimosso

TROVA:
```
.service-card h3 {
  color: var(--color-primary);
  min-height: 72px;
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
}
```

SOSTITUISCI CON:
```
.service-card h3 {
  color: var(--color-primary);
  min-height: 0;
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
}
```

---

### 14 — ABOUT-LAYOUT: griglia fluida

TROVA:
```
.about-layout {
  display: grid;
  grid-template-columns: 38% 62%;
  gap: 48px;
  align-items: start;
}
```

SOSTITUISCI CON:
```
.about-layout {
  display: grid;
  grid-template-columns: clamp(220px, 38%, 380px) 1fr;
  gap: clamp(24px, 4vw, 48px);
  align-items: start;
}
```

---

### 15 — BANNER-CTA: padding fluido

TROVA:
```
.banner-cta {
  background: #0a1628;
  border-left: 4px solid var(--color-accent);
  border-radius: var(--radius-lg);
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
}
```

SOSTITUISCI CON:
```
.banner-cta {
  background: #0a1628;
  border-left: 4px solid var(--color-accent);
  border-radius: var(--radius-lg);
  padding: clamp(24px, 4vw, 40px) clamp(20px, 4vw, 32px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
}
```

---

### 16 — CONTACT-FORM: padding fluido

TROVA:
```
.contact-form-wrapper {
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
}
```

SOSTITUISCI CON:
```
.contact-form-wrapper {
  flex: 1;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(0, 212, 255, 0.15);
  border-radius: var(--radius-lg);
  padding: clamp(20px, 3vw, 32px) clamp(16px, 3vw, 24px);
}
```

---

### 17 — PORTFOLIO-CARD: padding fluido

TROVA:
```
.portfolio-card {
  background: var(--bg-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 28px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
```

SOSTITUISCI CON:
```
.portfolio-card {
  background: var(--bg-white);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: clamp(18px, 3vw, 28px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08),
    0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
```

---

### 18 — MOBILE DRAWER: larghezza fluida

TROVA:
```
.mobile-drawer {
  position: fixed;
  top: var(--nav-height);
  right: 0;
  width: 280px;
  height: calc(100vh - var(--nav-height));
  background: var(--bg-white);
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 999;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
}
```

SOSTITUISCI CON:
```
.mobile-drawer {
  position: fixed;
  top: var(--nav-height);
  right: 0;
  width: min(280px, 85vw);
  height: calc(100vh - var(--nav-height));
  background: var(--bg-white);
  box-shadow: -4px 0 16px rgba(0, 0, 0, 0.1);
  transform: translateX(100%);
  transition: transform 0.3s ease;
  z-index: 999;
  padding: clamp(20px, 4vw, 32px) clamp(16px, 4vw, 24px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
```

---

### 19 — TABLET: rimuovi override section padding

TROVA:
```
/* Tablet: 768px+ */
@media (min-width: 768px) {
  section {
    padding: 96px 0;
  }

  .container {
    padding: 0 32px;
  }
```

SOSTITUISCI CON:
```
/* Tablet: 768px+ */
@media (min-width: 768px) {
  .container {
    padding: 0 clamp(24px, 4vw, 40px);
  }
```

---

### 20 — LARGE DESKTOP: rimuovi override container

TROVA:
```
/* Large desktop: 1440px+ */
@media (min-width: 1440px) {
  .container {
    padding: 0 40px;
  }
}
```

SOSTITUISCI CON:
```
/* Large desktop: 1440px+ — gestito da clamp, nessun override necessario */
```

---

### 21 — CASO-REALE-LAYOUT: griglia fluida

TROVA:
```
.caso-reale-layout {
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 3rem;
  align-items: start;
}
```

SOSTITUISCI CON:
```
.caso-reale-layout {
  display: grid;
  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: start;
}
```

---

### 22 — FLOW-CONTAINER: max-width su desktop

TROVA:
```
.flow-container {
  display: grid;
  grid-template-columns: 1fr 60px 1fr 60px 1.5fr;
  grid-template-rows: auto auto auto auto;
  justify-items: center;
  align-items: center;
  row-gap: 16px;
}
```

SOSTITUISCI CON:
```
.flow-container {
  display: grid;
  grid-template-columns: 1fr clamp(32px, 5vw, 60px) 1fr clamp(32px, 5vw, 60px) 1.5fr;
  grid-template-rows: auto auto auto auto;
  justify-items: center;
  align-items: center;
  row-gap: clamp(10px, 2vw, 16px);
  overflow-x: auto;
}
```

---

### 23 — AGGIUNGERE IN FONDO AL FILE

Alla fine del file, dopo l'ultima riga esistente, aggiungi questo blocco:

```css
/* ============================================
   RESPONSIVE GLOBALE — PATCH FLUIDA
   ============================================ */

/* Landscape mobile: altezze fisse rimosse */
@media (max-width: 767px) and (orientation: landscape) {
  .hero {
    min-height: auto;
    padding-top: var(--nav-height);
    padding-bottom: 2rem;
  }
  .hero-content {
    padding-top: 1rem;
  }
}

/* Immagini e media sempre contenuti */
img, video, iframe, svg {
  max-width: 100%;
}

/* Testo non fuoriesce mai */
p, h1, h2, h3, span, li, a {
  word-break: break-word;
  overflow-wrap: break-word;
}

/* Nessun elemento fuoriesce dal viewport */
* {
  min-width: 0;
}

/* CTA mobile: sempre full-width sotto 480px */
@media (max-width: 480px) {
  .btn-primary {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
  .hero-cta-row {
    flex-direction: column;
    width: 100%;
  }
  .hero-tags {
    gap: 6px;
  }
  .hero-tag {
    font-size: 0.72rem;
    padding: 4px 10px;
  }
}

/* Tablet landscape: griglia about a 2 colonne */
@media (min-width: 768px) and (max-width: 1024px) {
  .about-layout {
    grid-template-columns: 1fr 1fr;
  }
  .flow-container {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
  }
}

/* Processo steps: sempre verticale su mobile */
@media (max-width: 1023px) {
  .process-steps {
    flex-direction: column !important;
    gap: 36px !important;
  }
  .process-step {
    flex-direction: row !important;
    align-items: flex-start !important;
    text-align: left !important;
    border-right: none !important;
    padding: 0 !important;
  }
  .process-step:not(:last-child)::before {
    left: 25px !important;
    top: 52px !important;
    width: 2px !important;
    height: calc(100% + 36px - 52px) !important;
  }
}

/* Footer: padding ridotto */
.footer-inner {
  padding: clamp(12px, 2vw, 18px) 0;
}
```

---

## VERIFICA FINALE

Dopo tutte le sostituzioni:
1. Esegui `git status` e mostrami i file modificati
2. NON eseguire `git add`, `git commit` o `git push`
