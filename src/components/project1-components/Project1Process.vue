<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div
        v-for="p in processItems"
        :key="p.id"
        class="col-6 col-sm-4 col-md-2 text-center"
      >
        <img
          v-lazy="p.imgLink"
          class="img-fluid"
          alt="Profile"
          width="200"
          height="200"
        />
        <div class="h5 process-title">{{ p.title }}</div>
        <div class="h6">{{ p.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import processProject1_01 from "../../assets/icons/processProject1_01.svg";
import processProject1_02 from "../../assets/icons/processProject1_02.svg";
import processProject1_03 from "../../assets/icons/processProject1_03.svg";
import processProject1_04 from "../../assets/icons/processProject1_04.svg";
import processProject1_05 from "../../assets/icons/processProject1_05.svg";

interface processItemsInterface {
  id: number;
  title: string;
  text: string;
  imgLink: string;
}

const processItems = ref<processItemsInterface[]>([
  {
    id: 0,
    title: "Discover",
    text: "Generate and gather ideas plus look at other ideas",
    imgLink: processProject1_01,
  },
  {
    id: 1,
    title: "Define",
    text: "Contarct point of view based on user need",
    imgLink: processProject1_02,
  },
  {
    id: 2,
    title: "Ideation",
    text: "Brainstorming and come up with creative solutions",
    imgLink: processProject1_03,
  },
  {
    id: 3,
    title: "Design",
    text: "Develop ideation designs",
    imgLink: processProject1_04,
  },
  {
    id: 4,
    title: "Prototype",
    text: "Build a Prototype",
    imgLink: processProject1_05,
  },
]);
</script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.process-title {
  margin-top: 36px;
  margin-bottom: 21px;
  font-weight: 700;
}
</style>
