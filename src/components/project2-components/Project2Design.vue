<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 discover-text">Design</div>
      </div>
    </div>
    <div class="moodboard-header">moodboard</div>
    <div class="row justify-content-center my-5">
      <div class="col text-center">
        <img :src="MoodboardProject2" alt="Bild" class="img-fluid" />
      </div>
      <div class="w-100"></div>
      <div class="col text-center mt-4">
        The Moodboard for CatchEat encapsulates the essence of the app - sleek
        and stylish, vibrant and cheerful, positive and happy, smooth and seamless.
        These elements give CatchEat a unique identity that brings energy and joy to users' everyday lives.
      </div>
    </div>
    <div class="moodboard-header">styleguide</div>
    <div class="sections-subtitle text-uppercase">colors</div>
    <div class="row justify-content-center my-5">
      <div class="col text-center">
        <img :src="Project2designColors" alt="Bild" class="img-fluid" />
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">Grid</div>
    <div class="row justify-content-center my-5">
      <div class="col text-center">
        <img :src="Project2designGrids" alt="Bild" class="img-fluid" align="left" />
      </div>
      <div class="w-100"></div>
      <div class="col text-start mt-5">
        <strong>Mobil Grid</strong>
        <br />Width : Auto <br />Columns : 12 <br />Margin : 70 Px
        <br />Gutter : 70 Px
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">typography</div>
    <div class="row mt-5">
      <div class="row align-items-center justify-content-start mb-3">
        <div class="col-3">
          <img :src="Typografy2p1" class="img-fluid" />
        </div>
        <div class="col-9" style="font-size: 26px; font-weight: bold">
          Heading <div class="row"> Heading Description</div>
          <div class="col">Inter Bold</div>
        </div>
      </div>
      <div class="row align-items-center justify-content-start mb-3">
        <div class="col-3">
          <img :src="Typografy2p2" class="img-fluid" />
        </div>
        <div class="col-9">
          <div class="row">
            <div style="font-size: 33px; font-weight: bold">
              Heading 1/2 - Poppins Bold - 36px/33px
            </div>
            <div style="font-size: 23px; font-weight: bold">
              Button - Poppins Bold - 23px
            </div>
            <div style="font-size: 18px; font-weight: bold">
              Heading 3 - Poppins Bold - 18px
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center justify-content-start mb-3">
        <div class="col-3">
          <img :src="Typografy2p3" class="img-fluid" />
        </div>
        <div class="col-9">
          <div class="row">
            <div style="font-size: 18px; font-weight: 400">
              Body - Poppins Regular - 18px
            </div>
            <div style="font-size: 18px; font-weight: 400">
              Caption Text - Poppins Regular - 18px
            </div>
          </div>
        </div>
      </div>
      <div class="row align-items-center justify-content-start">
        <div class="col-3">
          <img :src="Typografy2p4" class="img-fluid" />
        </div>
        <div class="col-9" style="font-size: 18px; font-weight: bold">
          Numbers - Poppins Bold - 48px
        </div>
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">Icons</div>
    <div class="row justify-content-center">
      <div class="cal-12 text-center">
        <img v-for="i in iconslistItems" :key="i.id" :src="i.imgSrc" :alt="i.name" class="img-fluid mx-3 mt-5 mb-2"
          width="60" height="60" />
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">Illustration</div>
    <div class="row justify-content-center align-items-center mt-5">
      <div class="col-4">
        <img :src="Illustration2P1" alt="Illustration2P1" class="img-fluid" />
      </div>
      <div class="col-4">
        <img :src="Illustration2P2" alt="Illustration2P2" class="img-fluid" />
      </div>
      <div class="col-4">
        <img :src="Illustration2P3" alt="Illustration2P3" class="img-fluid" />
      </div>
    </div>
    <div class="col text-center mt-4 mb-5">
      The usage of animated icons helps to make the page more interactive.
    </div>
    <div class="sections-subtitle text-uppercase">Buttons</div>
    <div class="row justify-content-center">
      <div class="cal-12 d-flex align-items-end justify-content-center">
        <img v-for="b in buttonslistItems" :key="b.id" :src="b.imgSrc" :alt="b.name" class="img-fluid mx-3 mt-5 mb-2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MoodboardProject2 from "../../assets/images/Project2/MoodboardProject2.svg";
import Project2designColors from "../../assets/images/Project2/Project2designColors.svg";
import Project2designGrids from "../../assets/images/Project2/GridSystemMobil.svg"
import mapPin from "../../assets/icons/project1-design-icons/map-pin.svg";
import mail from "../../assets/icons/project1-design-icons/mail.svg";
import phone from "../../assets/icons/project1-design-icons/phone.svg";
import facebook from "../../assets/icons/project1-design-icons/facebook.svg";
import twitter from "../../assets/icons/project1-design-icons/twitter.svg";
import linkedin from "../../assets/icons/project1-design-icons/linkedin.svg";
import github from "../../assets/icons/project1-design-icons/github.svg";
import instagram from "../../assets/icons/project1-design-icons/instagram.svg";
import Typografy2p1 from "../../assets/icons/Project2-Icons/Typografy2p1.svg";
import Typografy2p2 from "../../assets/icons/Project2-Icons/Typografy2p2.svg";
import Typografy2p3 from "../../assets/icons/project2-Icons/Typografy2p3.svg";
import Typografy2p4 from "../../assets/icons/project2-Icons/Typografy2p4.svg";
import Button1 from "../../assets/icons/project1-design-buttons/Button1.svg";
import Button2 from "../../assets/icons/project1-design-buttons/Button2.svg";
import Button3 from "../../assets/icons/project1-design-buttons/Button3.svg";
import Illustration2P1 from "../../assets/Illustration/Project2/Illustration2P1.svg"
import Illustration2P2 from "../../assets/Illustration/Project2/Illustration2P2.svg"
import Illustration2P3 from "../../assets/Illustration/Project2/Illustration2P3.svg"

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

const buttonslistItems = ref<imageItemsInterface[]>([
  {
    id: 0,
    name: "Button1",
    imgSrc: Button1,
  },
  {
    id: 1,
    name: "Button2",
    imgSrc: Button2,
  },
  {
    id: 2,
    name: "Button3",
    imgSrc: Button3,
  },
]);
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
  color: $project2-design-text-color !important;
  border-bottom: 3px solid $project2-design-text-color !important;
}

// Design Text and Border Color 

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

.moodboard-header {
  font-weight: 600;
  font-size: 22px;
  color: $project1-design-Headers-color;
}

.sections-subtitle {
  font-size: 16px;
  font-weight: 600 !important;
  margin-top: 70px;
  padding-bottom: 6px;
  color: $project1-design-Headers-color;
  border-bottom: 1px solid $project1-design-Headers-color;
}
</style>
