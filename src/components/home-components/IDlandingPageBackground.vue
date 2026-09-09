<template>
  <div class="IDHomeP-background">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="text-container mt-5">
            <div class="display-2 h-text-title-color">
              Industrial Design
            </div>
            <p class="h-text-color id-intro">
              Before I designed interfaces, I designed physical products. These
              two projects are where my method comes from: understand the
              people who use the thing, take it apart, build it, test it in the
              hand — CAD, CNC milling, 3D printing, rendering. It's also why
              I'm comfortable designing for machines, workshops and technical
              users today.
            </p>
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
  padding-top: 40px;
}

.h-text-color {
  color: #000000;
}

.id-intro {
  font-size: 18px;
  max-width: 620px;
  margin-top: 32px;
  margin-bottom: 100px;
}
</style>
