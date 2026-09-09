<template>
  <div class="container" style="max-width: 900px">
    <div class="h1 about-title">About me</div>

    <div class="row justify-content-start">
      <div class="col-12 mb-5">
        <img
          :src="saeidImageAboutme"
          alt="Saeid Farajollahlavasani at his desk"
          class="rounded img-fluid"
          style="max-width: 100%; width: 800px"
        />
      </div>

      <div class="col-12 col-md-7">
        <p class="about-text text-start">
          Over the past few years, I've expanded my technical skill set through
          hands-on experience and the rapid evolution of modern development
          tools. Today, I can not only design user-friendly interfaces but also
          implement them using modern frontend technologies like Vue.js,
          JavaScript, Webflow, and Supabase.
        </p>
        <p class="about-text text-start">
          My strength lies in quickly identifying meaningful problems, diving
          into new topics, and turning ideas into functional solutions—much like
          I did in my industrial design background. There, every project started
          with a deep understanding of user needs before generating ideas and
          building working prototypes.
        </p>
        <p class="about-text text-start">
          I work in the space between design and engineering—whether
          collaborating with design or dev teams or delivering end-to-end
          solutions myself. In practice that means I can hand over a Figma file,
          discuss its technical feasibility with the developers, and build parts
          of it myself when that's the faster route.
        </p>
        <p class="about-text text-start">
          This portfolio is one example: designed and developed by me in Vue.js,
          using the same process I apply to professional projects—clear UX
          structure, a strong visual identity, and clean, maintainable
          implementation.
        </p>

        <div class="mt-4">
          <a
            href="https://slavasani.com/Lebenslauf_Saeid_Farajollahlavasani.pdf"
            target="_blank"
            class="cv-button"
          >
            Download CV
          </a>
        </div>
      </div>

      <div class="col-12 col-md-5">
        <div class="fact-block" v-for="f in factItems" :key="f.id">
          <div class="fact-label">{{ f.label }}</div>
          <div class="fact-value">{{ f.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import saeidImageAboutme from "../../src/assets/images/AboutMe/AboutMe.jpeg";

interface factItemsInterface {
  id: number;
  label: string;
  value: string;
}

const factItems = ref<factItemsInterface[]>([
  {
    id: 0,
    label: "Currently",
    value: "Open to Senior UX/UI Designer roles",
  },
  {
    id: 1,
    label: "Design",
    value: "Figma, Sketch, Material Design 3, Apple HIG",
  },
  {
    id: 2,
    label: "Frontend",
    value: "Vue.js, TypeScript, JavaScript, SCSS, Webflow, Supabase",
  },
  {
    id: 3,
    label: "Background",
    value: "Industrial design — research, prototyping, CAD, 3D rendering",
  },
  {
    id: 4,
    label: "Languages",
    value: "German, English, Persian",
  },
  {
    id: 5,
    label: "Based in",
    value: "North Rhine-Westphalia, Germany",
  },
]);
</script>

<style lang="scss" scoped>
* {
  color: #000800cc;
}

.about-title {
  margin-top: 120px;
  margin-bottom: 50px;
  padding-bottom: 25px;
  color: #296879 !important;
  border-bottom: 3px solid #296879 !important;
}

.about-text {
  margin-top: 24px;
  font-size: 18px;
  font-weight: 400;
}

.fact-block {
  margin-top: 24px;
  padding-left: 18px;
  border-left: 3px solid rgba(41, 104, 121, 0.35);
}

.fact-label {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: rgba(27, 27, 27, 0.6);
  margin-bottom: 4px;
}

.fact-value {
  font-size: 16px;
  font-weight: 400;
}

.cv-button {
  display: inline-block;
  background-color: #e17c2f;
  color: #ffffff !important;
  width: 180px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  border-radius: 7px;
  border: none;
  margin-top: 25px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
}

.cv-button:hover {
  background-color: #c96a24;
  color: #ffffff !important;
}

.cv-button:active {
  transform: translateY(1px);
}
</style>
