<template>
  <AvatarWithBackground></AvatarWithBackground>
  <div class="mousey mx-auto d-block my-5">
    <div class="scroller"></div>
  </div>
  <div class="container mb-5">
    <p class="h3">Projekts</p>
  </div>
  <Projects></Projects>
</template>

<script setup lang="ts">
import AvatarWithBackground from "../components/home-components/AvatarWithBackground.vue";
import Projects from "../components/home-components/Projects.vue";
</script>

<style lang="scss" scoped>
.scroll-downs {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  width: 57px;
  height: 55px;
}

.mousey {
  width: 2px;
  padding: 10px 15px;
  height: 32px;
  border: 2px solid #9D9D9D;
  border-radius: 25px;
  opacity: 0.75;
  box-sizing: content-box;
}

.scroller {
  width: 2.5px;
  height: 10px;
  border-radius: 25%;
  background-color: #5f5e5ecd;
  animation-name: scroll;
  animation-duration: 2.2s;
  animation-timing-function: cubic-bezier(.15, .41, .69, .94);
  animation-iteration-count: infinite;
}

@keyframes scroll {
  0% {
    opacity: 0;
  }

  10% {
    transform: translateY(0);
    opacity: 1;
  }

  100% {
    transform: translateY(15px);
    opacity: 0;
  }
}
</style>
