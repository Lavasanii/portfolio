<template>
  <div class="container">
    <div class="row justify-content-lift" style="margin-top: 40px">
      <div class="col-12 text-start mb-5">
        <img :src="saeidImageAboutme" :alt="saeidImageAboutme" class="rounded img-fluid" style="max-width: 100%; width: 800px;" />
      </div>
      <div class="col-6">
        <p class="mt-4 text-start">
        Over the past few years, I've expanded my technical skill set 
        through hands-on experience and the rapid evolution of modern development tools. Today,
        I can not only design user-friendly interfaces but also implement them using modern frontend technologies 
        like Vue.js, JavaScript, Webflow, and Supabase.
        </p>
        <p class="mt-4 text-start">
        My strength lies in quickly identifying meaningful problems, diving into new topics, 
        and turning ideas into functional solutions—much like I did in my industrial design background.
        There, every project started with a deep understanding of user needs before generating ideas 
        and building working prototypes.
        </p>
           <p class="mt-4 text-start">
        I thrive in the space between design and engineering—whether collaborating with design or
        dev teams or delivering end-to-end solutions myself. This versatility has earned me the 
        reputation of a "unicorn," someone who integrates UX, UI, prototyping, and frontend 
        implementation into one seamless role.
        </p>
           <p class="mt-4 text-start">
         Currently, I am designing and developing my own portfolio with Vue.js, applying the same process 
         I use in professional projects: clear UX structure, a strong visual identity, and clean, maintainable implementation.
        </p>
            <p class="mt-4 text-start">
        Through continuous learning and applying new technologies,
        I am always expanding my skill set and enhancing the solutions I can offer.
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
