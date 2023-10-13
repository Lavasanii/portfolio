<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 ideation-text">Ideation</div>
      </div>
    </div>
    <div class="sections-title">Gathering Ideas</div>
    <div class="sections-texts">
      The inception of ideation involves sketching and wireframing,
      so I created numerous variations of sketches.
      Each sketch represented a different angle or perspective,
      allowing for a comprehensive exploration of potential ideas.
      This process not only sparked creativity but also provided a
      tangible foundation for the subsequent stages of development.
    </div>
    <div class="sections-subtitle text-uppercase">LOW FI</div>
    <div class="row justify-content-center">
      
      <div class="col LowFi">
        <img :src="LowFi" class="img-fluid" />
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Project1ideationscreenVerteilungs1 from "../../assets/images/Project1ideationscreenVerteilungs1.png"
import Project1ideationscreenVerteilungs2 from "../../assets/images/Project1ideationscreenVerteilungs2.png"
import Project1ideationscreenVerteilungs3 from "../../assets/images/Project1ideationscreenVerteilungs3.png"
import Project1ideationscreenVerteilungs4 from "../../assets/images/Project1ideationscreenVerteilungs4.png"
import Project1ideationscreenVerteilungs5 from "../../assets/images/Project1ideationscreenVerteilungs5.png"
import Project1ideationscreenVerteilungs6 from "../../assets/images/Project1ideationscreenVerteilungs6.png"
import Project1ideationlyout1 from "../../assets/images/Project1ideationlyout1.png"
import Project1ideationlyout2 from "../../assets/images/Project1ideationlyout2.png"
import Project1ideationlyout3 from "../../assets/images/Project1ideationlyout3.png"
import Project1ideationcolortest1 from "../../assets/images/Project1ideationcolortest1.png"
import Project1ideationcolortest2 from "../../assets/images/Project1ideationcolortest2.png"
import Project1ideationcolortest3 from "../../assets/images/Project1ideationcolortest3.png"
import Project1ideationcolortest4 from "../../assets/images/Project1ideationcolortest4.png"
import Project1ideationcolortest5 from "../../assets/images/Project1ideationcolortest5.png"
import Project1ideationcolortest6 from "../../assets/images/Project1ideationcolortest6.png"
import LowFi from "../../assets/images/Project2/LowFi.svg"

interface imageItemsInterface {
  id: number;
  imgSrc: string;
}

const screenDisImageItems = ref<imageItemsInterface[]>([
  {
    id: 0,
    imgSrc: Project1ideationscreenVerteilungs1,
  },
  {
    id: 1,
    imgSrc: Project1ideationscreenVerteilungs2,
  },
  {
    id: 2,
    imgSrc: Project1ideationscreenVerteilungs3,
  },
  {
    id: 3,
    imgSrc: Project1ideationscreenVerteilungs4,
  },
  {
    id: 4,
    imgSrc: Project1ideationscreenVerteilungs5,
  },
  {
    id: 5,
    imgSrc: Project1ideationscreenVerteilungs6,
  },
]);

const layoutTestItems = ref<imageItemsInterface[]>([
  {
    id: 0,
    imgSrc: Project1ideationlyout1,
  },
  {
    id: 1,
    imgSrc: Project1ideationlyout2,
  },
  {
    id: 2,
    imgSrc: Project1ideationlyout3,
  },
]);

const colorTestItems = ref<imageItemsInterface[]>([
  {
    id: 0,
    imgSrc: Project1ideationcolortest1,
  },
  {
    id: 1,
    imgSrc: Project1ideationcolortest2,
  },
  {
    id: 2,
    imgSrc: Project1ideationcolortest3,
  },
  {
    id: 3,
    imgSrc: Project1ideationcolortest4,
  },
  {
    id: 4,
    imgSrc: Project1ideationcolortest5,
  },
  {
    id: 5,
    imgSrc: Project1ideationcolortest6,
  },
]);
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

* {
  color: $project1-text-color !important;
}

.ideation-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: $project2-ideation-text-color !important;
  border-bottom: 3px solid $project2-ideation-text-color !important;
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

.sections-subtitle {
  font-size: 16px;
  font-weight: 600 !important;
  margin-top: 70px;
  padding-bottom: 6px;
  color: $project1-ideation-Layout-header;
  border-bottom: 1px solid $project1-ideation-Layout-header;
}

.LowFi {
  margin-top: 50px;
  
}

</style>
