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
import HiddenDisplay from"../../../assets/icons/IDProjects_Icons/DeIdentityBo/HiddenDisplay.png"
import TempurGlass from"../../../assets/icons/IDProjects_Icons/DeIdentityBo/TempurGlass.png"
import Smart from "../../../assets/icons/IDProjects_Icons/DeIdentityBo/Smart.png"
import CorporateIdentity from "../../../assets/icons/IDProjects_Icons/DeIdentityBo/CorporateIdentity.png"


interface IDprocessItemsInterface {
  id: number;
  title: string;
  text: string;
  imgLink: string;
}

const IDprocessItems = ref<IDprocessItemsInterface[]>([
  {
    id: 0,
    title: "HIDDEN DISPLAY",
    text: "Use of hidden display technology",
    imgLink:HiddenDisplay,
    
   },
  {
    id: 1,
    title: "TEMPUR GLASS",
    text: "The glass is very robust and safe",
    imgLink: TempurGlass,
  },
  {
    id: 2,
    title: "SMART",
    text: "Easy connection with the smartphone",
    imgLink: Smart,
  },
  {
    id: 3,
    title: "CORPORATE IDENTITY",
    text: "Design language and product strategy from Bodum",
    imgLink: CorporateIdentity,
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
