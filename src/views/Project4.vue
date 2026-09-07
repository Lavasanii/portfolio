<template>
  <Project4Header></Project4Header>
  <div class="container" style="max-width: 800px">
    <div class="h2 mt-5 text-center">
      Allreco Landing Page – Markenauftritt & Produktübersicht
    </div>
 <div class="h6 text-center" style="font-weight: 300">
      <strong>Unternehmen: </strong> Allreco GmbH |  <strong>Rolle: </strong> UX/UI Design, Icon- & Illustrationsdesign sowie ergänzende Frontend-Entwicklung (JavaScript/HTML/CSS) |
      <strong>Kontext: </strong>Fertiggestelltes, live geschaltetes Projekt für Allreco GmbH, als alleinig zuständiger Designer umgesetzt
    </div>
    <div class="h3 overview-text text-uppercase">Übersicht</div>
    <div class="margin-between-sections" v-for="s in section1Items" :key="s.id">
      <div class="sections-title">{{ s.title }}</div>
      <div class="sections-texts"><span v-html="s.text"></span></div>
    </div>
  </div>
  <Project4Process class="margin-between-sections"></Project4Process>
  <Project4Discover></Project4Discover>
  <Project4Design></Project4Design>
  <Project4DesignSystem></Project4DesignSystem>
  <Project4Implementation></Project4Implementation>
  <Project4Learnings></Project4Learnings>
</template>


<script setup lang="ts">

// Projektteile
import { ref } from "vue";
import Project4Header from "../components/project4-components/Project4HeaderImage.vue";
import Project4Process from "../components/project4-components/Project4Process.vue";

// Discover to Feature&Logic3
//import Project4Discover from "../components/project4-components/Feature&Logic4.vue";

// Ideation&Design3
import Project4Design from "../components/project4-components/Ideation&Design4.vue";

// Component-Based Design / Design System
import Project4DesignSystem from "../components/project4-components/Project4DesignSystem.vue";

import Project4Implementation from "../components/project4-components/Project4Implementation.vue";

// Learnings
import Project4Learnings from "../components/project4-components/Project4Learnings.vue";

interface sectionsInterfaces {
  id: number;
  title: string;
  text: string;
}
const section1Items = ref<sectionsInterfaces[]>([
  {
    id: 0,
    title: "Ausgangslage",
    text: `<p> Allreco wird häufig ausschließlich mit dem Bau und Verkauf von Recycling-Maschinen assoziiert. Tatsächlich deckt das Unternehmen ein deutlich breiteres Leistungsspektrum ab – von einzelnen Maschinen über komplette Anlagenprojekte (von der Idee bis zur Umsetzung) bis hin zum After-Sales-Service. Die bisherige Außendarstellung bildete diese Bandbreite nicht klar genug ab. Ziel war eine neue Landing Page, die das vollständige Leistungsportfolio auf einen Blick vermittelt – ohne dabei lang oder überladen zu wirken.</p>`,
  },
  {
    id: 1,
    title: "Herausforderung",
    text: "Die bestehende Seite war seit fünf Jahren nahezu unverändert und nutzte ein klassisches Karussell mit Produktfotos. Internes Stakeholder-Feedback (Vorgesetzter, Kolleg:innen) machte deutlich, dass die Seite wenig einladend wirkte und nicht mehr zeitgemäß war. Die Herausforderung bestand darin, einen frischeren, dynamischeren Auftritt zu entwickeln, der Aufmerksamkeit hält, das volle Leistungsspektrum von Allreco klar transportiert und dabei kompakt bleibt.",
  },
  //{
  //  id: 2,
  //  title: "Role",
  //  text: "Frontend Developer & UX Designer",
  //},
  {
    id: 3,
    title: "Tools & Technologien",
    text: "Webflow · JavaScript · HTML/CSS · Figma",
  },
  {
    id: 4,
    title: "Der Prozess",
    text: "Von der Analyse des Stakeholder-Feedbacks über mehrere Iterationsstufen bis zur finalen, animierten Umsetzung – so bin ich bei diesem Projekt vorgegangen.",
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

@media only screen and (max-width: 500px) {
  .videoWidth {
    width: 200px;
  }
}

@media only screen and (max-width: 1100px) {
  .videoWidth {
    width: 500px;
  }
}

@media only screen and (min-width: 1100px) {
  .videoWidth {
    width: 1000px;
  }
}
</style>
