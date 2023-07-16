<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div
        v-for="p in processItems"
        :key="p.id"
        class="col-6 col-sm-4 col-md-2 text-center"
      >
        <img :src="p.imgLink" class="img-fluid" alt="Profile" width="255" height="255" />
        <div class="h5 process-title">{{ p.title }}</div>
        <div class="h6">{{ p.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
    imgLink: "../../../public/icons/processProject1_01.svg",
  },
  {
    id: 1,
    title: "Define",
    text: "Contarct point of view based on user need",
    imgLink: "../../../public/icons/processProject1_02.svg",
  },
  {
    id: 2,
    title: "Ideation",
    text: "Brainstorming and come up with creative solutions",
    imgLink: "../../../public/icons/processProject1_03.svg",
  },
  {
    id: 3,
    title: "Design",
    text: "Develop ideation designs",
    imgLink: "../../../public/icons/processProject1_04.svg",
  },
  {
    id: 4,
    title: "Prototype",
    text: "Build a Prototype",
    imgLink: "../../../public/icons/processProject1_05.svg",
  },
]);
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

.process-title {
  margin-top: 36px;
  margin-bottom: 21px;
  font-weight: 700;
}
</style>
