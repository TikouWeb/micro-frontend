// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "main-app",
      remotes: {
        vueMicroApp: "http://localhost:5173/assets/remoteEntry.js",
        reactMicroApp: "http://localhost:5174/assets/remoteEntry.js",
      },
      shared: ["react", "react-dom", "vue", "vuetify"],
    }),
  ],
  server: {
    port: 5175,
  },
  preview: {
    port: 5175,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
