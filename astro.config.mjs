// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: cloudflare({
    imageService: "compile",
  }),
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
