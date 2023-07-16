<template>
  <div class="container" style="max-width: 972px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 define-text">Define</div>
      </div>
    </div>
    <div class="h4 sections-title">User Personas</div>
    <div class="h5 sections-texts">
      Transforms an abstract user group and its needs into a real person with
      real problems, which helps to develop empathy. in this case the person is
      about 30 and has finished his studies and is looking for a suitable course
      and wants to find it quickly.
    </div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center define-gender-age">
      <div class="col text-center">
        <img
          src="../../../public//images//project1defineGenderAge.png"
          class="img-fluid"
        />
      </div>
    </div>
    <div class="container-fluid" style="max-width: 1500px">
      <div class="row">
        <div class="col-12 col-md-4">
          <div class="row">
            <div class="col">
              <img :src="briefcase" alt="briefcase" width="32" height="32" />
              <br />
              <div class="persona-text-bottom-icons">Occupation</div>
              <p>engineer</p>
            </div>
            <div class="col">
              <img :src="location" alt="location" width="32" height="32" />
              <br />
              <div class="persona-text-bottom-icons">Location</div>
              <p>Düsseldorf, Germany</p>
            </div>
          </div>
          <div class="row persona-margin-top-rows">
            <div class="col">
              <img :src="person" alt="person" width="32" height="32" />
              <br />
              <div class="persona-text-bottom-icons">Age</div>
              <p>33</p>
            </div>
            <div class="col">
              <img :src="home" alt="home" width="32" height="32" />
              <br />
              <div class="persona-text-bottom-icons">Family</div>
              <p>Single</p>
            </div>
          </div>
          <div class="row persona-margin-top-rows">
            <div class="h4 sections-title">Biography</div>
            <div class="h5">
              After his education as mechanical engineer, he find that needs,
              that he must learn ML and he decieded to use online plattform and
              the went fo RubrikCode
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="h4 sections-title">Needs</div>
          <div class="h5">
            <ul>
              <li>Easy learn plattform</li>
              <li>
                very clear steps to leran Mashine Learning. Easy lern path
              </li>
              <li>a blance between price and peformance</li>
              <li>Discout items</li>
            </ul>
          </div>
          <div class="h4 sections-title persona-margin-top-rows">
            Pain points
          </div>
          <div class="h5">
            <ul>
              <li>He has not to much time to test the lerning method</li>
              <li>He Wants to see the result</li>
              <li>Limited budget</li>
            </ul>
          </div>
          <div class="h4 sections-title persona-margin-top-rows">Goals</div>
          <div class="h5">
            <ul>
              <li>to learn ML very fast</li>
              <li>To impliement what he learn in the work</li>
            </ul>
          </div>
        </div>
        <div class="col-12 col-md-4 d-flex justify-content-end">
          <img
            src="../../../public//images//project1definePersona.png"
            class="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import briefcase from "../../../public/icons/briefcase.svg";
import location from "../../../public/icons/location.svg";
import person from "../../../public/icons/person.svg";
import home from "../../../public/icons/home.svg";
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

* {
  color: $project1-text-color;
}
.define-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: $project1-define-text-color;
  border-bottom: 3px solid $project1-define-text-color;
}

.sections-title {
  font-weight: 700;
}

.sections-texts {
  margin-top: 36px;
}

.define-gender-age {
  margin-top: 132px;
  margin-bottom: 132px;
}

.persona-text-bottom-icons {
  color: $project1-persona-text-bottom-icons-color;
  font-size: 22px;
  font-weight: 500;
  margin-top: 36px;
}

.persona-margin-top-rows {
  margin-top: 77px;
}
</style>
