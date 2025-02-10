// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { locales, defaultLocale, fallbacks } from "./src/i18n/config";
import * as process from "node:process";
import remarkMath from "remark-math";
import sectionize from "remark-sectionize";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeMathjax from "rehype-mathjax/chtml";
import rehypeCitation from "rehype-citation";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

const siteUrl = process.env.SITE ?? "https://alejandrofernandez.dev";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: siteUrl,
  build: {
    // Addresses the "Eliminate render-blocking resources" warning: https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources/
    inlineStylesheets: "always",
  },
  markdown: {
    shikiConfig: {
      themes: {
        light: "light-plus",
        dark: "dark-plus",
      },
    },
    remarkPlugins: [remarkMath, sectionize],
    rehypePlugins: [
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
      [rehypeMathjax, { chtml: { fontURL: "/fonts/" } }],
      [rehypeCitation, { path: "src/data/projects", linkCitations: true }],
    ],
  },
  i18n: {
    defaultLocale: defaultLocale,
    locales: [...locales],
    fallback: fallbacks,
    routing: {
      prefixDefaultLocale: true,
    },
  },
  redirects: {
    "/": `/${defaultLocale}`,
    "/about": `/${defaultLocale}/about`,
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
    mdx(),
  ],
});
