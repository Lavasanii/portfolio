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
      We conducted 4 user interviews to confirm our assumptions. The most common feedback from the user interviews was
      that the site was too chaotic and overwhelming. The people we interviewed confirmed our assumptions.
      <div class="my-4 sections-subtitle text-uppercase">Key Findings</div>
      <ul>
        <li>The website is confusing.</li>
        <li>There are no categories.</li>
        <li>The content must be clearly arranged.</li>
        <li>No navigation bar.</li>
        <li>The ratings are jumbled.</li>
      </ul>
    </div>
    <div class="sections-title" style="margin-top: 92px;">Sitemap</div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center discover-process-image">
      <div class="col text-center">
        <img :src="project1discoverProcess" class="img-fluid" />
      </div>
    </div>
  </div>
  <div class="container" style="max-width: 800px">
    <div class="sections-title">Solutions</div>
    <div class="sections-texts">
      <ul>
        <li>Dark them website</li>
        <li>Fix navbar on Scroll (Sticky Navbar)</li>
        <li>Implement a split screen to clearly display the subjects.</li>
        <li>
          Design principles: clean, emotionally connected (colors, icons)
        </li>
        <li>Utilize the brand color inspired by the C# logo.</li>
        <li>
          Animation against the image of Robout with Inspiration of Neural Neural Networks
        </li>
        <li>
          A preview of the first recording of lectures in both parts of courses
        </li>
        <li>Use icons to encourage users</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import project1discoverProcess from "../../assets/images/project1discoverProcess.svg"
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
  color: $project1-discover-text-color !important;
  border-bottom: 3px solid $project1-discover-text-color !important;
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
  background-color: $project1-discover-process-background-color;
}

.sections-subtitle {
  font-size: 16px !important;
  font-weight: 600 !important;
  padding-bottom: 6px;
  border-bottom: 1px solid $project1-discover-process-background-color;
}

</style>
