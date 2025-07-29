// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // — Adapter tells Astro how to build & deploy your site —
  // Here we use the Vercel adapter for Serverless Functions
  adapter: vercel(),

  // — Integrations enable React components & TailwindCSS support —
  integrations: [
    react(),
    tailwind(),
  ],

  // (You can add any other config flags you need below)
  // buildOptions: { /* … */ },
  // vite: { /* … */ },
});
