<template>
  <div class="container-fluid section1-header-color">
    <div class="row justify-content-center">
      <div class="col text-center">
        <img
          v-lazy="CatchEatMockUpS22"
          class="img-Proj2"
          style="max-height: 350px"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CatchEatMockUpS22 from "../../assets/images/Project2/CatchEatMockUpS22.svg";
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

.section1-header-color {
  background-color: #496b34bf !important;
  width: 100%;
  height: 450px;
}
.img-Proj2 {
  margin-top: 51px;
}
</style>
