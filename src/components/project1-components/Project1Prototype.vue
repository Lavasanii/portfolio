<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 prototype-text">Prototype</div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center user-flow-image">
      <div class="row justify-content-center">
        <div
          class="col-4 text-center my-4"
          v-for="ul in userflowItemsLight"
          :key="ul.id"
        >
          <img v-lazy="ul.imgSrc" :alt="ul.name" class="img-fluid" />
        </div>
        <div
          class="col-4 text-center my-4"
          v-for="ud in userflowItemsDark"
          :key="ud.id"
        >
          <img v-lazy="ud.imgSrc" :alt="ud.name" class="img-fluid" />
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
* {
  color: #000800cc !important;
}

.prototype-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: #528CA2 !important;
  border-bottom: 3px solid #528CA2 !important;
}

.user-flow-image {
  padding-top: 78px;
  padding-bottom: 78px;
  margin-bottom: 92px;
  background-color: #528ca278;
}
</style>
