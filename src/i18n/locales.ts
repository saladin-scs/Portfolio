import type { Locale, SiteConfig, SiteContent, UiStrings } from "@types";
import { SITE_CONFIG as EN_CONFIG, SITE_CONTENT as EN_CONTENT } from "../config/en";
import { SITE_CONFIG as FR_CONFIG, SITE_CONTENT as FR_CONTENT } from "../config/fr";
import { UI } from "./ui";

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALES: { code: Locale; path: string; hreflang: string }[] = [
  { code: "en", path: "/", hreflang: "en" },
  { code: "fr", path: "/fr/", hreflang: "fr" },
];

const CONFIGS: Record<Locale, SiteConfig> = {
  en: EN_CONFIG,
  fr: FR_CONFIG,
};

const CONTENTS: Record<Locale, SiteContent> = {
  en: EN_CONTENT,
  fr: FR_CONTENT,
};

export function getSiteConfig(locale: Locale): SiteConfig {
  return CONFIGS[locale];
}

export function getSiteContent(locale: Locale): SiteContent {
  return CONTENTS[locale];
}

export function getUi(locale: Locale): UiStrings {
  return UI[locale];
}

export function getAlternateLocale(locale: Locale): (typeof LOCALES)[number] {
  return LOCALES.find((entry) => entry.code !== locale) ?? LOCALES[0];
}

export function getLocaleFromPath(pathname: string): Locale {
  return pathname.startsWith("/fr") ? "fr" : "en";
}
