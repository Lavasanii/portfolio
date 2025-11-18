<template>
  <div class="container-fluid section1-header-color">
    <div class="row justify-content-center">
      <div class="col text-center">
        <img
          v-lazy="VotingBackground"
          class="img-Proj2"
          style="max-height: 350px"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VotingBackground from "../../assets/images/Project3/P3wettbewerbBackground.png";
</script>

<style lang="scss" scoped>
.section1-header-color {
 background: linear-gradient(to bottom, #dbdadb, #414141) !important;
  width: 100%;
  height: 450px;
}
.img-Proj2 {
  margin-top: 51px;
}
</style>
