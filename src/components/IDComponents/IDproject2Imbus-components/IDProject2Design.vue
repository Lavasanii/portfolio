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
            <img :src="Problems" alt="Bild" class="img-fluid" />
            <div class="col text-center mt-4">
              Research into the packaging of Inbus products, both from the Inbus brand and other brands. <br />
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
  <div class="container moodboard-header MittelDesignJustify mb-5">Design Goals</div>

  <IDP2DesignGoal class="margin-between-sections"></IDP2DesignGoal>

  <div class="container MittelDesignJustify">
    <div class="moodboard-header">Brainstorming</div>
    <div class="row row-cols-auto justify-content-left">
      <div class="cal">
        <div class="row justify-content-center my-5">
        </div>
      </div>
    </div>
  </div>

  <div class="MoodBoardIDcolor">
    <div class="container" style="max-width: 950px">

      <!-- style="padding: 0; margin: 0; -->
      <!-- style="width: 100%;" -->

      <div class="row justify-content-center">
        <div class="col-4">
        <div class="row ">
          <div class="col-12 "> <img :src="Skizze1" alt="Bild"  class="coolman" /> </div>
        <div class="col-12"> <img :src="Skizze2" alt="Bild"   class="coolman" /></div>
      </div>
        </div>

        <div class="col-8"> <img :src="Skizze3" alt="Bild" class="object-fit-cover" style="max-height: 560px; max-width:100% ;" />
        </div>

      </div>

    </div>

  </div>
  <div class="w-100"></div>


  <div class="container MittelDesignJustify">
    <div class="row row-cols-auto justify-content-left">
      <div class="cal">
        <div class="moodboard-header">Consolidated Concepts</div>
        <div class="row justify-content-center my-5">
        </div>
      </div>
    </div>
  </div>


  <div class="container" style="max-width: 500px">
    <div class="row"><img :src="RundKanten" alt="Bild" class="img-fluid " style="width: 100%;" />
      <p>Instead of the sharp edges and diamond-cut design, we introduced rounded edges
        because they better fit the design language of Bodum.
      </p>
    </div>
    <div class="row">
      <div class="col-6"> <img :src="DiamondCut" alt="Bild" class="img-fluid " style="width: 100%;" />
        <p>Diamond cutting and large radii, in addition to sharp edges,
          render this product unsuitable for use with Bodum
        </p>
      </div>
      <div class="col-6"> <img :src="KonKleinR" alt="Bild" class="img-fluid " style="width: 100%;" />
        <p>Smooth curves and rounded edges</p>
      </div>
    </div>
  </div>

  <!-- Malmir Code:  -->


  <!-- <div class="container">

  <div class="row"><img :src="KonKonzept" alt="Bild" class="img-fluid " style="width: 100 %;" />
    <p>fafafaf</p>
  
  </div>

  <div class="row">
  
    <div class="col-6">  <img :src="DiamondCut" alt="Bild" class="img-fluid " style="width: 100 %;" />
    <p>fafafaf</p> 
    </div>

    <div class="col-6"> <img :src="RundKanten" alt="Bild" class="img-fluid " style="width: 100 %;" /> </div>

  </div>
 </div> -->



  <div class="container MittelDesignJustify">
    <div class="row row-cols-auto justify-content-left">
      <div class="cal">
        <div class="moodboard-header">Model making</div>
        <div class="row justify-content-center my-5">
        </div>
      </div>
    </div>
  </div>

  <div class="container" style="max-width: 500px">
    <div class="row mb-4"> <img :src="Bauteile" alt="Bild" class="img-fluid " style="width: 100%;" />
    </div>
    <div class="row">
      <div class="col-6"> <img :src="CNC1" alt="Bild" class="img-fluid " style="width: 100%;" />
      </div>
      <div class="col-6"> <img :src="CNC2" alt="Bild" class="img-fluid " style="width: 100%;" />
      </div>
    </div>
    <p class="text-center">CNC Milled Model</p>
  </div>

  <!-- Sample by Me -->
  <!-- <div class="container" style="max-width: 500px">
    <div class="row mb-4" >
     <p> Instead of the sharp edges and diamond-cut design, we introduced rounded edges
      because they better fit the design language of Bodum.</p>

      <img :src="RundKanten" alt="Bild" class="img-fluid " style="width: 100%;" />
    </div>

    <div class="row">
      <div class="col-6"> <img :src="DiamondCut" alt="Bild" class="img-fluid " style="width: 100%;" />
        <p class="mt-4">Diamond cutting and large radii, in addition to sharp edges,
          render this product unsuitable for use with Bodum
        </p>
      </div>

      <div class="col-6"> <img :src="KonKleinR" alt="Bild" class="img-fluid " style="width: 100%;" />
        <p class="mt-4">Smooth curves and rounded edges</p>
      </div>
    </div>
  </div> -->
  <div class="container MittelDesignJustify">
    <div class="moodboard-header">Boolean graphic</div>
    <div class="row row-cols-auto justify-content-left">
      <div class="cal">
        <div class="row justify-content-center my-5">
        </div>
      </div>
    </div>
  </div>
  <div>
    <div class="col text-center">
      <img :src="BoolianGrafik" alt="Bild" class="img-fluid " />
    </div>
  </div>

  <div class="container MittelDesignJustify">
    <div class="moodboard-header">Boolean graphic</div>
    <div class="row row-cols-auto justify-content-left">
      <div class="cal">
        <div class="row justify-content-center my-5">
        </div>
      </div>
    </div>
  </div>


  <div class="ModelBackgroudColor MoodBoardIDpadding BigMargin ">
    <div class="container my-5" style="max-width: 900px">

      <div class="row mb-2">
        <div class="col-8"> <img :src="Test2" alt="Bild" class="img-fluid" style="width: 100%; height:100%;"> </div>
        <div class="col-4"> <img :src="Test" alt="Bild" class="img-fluid" style="width: 100%; height:100%;"> </div>
      </div>

      <div class="row">
        <div class="col-4"> <img :src="Test1" alt="Bild" class="img-fluid" style="width: 100%; height:100%;"> </div>
        <div class="col-8"> <img :src="Test3" alt="Bild" class="img-fluid" style="width: 100%; height:100%;"> </div>
      </div>
    </div>
  </div>


  <div class="col text-center margin-between-sections ">
    <img :src="ContBathroom" alt="Bild" class="img-fluid " />
  </div>

  <div class="col text-center margin-between-sections">
    <img :src="WaageBathroom" alt="Bild" class="img-fluid " />
  </div>
</template>

<script setup lang="ts">
//import { ref } from "vue";
//Vue.Project 
import IDP2DesignGoal from "./IDP2DesignGoal.vue";

//Problem

import Problems from "../../../assets/images/IDimages/Inbus/ProblemINBUS.svg";

//Brainstorming

import Skizze1 from "../../../assets/images/IDimages/Inbus/Brainstorming/Skizze1.svg";
import Skizze2 from "../../../assets/images/IDimages/Inbus/Brainstorming/Skizze2.svg";
import Skizze3 from "../../../assets/images/IDimages/Inbus/Brainstorming/Skizze3.svg";


//Modell 

//import Inbus1 from "../../../assets/images/IDimages/Inbus/";
import DiamondCut from "../../../assets/images/IDimages/Bodum/Kon_Konsolid/RendEckig.svg";
import RundKanten from "../../../assets/images/IDimages/Bodum/Kon_Konsolid/RendRund.svg";



// Model Making 

import CNC1 from "../../../assets/images/IDimages/Bodum/Modell_Making/CNC1N.svg";
import CNC2 from "../../../assets/images/IDimages/Bodum/Modell_Making/CNC2N.svg";
import Bauteile from "../../../assets/images/IDimages/Bodum/Modell_Making/BestandteileV1.svg";

import BoolianGrafik from "../../../assets/images/IDimages/Bodum/BoolianGrafik.png";

//Modell

import Test from "../../../assets/images/IDimages/Bodum/Modell/Test.svg";
import Test1 from "../../../assets/images/IDimages/Bodum/Modell/Test1.svg";
import Test2 from "../../../assets/images/IDimages/Bodum/Modell/Test3.svg";
import Test3 from "../../../assets/images/IDimages/Bodum/Modell/Test4.svg";

// Rendering

import ContBathroom from "../../../assets/images/IDimages/Bodum/RenderingBodum/ContBathroom.png";
import WaageBathroom from "../../../assets/images/IDimages/Bodum/RenderingBodum/WaageBathroom.png";

</script>

<style lang="scss" scoped>
@import "../../../scss/theme.scss";

* {
  color: $project1-text-color !important;
}

.moodboard-header {
  font-weight: 600;
  font-size: 22px;
  color: $project1-design-Headers-color;
}

.h-background-avatar {
  width: 100%;
  height: auto;
  background: $ID-Project1-background;
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
</style>
