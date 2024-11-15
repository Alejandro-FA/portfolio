import { type CollectionKey, type CollectionEntry } from "astro:content";
import { locales } from "./config";

export type Locale = (typeof locales)[number];

export type LocalizedCollectionEntry<T extends CollectionKey> = Omit<
  CollectionEntry<T>,
  "slug"
> & {
  slug: LocalizedCollectionSlug<T>;
};

export type LocalizedCollectionSlug<T extends CollectionKey> =
  CollectionEntry<T>["slug"] extends `${Locale}/${infer Rest}`
    ? Rest
    : CollectionEntry<T>["slug"];
