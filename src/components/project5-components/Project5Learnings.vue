<template>
  <div class="container" style="max-width: 800px; margin-bottom: 170px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 learnings-text">Learnings</div>
      </div>
    </div>

    <div class="sections-title">Ein starkes Konzept kann an der Performance scheitern</div>
    <div class="sections-texts">
      Das interaktive 3D-Modell war der visuell überzeugendste Teil des Konzepts
      – und technisch der teuerste. Es belastete den Server deutlich und machte
      die Anwendung spürbar langsam, besonders auf Tablets, Smartphones und
      älteren Rechnern mit wenig Ressourcen. Genau diese Geräte stehen aber im
      Arbeitsalltag von Anlagenbetreibern. Die Erkenntnis: Bei
      Industrieanwendungen ist die Zielhardware Teil der Designentscheidung,
      nicht ein nachgelagertes Umsetzungsdetail.
    </div>

    <div class="sections-title mt-5">Technische Datenmodelle sind kein Interface</div>
    <div class="sections-texts">
      Die Sensordaten lagen vollständig vor, bevor das Projekt startete – auf
      AWS gespeichert, über Grafana abrufbar. Der Wert entstand erst dadurch,
      sie auf die tatsächlichen Fragen der Betreiber herunterzubrechen: Läuft
      alles normal? Ist die Kammleiste rechtzeitig getauscht worden? Wo steigt
      der Druck, und warum?
    </div>

    <div class="sections-title mt-5">Individualisierbarkeit statt Kompromiss-Layout</div>
    <div class="sections-texts">
      Bei stark unterschiedlichen Kundenkonfigurationen führt jedes feste
      Dashboard zu einem Kompromiss, der niemandem ganz passt. Das
      Kachel-System hat diese Entscheidung an die Kunden zurückgegeben, statt
      sie im Design vorwegzunehmen.
    </div>

    <div class="sections-title mt-5">Nutzerwissen aus zweiter Hand nutzen</div>
    <div class="sections-texts">
      Ich hatte keinen direkten Zugang zu den Endkunden. Der Kollege aus
      Elektronik und Kundenbetreuung war die Verbindung dorthin – er war bei
      Störungen vor Ort und wusste aus erster Hand, welche Informationen
      Betreiber brauchen. Seine Beobachtungen aus dem Feld waren wertvoller als
      jede Annahme, die ich am Schreibtisch getroffen hätte.
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
</style>
