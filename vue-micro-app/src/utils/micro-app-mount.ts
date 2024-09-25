import { createApp, VueElement } from "vue";
import { vuetify } from "./vuetify";

export const mountMicroApp = (component: VueElement) => {
  const app = createApp(component);
  app.use(vuetify);
  return app;
};
