import type { Locale } from "./types";
import { locales, defaultLocale } from "./config";

export function getLocaleFromUrl(url: URL): Locale {
  const path = url.pathname;
  const lang = path.split("/").find(Boolean);
  if (lang !== undefined && _isLocale(lang)) return lang;
  return defaultLocale;
}

function _isLocale(code: string): code is Locale {
  return locales.includes(code as Locale);
}
