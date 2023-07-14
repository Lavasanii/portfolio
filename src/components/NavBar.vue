<template>
  <nav
    class="navbar navbar-expand-lg bg-body-tertiary nav-background-color-variable"
  >
    <div class="container">
      <div class="navbar-brand nav-title-custom">Saeid Farajollahlavasani</div>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul class="navbar-nav">
          <li class="nav-item" v-for="n in navItems" :key="n.id">
            <router-link class="nav-link nav-items-custom" :to="n.link">
              {{ n.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface navItemsInterface {
  id: number;
  name: string;
  link: string;
}

const navItems = ref<navItemsInterface[]>([
  {
    id: 0,
    name: "Home",
    link: "/",
  },
  {
    id: 1,
    name: "About me",
    link: "/aboutme",
  },
  {
    id: 2,
    name: "Kontakt",
    link: "/contact",
  },
  {
    id: 2,
    name: "Industrial Design",
    link: "/industrial-design",
  },
]);
</script>

<style lang="scss" scoped>
@import "../scss/theme.scss";

.nav-background-color-variable {
  background-color: $navBar-background-color !important;
}

.nav-title-custom {
  color: $navBar-items-color;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
}

.nav-items-custom {
  color: $navBar-items-color;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
}
</style>
