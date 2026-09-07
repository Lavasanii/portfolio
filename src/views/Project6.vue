<template>
  <Project6Header></Project6Header>
  <div class="container" style="max-width: 800px">
    <div class="h2 mt-5 text-center">
      KI-Doku – Durchsuchbare Wartungsdokumentation mit Chatbot
    </div>
    <div class="h6 text-center" style="font-weight: 300">
      <strong>Unternehmen: </strong> Allreco GmbH |
      <strong>Rolle: </strong> UX/UI Design, in Zusammenarbeit mit zwei externen Entwicklern (KI-Pipeline/Backend) |
      <strong>Zeitraum: </strong> bis Beta-Launch März 2025
    </div>

    <div class="context-note">
      Diese Case Study beschreibt meinen Beitrag bis zum Beta-Launch im März 2025.
      Danach habe ich das Unternehmen verlassen und kenne die weitere Entwicklung
      des Produkts nicht.
    </div>

    <div class="h3 overview-text text-uppercase">Übersicht</div>
    <div class="margin-between-sections" v-for="s in section1Items" :key="s.id">
      <div class="sections-title">{{ s.title }}</div>
      <div class="sections-texts"><span v-html="s.text"></span></div>
    </div>
  </div>
  <Project6Process class="margin-between-sections"></Project6Process>
  <Project6Design></Project6Design>
  <Project6Access></Project6Access>
  <Project6Implementation></Project6Implementation>
  <Project6Learnings></Project6Learnings>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Project6Header from "../components/project6-components/Project6HeaderImage.vue";
import Project6Process from "../components/project6-components/Project6Process.vue";
import Project6Design from "../components/project6-components/Ideation&Design6.vue";
import Project6Access from "../components/project6-components/Zugriff&Berechtigungen6.vue";
import Project6Implementation from "../components/project6-components/Project6Implementation.vue";
import Project6Learnings from "../components/project6-components/Project6Learnings.vue";

interface sectionsInterfaces {
  id: number;
  title: string;
  text: string;
}

const section1Items = ref<sectionsInterfaces[]>([
  {
    id: 0,
    title: "Ausgangslage",
    text: `<p>Allreco liefert zu jeder Maschine eine technische Dokumentation – Wartungs- und Instandhaltungsdaten wie: Wie wechselt man eine Kammleiste? Welcher Druck und welche Temperatur müssen an den Ölsensoren herrschen, damit die Maschine normal läuft? Wann sollten die Kammzähne ausgetauscht werden? Dazu Schaltpläne und eine Vielzahl an Normen.</p><p>Diese Dokumentation lag ausschließlich analog als PDF vor, gesammelt von verschiedenen Herstellern – ohne einheitliche Struktur, ohne Suchfunktion über die einzelnen Dokumente hinweg.</p>`,
  },
  {
    id: 1,
    title: "Herausforderung",
    text: `<p>Eine konkrete Frage zu beantworten – etwa „Wie wechsle ich die Kammleiste?" – bedeutete, sich manuell durch mehrere PDFs unterschiedlicher Hersteller zu klicken. Das kostet Zeit, gerade wenn eine Maschine gerade stillsteht und ein Mechaniker vor Ort schnell weiterarbeiten muss.</p>`,
  },
  {
    id: 2,
    title: "Meine Rolle",
    text: `<p>UX/UI Design für die Doku-Plattform und den Chatbot. Die technische Umsetzung der KI-/Such-Pipeline (Python, Vektorisierung, Anbindung an die ChatGPT-API) lag bei zwei externen Entwicklern.</p>`,
  },
  {
    id: 3,
    title: "Tools & Technologien",
    text: "Figma · ChatGPT-API (Embeddings/Vektorisierung über eine Python-Pipeline) · Allreco Corporate Design & Kachel-System",
  },
  {
    id: 4,
    title: "Der Prozess",
    text: "Von der Sichtung der analogen PDF-Sammlung über das Chatbot-Konzept und die Lösung für die Vektorisierungs-Pipeline bis zum Beta-Livegang im März 2025 – so bin ich bei diesem Projekt vorgegangen.",
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
  border-left: 3px solid rgba(91, 75, 138, 0.35);
  font-size: 15px;
  color: rgba(27, 27, 27, 0.6) !important;
  line-height: 1.6;
}
</style>
