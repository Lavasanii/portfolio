<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-sm-12 col-md-6" v-for="p in projectItems">
        <router-link :to="p.link">
          <div class="hover-effect">
            <img v-lazy="p.imgSrc" alt="Bild" class="img-fluid" />
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
import project1Image from "../../assets/images/IDimages/Bodum/BodumHA.svg";
import project2Image from "../../assets/images/IDimages/Inbus/ImbusHA.svg";

interface projectItemsInterface {
  id: number;
  textinImg: string;
  imgSrc: string;
  link: string;
}

const projectItems = ref<projectItemsInterface[]>([
  {
    id: 0,
    textinImg: "BODUM LIBRA Personal scale",
    imgSrc: project1Image,
    link: "/IDProject1Bodum",
  },
  {
    id: 1,
    textinImg: "INBUS Hex key",
    imgSrc: project2Image,
    link: "/IDProject2Imbus",
  },
]);
</script>
<style lang="scss" scoped>
@import "../../scss/theme.scss";

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
  color: $home-text-inside-image-color;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.hover-effect:hover .hover-text {
  opacity: 1;
}
</style>
