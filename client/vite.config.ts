import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import basicSsl from "@vitejs/plugin-basic-ssl";

export default defineConfig({
  plugins: [solidPlugin(), basicSsl()],
  server: {
    host: "0.0.0.0",
    port: 3456,
    https: true,
    proxy: {
      "/test": {
        target: "http://127.0.0.1:8181",
      },
      "/ws": {
        target: "ws://127.0.0.1:8181",
        ws: true,
        changeOrigin: true,
        secure: true,
      },
    },
  },
  build: {
    target: "esnext",
  },
});
