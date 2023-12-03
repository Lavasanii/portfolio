<template>
  <div class="h-background-avatar">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="text-container mt-5">
            <div class="h1 section1-text-title-color">Who am i ?</div>
            <p class="h-text-color mt-5" style="font-size: 18px !important">
              Passionate UX/UI designer with a background in industrial design
              and a special interest in IoT products.
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
import avatar from "../../assets//images/avatar.png";
</script>

<style lang="scss" scoped>

.h-background-avatar {
  width: 100%;
  height: auto;
  background: linear-gradient(
    158deg,
    rgb(130, 110, 110) 0%,
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
