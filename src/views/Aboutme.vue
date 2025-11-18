<template>
  <div class="container">
    <div class="row justify-content-lift" style="margin-top: 40px">
      <div class="col-12 text-start mb-5">
        <img :src="saeidImageAboutme" :alt="saeidImageAboutme" class="rounded img-fluid" style="max-width: 100%; width: 800px;" />
      </div>
      <div class="col-6">
        <p class="mt-4 text-start">
         Over the past years, I have significantly expanded my technical capabilities through hands-on practice and the rapid evolution
         of AI-assisted development.Today, I can not only design user interfaces but also implement them using modern frontend technologies such as
        Vue.js, JavaScript, Webflow, and Supabase.
        </p>
        <p class="mt-4 text-start">
         I naturally identify meaningful problems, dive into new topics independently,
         and learn quickly until I can turn ideas into functional, well-designed solutions.
         This approach comes from my industrial design background, where every project started with 
         understanding real pain points before generating ideas and building working prototypes.
        </p>
           <p class="mt-4 text-start">
         I enjoy operating in the space between design and engineering—collaborating with both teams or delivering end-to-end solutions myself.
         This makes me a versatile hybrid profile, often described as a “unicorn” who brings together UX, UI, 
         prototyping, and frontend implementation in one role.
        </p>
           <p class="mt-4 text-start">
         Currently, I am designing and developing my own portfolio with Vue.js, applying the same process 
         I use in professional projects: clear UX structure, a strong visual identity, and clean, maintainable implementation.
        </p>
        <div class="mt-4">
          <a href="https://slavasani.com/Lebenslauf_Saeid_Farajollahlavasani.pdf" target="_blank">
            <button class="orange-button">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import saeidImageAboutme from "../../src/assets/images/AboutMe/AboutMe.jpeg";

</script>

<style lang="scss" scoped>
.orange-button {
  background-color: orange;
  width: 180px;
  height: 45px;
  border-radius: 7px;
  border: none;
  margin-top: 25px;
}

//div {
//border: dashed;
//}
</style>
