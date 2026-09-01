<template>
  <div class="container-fluid section1-header-color">
    <div class="row justify-content-center">
      <div class="col text-center">
        <img
          v-lazy="IoTBackground"
          class="img-Proj5"
          style="max-height: 450px"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IoTBackground from "../../assets/images/Project5/P5iotbreeze.webp";
</script>

<style lang="scss" scoped>
.section1-header-color {
  background: linear-gradient(to bottom, #2C6E75, #2C6E75) !important;
  width: 100%;
  height: 450px;
}
.img-Proj5 {
  margin-top: 0px;
}
</style>
