import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Project1 from "../views/Project1.vue";
import Aboutme from "../views/Aboutme.vue";
import Project2 from "../views/Project2.vue";

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
      path: "/catcheat-project",
      name: "Project2",
      component: Project2,
    },
    {
      path: "/aboutme",
      name: "aboutme",
      component: Aboutme,
    },
  ],
});

export default router;
