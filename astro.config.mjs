import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://gcintle.com",
  output: "hybrid",
  adapter: vercel(),
  integrations: [react(), tailwind(), sitemap()],
});
