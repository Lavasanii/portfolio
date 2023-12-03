<template>
  <div class="IDHomeP-background">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="text-container mt-5">
            <div class="display-2 h-text-title-color">
              Industrial design Portfolio
            </div>
          </div>
        </div>
        <!-- 
              It will not display the image if display is smaller than 750 pixel.
              avatar will be very small at this size
              see  https://getbootstrap.com/docs/4.0/utilities/display/#hiding-elements -->
        <!-- <div class="col-md-4 d-none d-md-block">
          <img src="../../assets/images/avatar.png" class="img-fluid" alt="Profile" />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.IDHomeP-background {
  width: 100%;
  height: auto;
  background: linear-gradient(
    158deg,
    rgba(252, 252, 252, 1) 0%,
    rgba(46, 85, 82, 0.24) 48%,
    rgba(226, 174, 93, 1) 100%
  );
}

.h-text-title-color {
  color: #296879;
  margin-bottom: 100px;
}

.h-text-color {
  color: #000000;
}
</style>
