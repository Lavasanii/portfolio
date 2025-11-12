<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 ideation-text">Ideation</div>
      </div>
    </div>
    <div class="sections-title">Gathering Ideas</div>
    <div class="sections-texts">
      The inception of ideation involves sketching and wireframing, so I created
      numerous variations of sketches. Each sketch represented a different angle
      or perspective, allowing for a comprehensive exploration of potential
      ideas. This process not only sparked creativity but also provided a
      tangible foundation for the subsequent stages of development.
    </div>
    <div class="sections-subtitle text-uppercase">LOW FI</div>
    <div class="row justify-content-center">
      <div class="col LowFi">
        <img v-lazy="LowFi" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LowFi from "../../assets/images/Project2/LowFi.svg";
</script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.ideation-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: #496b34bf !important;
  border-bottom: 3px solid #496b34bf !important;
}

.sections-title {
  font-weight: 600;
  font-size: 22px;
  color: #000800cc !important;
}

.sections-texts {
  margin-top: 36px;
  font-size: 18px;
  font-weight: 400;
  color: #000800cc !important;
}

.sections-subtitle {
  font-size: 16px;
  font-weight: 600 !important;
  margin-top: 70px;
  padding-bottom: 6px;
  color: rgba(27, 27, 27, 0.6);
  border-bottom: 1px solid rgba(27, 27, 27, 0.6);
}

.LowFi {
  margin-top: 50px;
}
</style>
