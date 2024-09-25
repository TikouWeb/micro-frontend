import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig(({ mode }) => {
  const ENV = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [
      react(),
      federation({
        name: "react-microfrontend",
        filename: "remoteEntry.js",
        exposes: {
          "./react-component": "./src/components/react-component.tsx",
        },
        shared: ["react", "react-dom"],
      }),
    ],
    base: ENV?.VITE_BASE_PATH || "/",
    server: {
      port: 4200,
      strictPort: true,
      host: true,
    },
    preview: {
      port: 4171,
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
