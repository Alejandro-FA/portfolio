import { locales, defaultLocale, type Locale } from "./config";
import { ui } from "./ui";
import { getCollection, type CollectionKey } from "astro:content";

export function getLocaleFromUrl(url: URL): Locale {
  return getLocaleFromPath(url.pathname);
}

export function getLocaleFromPath(path: string): Locale {
  const lang = path.split("/").find(Boolean);
  if (lang !== undefined && _isLocale(lang)) return lang;
  return defaultLocale;
}

export async function getLocalizedCollection(
  locale: Locale,
  collection: CollectionKey,
) {
  const entries = await getCollection(collection);
  return entries.filter((entry) => getLocaleFromPath(entry.slug) === locale);
}

export function translator(locale: Locale) {
  return function t(key: keyof (typeof ui)[Locale]) {
    return ui[locale][key];
  };
}

function _isLocale(code: string): code is Locale {
  return locales.includes(code as Locale);
}
