import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

export default defineConfig({
  site: "https://gcintle.com",
  output: "server",
  adapter: vercel(),
  integrations: [sitemap()],
});
