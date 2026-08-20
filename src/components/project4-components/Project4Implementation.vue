<template>
  <div class="container mb-5" style="max-width: 800px; margin-bottom: 170px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 prototype-text">Umsetzung & Livegang</div>
      </div>
    </div>
    <div class="sections-title">Finale Umsetzung & Livegang</div>
    <div class="sections-texts">
      Die Landing Page wurde als vollflächiger Video-Hero umgesetzt, dessen Headline über einen
      selbst entwickelten Text-Rotator automatisch zwischen mehreren Begriffen wechselt
      (u.&nbsp;a. „Innovativ“, „Flexibel“, „Lösungsorientiert“) – per eigenem
      JavaScript/HTML/CSS-Code direkt in die bestehende Webflow-Seite eingebunden, da sich der
      automatische Wortwechsel allein über Webflow-Bordmittel nicht realisieren ließ.
      Das Layout wurde vollständig responsiv für Desktop, Tablet und Mobile umgesetzt und getestet.
    </div>
    <div class="live-project-link">
      🔗 Live-Projekt: <a href="https://www.allreco.de" target="_blank" rel="noopener noreferrer">allreco.de</a>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center user-flow-image">
      <div class="row justify-content-center">
        <div class="col-12 text-center my-4">
          <img v-lazy="LandingPageFinal" alt="Finale Landing Page mit Video-Hero und rotierender Headline"
            style="max-width: 100%; height: auto" />
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="max-width: 800px; margin-bottom: 70px; margin-top: 220px">
    <div class="sections-title">Technische Umsetzung im Detail</div>

    <div class="sections-subtitle">1. Vollflächiger Video-Hero</div>
    <div class="sections-texts">
      Ein Luftbild-Video bildet den visuellen Einstieg und füllt den gesamten Hero-Bereich aus.
      Das Video läuft automatisch und in Schleife; eine Pause-Steuerung bleibt für Nutzer:innen
      jederzeit zugänglich.
    </div>

    <div class="sections-subtitle">2. Automatischer Text-Rotator</div>
    <div class="sections-texts">
      Die Headline wechselt automatisch zwischen mehreren Markeneigenschaften:
      <ul class="technical-list">
        <li>Eigener JavaScript/HTML/CSS-Code, direkt in die Webflow-Seite eingebunden</li>
        <li>Wortwechsel u.&nbsp;a. zwischen „Innovativ“, „Flexibel“ und „Lösungsorientiert“</li>
        <li>Notwendig, da sich der automatische Wechsel über native Webflow-Funktionen nicht umsetzen ließ</li>
      </ul>
    </div>

    <div class="sections-subtitle">3. Scroll-Snap – getestet und bewusst verworfen</div>
    <div class="sections-texts">
      Zusätzlich wurde ein JavaScript-basiertes Scroll-Snap-Verhalten entwickelt, bei dem die
      vollflächigen Abschnitte beim Scrollen automatisch einrasten sollten. Im Browser-Test
      zeigte sich ein inkonsistentes Verhalten – insbesondere zwischen Chrome und Firefox.
      Um ein einheitliches Nutzungserlebnis sicherzustellen, wurde die Funktion wieder
      deaktiviert; die vollflächige Sektionsstruktur blieb davon unabhängig erhalten.
    </div>

    <div class="sections-subtitle">4. Responsives Layout</div>
    <div class="sections-texts">
      <ul class="technical-list">
        <li>Umsetzung und Test für Desktop, Tablet und Mobile</li>
        <li>Einbindung von Icons, Text-Animation und Video auf allen Breakpoints geprüft</li>
      </ul>
    </div>

    <div class="sections-subtitle">Ergebnis</div>
    <div class="sections-texts">
      Seit dem Livegang der neuen Landing Page ist der Website-Traffic spürbar gestiegen –
      so deutlich, dass Allreco das Hosting-Kontingent aufstocken musste, da die bisherige
      Serverkapazität nicht mehr ausreichte. Die Seite ersetzt den seit fünf Jahren
      unveränderten Karussell-Auftritt und vermittelt das volle Leistungsspektrum von Allreco –
      Maschinen, Anlagen, After-Sales-Service – auf einen Blick.
    </div>
  </div>
</template>

<script setup lang="ts">
import LandingPageFinal from "../../assets/images/Project4/landingpage-final.webp";
</script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.prototype-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: #E17C2F !important;
  border-bottom: 3px solid #E17C2F !important;
}

.user-flow-image {
  padding-top: 78px;
  padding-bottom: 78px;
  margin-bottom: 92px;
  padding-left: 150px;
  padding-right: 150px;
  background-color: rgba(225, 124, 47, 0.15);
}

.sections-title {
  font-weight: 600;
  font-size: 22px;
  color: #000800cc !important;
}

.sections-subtitle {
  font-weight: 600;
  font-size: 19px;
  color: #E17C2F !important;
  margin-top: 48px;
  margin-bottom: 16px;
}

.sections-texts {
  margin-top: 36px;
  font-size: 18px;
  font-weight: 400;
  color: #000800cc !important;
}

.live-project-link {
  margin-top: 24px;
  font-size: 18px;
  font-weight: 500;
  color: #000800cc !important;

  a {
    color: #E17C2F !important;
    text-decoration: none;
    border-bottom: 2px solid #E17C2F;
    transition: all 0.3s ease;

    &:hover {
      color: #c96a24 !important;
      border-bottom-color: #c96a24;
    }
  }
}

.technical-list {
  margin-top: 16px;
  margin-bottom: 16px;
  padding-left: 24px;

  li {
    margin-bottom: 8px;
    font-size: 18px;
    font-weight: 400;
    color: #000800cc !important;
    line-height: 1.6;
  }
}
</style>
