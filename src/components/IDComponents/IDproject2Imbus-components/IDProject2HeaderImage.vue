<template>
  <!-- <div class="container-fluid section1-header-color h-background-avatar ">
    <div class="row justify-content-center"> -->
  <div class="col text-center">
    <img v-lazy="INBUSCover" class="img-fluid" />
  </div>
  <!-- </div>
  </div> -->
</template>

<script setup lang="ts">
import INBUSCover from "../../../assets/images/IDimages/Inbus/INBUSCover.png";
</script>

<style lang="scss" scoped>
@import "../../../scss/theme.scss";

.section1-header-color {
  //background-color: $project1-header-image-background-color !important;
  width: 100%;
  height: 450px;
}
.h-background-avatar {
  width: 100%;
  height: auto;
  background: $ID-Project1-background;
  //margin-top: 120px;
}
//div { border:dashed;}
</style>
