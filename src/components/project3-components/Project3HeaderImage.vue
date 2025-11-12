<template>
  <div class="container-fluid section1-header-color">
    <div class="row justify-content-center">
      <div class="col text-center">
        <img v-lazy="VotingBackground" class="img-Proj2 VotingBackground" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VotingBackground from "../../assets/images/Project3/P3wettbewerbBackground.png";
</script>

<style lang="scss" scoped>
.section1-header-color {
  background-color: #496b34bf !important;
  width: 100%;
  height: 450px;
}

.VotingBackground {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.img-Proj2 {
  margin: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
