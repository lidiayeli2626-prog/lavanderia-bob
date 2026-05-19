import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: '/lavanderia-bob/',
  build: {
    outDir: '.output/public',
    emptyOutDir: true,
  }
});
