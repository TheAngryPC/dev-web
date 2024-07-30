// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".", // This should point to project root if it's not explicitly needed
  resolve: {
    alias: {
      "@": "/src", // Optional, if using path aliases
    },
  },
});
