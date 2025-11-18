<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 define-text">Define</div>
      </div>
    </div>
    <div class="sections-title">User Personas</div>
    <div class="sections-texts">
      I created a preliminary persona to foster a deeper understanding of their
      perspective after identifying the target audience.
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center define-gender-age">
      <div class="col text-center"></div>
    </div>
    <div class="container-fluid" style="max-width: 1300px">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 mt-auto">
          <div class="sections-title mb-2">Biography</div>
          <div class="mb-4">
            Highly educated, currently employed full-time and earning a
            respectable salary
          </div>

          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col text-end my-auto">
                  <img
                    v-lazy="briefcase"
                    alt="briefcase"
                    width="32"
                    height="32"
                  />
                </div>
                <div class="col py-4 pl-0">
                  <div class="Info">Occupation</div>
                  <p class="my-0">Software Developer</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="row">
                <div class="col text-end my-auto">
                  <img
                    v-lazy="location"
                    alt="location"
                    width="32"
                    height="32"
                  />
                </div>
                <div class="col py-4 pl-0">
                  <div class="Info">Location</div>
                  <p class="my-0">Berlin, Germany</p>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col">
              <div class="row">
                <div class="col text-end my-auto">
                  <img v-lazy="person" alt="person" width="32" height="32" />
                </div>
                <div class="col py-4 pl-0">
                  <div class="Info">Age</div>
                  <p class="my-0">26-35</p>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="row">
                <div class="col text-end my-auto">
                  <img v-lazy="home" alt="home" width="32" height="32" />
                </div>
                <div class="col py-4 pl-0">
                  <div class="Info">Family</div>
                  <p class="my-0">Single</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-12 col-md-6 col-lg-4 mt-auto"
          style="padding-left: 65px"
        >
          <div class="sections-title">Behavior</div>
          <div>
            <ul>
              <li>Busy schedule</li>
              <li>Not much of a community</li>
              <li>Nerd, Interested in new technology</li>
              <li>Not much sports</li>
            </ul>
          </div>
          <div class="sections-title" style="margin-top: 37px">
            Needs & Goals
          </div>
          <div>
            <ul>
              <li>Good quality food</li>
              <li>Variety of food choice</li>
              <li>Desire to locate nearest restaurant</li>
              <li>Desire for physical activity</li>
              <li>Personal food preferences</li>
            </ul>
          </div>
        </div>
        <div
          class="col-12 col-lg-4 d-flex justify-content-lg-end justify-content-center"
        >
          <img v-lazy="Project2Personas" class="Personas-Bild" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import briefcase from "../../assets/icons/briefcase.svg";
import location from "../../assets/icons/location.svg";
import person from "../../assets/icons/person.svg";
import home from "../../assets/icons/home.svg";
import Project2Personas from "../../assets/images/Project2/Project2Personas.jpg";
</script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.define-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: #496b34bf !important;
  border-bottom: 3px solid #496b34bf !important;
}

.sections-title {
  font-weight: 600;
  font-size: 20px;
  color: #000800cc !important;
}

.sections-texts {
  margin-top: 36px;
  font-size: 18px;
  font-weight: 400;
  color: #000800cc !important;
}

.define-gender-age {
  margin-top: 92px;
  margin-bottom: 92px;
}

.Personas-Bild {
  width: 332px;
  height: 482px;
}

.Info {
  font-weight: 500;
  font-size: 16, 5px;
}
</style>
