<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div
        v-for="p in IDprocessItems"
        :key="p.id"
        class="col-6 col-sm-4 col-md-2 text-center"
      >
        <img
          :src="p.imgLink"
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
import MaterialEinsparen from"../../../assets/icons/IDProjects_Icons/IDProject2-Icon-Inbus/MaterialEinsparen.png"
import Sicher from"../../../assets/icons/IDProjects_Icons/IDProject2-Icon-Inbus/Sicher.png"
import Function from "../../../assets/icons/IDProjects_Icons/IDProject2-Icon-Inbus/Funktion.png"
import SchmalesDesign from "../../../assets/icons/IDProjects_Icons/IDProject2-Icon-Inbus/SchmalesDesign.png"


interface IDprocessItemsInterface {
  id: number;
  title: string;
  text: string;
  imgLink: string;
}

const IDprocessItems = ref<IDprocessItemsInterface[]>([
  {
    id: 0,
    title: "SAVE MATERIAL",
    text: "Use as few materials as possible",
    imgLink:MaterialEinsparen,
    
   },
  {
    id: 1,
    title: "SAFE",
    text: "The INBUS keys should not be lost or stolen",
    imgLink: Sicher,
  },
  {
    id: 2,
    title: "FUNCTION",
    text: "Simple and very quick function",
    imgLink: Function,
  },
  {
    id: 3,
    title: "SLIM DESIGN",
    text: "The end product should be as concise as possible.",
    imgLink: SchmalesDesign,
  },
  
]);
</script>

<style lang="scss" scoped>
@import "../../../scss/theme.scss";

* {
  color: $project1-text-color !important;
}

.process-title {
  margin-top: 36px;
  margin-bottom: 21px;
  font-weight: 700;
}

</style>
