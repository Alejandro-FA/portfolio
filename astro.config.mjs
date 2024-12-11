// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { locales, defaultLocale } from "./src/i18n/config";
import * as process from "node:process";

const siteUrl = process.env.SITE ?? "https://alejandrofernandez.dev";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: siteUrl,
  i18n: {
    defaultLocale: defaultLocale,
    locales: [...locales],
    fallback: { es: "en" },
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    "/": `/${defaultLocale}/`,
    "/about/": `/${defaultLocale}/about/`,
    "/projects/[...id]": `/${defaultLocale}/projects/[...id]`,
  },
  integrations: [
    sitemap({
      changefreq: "monthly",
      priority: 1.0,
      lastmod: new Date(),
      i18n: {
        defaultLocale: defaultLocale,
        locales: Object.fromEntries(locales.map((locale) => [locale, locale])),
      },
    }),
  ],
});
