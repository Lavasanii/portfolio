<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import NavBar from "../src/components/NavBar.vue";
import Footer from "../src/components/Footer.vue";
</script>

<style lang="scss">
body {
  padding-top: 50px;
}
* {
  font-family: "Poppins", sans-serif !important;
}
</style>
