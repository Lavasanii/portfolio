<template>
  <S1avatarWithBackground></S1avatarWithBackground>
  <img :src="mouseIcon" class="rounded mx-auto d-block my-4" alt="mouse-icon" />
</template>

<script setup lang="ts">
import S1avatarWithBackground from "../components/home-components/S1avatarWithBackground.vue";
import mouseIcon from "../../public/icons/mouse-icon.svg";
</script>

<style lang="scss" scoped></style>
