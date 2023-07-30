<template>
  <div style="width: 600px; background-color: red; position: relative">
    <div class="d-flex justify-content-end" style="position: relative">
      <img
        :src="saeidImageAboutme"
        :alt="saeidImageAboutme"
        class="rounded float-left"
        style="max-width: 100%; height: auto"
      />
      <div
        style="
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        "
      >
        <p style="background-color: white; padding: 10px">Hiii</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import saeidImageAboutme from "../../src/assets/images/saeidImageAboutme.svg";
</script>

<style lang="scss" scoped>
/* Hier können Sie das Styling des Texts anpassen */
p {
  font-size: 24px;
  font-weight: bold;
}
</style>
