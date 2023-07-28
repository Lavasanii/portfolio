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
      Wir verschickten führten 4 Nutzerinterviews durch, um unsere Annahmen zu
      bestätigen. Das häufigste Feedback aus den Nutzerinterviews war, dass die
      Website zu chaotisch und überwältigend ist. Die von uns befragten Personen
      bestätigten unsere Annahmen.
      <div class="my-4"><strong>Key Findings</strong></div>
      <ul>
        <li>Die Website ist verwirrend</li>
        <li>Es gibt keine Kategorien</li>
        <li>Die Inhalt muss übersichtlich sein</li>
        <li>Keine Navigationsleiste</li>
        <li>Die Bewertungen sind durcheinander</li>
      </ul>
    </div>
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
        <li>Dark website</li>
        <li>Fix navbar on Scroll (Sticky Navbar)</li>
        <li>Split screen, it helps to show the direcly wich Subjects are</li>
        <li>
          Design principles: clean, emotionally connected (colors, icons) ?
        </li>
        <li>Brand Colour wich comes from C# logo</li>
        <li>
          Animation against the picture of Robout with inspration of Neural
          Networks
        </li>
        <li>
          A preview of the first capture of lectures in both Part of courses
        </li>
        <li>Use icons to ecourage the users</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import project1discoverProcess from "../../assets/images/project1discoverProcess.png"
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
  margin-top: 92px;
  margin-bottom: 92px;
  background-color: $project1-discover-process-background-color;
}
</style>
