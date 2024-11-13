// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { locales, defaultLocale } from "./src/i18n/config";

// https://astro.build/config
export default defineConfig({
  site: "https://alejandrofernandez.dev",
  i18n: {
    defaultLocale: defaultLocale,
    locales: locales,
    fallback: { es: "en" },
    routing: {
      prefixDefaultLocale: true,
      fallbackType: "rewrite",
    },
  },
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 0.5,
      lastmod: new Date(),
      i18n: {
        defaultLocale: defaultLocale,
        locales: Object.fromEntries(locales.map((locale) => [locale, locale])),
      },
    }),
  ],
});
