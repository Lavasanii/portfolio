<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 discover-text">Ideation & Design</div>
      </div>
    </div>

    <div class="row justify-content-center my-5">
      <div class="sections-texts-P6">
        <strong>Designziele festgelegt</strong>
        <ul>
          <li>
            <strong>Schnelle, gezielte Antworten statt manuellem Blättern</strong>
            – ein Chatbot statt einer reinen Dokumentenablage.
          </li>
          <li>
            <strong>Antworten ausschließlich aus der eigenen Dokumentation</strong>,
            nicht aus dem offenen Web – um Fehlantworten zu vermeiden.
          </li>
          <li>
            <strong>Tablet und Laptop als Zielgeräte</strong>, kein mobiles
            Interface – die Zielgruppe arbeitet nicht am Smartphone.
          </li>
          <li>
            <strong>Bedienbarkeit unter Werkstattbedingungen</strong> –
            schmutzige, schmierige Hände, wechselndes Licht bis hin zu
            direkter Sonneneinstrahlung.
          </li>
          <li>
            <strong>Anpassbarkeit je Kunde/Wiederverkäufer</strong> über das
            bestehende Kachel- und Corporate-Design-System.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P6">
        <strong>Chatbot statt Dokumentensuche</strong>
        <ul>
          <li>
            Nutzer:innen stellen eine Frage in natürlicher Sprache – z. B.
            „Wie wechsle ich die Kammleiste?" oder „Wie justiere ich das
            zentrale Schmieraggregat?". Die KI durchsucht die vektorisierte
            Dokumentation und liefert die passende Antwort direkt, statt eine
            Liste von PDFs zum Selberdurchsuchen anzuzeigen.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P6">
        <strong>Vektorisierungs-Pipeline als Engpass</strong>
        <ul>
          <li>
            Damit die KI semantisch statt nur nach Stichwort suchen kann,
            müssen die PDFs vektorisiert werden. Das Hochladen und
            Vektorisieren großer Dokumentenmengen dauerte jedoch sehr lange
            und hätte den laufenden Betrieb blockiert.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P6">
        <strong>Lösung: verzögerte, bedarfsgesteuerte Vektorisierung</strong>
        <ul>
          <li>
            Statt alle Dokumente sofort vollständig zu verarbeiten, wird nur
            bei Bedarf vektorisiert, wenn die KI ein Dokument tatsächlich
            braucht; der reguläre Upload-Prozess lässt sich zusätzlich auf
            einen günstigen Zeitpunkt verschieben (z. B. nachts), um den
            Tagesbetrieb nicht zu belasten.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P6">
        <strong>Begrenzte KI als Vertrauensfrage</strong>
        <ul>
          <li>
            Die KI wurde bewusst ausschließlich auf die Allreco-Dokumentation
            trainiert statt auf eine offene Websuche. Das verhindert plausibel
            klingende, aber falsche Antworten – bei Wartungsanweisungen an
            einer laufenden Maschine ein Sicherheitsthema, nicht nur ein
            Komfortmerkmal.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P6">
        <strong>Bedienkonzept für die Werkstatt</strong>
        <ul>
          <li>
            Große, robuste Bedienelemente statt feiner Touch-Ziele, hoher
            Kontrast für Lesbarkeit bei Sonnenlicht, reduzierte
            Interaktionstiefe – entworfen für Nutzung mit verschmutzten oder
            schmierigen Händen, nicht für Büro-Bedingungen.
          </li>
        </ul>
      </div>

      <div class="sections-texts-P6">
        <strong>Wiederverwendung des Kachel-Systems</strong>
        <ul>
          <li>
            Statt eine neue Oberfläche zu entwerfen, wurde das bestehende
            Allreco-Kachel- und Corporate-Design wiederverwendet, damit sich
            die Doku-Plattform je Kunde oder Wiederverkäufer individuell
            anpassen lässt – dasselbe Prinzip wie bei der Telematik-Kachel und
            den Landing-Page-Kategorie-Karten.
          </li>
        </ul>
      </div>
    </div>

    <div class="sections-subtitle text-uppercase">Ausgangslage: analoge Dokumentenliste</div>
    <div class="col text-center">
      <img
        v-lazy="Dokumentenliste"
        alt="Bestehende Dokumentenliste, sortiert nach Projektnummer, ohne themen- oder volltextbasierte Suche (Kundennamen anonymisiert)"
        class="img-fluid my-5"
      />
    </div>
    <div class="col text-center mb-5">
      So sah die Ausgangslage aus: Dokumente sortiert nach Projektnummer, ohne
      Volltextsuche oder thematische Filterung. Eine konkrete Frage zu
      beantworten bedeutete, sich manuell durch die passenden PDFs zu
      klicken. Kundennamen im Screenshot sind anonymisiert.
    </div>
  </div>
</template>

<script setup lang="ts">
import Dokumentenliste from "../../assets/images/Project6/dokumentenliste.webp";
</script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.discover-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: #5b4b8a !important;
  border-bottom: 3px solid #5b4b8a !important;
}

.sections-texts-P6 {
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
