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

.section1-header-color {
  //background-color: #DBDADB !important;
  width: 100%;
  height: 450px;
}
.h-background-avatar {
  width: 100%;
  height: auto;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(175,175,175,1) 100%);
  //margin-top: 120px;
}
//div { border:dashed;}
</style>
