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
          alt="Process"
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
    text: "Grafana-Ansichten und Datenstruktur analysiert, Anforderungen aus der Kundenbetreuung gesammelt",
    imgLink: Descover2icon,
  },
  {
    id: 1,
    title: "Define",
    text: "Ziel: Status vor Datenmenge, individuell konfigurierbar, vom Überblick ins Detail",
    imgLink: Define2icon,
  },
  {
    id: 2,
    title: "Ideation",
    text: "Kachel-System, 3D-Modell mit Messpunkten, Benachrichtigungskonzept",
    imgLink: Ideation2icon,
  },
  {
    id: 3,
    title: "Design",
    text: "Komponentensystem in Figma, Datenvisualisierung, 3D-Renderings",
    imgLink: Design2icon,
  },
  {
    id: 4,
    title: "Delivery",
    text: "Abstimmung mit NimBit zur Machbarkeit, Begleitung bis zum MVP",
    imgLink: Prototype2icon,
  },
]);
</script>

<style lang="scss" scoped>
.process-title {
  color: #2C6E75 !important;
  font-weight: 600;
  margin-top: 12px;
}
</style>
