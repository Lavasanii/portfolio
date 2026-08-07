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
import Define2icon from "../../assets/icons/Project2-Icons/Define2Icon.svg";
import Descover2icon from "../../assets/icons/Project2-Icons/Discover2Icon.svg";
import Ideation2icon from "../../assets/icons/Project2-Icons/Ideation2Icon.svg";
import Design2icon from "../../assets/icons/Project2-Icons/Design2Icon.svg";
import Prototype2icon from "../../assets/icons/Project2-Icons/Prototype2Icon.svg";

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
    imgLink: Descover2icon,
  },
  {
    id: 1,
    title: "Define",
    text: "Contarct point of view based on user need",
    imgLink: Define2icon,
  },
  {
    id: 2,
    title: "Ideation",
    text: "Brainstorming and come up with creative solutions",
    imgLink: Ideation2icon,
  },
  {
    id: 3,
    title: "Design",
    text: "Develop ideation designs",
    imgLink: Design2icon,
  },
  {
    id: 4,
    title: "Prototype",
    text: "Build a Prototype",
    imgLink: Prototype2icon,
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
