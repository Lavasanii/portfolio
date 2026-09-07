<template>
  <div class="container" style="max-width: 800px; margin-bottom: 170px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 learnings-text">Learnings</div>
      </div>
    </div>

    <div class="sections-title">Verzögerte Verarbeitung als wiederkehrendes Lösungsmuster</div>
    <div class="sections-texts">
      Genau wie bei der 5-Minuten-Aggregation im Telematik-Projekt war die
      Lösung hier nicht „schneller rechnen", sondern die Verarbeitung
      zeitlich zu entkoppeln – nur vektorisieren, wenn es gebraucht wird, den
      Rest in ruhigere Zeitfenster verschieben. Ein Muster, das sich in
      unterschiedlichen technischen Kontexten wiederholt.
    </div>

    <div class="sections-title mt-5">Eine begrenzte KI ist eine Designentscheidung, keine Einschränkung</div>
    <div class="sections-texts">
      Die KI bewusst nicht auf das offene Web zugreifen zu lassen, kostet
      Flexibilität, gewinnt aber Vertrauenswürdigkeit. Bei einer
      Wartungsanleitung ist eine korrekte, enge Antwort mehr wert als eine
      umfassende, potenziell falsche.
    </div>

    <div class="sections-title mt-5">Der Einsatzkontext gehört ins Interface, nicht nur ins Datenblatt</div>
    <div class="sections-texts">
      Schmutzige Hände und Sonnenlicht sind keine Randnotiz – sie bestimmen
      konkret Zielgrößen, Kontraste und Interaktionstiefe. Ein Design, das nur
      am Bürobildschirm getestet wurde, hätte in der Werkstatt nicht
      funktioniert.
    </div>

    <div class="sections-title mt-5">Grenzen der eigenen Aussagekraft anerkennen</div>
    <div class="sections-texts">
      Ich kann sagen, was bis zum Beta-Launch entstanden ist. Was danach
      passierte, weiß ich nicht – und sage das auch so, statt eine Geschichte
      zu erzählen, die ich nicht belegen kann.
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.learnings-text {
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
</style>
