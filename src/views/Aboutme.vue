<template>
  <div class="container">
    <div class="row justify-content-start" style="margin-top: 40px">
      <div class="col-6 d-flex align-items-center">
        <p class="mt-6">
          Growing up in an art-loving family, I developed a passion for art and
          design. My father introduced me to the world of design, sparking my
          enthusiasm. That's why I decided to pursue Industrial Design. While
          interning in Berlin, I became involved in UX/UI design and realized
          its importance. I am excited by complex topics and enjoy finding the
          optimal solution for customers. As an Industrial Designer specializing
          in UX/UI design, my goal is to develop innovative, aesthetically
          pleasing products that meet the users' needs.
        </p>
      </div>
      <div class="col-6">
        <img
          :src="saeidImageAboutme"
          :alt="saeidImageAboutme"
          class="rounded mx-auto d-block"
          width="500"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import saeidImageAboutme from "../../src/assets/images/saeidImageAboutme.svg";
</script>

<style lang="scss" scoped></style>
