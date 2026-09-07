<template>
  <div class="container mb-5" style="max-width: 800px; margin-bottom: 170px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 prototype-text">Umsetzung & Ergebnis</div>
      </div>
    </div>

    <div class="sections-title">Zusammenarbeit und Umsetzung</div>
    <div class="sections-texts">
      Die technische Umsetzung der KI-/Such-Pipeline – Python, Vektorisierung,
      Anbindung an die ChatGPT-API – lag bei zwei externen Entwicklern. Meine
      Aufgabe war das UX/UI Design für Doku-Plattform, Chatbot und das
      gemeinsame Zugriffsportal, laufend abgestimmt mit der technischen
      Machbarkeit – insbesondere mit der Lösung für die
      Vektorisierungs-Pipeline.
    </div>

    <div class="sections-title mt-5">Ergebnis</div>
    <div class="sections-texts">
      Die KI-Doku ging im März 2025 als Beta-Version an Kunden live – ein
      durchsuchbarer, per Chatbot bedienbarer Ersatz für das manuelle
      Blättern durch analoge PDF-Sammlungen mehrerer Hersteller.
    </div>

    <div class="disclaimer-note">
      Wie sich das Produkt seither entwickelt hat, kann ich nicht sagen, da
      ich das Unternehmen nach dem Beta-Launch verlassen habe. Diese Case
      Study beschreibt meinen Beitrag bis zu diesem Zeitpunkt.
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
  color: #5b4b8a !important;
  border-bottom: 3px solid #5b4b8a !important;
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

.disclaimer-note {
  margin-top: 40px;
  padding-left: 18px;
  border-left: 3px solid rgba(91, 75, 138, 0.35);
  font-size: 15px;
  color: rgba(27, 27, 27, 0.6) !important;
  line-height: 1.6;
}
</style>
