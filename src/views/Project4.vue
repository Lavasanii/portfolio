<template>
  <Project4Header></Project4Header>
  <div class="container" style="max-width: 800px">
    <div class="h2 mt-5 text-center">
      Allreco Landing Page – Brand Identity & Product Overview
    </div>
 <div class="h6 text-center" style="font-weight: 300">
      <strong>Company: </strong> Allreco GmbH |  <strong>Role: </strong> UX/UI Design, Icon & Illustration Design (Independently) |
      <strong>prototyping Type: </strong>Internal Company Project , Completed project for Allreco GmbH, now live, implemented as the sole designer responsible
    </div>
    <div class="h3 overview-text text-uppercase">Overview</div>
    <div class="margin-between-sections" v-for="s in section1Items" :key="s.id">
      <div class="sections-title">{{ s.title }}</div>
      <div class="sections-texts"><span v-html="s.text"></span></div>
    </div>
  </div>
  <Project4Process class="margin-between-sections"></Project4Process>
  <Project4Discover></Project4Discover>
  <Project4Design></Project4Design>
  <Project3Implementation></Project3Implementation>
</template>


<script setup lang="ts">

// Projektteile
import { ref } from "vue";
import Project4Header from "../components/project4-components/Project4HeaderImage.vue";
import Project4Process from "../components/project4-components/Project4Process.vue";

// Discover to Feature&Logic3
import Project4Discover from "../components/project4-components/Feature&Logic4.vue";
// Ideation&Design3
import Project4Design from "../components/project4-components/Ideation&Design4.vue";


import Project3Implementation from "../components/project4-components/Project4Implementation.vue";

interface sectionsInterfaces {
  id: number;
  title: string;
  text: string;
}
const section1Items = ref<sectionsInterfaces[]>([
  {
    id: 0,
    title: "Initial Situation",
    text: `<p>Allreco is often associated exclusively with the manufacture and sale of recycling machinery. In fact, the company offers a much broader range of services—from individual machines to complete plant projects (from concept to implementation) to after-sales service. The company’s previous public image did not clearly reflect this breadth. The goal was to create a new landing page that conveys the full range of services at a glance—without appearing long or cluttered.</p>`,
  },
  {
    id: 1,
    title: "Challenge",
    text: "To guarantee fair voting, users needed to be restricted to one vote per day. I implemented an IP-based limitation system using JavaScript. The frontend was built in Vue.js and seamlessly integrated into the existing Webflow site via an iFrame.",
  },
  {
    id: 2,
    title: "Role",
    text: "Frontend Developer & UX Designer",
  },
  {
    id: 3,
    title: "Tools & Technologies",
    text: "Vue.js · JavaScript · Webflow · Figma",
  },
  {
    id: 4,
    title: "The Process",
    text: "My process will be different in different projects and will be determined by many factors such as the project goals, business needs, complexity of the problem, time, etc. Here I'll describe my process for solving this problem.",
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
