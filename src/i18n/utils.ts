import {
  getCollection,
  type CollectionKey,
  type CollectionEntry,
} from "astro:content";
import path from "path";
import type { Locale } from "./types";
import { locales, defaultLocale } from "./config";
import { ui } from "./ui";

export function getLocaleFromUrl(url: URL): Locale {
  return getLocaleFromPath(url.pathname);
}

export function getLocaleFromPath(path: string): Locale {
  const lang = path.split("/").find(Boolean);
  if (lang !== undefined && _isLocale(lang)) return lang;
  return defaultLocale;
}

export async function getLocalizedCollection<T extends CollectionKey>(
  locale: Locale,
  collection: T,
): Promise<CollectionEntry<T>[]> {
  const entries = await getCollection(collection);
  return entries
    .filter((entry) => getLocaleFromPath(entry.id) === locale)
    .map((entry) => ({
      ...entry,
      id: _removeLocaleFromId(entry.id, locale),
    }));
}

export function translator(locale: Locale) {
  return function t(key: keyof (typeof ui)[Locale]) {
    return ui[locale][key];
  };
}

export function getLocalizedCollectionPaths(
  locale: Locale,
  collection: CollectionKey,
) {
  return async function getStaticPaths() {
    const entries = await getLocalizedCollection(locale, collection);
    return entries.map((entry) => ({
      params: { id: entry.id },
      props: { entry },
    }));
  };
}

function _isLocale(code: string): code is Locale {
  return locales.includes(code as Locale);
}

function _removeLocaleFromId<T extends CollectionKey>(
  id: CollectionEntry<T>["id"],
  locale: Locale,
) {
  return path.relative(locale, id);
}
