import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import vuetify from "vite-plugin-vuetify";

export default defineConfig(({ mode }) => {
  const ENV = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      vue(),
      vuetify({ autoImport: true }),
      federation({
        name: "vue-micro-app",
        filename: "remoteEntry.js",
        exposes: {
          "./vue-component": "./src/components/vue-component.vue",
          "./vue-todo-list": "./src/components/vue-todo-list.vue",
        },
        shared: ["vue", "vuetify"],
      }),
    ],
    base: ENV?.VITE_BASE_PATH || "/",
    server: {
      port: 4200,
      strictPort: true,
      host: true,
    },
    preview: {
      port: 4172,
      strictPort: true,
    },
    build: {
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
  };
});
