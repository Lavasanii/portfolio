import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Project1 from "../views/Project1.vue";
import Aboutme from "../views/Aboutme.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/rubrik-project",
      name: "Project1",
      component: Project1,
    },
    {
      path: "/aboutme",
      name: "aboutme",
      component: Aboutme,
    },
  ],
});

export default router;
