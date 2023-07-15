<template>
  <footer class="footer mt-4">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col my-2">
          <a
            v-for="s in socialItems"
            :key="s.id"
            :href="s.linkToSocial"
            target="_blank"
            class="mx-2"
          >
            <img :src="s.iconSrc" :alt="s.name" width="32" height="32" />
          </a>
        </div>
        <div class="w-100"></div>
        <div class="col my-2">
          <p>
            &copy; {{ new Date().getFullYear() }} - Saeid Farajollahlavasani
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
    iconSrc: "../../public/icons/linkedin.svg",
    linkToSocial: "https://www.linkedin.com/in/saeid-farajollahlavasani/",
  },
  {
    id: 1,
    name: "Facebook",
    iconSrc: "../../public/icons/facebook.svg",
    linkToSocial: "https://www.facebook.com/saeid.lavasani",
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
