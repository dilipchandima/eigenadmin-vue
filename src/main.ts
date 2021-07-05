import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap";
// import "bootstrap/scss/bootstrap.scss";
import "./scss/eigenadmin.scss";

createApp(App).use(store).use(router).mount("#app");
