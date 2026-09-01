<template>
  <div class="container" style="max-width: 800px; margin-bottom: 90px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 learnings-text">Learnings</div>
      </div>
    </div>

    <div class="sections-title">Wann eine Funktion besser wieder verschwindet</div>
    <div class="sections-texts">
      Das Scroll-Snap-Verhalten war technisch fertig – und wurde trotzdem entfernt.
      Im browserübergreifenden Test verhielt es sich in Chrome und Firefox unterschiedlich,
      und ein Effekt, der auf einem Teil der Geräte hakt, kostet mehr Vertrauen als er an
      Wirkung bringt. Die vollflächige Sektionsstruktur blieb erhalten, das automatische
      Einrasten nicht. Rückblickend die richtige Entscheidung: Der visuelle Aufbau
      funktioniert auch ohne den Effekt – die Inkonsistenz wäre dagegen auf jedem
      Firefox-Gerät sichtbar geblieben.
    </div>

    <div class="sections-title mt-5">Kein zweites System aufmachen</div>
    <div class="sections-texts">
      Farben und Schriften waren im Allreco-Corporate-Design bereits definiert. Statt ein
      eigenes Design System danebenzustellen, habe ich auf den bestehenden Vorgaben eine
      Komponenten-Ebene ergänzt: eine Karten-Komponente, ein Icon-System, ein Text-Rotator.
      Ein paralleles System hätte die Konsistenz zu den übrigen Touchpoints beschädigt,
      statt sie zu verbessern.
    </div>

    <div class="sections-title mt-5">Iterationen sichtbar machen, nicht nur das Ergebnis</div>
    <div class="sections-texts">
      Die vier Konzeptstufen – von der reinen Textversion bis zur finalen Kombination aus
      Video und rotierender Headline – wurden nicht nacheinander verworfen, sondern
      nebeneinander mit Vorgesetzten, Kolleg:innen und Testpersonen verglichen. Die
      Entscheidung für die finale Richtung fiel dadurch nicht aus dem Bauch heraus,
      sondern auf Basis konkreter Reaktionen auf konkrete Varianten.
    </div>

    <div class="sections-title mt-5">Werkzeuggrenzen sind lösbar</div>
    <div class="sections-texts">
      Der automatische Wortwechsel ließ sich mit Webflow-Bordmitteln nicht umsetzen. Statt
      das Konzept anzupassen, habe ich die Lücke mit eigenem JavaScript/HTML/CSS geschlossen
      und direkt in die bestehende Seite eingebunden. Als Designer die Schnittstelle zur
      Entwicklung selbst zu übernehmen, hat hier verhindert, dass eine gestalterische
      Entscheidung an einer Tool-Beschränkung scheitert.
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
  color: #E17C2F !important;
  border-bottom: 3px solid #E17C2F !important;
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
