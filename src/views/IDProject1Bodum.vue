<template>
  <IDProject1HeaderImage></IDProject1HeaderImage>
  <div class="container" style="max-width: 800px">
    <div class="h2 mt-5 text-center">BODUM LIBRA Personal scale</div>
    <div class="h6 text-center" style="font-weight: 300">
      <strong>Duration of the project: </strong> 12 weeks |
      <strong>prototyping Type: </strong>individual work
      <br />
      Not commissioned by Bodum
      <br />
    </div>
    <div class="h3 overview-text text-uppercase">Overview</div>
    <div class="margin-between-sections" v-for="s in section1Items" :key="s.id">
      <div class="sections-title">{{ s.title }}</div>
      <div class="sections-texts"><span v-html="s.text"></span></div>
    </div>
  </div>

  <IDProject1Process class="margin-between-sections"></IDProject1Process>

  <div class="container" style="max-width: 800px">
    <div class="row justify-content-center mt-5">
      <div
        class="margin-between-sections"
        v-for="Item in ID_Liste"
        :key="Item.id"
      >
        <div class="sections-title">{{ Item.title }}</div>
        <div class="sections-texts"><span v-html="Item.text"></span></div>
      </div>
    </div>
  </div>
  <IDProject1Design></IDProject1Design>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IDProject1HeaderImage from "../components/IDComponents/IDproject1-components/IDProject1HeaderImage.vue";
import IDProject1Process from "../components/IDComponents/IDproject1-components/IDProject1Process.vue";
import IDProject1Design from "../components/IDComponents/IDproject1-components/IDProject1Design.vue";

interface sectionsInterfaces {
  id: number;
  title: string;
  text: string;
}

const section1Items = ref<sectionsInterfaces[]>([
  {
    id: 0,
    title: "Project background",
    text: `Design a personal scale with
    focus on the technical components and
    realistic implementation of the design.
    <br />
    `,
  },
  {
    id: 1,
    title: "The Process",
    text: "My process will be different in different projects and will be determined by many factors such as the project goals, business needs, complexity of the problem, time, etc. Here I'll describe my process for solving this problem.",
  },
]);

interface sections1Interfaces {
  id: number;
  title: string;
  text: string;
}

const ID_Liste = ref<sections1Interfaces[]>([
  {
    id: 0,
    title: "Problems",
    text: `<ul>
    <li> <span style="font-weight:600;"> Complex assembly process </span> </li>
    <li> <span style="font-weight:600;"> Excessive, expensive components </span> </li>
    <li> <span style="font-weight:600;"> Unnecessary expense due to complicated design</span> </li>
    <li> <span style="font-weight:600;"> Complicated structure with many screws </span> </li>
    <li> <span style="font-weight:600;"> Poor display quality</span> </li>
  </ul> `,
  },
]);
</script>

<style lang="scss" scoped>
@import "../scss/theme.scss";

* {
  color: $project1-text-color !important;
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
  color: $project1-text-color !important;
}

.sections-texts {
  margin-top: 36px;
  font-size: 18px;
  font-weight: 400;
  color: $project1-text-color !important;
}
</style>
