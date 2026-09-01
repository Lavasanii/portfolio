<template>
  <div class="container mb-5" style="max-width: 800px; margin-bottom: 170px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 prototype-text">Umsetzung & Ergebnis</div>
      </div>
    </div>

    <div class="sections-title">Zusammenarbeit und Umsetzung</div>
    <div class="sections-texts">
      Die technische Umsetzung lag bei NimBit. Meine Aufgabe war es, aus den
      gesammelten Anforderungen konkrete Konzepte in Figma zu entwickeln und
      diese laufend gegen die technische Machbarkeit abzustimmen – insbesondere
      gegen die tatsächlich verfügbare Datenstruktur, über die die gespeicherten
      Sensorwerte per JSON angebunden wurden. Die Begleitung reichte bis zum MVP.
    </div>

    <div class="sections-title mt-5">Ergebnis</div>
    <div class="sections-texts">
      Aus der technischen Grafana-Ansicht wurde ein Oberflächenkonzept für
      Menschen, die Anlagen betreiben – nicht für Menschen, die Datenbanken
      lesen: Statusübersicht statt Rohdaten, ein pro Kunde konfigurierbares
      Kachel-Dashboard statt eines festen Layouts, und ein räumlicher Zugang
      über das Maschinenmodell statt einer Menüliste.
    </div>

    <div class="live-project-link">
      🔗 Öffentlich dokumentiert:
      <a
        href="https://nimbit.de/ALLRECO-Success-Story"
        target="_blank"
        rel="noopener noreferrer"
        >nimbit.de/ALLRECO-Success-Story</a
      >
    </div>

    <div class="disclaimer-note">
      Die hier gezeigten Entwürfe bilden meinen Beitrag zum damaligen
      Entwicklungsstand ab. Das Produkt wurde nach meinem Ausscheiden
      weiterentwickelt – der heutige Stand kann davon abweichen.
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.prototype-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: #2C6E75 !important;
  border-bottom: 3px solid #2C6E75 !important;
}

.sections-title {
  font-weight: 600;
  font-size: 22px;
  color: #000800cc !important;
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
    color: #2C6E75 !important;
    text-decoration: none;
    border-bottom: 2px solid #2C6E75;
    transition: all 0.3s ease;

    &:hover {
      color: #1f5158 !important;
      border-bottom-color: #1f5158;
    }
  }
}

.disclaimer-note {
  margin-top: 40px;
  padding-left: 18px;
  border-left: 3px solid rgba(44, 110, 117, 0.35);
  font-size: 15px;
  color: rgba(27, 27, 27, 0.6) !important;
  line-height: 1.6;
}
</style>
