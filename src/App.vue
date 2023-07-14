<template>
  <v-app>
    <NavBar></NavBar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import NavBar from "../src/components/NavBar.vue";
</script>

<style lang="scss">
* {
  font-family: "Poppins", sans-serif;
}
</style>
