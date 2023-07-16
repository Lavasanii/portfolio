<template>
  <headerImageProject1></headerImageProject1>
  <div class="container" style="max-width: 972px">
    <div class="h2 mt-5 text-center">
      A code - learning platform Rubrik's Code
    </div>
    <div class="h6 text-center">
      <strong>Dauer des Projekts:</strong> 3 Wochen <strong> Umfang:</strong>
      redesign,
      <strong> Prototyping Art:</strong> Einzelarbeit
    </div>
    <div class="display-6 overview-text text-uppercase">Overview</div>
    <div class="margin-between-sections" v-for="s in section1Items" :key="s.id">
      <div class="h4 sections-title">{{ s.title }}</div>
      <div class="h5 sections-texts">{{ s.text }}</div>
    </div>
  </div>
  <processProject1 class="margin-between-sections"></processProject1>
  <discoverProject1></discoverProject1>
  <defineProject1></defineProject1>
</template>

<script setup lang="ts">
import { ref } from "vue";
import headerImageProject1 from "../components/project1-components/headerImageProject1.vue";
import processProject1 from "../components/project1-components/processProject1.vue";
import discoverProject1 from "../components/project1-components/discoverProject1.vue";
import defineProject1 from "../components/project1-components/defineProject1.vue";

interface sectionsInterfaces {
  id: number;
  title: string;
  text: string;
}

const section1Items = ref<sectionsInterfaces[]>([
  {
    id: 0,
    title: "Projekthintergründ",
    text: "Durch meinegroße Leidenschaft für Coding habe ich mich für dieses Project entschieden, daheutzutage Learning Plattformen sehrbliebt sind , entschteht eine große konkurrenz zwischen denen. Die jungere Leute , oder Die Stundent wollten schnell die Möglichkeiten, bzw. was dieWebsite zu Bieten hat, vergleichen, Hier kann eine Saubere UI sehr Hilfreich sein.Rubrik’sCode ist eine kleine StartUp , die durch ein erfahrener Programmier gegründetist. Der versuchte das Maschine Learning (ML) schneller und diskreter zumlehren und dazu hat er eine Methode entwickelt, die Mann die Schritte durch eineJernourny lernen kann.Die Websiteist durch zwei Hauptplan verteiltet. Der erste ist das Learning von ML mitPython durch die Bücher und der zweite Teil ist das Lernen von ML mit C# durchVideos. Es wurde dabei so gedacht, dass man die Schritte weitergehen soll unddabei kann man es sehr gut lernen. Die Lectures sind so eingeordnet dass manerst mal die Grundlage wie z.B: Mathematik für ML lernt und danach lernt man dieCoding und weitere Schritte.",
  },
  {
    id: 1,
    title: "The Problem",
    text: "Durch meinegroße Leidenschaft für Coding habe ich mich für dieses Project entschieden, daheutzutage Learning Plattformen  sehrbliebt sind , entschteht eine große konkurrenz zwischen denen. Die jungere Leute , oder Die Stundent wollten schnell die Möglichkeiten, bzw. was dieWebsite zu Bieten hat, vergleichen, Hier kann eine Saubere UI sehr Hilfreich sein.Rubrik’sCode ist eine kleine StartUp , die durch ein erfahrener Programmier gegründetist. Der versuchte das Maschine Learning (ML) schneller und diskreter zumlehren und dazu hat er eine Methode entwickelt, die Mann die Schritte durch eineJernourny lernen kann.Die Websiteist durch zwei Hauptplan verteiltet. Der erste ist das Learning von ML mitPython durch die Bücher und der zweite Teil ist das Lernen von ML mit C# durchVideos. Es wurde dabei so gedacht, dass man die Schritte weitergehen soll unddabei kann man es sehr gut lernen. Die Lectures sind so eingeordnet dass manerst mal die Grundlage wie z.B: Mathematik für ML lernt und danach lernt man dieCoding und weitere Schritte.",
  },
  {
    id: 2,
    title: "The Goal",
    text: "Redesigning the exisiting website for better using and aquising more costumers",
  },
  {
    id: 3,
    title: "Responsibilities",
    text: "User reasearch, Wire friming and visual design",
  },
  {
    id: 4,
    title: "Tools",
    text: "User reasearch, Wire friming and visual design",
  },
  {
    id: 5,
    title: "The Process",
    text: "My process will be different in different projects and will be determined by many factors such as the project goals, business needs, complexity of the problem, time, etc. Here I'll describe my process for solving this problem.",
  },
]);
</script>

<style lang="scss" scoped>
@import "../scss/theme.scss";

* {
  color: $project1-text-color;
}

.overview-text {
  margin-top: 200px;
  font-weight: 700;
  opacity: 0.6;
}

.margin-between-sections {
  margin-top: 72px;
}

.sections-title {
  font-weight: 700;
}

.sections-texts {
  margin-top: 36px;
}
</style>
