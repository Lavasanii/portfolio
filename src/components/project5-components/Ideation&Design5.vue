<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 discover-text">Ideation & Design</div>
      </div>
    </div>

    <div class="row justify-content-center my-5">
      <div class="sections-texts-P5">
        <strong>Designziele festgelegt</strong>
        <ul>
          <li>
            <strong>Status vor Datenmenge</strong> – auf einen Blick erkennbar
            machen, ob eine Anlage normal läuft, statt Rohwerte aufzulisten.
          </li>
          <li>
            <strong>Individualisierbarkeit</strong> – jeder Kunde muss die für
            ihn wichtigen Werte selbst zusammenstellen können.
          </li>
          <li>
            <strong>Vom Überblick ins Detail</strong> – ein durchgängiger Weg
            von der Gesamtanlage über die einzelne Maschine bis zur Komponente.
          </li>
          <li>
            <strong>Störungen aktiv melden</strong> – Probleme sollen den Nutzer
            erreichen, statt darauf zu warten, dass jemand das Dashboard öffnet.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P5">
        <strong>Kachel-System entwickelt</strong>
        <ul>
          <li>
            Ein modulares Raster, in dem jede Kachel einen Messwert oder ein
            Diagramm darstellt – Zeiger-Instrumente für Verlaufswerte, Balken für
            Auslastung und Füllstände. Jeder Kunde stellt sich sein Dashboard
            daraus selbst zusammen: dieselbe Komponentenbasis, unterschiedliche
            Konfiguration je Anlage und Priorität. Damit war das Problem gelöst,
            dass ein festes Layout nie für alle Kunden passt.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P5">
        <strong>3D-Modell mit interaktiven Messpunkten</strong>
        <ul>
          <li>
            Bei einer Anlage aus mehreren Maschinen ist „wo ist das Problem?"
            eine räumliche Frage – eine Liste beantwortet sie schlecht.
            Umgesetzt wurde deshalb ein drehbares 3D-Modell der Maschine mit
            Messpunkten direkt an den betroffenen Komponenten, deren Farbe den
            jeweils schlechtesten Sensorstatus der zugehörigen Baugruppe zeigt
            (Grün/Gelb/Rot, worst-status-wins). Ein Klick öffnet das
            Kachel-Dashboard mit den Werten genau dieser Komponente. Die
            Navigation folgt damit der physischen Maschine statt einer
            abstrakten Menüstruktur.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P5">
        <strong>Benachrichtigungskonzept</strong>
        <ul>
          <li>
            Konzept für Störungsmeldungen: Wann wird gemeldet, in welcher
            Dringlichkeitsstufe, und was sieht der Nutzer zuerst – den Zustand,
            die betroffene Komponente oder die empfohlene Handlung.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P5">
        <strong>Einbettung ins bestehende Dashboard</strong>
        <ul>
          <li>
            Die Live-Status-Kachel der Maschine sollte sich in das bestehende
            Allreco-Dashboard einfügen lassen, statt eine isolierte Ansicht zu
            bleiben. In der Testphase habe ich dazu ein Konzept-Mockup
            erarbeitet, das zeigt, wie die Maschinenkachel neben den übrigen
            Dashboard-Elementen im Allreco-Corporate-Design erscheinen könnte.
            Jeder einzelne Sensorwert (z. B. Motordrehzahl, Öldruck) sollte über
            eine eigene, generische ID mit dem jeweiligen Feld der Kachel
            verknüpft werden – so hätte Allreco das Dashboard nach eigenem oder
            Kundenwunsch selbst zusammenstellen können. Die genaue technische
            Umsetzung dieser Verknüpfung war zum Zeitpunkt meines Ausscheidens
            noch nicht abschließend geklärt.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P5">
        <strong>Komponentensystem in Figma</strong>
        <ul>
          <li>
            Wiederverwendbare Bausteine – Messpunkte, Tooltips,
            Kachel-Varianten – damit sich das Konzept über verschiedene
            Maschinentypen hinweg konsistent anwenden ließ.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P5">
        <strong>3D-Renderings erstellt</strong>
        <ul>
          <li>
            Die Renderings der Maschinen habe ich selbst erstellt und die
            3D-Modelle für die Darstellung im Interface angepasst.
          </li>
        </ul>
      </div>
    </div>

    <div class="sections-subtitle text-uppercase">Ausgangslage</div>
    <div class="col text-center">
      <img v-lazy="AusgangslageP5" alt="Bestehende Grafana-Ansicht und Maschinen-Bedienpanels" class="img-fluid my-5" />
    </div>
    <div class="col text-center mb-5">
      Die Daten lagen auf AWS und wurden über Grafana visualisiert – ein
      Werkzeug für Techniker, nicht für Anlagenbetreiber.
    </div>

    <div class="sections-subtitle text-uppercase">3D-Modell mit Messpunkten</div>
    <div class="col text-center">
      <video class="img-fluid my-4" style="border-radius: 12px; box-shadow: 0 8px 24px rgba(0,0,0,0.25)" autoplay loop
        muted playsinline>
        <source :src="TelematikPrototypDemo" type="video/mp4" />
      </video>
    </div>
    <div class="col text-center mb-5">
      Interaktiver Prototyp: farbige Messpunkte zeigen den Status der jeweiligen
      Baugruppe, ein Klick öffnet das zugehörige Kachel-Dashboard.
    </div>

    <div class="sections-subtitle text-uppercase">Einbettung ins Dashboard</div>
    <div class="col text-center">
      <img v-lazy="DashboardEmbedP5" alt="Konzept-Mockup: Maschinenkachel eingebettet ins bestehende Allreco-Dashboard"
        class="img-fluid my-5" />
    </div>
    <div class="col text-center mb-5">
      Konzept-Mockup aus der Testphase: die Live-Status-Kachel im
      Allreco-Corporate-Design, eingebettet neben den übrigen
      Dashboard-Elementen.
    </div>

    <div class="col text-center">
      <img v-lazy="IdKonzeptP5" alt="Konzept: jeder Sensorwert über eine eigene generische ID mit der Kachel verknüpft"
        class="img-fluid my-5" />
    </div>
    <div class="col text-center mb-5">
      Angenommenes Verknüpfungsprinzip – nicht bestätigt, wie NimBit es intern
      löst: Jeder Messwert bekommt eine eigene, kurze ID, die einem
      Kachel-Feld zugeordnet wird. So hätte Allreco die Kachel frei
      zusammenstellen können.
    </div>

    <div class="sections-subtitle text-uppercase">Kachel-System</div>
    <div class="col text-center">
      <img v-lazy="KachelSystemP5" alt="Kachel-System mit Zeiger- und Balkeninstrumenten" class="img-fluid my-5" />
    </div>
    <div class="col text-center mb-5">
      Modulare Kacheln als Grundlage: Jeder Kunde stellt sich daraus sein
      eigenes Dashboard zusammen.
    </div>
  </div>
</template>

<script setup lang="ts">
import AusgangslageP5 from "../../assets/images/Project5/ausgangslage-p5.webp";
import KachelSystemP5 from "../../assets/images/Project5/kachel-system-final.svg";
import TelematikPrototypDemo from "../../assets/videos/telematik-prototyp-demo.mp4";
import DashboardEmbedP5 from "../../assets/images/Project5/Allreco_Telematik.webp";
import IdKonzeptP5 from "../../assets/images/Project5/embed-konzept.webp";
</script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.discover-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: #2C6E75 !important;
  border-bottom: 3px solid #2C6E75 !important;
}

.sections-texts-P5 {
  margin-top: 18px;
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
</style>
