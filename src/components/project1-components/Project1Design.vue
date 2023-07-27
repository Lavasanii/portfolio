<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 discover-text">Design</div>
      </div>
    </div>
    <div class="sections-title">Gathering Ideas</div>
    <div class="sections-texts">
      For this website as a learning Platffoem
    </div>
    <div class="h2 moodboard-header">moodboard</div>
    <div class="row justify-content-center my-5">
      <div class="col text-center">
        <img :src="Project1designmoodboard" alt="Bild" class="img-fluid" />
      </div>
      <div class="w-100"></div>
      <div class="col text-center mt-5">
        Generate and gather ideas plus look at other ideas
      </div>
    </div>
    <div class="h2 moodboard-header">styleguide</div>
    <div class="h4 Layout-header text-uppercase">color</div>
    <div class="row justify-content-center my-5">
      <div class="col text-center">
        <img :src="Project1designColors" alt="Bild" class="img-fluid" />
      </div>
    </div>
    <div class="h4 Layout-header text-uppercase">Grid</div>
    <div class="row justify-content-center my-5">
      <div class="col text-center">
        <img :src="Project1designGrids" alt="Bild" class="img-fluid" />
      </div>
      <div class="w-100"></div>
      <div class="col text-start mt-5">
        <strong>Desktop Total</strong>
        <br />Width : 1440 Px <br />Columns : 12 <br />Margin : 70 Px
        <br />Gutter : 20 Px
      </div>
    </div>
    <div class="h4 Layout-header text-uppercase">typography</div>
    <div class="h4 Layout-header text-uppercase">Icons</div>
    <div class="row justify-content-center">
      <div class="cal-12 text-center">
        <img v-for="i in iconslistItems" :key="i.id" :src="i.imgSrc" :alt="i.name" class="img-fluid mx-3 my-5" width="60"
          height="60" />
      </div>
    </div>
    <div class="h4 Layout-header text-uppercase">animated icon</div>
    <div class="row justify-content-center my-5">
      <div class="col text-center">
        <img :src="Project1designAnimationsColor" alt="Bild" class="img-fluid" />
      </div>
    </div>
    <div class="h4 Layout-header text-uppercase">Buttons</div>
    <div class="row justify-content-center my-5">
      <div class="col text-center">
        <img :src="Project1designButtons" alt="Bild" class="img-fluid" />
      </div>
    </div>
    <div class="h4 Layout-header text-uppercase">User Flows</div>
  </div>
  <div class="container-fluid">
    <div class="row justify-content-center user-flow-image">
      <div class="row justify-content-center">
        <div class="col-4 text-center my-4" v-for="ul in userflowItemsLight" :key="ul.id">
          <img :src="ul.imgSrc" :alt="ul.name" class="img-fluid" />
        </div>
        <div class="col-4 text-center my-4" v-for="ud in userflowItemsDark" :key="ud.id">
          <img :src="ud.imgSrc" :alt="ud.name" class="img-fluid" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Project1designmoodboard from "../../assets/images/Project1designmoodboard.png"
import Project1designColors from "../../assets//images/Project1designColors.png"
import Project1designGrids from "../../assets/images/Project1designGrids.png"
import Project1designAnimationsColor from "../../assets//images/Project1designAnimationsColor.png"
import Project1designButtons from "../../assets/images/Project1designButtons.png"

import mapPin from "../../assets/icons/project1-design-icons/map-pin.svg"
import mail from "../../assets/icons/project1-design-icons/mail.svg"
import phone from "../../assets/icons/project1-design-icons/phone.svg"
import facebook from "../../assets/icons/project1-design-icons/facebook.svg"
import twitter from "../../assets/icons/project1-design-icons/twitter.svg"
import linkedin from "../../assets/icons/project1-design-icons/linkedin.svg"
import github from "../../assets/icons/project1-design-icons/github.svg"
import instagram from "../../assets/icons/project1-design-icons/instagram.svg"
import Project1designUserFlowLight1 from "../../assets/images/Project1designUserFlowLight1.png"
import Project1designUserFlowLight2 from "../../assets/images/Project1designUserFlowLight2.png"
import Project1designUserFlowLight3 from "../../assets/images/Project1designUserFlowLight3.png"
import Project1designUserFlowDark1 from "../../assets/images/Project1designUserFlowDark1.png"
import Project1designUserFlowDark2 from "../../assets/images/Project1designUserFlowDark2.png"
import Project1designUserFlowDark3 from "../../assets/images/Project1designUserFlowDark3.png"


interface imageItemsInterface {
  id: number;
  name: string;
  imgSrc: string;
}

const iconslistItems = ref<imageItemsInterface[]>([
  {
    id: 0,
    name: "map-pin",
    imgSrc: mapPin,
  },
  {
    id: 1,
    name: "mail",
    imgSrc: mail,
  },
  {
    id: 2,
    name: "phone",
    imgSrc: phone,
  },
  {
    id: 3,
    name: "facebook",
    imgSrc: facebook,
  },
  {
    id: 4,
    name: "twitter",
    imgSrc: twitter,
  },
  {
    id: 5,
    name: "linkedin",
    imgSrc: linkedin,
  },
  {
    id: 6,
    name: "github",
    imgSrc: github,
  },
  {
    id: 7,
    name: "instagram",
    imgSrc: instagram,
  },
]);


const userflowItemsLight = ref<imageItemsInterface[]>([
  {
    id: 0,
    name: "Project1designUserFlowLight1",
    imgSrc: Project1designUserFlowLight1,
  },
  {
    id: 1,
    name: "Project1designUserFlowLight2",
    imgSrc: Project1designUserFlowLight2,
  },
  {
    id: 2,
    name: "Project1designUserFlowLight3",
    imgSrc: Project1designUserFlowLight3,
  },
]);

const userflowItemsDark = ref<imageItemsInterface[]>([
  {
    id: 0,
    name: "Project1designUserFlowDark1",
    imgSrc: Project1designUserFlowDark1,
  },
  {
    id: 1,
    name: "Project1designUserFlowDark2",
    imgSrc: Project1designUserFlowDark2,
  },
  {
    id: 2,
    name: "Project1designUserFlowDark3",
    imgSrc: Project1designUserFlowDark3,
  },
]);
</script>

<style lang="scss" scoped>
@import "../../scss/theme.scss";

* {
  color: $project1-text-color;
}

.discover-text {
  margin-top: 120px;
  margin-bottom: 120px;
  padding-bottom: 25px;
  color: $project1-design-text-color;
  border-bottom: 3px solid $project1-design-text-color;
}

.sections-title {
  font-weight: 700;
  font-size: 22px;
}

.sections-texts {
  margin-top: 36px;
  font-size: 18px;
  font-weight: 400;
}

.moodboard-header {
  margin-top: 130px;
  font-weight: 700;
  color: $project1-design-Headers-color;
}

.Layout-header {
  margin-top: 70px;
  padding-bottom: 6px;
  color: $project1-design-Headers-color;
  border-bottom: 1px solid $project1-design-Headers-color;
}

.user-flow-image {
  padding-top: 78px;
  padding-bottom: 78px;
  margin-top: 92px;
  margin-bottom: 92px;
  background-color: $project1-design-user-flow-background-color;
}
</style>
