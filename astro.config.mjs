import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";

const isDev = import.meta.env.DEV;

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: !isDev, // Disable minification in development
    },
  },
  integrations: [
    sanity({
      projectId: "x58fgvp9",
      dataset: isDev ? "psyclescape-content" : "production",
      useCdn: !isDev,
      apiVersion: "2024-01-01",
    }),
  ],
});