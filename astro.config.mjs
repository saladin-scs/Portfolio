// @ts-check
import { defineConfig, envField } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://saladinproduction.vercel.app",
  trailingSlash: "ignore",
  image: {
    remotePatterns: [
      { protocol: "https", hostname: "avatars.githubusercontent.com" },
      { protocol: "https", hostname: "github-readme-activity-graph.vercel.app" },
    ],
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          fr: "fr-FR",
        },
      },
    }),
  ],
  env: {
    schema: {
      GITHUB_TOKEN: envField.string({
        context: "server",
        access: "secret",
        optional: true,
      }),
    },
  },
  vite: {
    // @ts-expect-error Vite plugin type mismatch between Astro and @tailwindcss/vite
    plugins: [tailwindcss()],
  },
});
