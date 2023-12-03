<template>
  <footer class="footer pt-5 pb-2" style="margin-top: 80px">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col my-2">
          <p class="h6">
            &copy; {{ new Date().getFullYear() }} - Saeid Farajollahlavasani
          </p>
          <div class="col my-4">
            <a
              v-for="s in socialItems"
              :key="s.id"
              :href="s.linkToSocial"
              target="_blank"
              class="mx-2"
            >
              <img :src="s.iconSrc" :alt="s.name" width="25" height="25" />
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
import linkedin from "../assets/icons/linkedin.svg";
import Instagram from "../assets/icons/Instagram.svg";
import mail from "../assets/icons/mail.svg";

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
  {
    id: 3,
    name: "Mail",
    iconSrc: mail,
    linkToSocial: "mailto:s_f_lavasani@yahoo.com",
  },
]);
</script>

<style lang="scss">

.footer {
  bottom: 0;
  width: 100%;
  background-color: #2e555245;
  color: #000000;
  text-align: center;
}
</style>
