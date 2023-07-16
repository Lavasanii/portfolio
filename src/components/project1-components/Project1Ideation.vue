<template>
  <div class="container" style="max-width: 972px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 ideation-text">Ideation</div>
      </div>
    </div>
    <div class="h4 sections-title">Gathering Ideas</div>
    <div class="h5 sections-texts">
      As a UX designer for this e-learning platform, I recognize the importance
      of the landing page as the user's first point of interaction. Therefore, I
      began the design process with a strong focus on the landing page. My goal
      was to grab the user's attention and foster enthusiasm, achieved through
      the use of a full-screen animation. The animation was carefully crafted to
      resemble the points and connected lines of a neural network, which is at
      the core of machine learning. Additionally, I utilized a split screen
      layout to prominently display the two specific course offerings that users
      are most interested in.
    </div>
    <div class="h4 Layout-header text-uppercase">screen verteilungs</div>
    <div class="row justify-content-center">
      <div class="col-4 text-center my-4" v-for="i in screenDisImageItems">
        <img :src="i.imgSrc" alt="Bild" class="img-fluid" />
      </div>
    </div>
    <div class="h4 Layout-header text-uppercase">layout test</div>
    <div class="row justify-content-center">
      <div class="col-4 text-center my-4" v-for="i in layoutTestItems">
        <img :src="i.imgSrc" alt="Bild" class="img-fluid" />
      </div>
    </div>
    <div class="h4 Layout-header text-uppercase">color test</div>
    <div class="row justify-content-center">
      <div class="col-4 text-center my-4" v-for="i in colorTestItems">
        <img :src="i.imgSrc" alt="Bild" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface imageItemsInterface {
  id: number;
  imgSrc: string;
}

const screenDisImageItems = ref<imageItemsInterface[]>([
  {
    id: 0,
    imgSrc: "../../../public/images/Project1ideationscreenVerteilungs1.png",
  },
  {
    id: 1,
    imgSrc: "../../../public/images/Project1ideationscreenVerteilungs2.png",
  },
  {
    id: 2,
    imgSrc: "../../../public/images/Project1ideationscreenVerteilungs3.png",
  },
  {
    id: 3,
    imgSrc: "../../../public/images/Project1ideationscreenVerteilungs4.png",
  },
  {
    id: 4,
    imgSrc: "../../../public/images/Project1ideationscreenVerteilungs5.png",
  },
  {
    id: 5,
    imgSrc: "../../../public/images/Project1ideationscreenVerteilungs6.png",
  },
]);

const layoutTestItems = ref<imageItemsInterface[]>([
  {
    id: 0,
    imgSrc: "../../../public/images/Project1ideationlyout1.png",
  },
  {
    id: 1,
    imgSrc: "../../../public/images/Project1ideationlyout2.png",
  },
  {
    id: 2,
    imgSrc: "../../../public/images/Project1ideationlyout3.png",
  },
]);

const colorTestItems = ref<imageItemsInterface[]>([
  {
    id: 0,
    imgSrc: "../../../public/images/Project1ideationcolortest1.png",
  },
  {
    id: 1,
    imgSrc: "../../../public/images/Project1ideationcolortest2.png",
  },
  {
    id: 2,
    imgSrc: "../../../public/images/Project1ideationcolortest3.png",
  },
  {
    id: 3,
    imgSrc: "../../../public/images/Project1ideationcolortest4.png",
  },
  {
    id: 4,
    imgSrc: "../../../public/images/Project1ideationcolortest5.png",
  },
  {
    id: 5,
    imgSrc: "../../../public/images/Project1ideationcolortest6.png",
  },
]);
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

.ideation-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: $project1-ideation-text-color;
  border-bottom: 3px solid $project1-ideation-text-color;
}

.sections-title {
  font-weight: 700;
}

.sections-texts {
  margin-top: 36px;
}

.Layout-header {
  margin-top: 70px;
  padding-bottom: 6px;
  color: $project1-ideation-Layout-header;
  border-bottom: 1px solid $project1-ideation-Layout-header;
}
</style>
