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
    text: "Stakeholder-Feedback aufgenommen: veraltete Karussell-Seite wirkte wenig einladend",
    imgLink: Descover2icon,
  },
  {
    id: 1,
    title: "Define",
    text: "Ziel: kompakte Fullscreen-Seite mit allen drei Kernleistungen",
    imgLink: Define2icon,
  },
  {
    id: 2,
    title: "Ideation",
    text: "Vier Stufen getestet: Text → Bild → Video → Video mit rotierendem Text",
    imgLink: Ideation2icon,
  },
  {
    id: 3,
    title: "Design",
    text: "Video-Hero mit Text-Rotator (eigener Code), Icon-System, Markenfarben Orange/Grau",
    imgLink: Design2icon,
  },
  {
    id: 4,
    title: "Prototype",
    text: "Responsives Layout für Desktop, Tablet und Mobile",
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
