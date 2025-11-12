<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-6 py-3 px-3" v-for="p in projectItems">
        <router-link :to="p.link">
          <div class="hover-effect">
            <img v-lazy="p.imgSrc" lazy="loaded" alt="Bild" class="img-fluid" />
            <div class="h2 hover-text">
              {{ p.textinImg }}
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import project1Image from "../../assets/images/project1.png";
import project2Image from "../../assets/images/Project2/Project2MockUp.png";

interface projectItemsInterface {
  id: number;
  textinImg: string;
  imgSrc: string;
  link: string;
}

const projectItems = ref<projectItemsInterface[]>([
  {
    id: 0,
    textinImg: "A code - learning platform - Rubrik's Code",
    imgSrc: project1Image,
    link: "/rubrik-project",
  },
  {
    id: 1,
    textinImg: "An app for healthier breaks and nourishing meals - CatchEat",
    imgSrc: project2Image,
    link: "/catcheat-project",
  },
  {
    id: 2,
    textinImg: "A code - learning platform - Rubrik's Code",
    imgSrc: project1Image,
    link: "/rubrik-project",
  },
  {
    id: 3,
    textinImg: "An app for healthier breaks and nourishing meals - CatchEat",
    imgSrc: project2Image,
    link: "/catcheat-project",
  },
]);
</script>
<style lang="scss" scoped>
.hover-effect {
  position: relative;
}

.hover-effect img {
  transition: opacity 0.3s ease;
}

.hover-effect:hover img {
  opacity: 0.2;
}

.hover-effect .hover-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000000;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hover-effect:hover .hover-text {
  opacity: 1;
}
</style>
