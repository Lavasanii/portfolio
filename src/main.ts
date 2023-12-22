import { createApp } from "vue";
import VueLazyLoad from "vue3-lazyload";
import App from "./App.vue";
import router from "./router";
import "../src/scss/poppinsFonts.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-green/theme.css'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputText from 'primevue/inputtext';


const app = createApp(App).use(router).use(VueLazyLoad, {
  loading: "../src/assets/ImgLazy/onLoading.png",
  error: "../src/assets/ImgLazy/onError.png",
}
);

app.use(PrimeVue);
app.component('Column', Column);
app.component('DataTable', DataTable);
app.component('InputText', InputText);
app.mount("#app");
