import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "url"; // Thêm dòng này

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)), // Thêm dòng này
    },
  },
  server: {
    allowedHosts: true
  },
  preview: {
    allowedHosts: ['*'],
    host: true,
  }
});
