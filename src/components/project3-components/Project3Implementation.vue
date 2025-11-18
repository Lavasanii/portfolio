<template>
  <div class="container mb-5" style="max-width: 800px; margin-bottom: 170px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 prototype-text">Implementation & Delivery</div>
      </div>
    </div>
    <div class="sections-title">Final Implementation & Delivery</div>
    <div class="sections-texts">
     The voting platform was fully implemented using Vue.js and JavaScript and then integrated into the Allreco website via an iFrame.
     To ensure fair voting, I developed backend logic using Supabase, where each vote is linked to a hashed IP address stored in a dedicated table. 
     Because most users have dynamic IPs that refresh every 12–24 hours, the system naturally allows one vote per user per day.
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center user-flow-image">
      <div class="row justify-content-center">
        <div class="col-12 text-center my-4">
          <img
            v-lazy="supabaseP3"
            alt="Supabase Implementation"
            style="max-width: 100%; height: auto"
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
import supabaseP3 from "../../assets/images/Project3/supabaseP3.png";
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
