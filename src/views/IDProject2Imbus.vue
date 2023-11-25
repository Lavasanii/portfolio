<template>
  <IDProject2HeaderImage></IDProject2HeaderImage>
  <div class="container" style="max-width: 800px">
    <div class="h2 mt-5 text-center">
      INBUS Hex key
    </div>
    <div class="h6 text-center" style="font-weight: 300">
      <strong>Duration of the project: </strong> 12 weeks |
      <strong>prototyping Type: </strong>individual work
      <br />
      In coporation with INBUS GmbH
      <br />
    </div>
    <div class="h3 overview-text text-uppercase">Overview</div>
    <div class="margin-between-sections" v-for="s in section1Items" :key="s.id">
      <div class="sections-title">{{ s.title }}</div>
      <div class="sections-texts"><span v-html="s.text"></span></div>
    </div>
  </div>

  <IDProject2Process class="margin-between-sections"></IDProject2Process>


  <div class="container" style="max-width: 800px">
    <div class="row justify-content-center mt-5">

      <div class="margin-between-sections" v-for="Item in ID_Liste" :key="Item.id">
        <div class="sections-title">{{ Item.title }}</div>
        <div class="sections-texts"><span v-html="Item.text"></span></div>
      </div>


<!-- 
      <div class="col text-center mt-5 mb-12 px">
        <img :src="Ausbau" alt="Bild" class="img-fluid" />
      </div> -->
    
    </div>

  </div>
  <IDProject2Design></IDProject2Design>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IDProject2HeaderImage from "../components/IDComponents/IDproject2Imbus-components/IDProject2HeaderImage.vue";
import IDProject2Process from "../components/IDComponents/IDproject2Imbus-components/IDProject2Process.vue";
import IDProject2Design from "../components/IDComponents/IDproject2Imbus-components/IDProject2Design.vue";


interface sectionsInterfaces {
  id: number;
  title: string;
  text: string;
}

const section1Items = ref<sectionsInterfaces[]>([
  {
    id: 0,
    title: "Project background",
    text: `Development of an arrangement principle for exclusively
    INBUS angle wrenches in a box or holder..
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
    <li> <span style="font-weight:600;"> Complex opening mechanism </span> </li>
    <li> <span style="font-weight:600;"> All screws come loose when the box is opened using Allen keys</span> </li>
    <li> <span style="font-weight:600;"> The box may break if dropped due to its fragility</span> </li>
    <li> <span style="font-weight:600;"> The Allen keys are not secure </span> </li>
    <li> <span style="font-weight:600;"> The box is excessively bulky and does not meet aesthetic standards</span> </li>
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
