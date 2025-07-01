// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind"; // ✅ This is correct

export default defineConfig({
  integrations: [react(), tailwind()],
});
