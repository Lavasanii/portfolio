<template>
  <div class="container" style="max-width: 800px">
    <div class="h1 contact-title">Contact</div>

    <p class="contact-intro">
      I'm currently open to Senior UX/UI Designer roles. If you're hiring, have
      a project in mind, or just want to talk about design and frontend — write
      me. I usually reply within a day.
    </p>

    <div class="row mt-5">
      <div class="col-12 col-md-6 mb-4" v-for="c in contactItems" :key="c.id">
        <div class="contact-label">{{ c.label }}</div>
        <a
          v-if="c.link"
          :href="c.link"
          :target="c.external ? '_blank' : '_self'"
          class="contact-value"
        >
          {{ c.value }}
        </a>
        <div v-else class="contact-value contact-value-plain">
          {{ c.value }}
        </div>
      </div>
    </div>

    <div class="mt-4 mb-5">
      <a
        href="https://slavasani.com/Lebenslauf_Saeid_Farajollahlavasani.pdf"
        target="_blank"
      >
        <button class="orange-button">Download CV</button>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface contactItemsInterface {
  id: number;
  label: string;
  value: string;
  link?: string;
  external?: boolean;
}

const contactItems = ref<contactItemsInterface[]>([
  {
    id: 0,
    label: "Email",
    value: "s_f_lavasani@yahoo.com",
    link: "mailto:s_f_lavasani@yahoo.com",
  },
  {
    id: 1,
    label: "LinkedIn",
    value: "saeid-farajollahlavasani",
    link: "https://www.linkedin.com/in/saeid-farajollahlavasani/",
    external: true,
  },
  {
    id: 2,
    label: "Location",
    value: "North Rhine-Westphalia, Germany",
  },
  {
    id: 3,
    label: "Languages",
    value: "German, English, Persian",
  },
]);
</script>

<style lang="scss" scoped>
* {
  color: #000800cc;
}

.contact-title {
  margin-top: 120px;
  margin-bottom: 40px;
  padding-bottom: 25px;
  color: #296879 !important;
  border-bottom: 3px solid #296879 !important;
}

.contact-intro {
  font-size: 18px;
  font-weight: 400;
  max-width: 620px;
}

.contact-label {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: rgba(27, 27, 27, 0.6);
  margin-bottom: 6px;
}

.contact-value {
  font-size: 18px;
  text-decoration: none;
  border-bottom: 1px solid rgba(41, 104, 121, 0.4);
  transition: border-color 0.2s ease;
}

.contact-value:hover {
  border-bottom-color: #296879;
}

.contact-value-plain {
  border-bottom: none;
}

.orange-button {
  background-color: orange;
  width: 180px;
  height: 45px;
  border-radius: 7px;
  border: none;
  margin-top: 25px;
}
</style>
