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
        <img :src="Project1designmoodboard" alt="Bild" class="img-fluid" />
      </div>
      <div class="w-100"></div>
      <div class="col text-center mt-4">
        Generate and gather ideas plus look at other ideas <br />
        I use a combination of modern, bold colors to encourage the user. The
        smooth design helps improve the user's eye comfort during use.
      </div>
    </div>
    <div class="moodboard-header">styleguide</div>
    <div class="sections-subtitle text-uppercase">colors</div>
    <div class="row justify-content-center my-5">
      <div class="col text-center">
        <img :src="Project1designColors" alt="Bild" class="img-fluid" />
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">Grid</div>
    <div class="row justify-content-center my-5">
      <div class="col text-center">
        <img :src="Project1designGrids" alt="Bild" class="img-fluid" />
      </div>
      <div class="w-100"></div>
      <div class="col text-start mt-5">
        <strong>Desktop Total</strong>
        <br />Width : 1440 Px <br />Columns : 12 <br />Margin : 70 Px
        <br />Gutter : 70 Px
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">typography</div>
    <div class="row mt-5">
      <div class="row align-items-center justify-content-start mb-3">
        <div class="col-3">
          <img :src="Typografy1" class="img-fluid" />
        </div>
        <div class="col-9" style="font-size: 48px; font-weight: bold">
          Numbers - Poppins Medium - 48px
        </div>
      </div>
      <div class="row align-items-center justify-content-start mb-3">
        <div class="col-3">
          <img :src="Typografy2" class="img-fluid" />
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
          <img :src="Typografy3" class="img-fluid" />
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
          <img :src="Typografy4" class="img-fluid" />
        </div>
        <div class="col-9" style="font-size: 18px; font-weight: bold">
          Numbers - Poppins Bold - 48px
        </div>
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">Icons</div>
    <div class="row justify-content-center">
      <div class="cal-12 text-center">
        <img
          v-for="i in iconslistItems"
          :key="i.id"
          :src="i.imgSrc"
          :alt="i.name"
          class="img-fluid mx-3 mt-5 mb-2"
          width="60"
          height="60"
        />
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">animated icon</div>
    <div class="row justify-content-center align-items-center mt-5">
      <div
        class="col-5 mx-3 d-flex align-items-center justify-content-centeralign-self-center animeColsClass"
      >
        <img :src="videoAnime1" alt="videoAnime1" class="img-fluid" />
      </div>
      <div
        class="col-5 mx-3 d-flex align-items-center justify-content-center animeColsClass"
      >
        <img :src="bookAnime1" alt="bookAnime1" style="height: 75%" />
      </div>
    </div>
    <div class="col text-center mt-4 mb-5">
      The usage of animated icons helps to make the page more interactive.
    </div>
    <div class="sections-subtitle text-uppercase">Buttons</div>
    <div class="row justify-content-center">
      <div class="cal-12 d-flex align-items-end justify-content-center">
        <img
          v-for="b in buttonslistItems"
          :key="b.id"
          :src="b.imgSrc"
          :alt="b.name"
          class="img-fluid mx-3 mt-5 mb-2"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Project1designmoodboard from "../../assets/images/Project1designmoodboard.png";
import Project1designColors from "../../assets/images/ColorSet.svg";
import Project1designGrids from "../../assets/images/Project1designGrids.png";
import mapPin from "../../assets/icons/project1-design-icons/map-pin.svg";
import mail from "../../assets/icons/project1-design-icons/mail.svg";
import phone from "../../assets/icons/project1-design-icons/phone.svg";
import facebook from "../../assets/icons/project1-design-icons/facebook.svg";
import twitter from "../../assets/icons/project1-design-icons/twitter.svg";
import linkedin from "../../assets/icons/project1-design-icons/linkedin.svg";
import github from "../../assets/icons/project1-design-icons/github.svg";
import instagram from "../../assets/icons/project1-design-icons/instagram.svg";
import Typografy1 from "../../assets/icons/project1-design-typographies/Typografy1.svg";
import Typografy2 from "../../assets/icons/project1-design-typographies/Typografy2.svg";
import Typografy3 from "../../assets/icons/project1-design-typographies/Typografy3.svg";
import Typografy4 from "../../assets/icons/project1-design-typographies/Typografy4.svg";
import bookAnime1 from "../../assets/gifs/book.gif";
import videoAnime1 from "../../assets/gifs/video.gif";
import Button1 from "../../assets/icons/project1-design-buttons/Button1.svg";
import Button2 from "../../assets/icons/project1-design-buttons/Button2.svg";
import Button3 from "../../assets/icons/project1-design-buttons/Button3.svg";

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
} // Design Text and Border Color 

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

.animeColsClass {
  background-color: $project1-anime-background;
  border-radius: 10px;
  padding: 10px;
  height: 270px;
}
</style>
