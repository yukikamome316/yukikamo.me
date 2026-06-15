// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
export default defineConfig({
  site: "https://yukikamo.me",
  integrations: [react(), sitemap()],
  adapter: cloudflare({
    imageService: "compile",
  }),
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
