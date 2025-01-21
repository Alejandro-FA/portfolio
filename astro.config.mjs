// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { locales, defaultLocale } from "./src/i18n/config";
import * as process from "node:process";
import remarkMath from "remark-math";
import rehypeMathjax from "rehype-mathjax/chtml";
import rehypeCitation from "rehype-citation";
import sectionize from "remark-sectionize";

const siteUrl = process.env.SITE ?? "https://alejandrofernandez.dev";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: siteUrl,
  markdown: {
    shikiConfig: {
      themes: {
        light: "light-plus",
        dark: "dark-plus",
      },
    },
    remarkPlugins: [remarkMath, sectionize],
    rehypePlugins: [
      [rehypeMathjax, { chtml: { fontURL: "/fonts/mathjax" } }],
      [rehypeCitation, { path: "src/content/", linkCitations: true }],
    ],
  },
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
