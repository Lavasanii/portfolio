<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 discover-text">Features & Logic</div>
      </div>
    </div>
  </div>
  <div class="container" style="max-width: 800px">
    <div class="sections-title">User reaserch</div>
    <div class="sections-texts">
      Before this project, the school competition was fully analog — schools submitted photos of their recycling and upcycling models by email or post.
      The voting process was handled manually, which made participation and result tracking complicated.
  Together with the Allreco marketing team, we analyzed this workflow and identified opportunities to digitize the process and make it accessible online.
      <div class="my-4 sections-subtitle text-uppercase">Key Findings</div>
      <ul>
        <li>The analog submission process was time-consuming and hard to manage</li>
        <li>Schools and families wanted a simple, visual way to view and vote for projects</li>
        <li>Transparency was key — visible vote counts increased motivation and trust</li>
        <li>Limiting voting to one per day ensured fairness and credibility</li>
        <li>A digital platform improved accessibility and audience reach significantly</li>
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
* {
  color: #000800cc !important;
}

.discover-text {
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

.discover-process-image {
  padding-top: 78px;
  padding-bottom: 78px;
  margin-top: 36px;
  margin-bottom: 92px;
  // background-color: rgba(82, 140, 162, 0.47);
}

.sections-subtitle {
  font-size: 16px !important;
  font-weight: 600 !important;
  padding-bottom: 6px;
  border-bottom: 1px solid rgba(82, 140, 162, 0.47);
}
</style>
