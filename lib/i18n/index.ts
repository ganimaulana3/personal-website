import { idDictionary } from "./id";
import { enDictionary } from "./en";
import { jpDictionary } from "./jp";

export const locales = ["id", "en", "jp"] as const;

export type Locale = (typeof locales)[number];

export const DEFAULT_LOCALE: Locale = "id";
export const LANG_COOKIE_NAME = "lang";

type DeepStrings<T> =
  T extends readonly (infer U)[]
    ? readonly DeepStrings<U>[]
    : T extends object
      ? { [K in keyof T]: DeepStrings<T[K]> }
      : string;

export type Dictionary = DeepStrings<typeof idDictionary>;

const dictionaries: Record<Locale, Dictionary> = {
  id: idDictionary,
  en: enDictionary,
  jp: jpDictionary,
};

export function isLocale(value: unknown): value is Locale {
  return (
    typeof value === "string" &&
    (locales as readonly string[]).includes(value)
  );
}

export function normalizeLocale(value?: string | null): Locale {
  return isLocale(value) ? value : DEFAULT_LOCALE;
}

export function htmlLang(locale: Locale): string {
  return locale === "jp" ? "ja" : locale;
}

export function getDictionary(locale?: string | null): Dictionary {
  return dictionaries[normalizeLocale(locale)];
}

// Helper dot-notation: t(dict, "hero.viewProjects")
export function t(dict: Dictionary, path: string): string {
  return path.split(".").reduce<unknown>(
    (obj, key) => (obj as Record<string, unknown>)?.[key],
    dict
  ) as string;
}