import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel"; // <-- use /static

export default defineConfig({
  site: "https://gcintle.com",
  adapter: vercel(),
  integrations: [
    react(),
    tailwind(),
  ],
});
