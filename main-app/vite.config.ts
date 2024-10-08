// vite.config.js
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const ENV = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      federation({
        name: "main-app",
        remotes: {
          vueMicroApp:
            mode === "production"
              ? "/vue/assets/remoteEntry.js"
              : "http://localhost:4172/assets/remoteEntry.js",
          reactMicroApp:
            mode === "production"
              ? "/react/assets/remoteEntry.js"
              : "http://localhost:4171/assets/remoteEntry.js",
        },
        shared: ["react", "react-dom", "vue", "vuetify"],
      }),
    ],
    base: ENV?.VITE_BASE_PATH || "/",
    server: {
      port: 4200,
      strictPort: true,
      host: true,
    },
    preview: {
      port: 5175,
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
