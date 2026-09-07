<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 system-text">Component-Based Design</div>
      </div>
    </div>

    <div class="sections-title">Bausteine statt Einzelseiten</div>
    <div class="sections-texts">
      Die Seite wurde konsequent aus wiederverwendbaren Bausteinen aufgebaut. Die drei
      Kategorien Maschinen, Anlagen und After Sales teilen sich eine einzige
      Karten-Definition – Änderungen an Rahmen, Format oder Ausrichtung wirken sich
      zentral auf alle drei aus, statt dass jedes Element einzeln angepasst werden muss.
    </div>

    <div class="sections-subtitle text-uppercase">Komponenten</div>

    <div class="component-block">
      <div class="component-name">card-home</div>
      <div class="component-desc">
        Die Kategorie-Karte – eine Definition, dreifach eingesetzt. Das feste
        Seitenverhältnis sorgt dafür, dass alle Karten gleich groß bleiben, unabhängig
        von der Länge des Labels.
      </div>
      <ul class="spec-list">
        <li><span class="spec-key">border</span> 1.8px solid #EC7404</li>
        <li><span class="spec-key">border-radius</span> 7px</li>
        <li><span class="spec-key">aspect-ratio</span> 1 – erzwingt quadratisches Format</li>
        <li><span class="spec-key">flex-flow</span> column, zentriert Icon und Label</li>
        <li><span class="spec-key">cursor</span> pointer – gesamte Karte ist klickbar</li>
      </ul>
    </div>

    <div class="component-block">
      <div class="component-name">grid-card-home</div>
      <div class="component-desc">
        Das Grid, das die drei Karten nebeneinander anordnet und auf kleineren
        Breakpoints umbricht.
      </div>
    </div>

    <div class="component-block">
      <div class="component-name">link-block-home</div>
      <div class="component-desc">
        Macht jede Karte vollflächig klickbar und verweist auf die jeweilige
        Unterseite – Produktgruppen, Smart Plant und After Sales.
      </div>
    </div>

    <div class="component-block">
      <div class="component-name">text-titel-hp</div>
      <div class="component-desc">
        Container des Hero-Texts mit der automatisch rotierenden Headline. Als gekapselter
        Baustein mit eigenem JavaScript umgesetzt und dadurch auf weitere Seiten
        übertragbar.
      </div>
    </div>

    <div class="sections-subtitle text-uppercase">Icon-System</div>
    <div class="sections-texts">
      Die drei Icons folgen gemeinsamen Konstruktionsregeln: einheitliche Strichstärke,
      gleiche Grundgeometrie und eine identisch platzierte Akzentfläche im Hintergrund.
      Dadurch bleiben sie untereinander als eine Familie erkennbar, auch wenn die
      dargestellten Motive unterschiedlich komplex sind.
    </div>

    <div class="sections-subtitle text-uppercase">Design-System-Entscheidung</div>
    <div class="sections-texts">
      Bewusst wurde kein paralleles Design System aufgebaut. Farbwelt und Typografie waren
      im Allreco-Corporate-Design bereits definiert; ein zweites, konkurrierendes System
      hätte die Konsistenz zu den übrigen Touchpoints beschädigt statt verbessert.
      Stattdessen wurde auf den bestehenden Vorgaben eine Komponenten-Ebene ergänzt –
      Karten-Komponente, Icon-System und Text-Rotator als wiederverwendbare Bausteine
      innerhalb der vorhandenen Markensprache.
    </div>

    <div class="sections-subtitle text-uppercase">Vorher / Nachher im Strukturvergleich</div>
    <div class="row mt-4 mb-5">
      <div class="col-md-6">
        <div class="compare-label">Vorher</div>
        <ul class="compare-list">
          <li>Freie Anordnung, jedes Element mit eigener Größe und Position</li>
          <li>Gemischte Bildsprache: Fotos, Renderings, Mitarbeiterfoto</li>
          <li>Produktebene – einzelne Maschinen mit Typenbezeichnung</li>
          <li>Layoutänderung bedeutet, jedes Element einzeln anzufassen</li>
        </ul>
      </div>
      <div class="col-md-6">
        <div class="compare-label">Nachher</div>
        <ul class="compare-list">
          <li>Drei identische Karten, gleiche Größe, gleicher Abstand</li>
          <li>Eine Icon-Familie mit gemeinsamen Konstruktionsregeln</li>
          <li>Leistungsebene – die drei Geschäftsbereiche</li>
          <li>Änderung an der Karte wirkt auf alle drei gleichzeitig</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.system-text {
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

.sections-subtitle {
  font-size: 16px;
  font-weight: 600 !important;
  margin-top: 70px;
  padding-bottom: 6px;
  color: rgba(27, 27, 27, 0.6);
  border-bottom: 1px solid rgba(27, 27, 27, 0.6);
}

.component-block {
  margin-top: 36px;
  padding-left: 20px;
  border-left: 3px solid rgba(225, 124, 47, 0.4);
}

.component-name {
  font-family: "Courier New", Courier, monospace;
  font-size: 17px;
  font-weight: 700;
  color: #E17C2F !important;
  margin-bottom: 10px;
}

.component-desc {
  font-size: 18px;
  font-weight: 400;
  color: #000800cc !important;
}

.spec-list {
  margin-top: 14px;
  padding-left: 20px;
  list-style: none;

  li {
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 400;
    color: #000800cc !important;
    line-height: 1.6;
  }
}

.spec-key {
  font-family: "Courier New", Courier, monospace;
  font-weight: 700;
  margin-right: 10px;
  color: rgba(27, 27, 27, 0.6) !important;
}

.compare-label {
  font-weight: 600;
  font-size: 18px;
  color: #E17C2F !important;
  margin-bottom: 12px;
}

.compare-list {
  padding-left: 20px;

  li {
    margin-bottom: 10px;
    font-size: 17px;
    font-weight: 400;
    color: #000800cc !important;
    line-height: 1.6;
  }
}
</style>
