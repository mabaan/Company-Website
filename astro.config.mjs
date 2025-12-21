import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel"; // <-- use /static

export default defineConfig({
  adapter: vercel(), // this will auto-pick /static if you use `output: "static"`
  integrations: [
    react(),
    tailwind(),
  ],
  // REMOVE or comment out output: "server"
});
