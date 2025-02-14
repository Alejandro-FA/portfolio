import type { Locale } from "./types";

import aboutEN from "@locales/en/about.json";
import commonEN from "@locales/en/common.json";
import error404EN from "@locales/en/error404.json";
import homeEN from "@locales/en/home.json";
import projectsEN from "@locales/en/projects.json";
import routesEN from "@locales/en/routes.json";

import aboutES from "@locales/es/about.json";
import commonES from "@locales/es/common.json";
import error404ES from "@locales/es/error404.json";
import homeES from "@locales/es/home.json";
import projectsES from "@locales/es/projects.json";
import routesES from "@locales/es/routes.json";

interface Translations {
  about: typeof aboutEN;
  common: typeof commonEN;
  error404: typeof error404EN;
  home: typeof homeEN;
  projects: typeof projectsEN;
  routes: typeof routesEN;
}

export function getTranslations(locale: Locale): Translations {
  switch (locale) {
    case "en":
      return {
        about: aboutEN,
        common: commonEN,
        error404: error404EN,
        home: homeEN,
        projects: projectsEN,
        routes: routesEN,
      };
    case "es":
      return {
        about: aboutES,
        common: commonES,
        error404: error404ES,
        home: homeES,
        projects: projectsES,
        routes: routesES,
      };
  }
}
