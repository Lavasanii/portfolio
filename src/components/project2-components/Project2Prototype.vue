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
            v-lazy="ul.imgSrc"
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
            v-lazy="ul.imgSrc"
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
    <div class="sections-title">Pick and Combine Ingredients</div>
    <div class="sections-texts">
      Users have the option of combining the ingredients themselves via the app
      and putting together the meal themselves from the start. They can then
      find out which restaurant is ready to prepare their individual order. In
      this case, only three main dishes are available for combination..
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center user-flow-image">
      <div class="row justify-content-center">
        <div
          class="col-4 text-center my-4"
          v-for="ul in GalaxyPlusItems3"
          :key="ul.id"
        >
          <img
            v-lazy="ul.imgSrc"
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
    <div class="sections-title">Select Restaurant and Navigate</div>
    <div class="sections-texts">
      After the compilation, the user can find out which restaurant is ready to
      prepare the food. The price and distance are displayed. Google Maps is
      used for navigation.
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center user-flow-image">
      <div class="row justify-content-center">
        <div
          class="col-4 text-center my-4"
          v-for="ul in GalaxyPlusItems4"
          :key="ul.id"
        >
          <img
            v-lazy="ul.imgSrc"
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
import GalaxyPlus1 from "../../assets/images/Project2/MockupExport/GalaxyPlus1.svg";
import GalaxyPlus2 from "../../assets/images/Project2/MockupExport/GalaxyPlus2.svg";
import GalaxyPlus3 from "../../assets/images/Project2/MockupExport/GalaxyPlus3.svg";
import GalaxyPlus4 from "../../assets/images/Project2/MockupExport/GalaxyPlus4.svg";
import GalaxyPlus5 from "../../assets/images/Project2/MockupExport/GalaxyPlus5.svg";
import GalaxyPlus6 from "../../assets/images/Project2/MockupExport/GalaxyPlus6.svg";
import GalaxyPlus7 from "../../assets/images/Project2/MockupExport/GalaxyPlus7.svg";
import GalaxyPlus8 from "../../assets/images/Project2/MockupExport/GalaxyPlus8.svg";
import GalaxyPlus9 from "../../assets/images/Project2/MockupExport/GalaxyPlus9.svg";
import GalaxyPlus10 from "../../assets/images/Project2/MockupExport/GalaxyPlus10.svg";
import GalaxyPlus11 from "../../assets/images/Project2/MockupExport/GalaxyPlus11.svg";
import GalaxyPlus12 from "../../assets/images/Project2/MockupExport/GalaxyPlus12.svg";
import GalaxyPlus13 from "../../assets/images/Project2/MockupExport/GalaxyPlus13.svg";
import GalaxyPlus14 from "../../assets/images/Project2/MockupExport/GalaxyPlus14.svg";
import Map0 from "../../assets/images/Project2/MockupExport/Map0.svg";
import Map1 from "../../assets/images/Project2/MockupExport/Map1.svg";
import RouteBrechnet from "../../assets/images/Project2/MockupExport/RouteBrechnet.svg";

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
    name: "GalaxyPlus1",
    imgSrc: GalaxyPlus1,
  },
  {
    id: 2,
    name: "GalaxyPlus2",
    imgSrc: GalaxyPlus2,
  },
  {
    id: 3,
    name: "GalaxyPlus3",
    imgSrc: GalaxyPlus3,
  },
  {
    id: 4,
    name: "GalaxyPlus4",
    imgSrc: GalaxyPlus4,
  },
  {
    id: 5,
    name: "GalaxyPlus5",
    imgSrc: GalaxyPlus5,
  },
]);

const GalaxyPlusItems2 = ref<imageItemsInterface[]>([
  {
    id: 6,
    name: "GalaxyPlus6",
    imgSrc: GalaxyPlus6,
  },
  {
    id: 7,
    name: "GalaxyPlus7",
    imgSrc: GalaxyPlus7,
  },
  {
    id: 8,
    name: "GalaxyPlus8",
    imgSrc: GalaxyPlus8,
  },
  {
    id: 9,
    name: "GalaxyPlus9",
    imgSrc: GalaxyPlus9,
  },
  {
    id: 10,
    name: "GalaxyPlus10",
    imgSrc: GalaxyPlus10,
  },
]);

const GalaxyPlusItems3 = ref<imageItemsInterface[]>([
  {
    id: 11,
    name: "GalaxyPlus11",
    imgSrc: GalaxyPlus11,
  },
  {
    id: 12,
    name: "GalaxyPlus12",
    imgSrc: GalaxyPlus12,
  },
  {
    id: 13,
    name: "GalaxyPlus13",
    imgSrc: GalaxyPlus13,
  },
  {
    id: 14,
    name: "GalaxyPlus14",
    imgSrc: GalaxyPlus14,
  },
]);

const GalaxyPlusItems4 = ref<imageItemsInterface[]>([
  {
    id: 15,
    name: "Map0",
    imgSrc: Map0,
  },
  {
    id: 16,
    name: "Map1",
    imgSrc: Map1,
  },
  {
    id: 17,
    name: "RouteBrechnet",
    imgSrc: RouteBrechnet,
  },
]);
</script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.prototype-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: #496b34bf !important;
  border-bottom: 3px solid #496b34bf !important;
}

.user-flow-image {
  padding-top: 78px;
  padding-bottom: 78px;
  margin-bottom: 92px;
  padding-left: 150px;
  padding-right: 150px;
  background-color: rgba(73, 107, 52, 0.35);
}

.sections-title {
  font-weight: 600;
  font-size: 22px;
  color: #000800cc !important;
}

.sections-texts {
  margin-top: 36px;
  font-size: 18px;
  font-weight: 400;
  color: #000800cc !important;
}
</style>
