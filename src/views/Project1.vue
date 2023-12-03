<template>
  <Project1HeaderImage></Project1HeaderImage>
  <div class="container" style="max-width: 800px">
    <div class="h2 mt-5 text-center">
      A code - Learning platform Rubrik's Code
    </div>
    <div class="h6 text-center" style="font-weight: 300">
      <strong>Duration of the project: </strong> 3 weeks |
      <strong>prototyping Type: </strong>individual work
    </div>
    <div class="h3 overview-text text-uppercase">Overview</div>
    <div class="margin-between-sections" v-for="s in section1Items" :key="s.id">
      <div class="sections-title">{{ s.title }}</div>
      <div class="sections-texts"><span v-html="s.text"></span></div>
    </div>
  </div>
  <Project1Process class="margin-between-sections"></Project1Process>
  <Project1Discover></Project1Discover>
  <Project1Define></Project1Define>
  <Project1Ideation></Project1Ideation>
  <Project1Design></Project1Design>
  <Project1Prototype></Project1Prototype>
  <video class="mx-auto d-block videoWidth" controls>
    <source :src="testvideo1" type="video/mp4" />
  </video>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Project1HeaderImage from "../components/project1-components/Project1HeaderImage.vue";
import Project1Process from "../components/project1-components/Project1Process.vue";
import Project1Discover from "../components/project1-components/Project1Discover.vue";
import Project1Define from "../components/project1-components/Project1Define.vue";
import Project1Ideation from "../components/project1-components/Project1Ideation.vue";
import Project1Design from "../components/project1-components/Project1Design.vue";
import Project1Prototype from "../components/project1-components/Project1Prototype.vue";
import testvideo1 from "../assets/videos/testvideo1.mp4";

interface sectionsInterfaces {
  id: number;
  title: string;
  text: string;
}

const section1Items = ref<sectionsInterfaces[]>([
  {
    id: 0,
    title: "Project background",
    text: `I decided to undertake this project due to my passion for coding. The popularity of learning platforms nowadays has led to intense competition amongst them. Younger people and students, in particular, desire a quick comparison of website options and offerings. Having a clear and user-friendly user interface can be exceedingly helpful in this regard. 
    <br />
    Rubrik's Code is a small startup established by an experienced software developer. Our aim is to accelerate and optimize Machine Learning (ML) education. To achieve this goal, our unique approach makes the steps in the learning process more understandable.
    <br />
    Our website is divided into two primary sections. Part one focuses on learning machine learning with Python using textbooks. Part two consists of lessons on learning machine learning with C# through videos. The structure is designed to ensure that each step builds on the previous one and provides a deeper understanding.
    <br />
    The lessons are carefully designed to first introduce essential concepts, such as Mathematics for Machine Learning, and then proceed to coding and more advanced steps. This approach ensures that learning is efficient and practical, and allows for a step-by-step building process.`,
  },
  {
    id: 1,
    title: "Problem",
    text: `<ol>
  <li>cluttered interface: if the site has too many elements, text, or images on a page, it can be cluttered and difficult to navigate.</li>
  <li>inconsistent design: inconsistent use of colors, fonts, and layouts can detract from the visual appearance and interfere with the user experience.</li>
  <li>unresponsive design: an outdated or unresponsive design can turn users off and cause them to leave the site.</li>
  <li> Difficult navigation: An unclear or confusing navigation structure can make it difficult for users to find the information they need.</li>  
  </ol> `,
  },
  {
    id: 2,
    title: "The Goal",
    text: "Redesigning the exisiting website for better using and aquising more costumers",
  },
  {
    id: 3,
    title: "Responsibilities",
    text: "User reasearch, Wire friming and visual design",
  },
  {
    id: 4,
    title: "Tools",
    text: "Google Forms, Figma ",
  },
  {
    id: 5,
    title: "The Process",
    text: "My process will be different in different projects and will be determined by many factors such as the project goals, business needs, complexity of the problem, time, etc. Here I'll describe my process for solving this problem.",
  },
]);
</script>

<style lang="scss" scoped>
* {
  color: #000800cc !important;
}

.overview-text {
  margin-top: 90px;
  font-weight: 600;
  opacity: 0.6;
}

.margin-between-sections {
  margin-top: 72px;
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

@media only screen and (max-width: 500px) {
  .videoWidth {
    width: 200px;
  }
}

@media only screen and (max-width: 1100px) {
  .videoWidth {
    width: 500px;
  }
}

@media only screen and (min-width: 1100px) {
  .videoWidth {
    width: 1000px;
  }
}
</style>
