import { createApp } from "vue";
import VueLazyLoad from "vue3-lazyload";
import App from "./App.vue";
import router from "./router";
import "../src/scss/poppinsFonts.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

const app = createApp(App).use(router).use(VueLazyLoad, {
  loading: "../src/assets/ImgLazy/onLoading.png",
  error: "../src/assets/ImgLazy/onError.png",
});

app.mount("#app");
