<template>
  <CodingHeaderImage></CodingHeaderImage>
  <div class="container" style="max-width: 800px">
    <div class="h2 mt-5 text-center">Coding Projects</div>
    <!-- <div class="h6 text-center" style="font-weight: 300">
      <strong>Duration of the project: </strong> 12 weeks |
      <strong>prototyping Type: </strong>individual work
      <br />
      Coding TEST
      <br />
    </div> -->
    <div class="h3 overview-text text-uppercase">Overview</div>
    <div class="margin-between-sections" v-for="s in section1Items" :key="s.id">
      <div class="sections-title">{{ s.title }}</div>
      <div class="sections-texts"><span v-html="s.text"></span></div>
    </div>
  </div>

  <IDProject2Process class="margin-between-sections"></IDProject2Process>

  <div class="container" style="max-width: 800px">
    <!-- <div class="row justify-content-center mt-5">
      <div class="margin-between-sections" v-for="Item in ID_Liste" :key="Item.id">
        <div class="sections-title">{{ Item.title }}</div>
        <div class="sections-texts"><span v-html="Item.text"></span></div>
      </div>

    </div> -->
  </div>
  <div id="app" class="mt-5">
    <GridCal></GridCal>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";
import CodingHeaderImage from "../components/Coding/CodingHeaderImage.vue";
import GridCal from "../components/Coding/GridCal.vue";

interface sectionsInterfaces {
  id: number;
  title: string;
  text: string;
}

const section1Items = ref<sectionsInterfaces[]>([
  // {
  //   id: 0,
  //   title: "Project background",
  //   text: `Development of an arrangement principle for exclusively
  //   INBUS angle wrenches in a box or holder..
  //   <br />`

  //   ,
  // },
  {
    id: 0,
    title: "Task Define",
    text: `Develop a one-page application that retrieves a list of users from an API (mocked fetch) 
    and displays them in a table. The table should have sortable columns for name, email, birthdate, 
    and age (calculated from birthdate). Additionally, implement pagination to display a limited number of users per page.
    Make sure the table design is responsive. Include filters to search and filter users by name, email, or age.
    <br />
    <br>
    Requirements:
    <br/>
    <ul style="margin-top:18px">
    <li><span style="font-weight:500;">Use Vue with TypeScript for building the application.</span></li>
    <li><span style="font-weight:500;">Use Vue Hooks for managing state and side effects.</span></li>
    <li><span style="font-weight:500;">Mock the fetch function to retrieve user data.</span></li>
    <li><span style="font-weight:500;">Display user data in a table with sortable columns (ascending and descending).</span></li>
    <li><span style="font-weight:500;">Implement pagination to display a limited number of users per page (e.g., 10 users per
    page).</span></li>
    <li><span style="font-weight:500;">Create an aesthetically pleasing UI design for the users' page (we recommend using PrimeVue as
    external UI library).</span></li>
    </ul>
    <br>
    I found an API that includes names, emails, and birthdates. To implement 
    it, I used PrimeVue for the UI library and Moment.js for age calculation. 
    The complete code can be found in my GitHub repository.
    <a href="https://github.com/Lavasanii/GridCal">https://github.com/Lavasanii/GridCal</a>
    <br/>`
  
  }
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
</style>
