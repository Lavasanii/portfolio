<template>
  <nav class="navbar navbar-expand-lg fixed-top nav-background-color-variable">
    <div class="container">
      <!-- <div class="navbar-brand nav-title-color" onclick="window.location.href = 'http://example.com'">Saeid Farajollahlavasani</div> -->
      <a href="/" class="navbar-brand nav-title-color">Saeid Farajollahlavasani</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul class="navbar-nav">
          
          <li class="nav-item" v-for="n in navItems" :key="n.id">
            
            <router-link v-if="n.active" class="nav-link nav-items-color" :to="n.link" :class="{
              'industrial-design-button': n.name === 'Industrial Design',
            }">
              {{ n.name }}
            </router-link>
            
            <div v-else class="nav-link nav-deactive-items-color">
              {{ n.name }}
            </div>
          
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
  active: boolean;
}

const navItems = ref<navItemsInterface[]>([
  {
    id: 0,
    name: "Home",
    link: "/",
    active: true,
  },
  {
    id: 1,
    name: "About me",
    link: "/aboutme",
    active: true,
  },
  {
    id: 2,
    name: "Contact",
    link: "/contact",
    active: true,
  },
  {
    id: 3,
    name: "Code",
    link: "/CodingProjectsVue",
    active: true,
  },
  {
    id: 4,
    name: "Industrial Design",
    link: "/IDHome",
    active: true,
  },

]);
</script>

<style lang="scss" scoped>
.nav-background-color-variable {
  background-color: #c6d1d0 !important;
}

.nav-title-color {
  color: #000000;
}

.nav-items-color {
  color: #000000;
}

.nav-deactive-items-color {
  color: #666666;
}

.industrial-design-button {
  border-radius: 5px;
  border: 1px solid rgba(41, 104, 121, 0.45);
  background-color: transparent;
  color: #296879 !important;
  margin-left: 30px;
  transition: background-color 0.2s ease, border-color 0.2s ease;
}

.industrial-design-button:hover {
  border-color: #296879;
  background-color: rgba(41, 104, 121, 0.08);
}
</style>
