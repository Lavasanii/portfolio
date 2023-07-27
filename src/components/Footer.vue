<template>
  <footer class="footer mt-4 pt-5 pb-2">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col my-2">
          <p class="h6">
            &copy; {{ new Date().getFullYear() }} - Saeid Farajollahlavasani
          </p>
          <div class="col my-4">
            <a v-for="s in socialItems" :key="s.id" :href="s.linkToSocial" target="_blank" class="mx-2">
              <img :src="s.iconSrc" :alt="s.name" width="32" height="32" />
            </a>
          </div>
          <div class="w-100"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import linkedin from "../assets/icons/linkedin.svg"
import Instagram from "../assets/icons/Instagram.svg"


interface socialItemsInterface {
  id: number;
  name: string;
  iconSrc: string; // I used icons as images, so here is the link to icons in svg format.
  linkToSocial: string;
}

const socialItems = ref<socialItemsInterface[]>([
  {
    id: 0,
    name: "linkedin",
    iconSrc: linkedin,
    linkToSocial: "https://www.linkedin.com/in/saeid-farajollahlavasani/",
  },
  {
    id: 1,
    name: "Instagram",
    iconSrc: Instagram,
    linkToSocial: "https://www.instagram.com/saeid_lavasani/",
  },
]);
</script>

<style lang="scss">
@import "../scss/theme.scss";

.footer {
  bottom: 0;
  width: 100%;
  background-color: $footer-background-color;
  color: $footer-items-color;
  text-align: center;
}
</style>
