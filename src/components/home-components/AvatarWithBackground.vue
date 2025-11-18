<template>
  <div class="h-background-avatar">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="text-container mt-5">
            <div class="h1 section1-text-title-color">Who am i ?</div>
            <p class="h-text-color mt-5" style="font-size: 18px !important">
              UX/UI designer with a strong background in industrial design and an eye for functional aesthetics.
              Experience in designing digital interfaces, prototyping, and front-end implementation with Figma and Vue.js. Analytical thinker,
              team player, and passionate about combining design and technology.
            </p>
          </div>
        </div>
        <!-- 
              It will not display the image if display is smaller than 750 pixel.
              avatar will be very small at this size
              see  https://getbootstrap.com/docs/4.0/utilities/display/#hiding-elements -->
        <div class="col-md-4 d-none d-md-block">
          <img v-lazy="avatar" class="img-fluid" alt="Profile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import avatar from "../../assets//images/Avatar1.png";
</script>

<style lang="scss" scoped>

.h-background-avatar {
  width: 100%;
  height: auto;
  background: linear-gradient(
    158deg,
    rgb(252, 252, 252) 0%,
    rgba(46, 85, 82, 0.24) 48%,
    rgba(226, 174, 93, 1) 100%
  );
}

.h-text-title-color {
  color: #296879;
}

.h-text-color {
  color: #000000;
}
</style>
