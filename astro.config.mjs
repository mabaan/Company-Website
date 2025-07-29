// astro.config.mjs
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel";          // ← import the adapter

export default defineConfig({
  // Tell Astro to use the Vercel Serverless adapter
  adapter: vercel(),

  // Your other integrations
  integrations: [
    react(),
    tailwind(),
  ],

  // (optional) if you need server output rather than a fully static site:
  // output: "server",
});
