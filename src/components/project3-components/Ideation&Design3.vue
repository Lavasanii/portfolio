<template>
  <div class="container" style="max-width: 800px">
    <div class="row row-cols-auto justify-content-center">
      <div class="cal">
        <div class="display-6 discover-text"> Ideation & Design </div>
      </div>
    </div>
    <div class="row justify-content-center my-5">
        <div class="sections-title">Design goals</div>

      <div class="sections-texts-P3">
      1. Digitize an analog competition
      <ul>
        <li>Transform the previously analog submission and voting process into a fully digital, user-friendly online experience.</li>
      </ul>
      </div>
     
       <div class="sections-texts-P3">
      2. Increase transparency and engagement
      <ul>
        <li>Display vote counts publicly to motivate participation and build trust among students, families, and schools.</li>
      </ul>
      </div>
      
      <div class="sections-texts-P3">
      3. Ensure a fair voting experience
      <ul>
        <li>Implement a one-vote-per-day system using IP-based restrictions to avoid repeated voting and guarantee fairness.</li>
      </ul>
      </div>
      
      <div class="sections-texts-P3">
      4. Simplify project exploration
      <ul>
        <li>Present each school project with a clear layout: one main image plus a responsive carousel of detail images.</li>
      </ul>
      </div>
      
      <div class="sections-texts-P3">
      5. Automate competition workflow
      <ul>  
        <li>Enable automatic sorting by highest votes and disable voting after the deadline, leaving only the gallery and descriptions visible.</li>
      </ul>
      </div> 
      <div class="col text-center">
        <img v-lazy="MoodboardProject2" alt="Bild" class="img-fluid" />
      </div>
      <div class="w-100"></div>
      <div class="col text-center mt-4">
        The Moodboard for CatchEat encapsulates the essence of the app - sleek
        and stylish, vibrant and cheerful, positive and happy, smooth and
        seamless. These elements give CatchEat a unique identity that brings
        energy and joy to users' everyday lives.
      </div>
    </div>
    <div class="moodboard-header">styleguide</div>
    <div class="sections-subtitle text-uppercase">colors</div>
    <div class="row justify-content-center my-5">
      <div class="col text-center">
        <img v-lazy="Project2designColors" alt="Bild" class="img-fluid" />
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">Grid</div>
    <div class="row justify-content-center my-5">
      <div class="col text-center">
        <img
          v-lazy="Project2designGrids"
          alt="Bild"
          class="img-fluid"
          align="left"
        />
      </div>
      <div class="w-100"></div>
      <div class="col text-start mt-5">
        <strong>Mobil Grid</strong>
        <br />Width : Auto <br />Columns : 12 <br />Margin : 70 Px <br />Gutter
        : 70 Px
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">typography</div>
    <div class="row mt-5">
      <div class="row align-items-center justify-content-start mb-3">
        <div class="col-3">
          <img v-lazy="Typografy2p1" class="img-fluid" />
        </div>
        <div class="col-4">
          <div style="font-size: 26px; font-weight: 700">Heading</div>
          <div style="font-size: 18px; font-weight: 700">
            Heading Description
          </div>
        </div>
        <div class="col-4">
          <div style="font-size: 26px; font-weight: 700">Inter Bold</div>
          <div style="font-size: 18px; font-weight: 700">Inter Bold</div>
        </div>
        <div class="col-1">
          <div style="font-size: 26px; font-weight: 700">26px</div>
          <div style="font-size: 18px; font-weight: 700">18px</div>
        </div>
      </div>
      <div class="row align-items-center justify-content-start mb-3">
        <div class="col-3">
          <img v-lazy="Typografy2p2" class="img-fluid" />
        </div>
        <div class="col-4">
          <div style="font-size: 20px; font-weight: 600">Heading Photo</div>
          <div style="font-size: 13px; font-weight: 600">Menu</div>
        </div>
        <div class="col-4">
          <div style="font-size: 20px; font-weight: 600">Inter Bold</div>
          <div style="font-size: 13px; font-weight: 600">Inter Bold</div>
        </div>
        <div class="col-1">
          <div style="font-size: 20px; font-weight: 600">20px</div>
          <div style="font-size: 13px; font-weight: 600">13px</div>
        </div>
      </div>
      <div class="row align-items-center justify-content-start mb-3">
        <div class="col-3">
          <img v-lazy="Typografy2p3" class="img-fluid" />
        </div>
        <div class="col-4">
          <div style="font-size: 20px; font-weight: 500">Button</div>
          <div style="font-size: 16px; font-weight: 500">Caption Text</div>
        </div>
        <div class="col-4">
          <div style="font-size: 20px; font-weight: 500">Inter Medium</div>
          <div style="font-size: 16px; font-weight: 500">Inter Medium</div>
        </div>
        <div class="col-1">
          <div style="font-size: 20px; font-weight: 500">20px</div>
          <div style="font-size: 16px; font-weight: 500">16px</div>
        </div>
      </div>
      <div class="row align-items-center justify-content-start">
        <div class="col-3">
          <img v-lazy="Typografy2p4" class="img-fluid" />
        </div>
        <div class="col-4">
          <div style="font-size: 16px; font-weight: 400">Body</div>
        </div>
        <div class="col-4">
          <div style="font-size: 16px; font-weight: 400">Inter Regular</div>
        </div>
        <div class="col-1">
          <div style="font-size: 16px; font-weight: 400">16px</div>
        </div>
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">Icons</div>
    <div class="row justify-content-center">
      <div class="cal-12 text-center">
        <img
          v-for="i in iconslistItems"
          :key="i.id"
          v-lazy="i.imgSrc"
          :alt="i.name"
          class="img-fluid mx-3 mt-5 mb-2"
          width="40"
          height="45"
        />
      </div>
    </div>
    <div class="sections-subtitle text-uppercase">Illustration</div>
    <div class="row justify-content-center align-items-center mt-5">
      <div class="col-4">
        <img v-lazy="Illustration2P1" alt="Illustration2P1" class="img-fluid" />
      </div>
      <div class="col-4">
        <img v-lazy="Illustration2P2" alt="Illustration2P2" class="img-fluid" />
      </div>
      <div class="col-4">
        <img v-lazy="Illustration2P3" alt="Illustration2P3" class="img-fluid" />
      </div>
    </div>
    <div class="col text-center mt-4 mb-5">
      The usage of animated icons helps to make the page more interactive.
    </div>
    <div class="sections-subtitle text-uppercase">Buttons</div>
    <div class="row justify-content-center">
      <div class="cal-12 d-flex align-items-end justify-content-center">
        <img v-lazy="ButtonsP2" alt="Buttons-P2" class="img-fluid mt-5 mb-2" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import MoodboardProject2 from "../../assets/images/Project3/P3Ideation.png";
import Project2designColors from "../../assets/images/Project3/Project3designColors.png";
import Project2designGrids from "../../assets/images/Project2/GridSystemMobil.svg";
import homeIconP2 from "../../assets/icons/Project2-Icons/homeIconP2.svg";
import arrowIconP2 from "../../assets/icons/Project2-Icons/arrowIconP2.svg";
import LunchIconP2 from "../../assets/icons/Project2-Icons/LunchIconP2.svg";
import zoomIconP2 from "../../assets/icons/Project2-Icons/zoomIconP2.svg";
import personIconP2 from "../../assets/icons/Project2-Icons/personIconP2.svg";
import LocationIconP2 from "../../assets/icons/Project2-Icons/LocationIconP2.svg";
import Typografy2p1 from "../../assets/icons/Project2-Icons/Typografy2p1.svg";
import Typografy2p2 from "../../assets/icons/Project2-Icons/Typografy2p2.svg";
import Typografy2p3 from "../../assets/icons/Project2-Icons/Typografy2p3.svg";
import Typografy2p4 from "../../assets/icons/Project2-Icons/Typografy2p4.svg";
import ButtonsP2 from "../../assets/icons/Project2-Icons/ButtonsP2.svg";
import Illustration2P1 from "../../assets/Illustration/Project2/Illustration2P1.svg";
import Illustration2P2 from "../../assets/Illustration/Project2/Illustration2P2.svg";
import Illustration2P3 from "../../assets/Illustration/Project2/Illustration2P3.svg";
  
interface imageItemsInterface {
  id: number;
  name: string;
  imgSrc: string;
}

const iconslistItems = ref<imageItemsInterface[]>([
  {
    id: 0,
    name: "homeIconP2",
    imgSrc: homeIconP2,
  },
  {
    id: 1,
    name: "arrowIconP2",
    imgSrc: arrowIconP2,
  },
  {
    id: 2,
    name: "LunchIconP2",
    imgSrc: LunchIconP2,
  },
  {
    id: 3,
    name: "zoomIconP2",
    imgSrc: zoomIconP2,
  },
  {
    id: 4,
    name: "personIconP2",
    imgSrc: personIconP2,
  },
  {
    id: 5,
    name: "LocationIconP2",
    imgSrc: LocationIconP2,
  },
]);
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

// Design Text and Border Color

.sections-title {
  font-weight: 600;
  font-size: 22px;
  color: #000800cc !important;
}

.sections-texts-P3 {
  margin-top: 18px;
  font-size: 18px;
  font-weight: 400;
  color: #000800cc !important;
}

.moodboard-header {
  font-weight: 600;
  font-size: 22px;
  color: rgba(27, 27, 27, 0.6);
}

.sections-subtitle {
  font-size: 16px;
  font-weight: 600 !important;
  margin-top: 70px;
  padding-bottom: 6px;
  color: rgba(27, 27, 27, 0.6);
  border-bottom: 1px solid rgba(27, 27, 27, 0.6);
}
</style>
