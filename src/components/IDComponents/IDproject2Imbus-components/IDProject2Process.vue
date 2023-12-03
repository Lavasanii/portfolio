<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div
        v-for="p in IDprocessItems"
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
import AnalyseID from "../../../assets/icons/IDProjects_Icons/AnalyseID.png";
import KonzeptID from "../../../assets/icons/IDProjects_Icons/KonzeptID.png";
import DesignID from "../../../assets/icons/IDProjects_Icons/DesignID.png";
import DesignOP from "../../../assets/icons/IDProjects_Icons/DesignOP.png";
import DetailOP from "../../../assets/icons/IDProjects_Icons/DetailOP.png";

interface IDprocessItemsInterface {
  id: number;
  title: string;
  text: string;
  imgLink: string;
}

const IDprocessItems = ref<IDprocessItemsInterface[]>([
  {
    id: 0,
    title: "RESEARCH & ANALYSE",
    text: "Research, Identifying potential, Defining tasks",
    imgLink: AnalyseID,
  },
  {
    id: 1,
    title: "CONCEPT",
    text: "Principle definition, Global concepts, Concept selection",
    imgLink: KonzeptID,
  },
  {
    id: 2,
    title: "DESIGN",
    text: "Design specification, CAD",
    imgLink: DesignID,
  },
  {
    id: 3,
    title: "DESIGN OPTIMIZATION",
    text: "Manufacturing specifications",
    imgLink: DesignOP,
  },
  {
    id: 4,
    title: "DETAIL OPTIEMIERUNG & Result",
    text: "Series production, Pilot series, Presentation",
    imgLink: DetailOP,
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
