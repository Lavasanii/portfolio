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
    text: "Analoge PDF-Dokumentation mehrerer Hersteller gesichtet – ohne einheitliche Struktur oder Suche",
    imgLink: Descover2icon,
  },
  {
    id: 1,
    title: "Define",
    text: "Fünf Designziele: gezielte Antworten, eigene Doku als einzige Quelle, Tablet/Laptop, Werkstatttauglichkeit, Anpassbarkeit",
    imgLink: Define2icon,
  },
  {
    id: 2,
    title: "Ideation",
    text: "Chatbot-Konzept, Lösung für die Vektorisierungs-Pipeline, Werkstatt-Bedienkonzept",
    imgLink: Ideation2icon,
  },
  {
    id: 3,
    title: "Design",
    text: "Komponenten im bestehenden Allreco-Kachel- und Corporate-Design, gemeinsames Zugriffsportal",
    imgLink: Design2icon,
  },
  {
    id: 4,
    title: "Delivery",
    text: "Beta-Version im März 2025 an Kunden ausgeliefert",
    imgLink: Prototype2icon,
  },
]);
</script>

<style lang="scss" scoped>
.process-title {
  color: #5b4b8a !important;
  font-weight: 600;
  margin-top: 12px;
}
</style>
