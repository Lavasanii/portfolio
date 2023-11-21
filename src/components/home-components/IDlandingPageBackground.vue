<template>
  <div class="IDHomeP-background">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="text-container mt-5">
            <div class="display-2 h-text-title-color ">Industrial design
              Portfolio </div>
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
@import "../../scss/theme.scss";

.IDHomeP-background {
  width: 100%;
  height: auto;
  background: $home-avatar-background;
}

.h-text-title-color {
  color: $home-text-title-color;
  margin-bottom: 100px;
  
}


.h-text-color {
  color: $home-text-color;
}


</style>
