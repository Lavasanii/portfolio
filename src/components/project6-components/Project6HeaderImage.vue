<template>
  <div class="container-fluid section1-header-color">
    <div class="row justify-content-center">
      <div class="col text-center">
        <img
          v-lazy="DokumentenlisteHero"
          class="img-Proj6"
          style="max-height: 400px; border-radius: 8px; box-shadow: 0 12px 32px rgba(0,0,0,0.25)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DokumentenlisteHero from "../../assets/images/Project6/dokumentenliste.webp";
</script>

<style lang="scss" scoped>
.section1-header-color {
  background: linear-gradient(to bottom, #5b4b8a, #322a4d) !important;
  width: 100%;
  height: 450px;
  display: flex;
  align-items: center;
}
.img-Proj6 {
  margin-top: 0px;
}
</style>
