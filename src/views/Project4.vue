<template>
  <Project3Header></Project3Header>
  <div class="container" style="max-width: 800px">
    <div class="h2 mt-5 text-center">
      School competition voting platform
    </div>
 <div class="h6 text-center" style="font-weight: 300">
      <strong>Company: </strong> Allreco GmbH |
      <strong>prototyping Type: </strong>Internal Company Project
    </div>
    <div class="h3 overview-text text-uppercase">Overview</div>
    <div class="margin-between-sections" v-for="s in section1Items" :key="s.id">
      <div class="sections-title">{{ s.title }}</div>
      <div class="sections-texts"><span v-html="s.text"></span></div>
    </div>
  </div>
  <Project3Process class="margin-between-sections"></Project3Process>
  <Project3Discover></Project3Discover>
  <Project3Design></Project3Design>
  <Project3Implementation></Project3Implementation>
</template>


<script setup lang="ts">

// Projektteile
import { ref } from "vue";
import Project3Header from "../components/project3-components/Project3HeaderImage.vue";
import Project3Process from "../components/project3-components/Project3Process.vue";

// Discover to Feature&Logic3
import Project3Discover from "../components/project3-components/Feature&Logic3.vue";
// Ideation&Design3
import Project3Design from "../components/project3-components/Ideation&Design3.vue";


import Project3Implementation from "../components/project3-components/Project3Implementation.vue";

interface sectionsInterfaces {
  id: number;
  title: string;
  text: string;
}
const section1Items = ref<sectionsInterfaces[]>([
  {
    id: 0,
    title: "Project background",
    text: `<p>Each year, Allreco GmbH organizes a “Recycling & Upcycling” competition for schools to inspire creativity and environmental awareness. Students are encouraged to give old objects a new purpose through creative ideas and craftsmanship — turning waste into useful new items.</p>
    <p>As part of this initiative, I developed an interactive voting platform that allowed visitors to vote for their favorite school projects while increasing Allrecos website engagement and visibility. Each user could vote only once per day, ensuring fair participation..</p>`,
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
