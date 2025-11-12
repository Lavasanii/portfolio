<template>
  <Project3Header></Project3Header>
  <div class="container" style="max-width: 800px">
    <div class="h2 mt-5 text-center">
      Saeid Test
    </div>
    <div class="h6 text-center" style="font-weight: 300">
      <strong>Duration of the project: </strong> 2 weeks |
      <strong>prototyping Type: </strong>individual work
    </div>
    <div class="h3 overview-text text-uppercase">Overview</div>
    <div class="margin-between-sections" v-for="s in section1Items" :key="s.id">
      <div class="sections-title">{{ s.title }}</div>
      <div class="sections-texts"><span v-html="s.text"></span></div>
    </div>
  </div>
  <Project3Process class="margin-between-sections"></Project3Process>
  <Project3Discover></Project3Discover>
  <Project3Define></Project3Define>
  <Project3Ideation></Project3Ideation>
  <Project3Design></Project3Design>
  <Project3Prototype></Project3Prototype>
  <video class="mx-auto d-block videoWidth" controls>
    <source :src="CatchEatVideo" type="video/mp4" />
  </video>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Project3Header from "../components/project3-components/Project3HeaderImage.vue";
import Project3Process from "../components/project2-components/Project2Process.vue";
import Project3Discover from "../components/project2-components/Project2Discover.vue";
import Project3Define from "../components/project2-components/Project2Define.vue";
import Project3Ideation from "../components/project2-components/Project2Ideation.vue";
import Project3Design from "../components/project2-components/Project2Design.vue";
import Project3Prototype from "../components/project2-components/Project2Prototype.vue";
import CatchEatVideo from "../assets/videos/CatchEatVideo.mp4";

interface sectionsInterfaces {
  id: number;
  title: string;
  text: string;
}
const section1Items = ref<sectionsInterfaces[]>([
  {
    id: 0,
    title: "Project background",
    text: `<p>In my environment, I observe many programmers who spend most of their working day in front of their laptop or PC and hardly move. They usually order their food online and have it delivered. This pattern repeats itself every day, five days a week. This inactivity can lead to health problems such as back pain and stomach problems, and their eyes suffer as well.</p>
    <p>That's why I came up with the idea of an app that addresses this problem. The app allows users to order food and pick it up in person. This way, they could briefly get fresh air, exercise, and save on delivery time.</p>
    <p>The app offers a variety of healthy meals from local restaurants. Users can easily place orders through the app, adjust the pickup time to fit their break, and enjoy high-quality food. Rewards could further motivate them to maintain healthy habits.</p>
    <p>This app would not only improve physical health, but also quality of life. By addressing the challenges of the modern workday, it promotes a more balanced lifestyle.</p>`,
  },
  {
    id: 1,
    title: "Problem",
    text: `<ul>
    <li> <span style="font-weight:600;"> Lack of movement: </span> People who spend long hours in front of computers, such as programmers, researchers, designers, gamers, film editors, etc., often don't move enough while working, which can lead to back pain and eye strain.</li>
    <li> <span style="font-weight:600;"> Eating habits: </span> This group often has unhealthy eating habits, ordering greasy meals and paying little attention to quality.</li>
    <li> <span style="font-weight:600;"> Fresh air and relaxation: </span> While working, many people feel stressed and tired because of a lack of oxygen to the brain. Fresh air is essential for relaxation.</li>
    <li> <span style="font-weight:600;"> Unnecessary waste production:</span> Orders generate a lot of packaging waste and contribute to environmental pollution. 
  </ul> `,
  },
  {
    id: 2,
    title: "The Goal",
    text: "Designing an app that encourages people to move during their work breaks by personally picking up their ordered meals. This helps break the sedentary work style and promotes physical activity.",
  },
  {
    id: 3,
    title: "Responsibilities",
    text: "User reasearch, Wire friming and visual design",
  },
  {
    id: 4,
    title: "Tools",
    text: "Figma, Photoshop , Illustrator ",
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
