/* ============================================
   GM STUDIO LAB — MAIN.JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('mobileDrawer');
  const overlay = document.getElementById('drawerOverlay');
  const drawerLinks = drawer.querySelectorAll('a');
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  /* === 1. Ombra navbar al scroll === */
  const onScroll = () => {
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* === 2. Drawer mobile === */
  const openDrawer = () => {
    hamburger.classList.add('active');
    hamburger.setAttribute('aria-expanded', 'true');
    drawer.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    hamburger.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  };

  hamburger.addEventListener('click', () => {
    if (drawer.classList.contains('open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  /* === 3. Chiusura drawer al click sui link === */
  overlay.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  /* === 4. Smooth scroll su anchor link === */
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = navbar.offsetHeight;
        const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* === 5. Validazione form email === */
  /* === 6. Messaggio di conferma form === */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailField = contactForm.querySelector('#email');

      // Controllo presenza @ nella email
      if (!emailField.value || !emailField.value.includes('@')) {
        emailField.focus();
        emailField.style.borderColor = '#ef4444';
        setTimeout(() => { emailField.style.borderColor = ''; }, 2000);
        return;
      }

      // Mostra messaggio di successo, nascondi dopo 5 secondi
      formSuccess.classList.add('visible');
      contactForm.reset();
      setTimeout(() => formSuccess.classList.remove('visible'), 5000);
    });
  }

  /* === 7. Fade-in al scroll con IntersectionObserver === */
  const fadeElements = document.querySelectorAll('.section-fade');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: rendi tutto visibile su browser obsoleti
    fadeElements.forEach(el => el.classList.add('visible'));
  }

  // Accordion Chi sono
  const accItems = document.querySelectorAll(
    '.acc-item'
  );

  accItems.forEach((item) => {
    const header = item.querySelector(
      '.acc-header'
    );
    const body = item.querySelector(
      '.acc-body'
    );

    header.addEventListener('click', () => {
      const isOpen = item.classList
        .contains('acc-item--active');

      // Chiudi tutti
      document.querySelectorAll('.acc-item')
        .forEach((i) => {
          i.classList.remove('acc-item--active');
          i.querySelector('.acc-header')
            .setAttribute('aria-expanded', 'false');
        });

      // Apri quello cliccato se era chiuso
      if (!isOpen) {
        item.classList.add('acc-item--active');
        header.setAttribute(
          'aria-expanded', 'true'
        );
      }
    });
  });

  /* === DROPDOWN NAVBAR DESKTOP === */
  const dropTrigger = document.querySelector(
    '.nav-dropdown-trigger'
  );
  if (dropTrigger) {
    // Click funziona su touch E desktop
    dropTrigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropTrigger
        .getAttribute('aria-expanded') === 'true';
      dropTrigger.setAttribute(
        'aria-expanded', String(!isOpen)
      );
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.nav-dropdown')) {
        dropTrigger.setAttribute(
          'aria-expanded', 'false'
        );
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        dropTrigger.setAttribute(
          'aria-expanded', 'false'
        );
      }
    });
  }

  /* === DRAWER MOBILE: SOTTOMENU SOLUZIONI === */
  const drawerDropdown = document.querySelector(
    '.drawer-dropdown'
  );
  const drawerDropdownTrigger = document.querySelector(
    '.drawer-dropdown-trigger'
  );

  if (drawerDropdownTrigger) {
    drawerDropdownTrigger.addEventListener('click', () => {
      drawerDropdown.classList.toggle('open');
    });
  }

  /* === ACCORDION ORE RISPARMIATE — UNA SOLA CARD APERTA === */
  const autoGrid = document.querySelector('.auto-grid');
  if (autoGrid) {
    autoGrid.addEventListener('click', (e) => {
      const item = e.target.closest('.auto-item');
      if (!item) return;
      const isOpen = item.classList.contains('open');
      // Chiudi tutte
      autoGrid.querySelectorAll('.auto-item').forEach(i => i.classList.remove('open'));
      // Apri solo quella cliccata se era chiusa
      if (!isOpen) item.classList.add('open');
    });
  }
});

/* === ANIMAZIONE FLUSSO — SCINTILLA CHE PERCORRE IL DIAGRAMMA === */
/*
 * Due livelli paralleli sincronizzati:
 *   Riga superiore (lenta):  TRIGGER → AZIONE → CONDIZIONE
 *   Riga inferiore (veloce): ↓ Il Segnale → Il Controllo → La Decisione
 *
 * La scintilla viaggia fisicamente lungo i connettori.
 * All'arrivo su un nodo → effetto sonar (espansione anello CSS).
 * Il ciclo successivo parte solo quando il precedente è completato.
 */
function initFlowAnimation() {
  /* Non attivare su mobile — il layout è verticale, animazione non applicabile */
  if (window.innerWidth < 768) return;

  /* Nodi del flusso */
  var trigger     = document.getElementById('fc-trigger');
  var azione      = document.getElementById('fc-azione');
  var condizione  = document.getElementById('fc-condizione');
  var dTrigger    = document.getElementById('fd-trigger');
  var dAzione     = document.getElementById('fd-azione');
  var dCondizione = document.getElementById('fd-condizione');
  var segnale     = document.getElementById('fr-segnale');
  var controllo   = document.getElementById('fr-controllo');
  var decisione   = document.getElementById('fr-decisione');

  /* Se la sezione non è nel DOM, esci */
  if (!trigger) return;

  /* Scintille (elementi che si muovono lungo i connettori) */
  var hSpark1   = document.querySelector('#fhc-1 .flow-h-spark');
  var hSpark2   = document.querySelector('#fhc-2 .flow-h-spark');
  var vSpark1   = document.querySelector('#fvl-1 .flow-v-spark');
  var vSpark2   = document.querySelector('#fvl-2 .flow-v-spark');
  var vSpark3   = document.querySelector('#fvl-3 .flow-v-spark');
  var hSparkSm3 = document.querySelector('#fhc-3 .flow-h-spark-sm');
  var hSparkSm4 = document.querySelector('#fhc-4 .flow-h-spark-sm');

  /* Tempi in millisecondi */
  var T_SLOW    = 2000;  /* scintilla lenta — percorso orizzontale riga superiore */
  var T_VERT    = 400;   /* scintilla veloce — discesa verticale */
  var T_PAUSE   = 2000;  /* pausa finale a diagramma tutto illuminato */
  var T_RESTART = 800;   /* attesa dopo reset prima del nuovo ciclo */

  /* Tutti gli elementi per il reset */
  var allNodes  = [trigger, azione, condizione, dTrigger, dAzione, dCondizione, segnale, controllo, decisione];
  var allSparks = [hSpark1, hSpark2, vSpark1, vSpark2, vSpark3, hSparkSm3, hSparkSm4];

  /* Fa viaggiare una scintilla lungo un connettore con durata specifica */
  function travelSpark(el, duration) {
    if (!el) return;
    el.classList.remove('traveling');
    void el.offsetWidth;  /* forza reflow per riavviare l'animazione */
    el.style.setProperty('--spark-duration', duration + 'ms');
    el.classList.add('traveling');
  }

  /* Illumina un nodo — la classe .lit attiva anche il sonar via CSS */
  function light(el) {
    if (el) el.classList.add('lit');
  }

  /* Reset completo — spegne tutti i nodi e ferma le scintille */
  function clearAll() {
    allNodes.forEach(function(el)  { if (el) el.classList.remove('lit'); });
    allSparks.forEach(function(el) { if (el) el.classList.remove('traveling'); });
  }

  /* Ciclo completo dell'animazione */
  function runCycle() {

    /*
     * FASE 1 (T=0) — TRIGGER si illumina con sonar.
     * La scintilla parte in due direzioni:
     *   → orizzontale lenta verso AZIONE
     *   ↓ verticale veloce verso Il Segnale
     */
    light(trigger);
    light(dTrigger);
    travelSpark(hSpark1, T_SLOW);
    travelSpark(vSpark1, T_VERT);

    /*
     * FASE 2 (T=T_VERT) — La scintilla verticale arriva: Il Segnale si illumina.
     * Parte la scintilla orizzontale veloce verso Il Controllo.
     */
    setTimeout(function() {
      light(segnale);
      travelSpark(hSparkSm3, T_SLOW - T_VERT);
    }, T_VERT);

    /*
     * FASE 3 (T=T_SLOW) — Sincronizzazione:
     *   Riga superiore: la scintilla lenta arriva → AZIONE si illumina (sonar)
     *   Riga inferiore: la scintilla veloce arriva → Il Controllo si illumina
     * Nuove scintille partono verso CONDIZIONE e La Decisione.
     */
    setTimeout(function() {
      light(azione);
      light(dAzione);
      light(controllo);
      travelSpark(hSpark2, T_SLOW);
      travelSpark(vSpark2, T_VERT);
    }, T_SLOW);

    /*
     * FASE 3b (T=T_SLOW + T_VERT) — La verticale da AZIONE è arrivata.
     * Scintilla orizzontale veloce parte verso La Decisione.
     */
    setTimeout(function() {
      travelSpark(hSparkSm4, T_SLOW - T_VERT);
    }, T_SLOW + T_VERT);

    /*
     * FASE 4 (T=2*T_SLOW) — Sincronizzazione finale:
     *   CONDIZIONE si illumina (sonar) + La Decisione si illumina.
     *   Scintilla verticale da CONDIZIONE come effetto visivo.
     */
    setTimeout(function() {
      light(condizione);
      light(dCondizione);
      light(decisione);
      travelSpark(vSpark3, T_VERT);
    }, 2 * T_SLOW);

    /*
     * FASE 5 (T=2*T_SLOW + T_PAUSE) — Reset e ripartenza.
     * Il nuovo ciclo parte SOLO dopo che il precedente è completato.
     */
    setTimeout(function() {
      clearAll();
      setTimeout(runCycle, T_RESTART);
    }, 2 * T_SLOW + T_PAUSE);
  }

  /* Primo avvio con piccolo ritardo */
  setTimeout(runCycle, 1000);
}

document.addEventListener('DOMContentLoaded', initFlowAnimation);
