<template>
  <div class="h-background-avatar">
    <div class="container">
      <div class="row">
        <!-- <div class="col-md-2"> -->
        <div class="text-container">
          <!-- <div class="h1 section1-text-title-color">Who am i ?</div> -->

          <!-- <p class="h-text-color mt-5" style="font-size: 18px !important;">
              Passionate UX/UI designer with a background in industrial design and a special interest in IoT products.
            </p> -->
        </div>
        <!-- </div> -->

        <div class="col-md-12 d-md-block p-5">
          <div class="col text-center mb-5 pb-5">
            <img v-lazy="Problems" alt="Bild" class="img-fluid" />
            <div class="col text-center mt-4">
              Research into the packaging of Inbus products, both from the Inbus
              brand and other brands. <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 
  <div class="container MittelDesignJustify"> -->
  <!-- <div class="row row-cols-auto justify-content-center ">

    </div> -->
  <div class="container moodboard-header MittelDesignJustify mb-5">
    Design Goals
  </div>

  <IDP2DesignGoal class="margin-between-sections"></IDP2DesignGoal>

  <div class="container MittelDesignJustify">
    <div class="moodboard-header">Brainstorming</div>
    <div class="row row-cols-auto justify-content-left">
      <div class="cal">
        <div class="row justify-content-center my-5"></div>
      </div>
    </div>
  </div>

  <div class="container" style="max-width: 600px">
    <div class="col text-center mb-5 pb-5">
      <img v-lazy="Brainstorming" alt="Bild" class="img-fluid" />
      <!-- <div class="col text-center mt-4">
          Research into the packaging of Inbus products, both from the Inbus brand and other brands. <br />
        </div> -->
    </div>

    <!-- Test -->

    <!-- <div class="container1">
        <div class="item item1 "><img v-lazy="Skizze1" alt="Bild"> </div>
        <div class="item item2 "><img v-lazy="Skizze2" alt="Bild"></div>
        <div class="item item3 "><img v-lazy="Skizze3" alt="Bild"></div>


      </div> -->

    <!-- style="padding: 0; margin: 0; -->
    <!-- style="width: 100%;" -->

    <!-- <div class="row justify-content-center">
        <div class="col-4">
          <div class="row ">
            <div class="col-12 "> <img v-lazy="Skizze1" alt="Bild" class="coolman" /> </div>
            <div class="col-12"> <img v-lazy="Skizze2" alt="Bild" class="coolman" /></div>
          </div>
        </div>

        <div class="col-8"> <img v-lazy="Skizze3" alt="Bild" class="object-fit-cover"
            style="max-height: 560px; max-width:100% ;" />
        </div>

      </div> -->
  </div>

  <div class="w-100"></div>

  <div class="container MittelDesignJustify">
    <div class="row row-cols-auto justify-content-left">
      <div class="cal">
        <div class="moodboard-header">Consolidated Concepts</div>
        <div class="row justify-content-center my-5"></div>
      </div>
    </div>
  </div>

  <div class="h-background-avatar pb-5">
    <div class="container" style="max-width: 573px">
      <div class="row">
        <img v-lazy="Inbus3" alt="Bild" class="img-fluid" style="width: 100%" />
        <p>
          The box features a sleek and minimal design. The INBUS keys are
          organized with a straightforward folding mechanism. The top is
          optimally sized but not fully continuous, serving to prevent any
          unintended removal of keys. This design not only promotes secure
          storage but also reduces material usage.
        </p>
      </div>
      <div class="row">
        <div class="col-6">
          <img
            v-lazy="Inbus2"
            alt="Bild"
            class="img-fluid"
            style="width: 100%"
          />
          <p>
            The unique feature of this design is that the suspended INBUS keys
            can be stably positioned, even with the compact design. As a result,
            they are simpler to remove and provide clear visibility.
          </p>
        </div>
        <div class="col-6">
          <img
            v-lazy="Inbus1"
            alt="Bild"
            class="img-fluid"
            style="width: 100%"
          />
          <p>
            This operates through a rotating motion. The spring assists in
            pushing the holder upwards for the INBUS keys to become removable.
            To close, manually push down the holder and shut the lid.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- Malmir Code:  -->

  <!-- <div class="container">

  <div class="row"><img v-lazy="KonKonzept" alt="Bild" class="img-fluid " style="width: 100 %;" />
    <p>fafafaf</p>
  
  </div>

  <div class="row">
  
    <div class="col-6">  <img v-lazy="DiamondCut" alt="Bild" class="img-fluid " style="width: 100 %;" />
    <p>fafafaf</p> 
    </div>

    <div class="col-6"> <img v-lazy="RundKanten" alt="Bild" class="img-fluid " style="width: 100 %;" /> </div>

  </div>
 </div> -->

  <div class="container MittelDesignJustify">
    <div class="row row-cols-auto justify-content-left">
      <div class="cal">
        <div class="moodboard-header">Model making</div>
        <div class="row justify-content-center my-5"></div>
      </div>
    </div>
  </div>

  <div class="container" style="max-width: 790px">
    <div class="row mb-0 g-2 justify-content-center">
      <div class="col-6">
        <img
          v-lazy="ModelPrintclose"
          alt="Bild"
          class="img-fluid"
          style="width: 100%"
        />
      </div>
      <div class="col-6">
        <img
          v-lazy="ModelPrintopen"
          alt="Bild"
          class="img-fluid"
          style="width: 100%"
        />
      </div>
      <p class="text-center">3D Printed Model</p>
    </div>
    <div class="row row mt-0 g-2 justify-content-center">
      <div class="col-6">
        <img
          v-lazy="ModelCNCopen"
          alt="Bild"
          class="img-fluid"
          style="width: 100%"
        />
      </div>
      <div class="col-6">
        <img
          v-lazy="ModelCNCclose"
          alt="Bild"
          class="img-fluid"
          style="width: 100%"
        />
      </div>
    </div>
    <p class="text-center">CNC Milled Model</p>
  </div>

  <!-- Sample by Me -->
  <!-- <div class="container" style="max-width: 500px">
    <div class="row mb-4" >
     <p> Instead of the sharp edges and diamond-cut design, we introduced rounded edges
      because they better fit the design language of Bodum.</p>

      <img v-lazy="RundKanten" alt="Bild" class="img-fluid " style="width: 100%;" />
    </div>

    <div class="row">
      <div class="col-6"> <img v-lazy="DiamondCut" alt="Bild" class="img-fluid " style="width: 100%;" />
        <p class="mt-4">Diamond cutting and large radii, in addition to sharp edges,
          render this product unsuitable for use with Bodum
        </p>
      </div>

      <div class="col-6"> <img v-lazy="KonKleinR" alt="Bild" class="img-fluid " style="width: 100%;" />
        <p class="mt-4">Smooth curves and rounded edges</p>
      </div>
    </div>
  </div> -->

  <div class="container MittelDesignJustify">
    <div class="moodboard-header">Renderings</div>
    <div class="row row-cols-auto justify-content-left">
      <div class="cal">
        <div class="row justify-content-center my-5"></div>
      </div>
    </div>
  </div>

  <div class="col text-center margin-between-sections">
    <img v-lazy="InbusOneShot" alt="Bild" class="img-fluid" />
  </div>

  <div class="container MittelDesignJustify">
    <div class="moodboard-header">Branding</div>
    <div class="row row-cols-auto justify-content-left">
      <div class="cal">
        <div class="row justify-content-center my-5">
          <div class="sections-texts">
            <p>
              I positioned the branding on the top of the box for increased
              visibility. Additionally, I embossed the branding onto the side
              connections.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col text-center margin-between-sections">
    <img v-lazy="InbusFaded" alt="Bild" class="img-fluid" />
  </div>

  <div class="container MittelDesignJustify">
    <div class="row row-cols-auto justify-content-left">
      <div class="cal">
        <div class="row justify-content-center my-5">
          <div class="sections-texts">
            <p>Transparent flap for presenting the keys.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="col text-center margin-between-sections">
    <img v-lazy="Inbusplastik" alt="Bild" class="img-fluid" />
  </div>
</template>

<script setup lang="ts">
//import { ref } from "vue";
//Vue.Project
import IDP2DesignGoal from "./IDP2DesignGoal.vue";

//Problem

import Problems from "../../../assets/images/IDimages/Inbus/ProblemINBUS.png";

//Brainstorming

import Brainstorming from "../../../assets/images/IDimages/Inbus/Brainstorming/Brainstorming.png";

//Modell

import Inbus1 from "../../../assets/images/IDimages/Inbus/Kon_Konsolid/INBUS1.png";
import Inbus2 from "../../../assets/images/IDimages/Inbus/Kon_Konsolid/INBUS2.png";
import Inbus3 from "../../../assets/images/IDimages/Inbus/Kon_Konsolid/INBUS3.png";

// Model Making

import ModelCNCclose from "../../../assets/images/IDimages/Inbus/Modell_Making/ModelCNCclose.svg";
import ModelCNCopen from "../../../assets/images/IDimages/Inbus/Modell_Making/ModelCNCopen.svg";
import ModelPrintopen from "../../../assets/images/IDimages/Inbus/Modell_Making/ModelPrintopen.svg";
import ModelPrintclose from "../../../assets/images/IDimages/Inbus/Modell_Making/ModelPrintclose.svg";

// Rendering

import InbusOneShot from "../../../assets/images/IDimages/Inbus/Renderings/InbusOneShot.png";
import InbusFaded from "../../../assets/images/IDimages/Inbus/Renderings/InbusFaded.png";
import Inbusplastik from "../../../assets/images/IDimages/Inbus/Renderings/InbusPlastik.png";
</script>

<style lang="scss" scoped>

* {
  color: #000800cc !important;
}

.moodboard-header {
  font-weight: 600;
  font-size: 22px;
  color: rgba(27,27,27,0.6);
}

.h-background-avatar {
  width: 100%;
  height: auto;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(175,175,175,1) 100%);
  //margin-top: 120px;
}

.max-height-img {
  max-height: 600px;
  /* Hier die maximale Höhe in Pixeln festlegen */
  width: auto;
  /* Damit das Bild weiterhin proportional skaliert wird */
  margin-top: 20px;
  /* Hier den oberen Seitenabstand in Pixeln festlegen */
}

.MittelDesignJustify {
  max-width: 800px;
  margin-top: 120px;
}

.margin-between-sections {
  margin-top: 75px;
}

.MoodBoardID {
  max-width: 470px;
}

.MoodBoardIDcolor {
  background-color: rgba(123, 123, 123, 1);
}

.ModelBackgroudColor {
  background-color: rgba(47, 47, 47, 1);
}

.MoodBoardIDpadding {
  padding-top: 35px;
  padding-bottom: 35px;
}

.BigMargin {
  margin-top: 175px;
}

.coolman {
  max-width: 100%;
  max-height: 280px;
  margin-left: auto;
}

.container1 {
  //justify-items: center;
  //  justify-content: center;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 25px;
}

.item {
  border: 1px solid black;
}

.item3 {
  grid-column: 2/4;
  grid-row: 1/3;
}

.sections-texts {
  margin-top: 36px;
  font-size: 18px;
  font-weight: 400;
  color: #000800cc !important;
}
</style>
