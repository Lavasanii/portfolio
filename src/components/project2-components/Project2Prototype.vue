<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 prototype-text">Prototype</div>
      </div>
    </div>
    <div class="sections-title">Splash and Onboarding</div>
    <div class="sections-texts">
      When users start the app, they will be guided through a sign-in or sign-up and onboarding
      process before proceeding to their default screen, the profile screen, which allows users 
      to choose their preferred food filters. They also have the option to combine ingredients and find the best prices for their food. They can then arrange to pick up the food.
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center user-flow-image">
      <div class="row justify-content-center">
        <div class="col-4 text-center my-4" v-for="ul in userflowItemsLight" :key="ul.id">
          <img :src="ul.imgSrc" :alt="ul.name" style="width: 332px; height: 718.3px;" />
        </div>
        <div class="col-4 text-center my-4" v-for="ud in userflowItemsDark" :key="ud.id">
          <img :src="ud.imgSrc" :alt="ud.name" style="width: 332px; height: 718.3px;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Project1designUserFlowLight1 from "../../assets/images/Project1designUserFlowLight1.svg";
import Project1designUserFlowLight2 from "../../assets/images/Project1designUserFlowLight2.svg";
import Project1designUserFlowLight3 from "../../assets/images/Project1designUserFlowLight3.svg";
import Project1designUserFlowDark1 from "../../assets/images/Project1designUserFlowDark1.svg";
import Project1designUserFlowDark2 from "../../assets/images/Project1designUserFlowDark2.svg";
import Project1designUserFlowDark3 from "../../assets/images/Project1designUserFlowDark3.svg";
import GalaxyPlus0 from "../../assets/images/Project2/MockupExport/GalaxyPlus0.svg";

interface imageItemsInterface {
  id: number;
  name: string;
  imgSrc: string;
}

const userflowItemsLight = ref<imageItemsInterface[]>([
  {
    id: 0,
    name: "Project1designUserFlowLight1",
    imgSrc: Project1designUserFlowLight1,
  },
  {
    id: 1,
    name: "Project1designUserFlowLight2",
    imgSrc: Project1designUserFlowLight2,
  },
  {
    id: 2,
    name: "Project1designUserFlowLight3",
    imgSrc: Project1designUserFlowLight3,
  },
  {
    id: 3,
   name: "GalaxyPlus0",
   imgSrc: GalaxyPlus0,

  },

]);

const userflowItemsDark = ref<imageItemsInterface[]>([
  {
    id: 0,
    name: "Project1designUserFlowDark1",
    imgSrc: Project1designUserFlowDark1,
  },
  {
    id: 1,
    name: "Project1designUserFlowDark2",
    imgSrc: Project1designUserFlowDark2,
  },
  {
    id: 2,
    name: "Project1designUserFlowDark3",
    imgSrc: Project1designUserFlowDark3,
  },
]);
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

* {
  color: $project1-text-color !important;
}

.prototype-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: $project2-discover-text-color !important;
  border-bottom: 3px solid $project2-discover-text-color !important;
}

.user-flow-image {
  padding-top: 78px;
  padding-bottom: 78px;
  margin-bottom: 92px;
  padding-left: 150px;
  padding-right: 150px;
  background-color: $project1-design-user-flow-background-color;
}

.sections-title {
  font-weight: 600;
  font-size: 22px;
  color: $project1-text-color !important;
}

.sections-texts {
  margin-top: 36px;
  font-size: 18px;
  font-weight: 400;
  color: $project1-text-color !important;
}

</style>
