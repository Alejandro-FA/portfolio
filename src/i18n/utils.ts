import type { Locale } from "./types";
import { locales, defaultLocale } from "./config";
import { ui } from "./ui";

export function getLocaleFromUrl(url: URL): Locale {
  const path = url.pathname;
  const lang = path.split("/").find(Boolean);
  if (lang !== undefined && _isLocale(lang)) return lang;
  return defaultLocale;
}

export function translator(locale: Locale) {
  return function t(key: keyof (typeof ui)[Locale]) {
    return ui[locale][key];
  };
}

function _isLocale(code: string): code is Locale {
  return locales.includes(code as Locale);
}
