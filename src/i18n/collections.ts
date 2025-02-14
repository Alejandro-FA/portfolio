import path from "path";
import {
  getCollection,
  type CollectionKey,
  type CollectionEntry,
} from "astro:content";

import type { Locale } from "./types";

export async function getLocalizedCollection<T extends CollectionKey>(
  locale: Locale,
  collection: T,
): Promise<CollectionEntry<T>[]> {
  const entries = await getCollection(collection);
  return entries
    .filter((entry) => _isEntryInLocale(entry, locale))
    .map((entry) => ({
      ...entry,
      id: _removeLocaleFromId(entry.id),
    }));
}

export async function getLocalizedEntry<T extends CollectionKey>(
  locale: Locale,
  collection: T,
  id: string,
): Promise<CollectionEntry<T> | undefined> {
  const entries = await getLocalizedCollection(locale, collection);
  return entries.find((entry) => entry.id === id);
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

function _isEntryInLocale<T extends CollectionKey>(
  entry: CollectionEntry<T>,
  locale: Locale,
) {
  const extension = path.extname(entry.id);
  return path.basename(entry.id, extension) === locale;
}

function _removeLocaleFromId<T extends CollectionKey>(
  id: CollectionEntry<T>["id"],
) {
  return path.dirname(id) + path.extname(id);
}
