import { createApp } from "vue";
import App from "./app.vue";
import { vuetify } from "./utils/vuetify";

const app = createApp(App);
app.use(vuetify);
app.mount("#app");
