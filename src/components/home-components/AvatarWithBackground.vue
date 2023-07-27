<template>
  <div class="h-background-avatar">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="text-container mt-5">
            <div class="display-4 section1-text-title-color">Who am i ?</div>
            <p class="lead h-text-color mt-5">
              Passionierter UX/UI-Designer mit einem Hintergrund in
              Industriedesign. Mit besonderem Interesse an IoT-Produkten.
            </p>
          </div>
        </div>
        <!-- 
              It will not display the image if display is smaller than 750 pixel.
              avatar will be very small at this size
              see  https://getbootstrap.com/docs/4.0/utilities/display/#hiding-elements -->
        <div class="col-md-4 d-none d-md-block">
          <img src="../../assets/images/avatar.png" class="img-fluid" alt="Profile" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

.h-background-avatar {
  width: 100%;
  height: auto;
  background: $home-avatar-background;
}

.h-text-title-color {
  color: $home-text-title-color;
}

.h-text-color {
  color: $home-text-color;
}
</style>
