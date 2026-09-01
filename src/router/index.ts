import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Project1 from "../views/Project1.vue";
import Aboutme from "../views/Aboutme.vue";
import Project2 from "../views/Project2.vue";
import IDHome from "../views/IDHome.vue";
import IDProject1Bodum from "../views/IDProject1Bodum.vue";
import IDProject2ImbusVue from "../views/IDProject2Imbus.vue";
import CodingProjectsVue from "../views/CodingProjects.vue";
import Project3 from "../views/Project3.vue";
import Project4 from "../views/Project4.vue";
import Project5 from "../views/Project5.vue";


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
      path: "/voting-project",
      name: "Project3",
      component: Project3,
    },
    {
      path: "/landingpage-project",
      name: "Project4",
      component: Project4,
    },
    {
      path: "/iot-project",
      name: "Project5",
      component: Project5,
    },
    {
      path: "/aboutme",
      name: "aboutme",
      component: Aboutme,
    },
    {
      path: "/IDHome",
      name: "Industrial Design",
      component: IDHome,
    },
    {
      path: "/IDProject1Bodum",
      name: "IDProject1Bodum",
      component: IDProject1Bodum,
    },
    {
      path: "/IDProject2Imbus",
      name: "IDProject2Imbus",
      component: IDProject2ImbusVue
    },
    {
      path: "/CodingProjectsVue",
      name: "CodingProjectsVue",
      component: CodingProjectsVue
    }
    
  ],
  scrollBehavior() {
    // alwasy Scroll to top
    return { top: 0 };
  },
});

export default router;
