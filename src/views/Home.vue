<template>
  <S1avatarWithBackground></S1avatarWithBackground>
  <img :src="mouseIcon" class="rounded mx-auto d-block my-5" alt="mouse-icon" />
  <div class="container mb-5">
    <p class="h3">Projekte</p>
  </div>
  <S2Projects></S2Projects>
</template>

<script setup lang="ts">
import S1avatarWithBackground from "../components/home-components/S1avatarWithBackground.vue";
import S2Projects from "../components/home-components/S2Projects.vue";
import mouseIcon from "../../public/icons/mouse-icon.svg";
</script>

<style lang="scss" scoped></style>
