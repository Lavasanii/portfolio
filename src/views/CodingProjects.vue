<template>
  <CodingHeaderImage></CodingHeaderImage>
  <div class="container" style="max-width: 800px">
    <div class="h2 mt-5 text-center">Coding</div>
    <!-- <div class="h6 text-center" style="font-weight: 300">
      <strong>Duration of the project: </strong> 12 weeks |
      <strong>prototyping Type: </strong>individual work
      <br />
      Coding TEST
      <br />
    </div> -->
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
      
    </div>
  </div>
  <div id="app">
        <GridCal></GridCal>
      </div>

  
</template>


<script setup lang="ts">
import { ref } from "vue";
import CodingHeaderImage from "../components/Coding/CodingHeaderImage.vue";
import GridCal from "../components/Coding/GridCal.vue";

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
</style>
