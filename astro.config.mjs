import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import { ViteMinifyPlugin } from "vite-plugin-minify";

export default defineConfig({
  integrations: [tailwind(), react(), vercel()],
  adapter: vercel(),
  output: "server",
  site: "https://abraham-dev.vercel.app",
  vite: {
    plugins: [ViteMinifyPlugin({})],
  },
});
