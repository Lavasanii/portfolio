<template>
  <div class="h-background-avatar">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-8">
          <div class="text-container mt-5">
            <div class="h1 h-text-title-color">
              UX/UI Designer who also ships the frontend
            </div>
            <p class="h-text-color mt-5" style="font-size: 18px !important">
              I design digital interfaces and build them myself — with Figma,
              Vue.js and TypeScript. My background in industrial design taught
              me to start every project by understanding the people who use the
              thing, then prototype until it works. Most recently at Allreco
              GmbH, where I designed a searchable maintenance-documentation
              platform, an IoT dashboard and the company's landing page.
            </p>
          </div>
        </div>
        <!--
              It will not display the image if display is smaller than 750 pixel.
              avatar will be very small at this size
              see  https://getbootstrap.com/docs/4.0/utilities/display/#hiding-elements -->
        <div class="col-md-4 d-none d-md-block">
          <img
            v-lazy="avatar"
            class="img-fluid"
            alt="Saeid Farajollahlavasani, UX/UI Designer"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import avatar from "../../assets/images/avatar-saeid.webp";
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
