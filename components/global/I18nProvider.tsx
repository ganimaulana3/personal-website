"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import {
  DEFAULT_LOCALE,
  LANG_COOKIE_NAME,
  getDictionary,
  htmlLang,
  type Dictionary,
  type Locale,
} from "@/lib/i18n";

interface I18nContextValue {
  locale: Locale;
  dict: Dictionary;
  setLocale: (nextLocale: Locale) => void;
}

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function clearLegacyGoogleTranslateCookies() {
  if (typeof document === "undefined" || !document.cookie.includes("googtrans=")) {
    return;
  }

  const hostname = window.location.hostname;
  const domains: Array<string | undefined> = [undefined];
  const isIp =
    /^\d{1,3}(\.\d{1,3}){3}$/.test(hostname) || hostname.includes(":");

  if (isIp || hostname === "localhost") {
    if (hostname) domains.push(hostname);
  } else {
    const parts = hostname.split(".").filter(Boolean);
    for (let i = 0; i <= Math.max(0, parts.length - 2); i++) {
      const domain = parts.slice(i).join(".");
      domains.push(domain, `.${domain}`);
    }
  }

  for (const domain of domains) {
    const domainAttr = domain ? `; domain=${domain}` : "";
    document.cookie = `googtrans=; path=/${domainAttr}; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0`;
  }
}

export function I18nProvider({
  initialLocale = DEFAULT_LOCALE,
  children,
}: {
  initialLocale?: Locale;
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = htmlLang(locale);
  }, [locale]);

  const setLocale = useCallback(
    (nextLocale: Locale) => {
      if (nextLocale === locale) return;

      document.cookie = `${LANG_COOKIE_NAME}=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;
      clearLegacyGoogleTranslateCookies();
      document.documentElement.lang = htmlLang(nextLocale);
      setLocaleState(nextLocale);
      router.refresh();
    },
    [locale, router]
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      dict: getDictionary(locale),
      setLocale,
    }),
    [locale, setLocale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n harus digunakan di dalam I18nProvider");
  }
  return context;
}
