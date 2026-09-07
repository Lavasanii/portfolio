<template>
  <Project5Header></Project5Header>
  <div class="container" style="max-width: 800px">
    <div class="h2 mt-5 text-center">
      IoTBreeze – Dashboard-Konzept für vernetzte Recyclinganlagen
    </div>
    <div class="h6 text-center" style="font-weight: 300">
      <strong>Unternehmen: </strong> Allreco GmbH, in Kooperation mit NimBit GmbH |
      <strong>Rolle: </strong> UX/UI Design – Konzeptentwicklung und Umsetzung in Figma, 3D-Renderings |
      <strong>Zeitraum: </strong> [Zeitraum ergänzen]
    </div>

    <div class="context-note">
      IoTBreeze ist ein Produkt von NimBit, das auch bei anderen Kunden im
      Einsatz ist. Meine Arbeit betraf die Allreco-Seite des Produkts. NimBit
      brachte eigene Designer und Entwickler ein – ich war nicht in allen Teilen
      des Produkts involviert.
    </div>

    <div class="h3 overview-text text-uppercase">Übersicht</div>
    <div class="margin-between-sections" v-for="s in section1Items" :key="s.id">
      <div class="sections-title">{{ s.title }}</div>
      <div class="sections-texts"><span v-html="s.text"></span></div>
    </div>
  </div>
  <Project5Process class="margin-between-sections"></Project5Process>
  <Project5Design></Project5Design>
  <Project5Implementation></Project5Implementation>
  <Project5Learnings></Project5Learnings>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Project5Header from "../components/project5-components/Project5HeaderImage.vue";
import Project5Process from "../components/project5-components/Project5Process.vue";
import Project5Design from "../components/project5-components/Ideation&Design5.vue";
import Project5Implementation from "../components/project5-components/Project5Implementation.vue";
import Project5Learnings from "../components/project5-components/Project5Learnings.vue";

interface sectionsInterfaces {
  id: number;
  title: string;
  text: string;
}

const section1Items = ref<sectionsInterfaces[]>([
  {
    id: 0,
    title: "Ausgangslage",
    text: `<p>Allreco baut Maschinen und komplette Anlagen für die Aufbereitung von Altholz, Haus- und Gewerbeabfall sowie Biomasse. Eine Anlage besteht aus mehreren Maschinen, jede Maschine aus vielen Komponenten – Druck- und Temperatursensoren, Öl- und Luftpumpen, Kammleisten, Drehzahlmessung. Diese Sensoren liefern laufend Messwerte, die auf AWS gespeichert und über Grafana visualisiert wurden.</p><p>Grafana funktioniert für Techniker und Entwickler. Für die B2B-Kunden von Allreco – Anlagenbetreiber ohne Datenanalyse-Hintergrund – war es das falsche Werkzeug: Die Daten waren vollständig vorhanden, aber weder auf ihre Fragen zugeschnitten noch ohne Vorwissen lesbar.</p>`,
  },
  {
    id: 1,
    title: "Herausforderung",
    text: `<p>Aus einer technischen Datenansicht eine Oberfläche machen, die Betreiber im Arbeitsalltag nutzen. Drei Fragen mussten schnell beantwortbar sein: Läuft die Anlage gerade normal – oder gibt es eine Störung? Wurde eine Verschleißkomponente wie die Kammleiste rechtzeitig gewartet oder getauscht? Und wenn Druck oder Temperatur an einer Stelle steigen: wo genau, und warum?</p><p>Erschwerend kam hinzu, dass jeder Kunde eine andere Anlagenkonfiguration und andere Prioritäten hat. Ein festes Dashboard hätte für einen Teil der Kunden immer zu viel und für den anderen zu wenig gezeigt.</p>`,
  },
  {
    id: 2,
    title: "Meine Rolle",
    text: `<p>Meine Aufgabe war es, Anforderungen zu sammeln und daraus konkrete Konzepte in Figma zu entwickeln – Layout, Interaktion, Datenvisualisierung. Die technische Umsetzung lag bei NimBit.</p><p>Die Anforderungen kamen nicht aus eigener Nutzerforschung, sondern über einen Kollegen aus der Elektronik, der zugleich die Kundenbetreuung im Feld verantwortete. Er war bei Störungen vor Ort und wusste aus erster Hand, welche Informationen Betreiber tatsächlich brauchen. Diese Einblicke habe ich in Konzepte übersetzt. Zusätzlich habe ich die 3D-Renderings der Maschinen erstellt und die 3D-Modelle für die Darstellung angepasst.</p>`,
  },
  {
    id: 3,
    title: "Tools & Technologien",
    text: "Figma · Spline (3D) · 3D-Rendering · JSON-Datenstruktur · AWS und Grafana (Ausgangssystem)",
  },
  {
    id: 4,
    title: "Der Prozess",
    text: "Von der Analyse der bestehenden Grafana-Ansichten über die Anforderungen aus der Kundenbetreuung bis zum Konzept aus Kachel-System und interaktivem 3D-Modell – so bin ich bei diesem Projekt vorgegangen.",
  },
]);
</script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.overview-text {
  margin-top: 90px;
  font-weight: 600;
  opacity: 0.6;
}

.margin-between-sections {
  margin-top: 72px;
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

.context-note {
  margin-top: 36px;
  padding-left: 18px;
  border-left: 3px solid rgba(44, 110, 117, 0.35);
  font-size: 15px;
  color: rgba(27, 27, 27, 0.6) !important;
  line-height: 1.6;
}
</style>
