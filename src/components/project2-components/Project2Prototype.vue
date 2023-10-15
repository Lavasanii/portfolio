<template>
  <div class="container mb-5" style="max-width: 800px; margin-bottom: 170px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 prototype-text">Prototype</div>
      </div>
    </div>
    <div class="sections-title">Splash and Onboarding</div>
    <div class="sections-texts">
      When users start the app, they will be guided through a sign-in or sign-up
      and onboarding process before proceeding to their default screen, the
      profile screen, which allows users to choose their preferred food filters.
      They also have the option to combine ingredients and find the best prices
      for their food. They can then arrange to pick up the food.
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center user-flow-image">
      <div class="row justify-content-center">
        <div
          class="col-4 text-center my-4"
          v-for="ul in GalaxyPlusItems1"
          :key="ul.id"
        >
          <img
            :src="ul.imgSrc"
            :alt="ul.name"
            style="width: 332px; height: 718.3px"
          />
        </div>
      </div>
    </div>
  </div>
  <div
    class="container"
    style="max-width: 800px; margin-bottom: 170px; margin-top: 220px"
  >
    <div class="sections-title">Profile and Filter Options</div>
    <div class="sections-texts">
      Here, the user lands in the profile. The person can change and save the
      filters according to their needs, and find which food suits them better,
      as well as which restaurants offer which food considering their filters.
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center user-flow-image">
      <div class="row justify-content-center">
        <div
          class="col-4 text-center my-4"
          v-for="ul in GalaxyPlusItems2"
          :key="ul.id"
        >
          <img
            :src="ul.imgSrc"
            :alt="ul.name"
            style="width: 332px; height: 718.3px"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GalaxyPlus0 from "../../assets/images/Project2/MockupExport/GalaxyPlus0.svg";
import GalaxyPlus01 from "../../assets/images/Project2/MockupExport/GalaxyPlus01.svg";
import GalaxyPlus02 from "../../assets/images/Project2/MockupExport/GalaxyPlus02.svg";
import GalaxyPlus03 from "../../assets/images/Project2/MockupExport/GalaxyPlus03.svg";
import GalaxyPlus04 from "../../assets/images/Project2/MockupExport/GalaxyPlus04.svg";
import GalaxyPlus05 from "../../assets/images/Project2/MockupExport/GalaxyPlus05.svg";
import GalaxyPlus07 from "../../assets/images/Project2/MockupExport/GalaxyPlus07.svg";
import GalaxyPlus08 from "../../assets/images/Project2/MockupExport/GalaxyPlus08.svg";
import GalaxyPlus09 from "../../assets/images/Project2/MockupExport/GalaxyPlus09.svg";
import GalaxyPlus10 from "../../assets/images/Project2/MockupExport/GalaxyPlus10.svg";
import GalaxyPlus11 from "../../assets/images/Project2/MockupExport/GalaxyPlus11.svg";

interface imageItemsInterface {
  id: number;
  name: string;
  imgSrc: string;
}

const GalaxyPlusItems1 = ref<imageItemsInterface[]>([
  {
    id: 0,
    name: "GalaxyPlus0",
    imgSrc: GalaxyPlus0,
  },
  {
    id: 1,
    name: "GalaxyPlus01",
    imgSrc: GalaxyPlus01,
  },
  {
    id: 2,
    name: "GalaxyPlus02",
    imgSrc: GalaxyPlus02,
  },
  {
    id: 3,
    name: "GalaxyPlus03",
    imgSrc: GalaxyPlus03,
  },
  {
    id: 4,
    name: "GalaxyPlus09",
    imgSrc: GalaxyPlus09,
  },
  {
    id: 5,
    name: "GalaxyPlus10",
    imgSrc: GalaxyPlus10,
  },
]);

const GalaxyPlusItems2 = ref<imageItemsInterface[]>([
  {
    id: 0,
    name: "GalaxyPlus07",
    imgSrc: GalaxyPlus07,
  },
  {
    id: 1,
    name: "GalaxyPlus08",
    imgSrc: GalaxyPlus08,
  },
  {
    id: 4,
    name: "GalaxyPlus04",
    imgSrc: GalaxyPlus04,
  },
  {
    id: 5,
    name: "GalaxyPlus05",
    imgSrc: GalaxyPlus05,
  },
  {
    id: 6,
    name: "GalaxyPlus11",
    imgSrc: GalaxyPlus11,
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
