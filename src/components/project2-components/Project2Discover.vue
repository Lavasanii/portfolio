<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 discover-text">Discover</div>
      </div>
    </div>
  </div>
  <div class="container" style="max-width: 800px">
    <div class="sections-title">User reaserch</div>
    <div class="sections-texts">
      I conducted three user interviews to validate our assumptions. The
      predominant feedback from these interviews highlighted that the website
      appeared overly chaotic and overwhelming. The individuals we interviewed
      corroborated our initial hypotheses.
      <div class="my-4 sections-subtitle text-uppercase">Key Findings</div>
      <ul>
        <li>DarkTheme app.</li>
        <li>No minimum order.</li>
        <li>A combination of ingredients.</li>
        <li>Something to save time.</li>
        <li>Filters for allergies and prohibited foods.</li>
      </ul>
    </div>
    <div class="sections-title" style="margin-top: 92px">User flow</div>
    <div class="sections-texts">
      <p>
        As the saying goes, a good start is half the battle. Before delving into
        the user interface design, I made sure to refine the features and user
        interaction flow.
      </p>
      <p>
        The following feature flowcharts illustrate the content strategy and
        user journey within the app. Filtering features allow users to customize
        their desired food combinations. Login functionality helps users create
        a personalized profile and associate it with their preferences. The
        creation of these flowcharts serves as a foundation for streamlining
        developer tasks and ultimately creating high-fidelity designs. They also
        facilitate the early identification of potential problems in the
        product, contributing to a fast and efficient troubleshooting process.
      </p>
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center discover-process-image">
      <div class="col text-center">
        <img v-lazy="UserFlow" class="img-fluid" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserFlow from "../../assets/images/Project2/UserFlow.svg";
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

* {
  color: $project1-text-color !important;
}

.discover-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: $project2-discover-text-color !important;
  border-bottom: 3px solid $project2-discover-text-color !important;
}

.sections-title {
  font-weight: 600;
  font-size: 22px;
  color: $project1-text-color !important;
}

.sections-texts {
  margin-top: 36px;
  font-size: 18px;
  font-weight: 400;
  color: $project1-text-color !important;
}

.discover-process-image {
  padding-top: 78px;
  padding-bottom: 78px;
  margin-top: 36px;
  margin-bottom: 92px;
  // background-color: $project1-discover-process-background-color;
}

.sections-subtitle {
  font-size: 16px !important;
  font-weight: 600 !important;
  padding-bottom: 6px;
  border-bottom: 1px solid $project1-discover-process-background-color;
}
</style>
