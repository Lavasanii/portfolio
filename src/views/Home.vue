<template>
  <AvatarWithBackground></AvatarWithBackground>
  <img :src="mouseIcon" class="rounded mx-auto d-block my-5" alt="mouse-icon" />
  <div class="container mb-5">
    <p class="h3">Projekte</p>
  </div>
  <Projects></Projects>
</template>

<script setup lang="ts">
import AvatarWithBackground from "../components/home-components/AvatarWithBackground.vue";
import Projects from "../components/home-components/Projects.vue";
import mouseIcon from "../../public/icons/mouse-icon.svg";
</script>

<style lang="scss" scoped></style>
