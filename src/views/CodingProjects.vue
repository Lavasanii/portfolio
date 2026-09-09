<template>
  <CodingHeaderImage></CodingHeaderImage>
  <div class="container" style="max-width: 800px">
    <div class="h2 mt-5 text-center">Code</div>

    <div class="h3 overview-text text-uppercase">Overview</div>
    <div class="sections-texts">
      I design interfaces and, where it makes sense, build them myself. That's
      usually the faster route: when a design depends on behaviour a page
      builder can't produce, or when a project has no frontend developer
      attached, I write the code instead of cutting the idea.
    </div>
    <div class="sections-texts">
      This page is an index, not a second set of case studies — each entry links
      to the project where the design work is documented in full.
    </div>

    <div class="margin-between-sections" v-for="c in codeItems" :key="c.id">
      <div class="sections-title">{{ c.title }}</div>
      <div class="sections-stack">{{ c.stack }}</div>
      <div class="sections-texts"><span v-html="c.text"></span></div>
      <div class="code-links">
        <router-link v-if="c.caseStudy" :to="c.caseStudy" class="code-link">
          Case study
        </router-link>
        <a
          v-if="c.live"
          :href="c.live"
          target="_blank"
          rel="noopener noreferrer"
          class="code-link"
        >
          Live
        </a>
        <a
          v-if="c.repo"
          :href="c.repo"
          target="_blank"
          rel="noopener noreferrer"
          class="code-link"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>

  <div id="app" class="mt-5">
    <GridCal></GridCal>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";
import CodingHeaderImage from "../components/Coding/CodingHeaderImage.vue";
import GridCal from "../components/Coding/GridCal.vue";

interface codeItemsInterface {
  id: number;
  title: string;
  stack: string;
  text: string;
  caseStudy?: string;
  live?: string;
  repo?: string;
}

const codeItems = ref<codeItemsInterface[]>([
  {
    id: 0,
    title: "This portfolio",
    stack: "Vue 3 · TypeScript · Vite · SCSS · Bootstrap · Vue Router",
    text: `Designed and built by me, from the component structure to the
    deployment. Every case study is its own set of components, routing and
    scroll behaviour are handled in Vue Router, and images are lazy-loaded and
    served as WebP to keep the pages light. It's the project I use to keep my
    frontend current — whatever I read about, I try here first.`,
    repo: "https://github.com/Lavasanii/portfolio",
  },
  {
    id: 1,
    title: "Voting platform — Allreco school competition",
    stack: "Vue.js · JavaScript · Supabase · Webflow",
    text: `An analog voting process replaced by a digital one. I built the
    frontend in Vue and the backend logic on Supabase, then embedded the whole
    thing into the existing Webflow site via iFrame.
    <br /><br />
    The interesting part was fairness without accounts. Each vote is tied to the
    voter's IP address — but the IP is hashed with SHA-256 in the browser before
    it ever reaches the database, so no identifiable address is stored, and
    row-level security protects the table. Since most consumer IPs rotate every
    12–24 hours, this results in roughly one vote per person per day without
    anyone having to register. The ranking recalculates and reorders instantly
    after each vote, and all voting buttons disable themselves automatically
    once the competition deadline passes.`,
    caseStudy: "/voting-project",
    live: "https://allreco.de/wettbewerb",
  },
  {
    id: 2,
    title: "Text rotator and scroll-snap — Allreco landing page",
    stack: "JavaScript · HTML · CSS · Webflow",
    text: `The landing page headline cycles automatically through several brand
    attributes. Webflow's built-in interactions couldn't do the automatic word
    change, so I wrote the rotator myself in plain JavaScript, HTML and CSS and
    embedded it directly into the Webflow page.
    <br /><br />
    I also built a JavaScript scroll-snap behaviour for the full-height
    sections — and then switched it off again. Chrome and Firefox handled it
    inconsistently enough that the experience became unpredictable, and a
    feature that behaves differently per browser is worse than no feature. The
    full-height section structure stayed; only the snapping went.`,
    caseStudy: "/landingpage-project",
    live: "https://www.allreco.de",
  },
  {
    id: 3,
    title: "GridCal — coding challenge",
    stack: "Vue · TypeScript · PrimeVue · Moment.js",
    text: `An older piece, kept here because it's self-contained and readable: a
    single-page user table with sortable columns, pagination and filtering, fed
    by a mocked fetch. Age is derived from the birthdate rather than stored. It
    was written as a technical challenge — the running demo is below.`,
    repo: "https://github.com/Lavasanii/GridCal",
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

.sections-stack {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: rgba(27, 27, 27, 0.6) !important;
}

.sections-texts {
  margin-top: 36px;
  font-size: 18px;
  font-weight: 400;
  color: #000800cc !important;
}

.code-links {
  margin-top: 24px;
}

.code-link {
  display: inline-block;
  margin-right: 24px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  border-bottom: 2px solid rgba(41, 104, 121, 0.4);
  transition: border-color 0.2s ease;
}

.code-link:hover {
  border-bottom-color: #296879;
}
</style>
