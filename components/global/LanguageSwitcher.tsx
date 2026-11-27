"use client";

import { useState, useSyncExternalStore } from "react";
import { Languages, Check } from "lucide-react";

const LANGS = [
  { code: "id", label: "ID", name: "Indonesia" },
  { code: "en", label: "EN", name: "English" },
  { code: "ja", label: "JP", name: "日本語" },
] as const;

export type LangCode = (typeof LANGS)[number]["code"];

const LANG_CHANGE_EVENT = "app:lang-change";

function getCookieDomainCandidates(hostname: string): Array<string | undefined> {
  const candidates: Array<string | undefined> = [undefined];
  if (!hostname) return candidates;

  const isIp =
    /^\d{1,3}(\.\d{1,3}){3}$/.test(hostname) || hostname.includes(":");
  if (isIp || hostname === "localhost") {
    candidates.push(hostname);
    return candidates;
  }

  const parts = hostname.split(".").filter(Boolean);
  for (let i = 0; i <= Math.max(0, parts.length - 2); i++) {
    const domain = parts.slice(i).join(".");
    candidates.push(domain, `.${domain}`);
  }
  return Array.from(new Set(candidates));
}

function getCookiePathCandidates(pathname: string): string[] {
  const paths = new Set<string>(["/"]);
  const segments = pathname.split("/").filter(Boolean);
  let current = "";
  for (const segment of segments) {
    current += `/${segment}`;
    paths.add(current);
  }
  return Array.from(paths);
}

/**
 * Deletes every `googtrans` cookie variant (host-only, domain/subdomain, and path).
 * Google Translate's element.js writes domain-scoped cookies that survive a simple
 * `path=/; max-age=0` delete.
 */
export function clearLangCookies() {
  if (typeof document === "undefined") return;

  const domains = getCookieDomainCandidates(window.location.hostname);
  const paths = getCookiePathCandidates(window.location.pathname);

  for (const path of paths) {
    for (const domain of domains) {
      const domainAttr = domain ? `; domain=${domain}` : "";
      document.cookie = `googtrans=; path=${path}${domainAttr}; expires=Thu, 01 Jan 1970 00:00:00 GMT; max-age=0`;
    }
  }
}

export function readCookieLang(): LangCode {
  if (typeof document === "undefined") return "id";

  const entries = document.cookie.split(";");
  let detected: LangCode = "id";

  for (const entry of entries) {
    const eqIndex = entry.indexOf("=");
    if (eqIndex === -1) continue;
    const name = entry.slice(0, eqIndex).trim();
    if (name !== "googtrans") continue;

    const rawValue = entry.slice(eqIndex + 1).trim();
    let decoded = rawValue;
    try {
      decoded = decodeURIComponent(rawValue);
    } catch {
      // Keep raw value if malformed
    }

    const match = decoded.match(/^\/[^/]+\/([a-z]{2})$/i);
    const code = match?.[1]?.toLowerCase();
    if (code === "en" || code === "ja") {
      detected = code;
    }
  }

  return detected;
}

export function setLangCookie(code: LangCode) {
  if (typeof document === "undefined") return;
  clearLangCookies();

  if (code !== "id") {
    document.cookie = `googtrans=/id/${code}; path=/`;
  }
}

function isPageTranslated(): boolean {
  if (typeof document === "undefined") return false;
  const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
  return (
    readCookieLang() !== "id" ||
    Boolean(combo?.value) ||
    document.documentElement.classList.contains("translated-ltr") ||
    document.documentElement.classList.contains("translated-rtl")
  );
}

function subscribeLang(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(LANG_CHANGE_EVENT, callback);
  return () => window.removeEventListener(LANG_CHANGE_EVENT, callback);
}

export default function LanguageSwitcher() {
  const lang = useSyncExternalStore<LangCode>(
    subscribeLang,
    readCookieLang,
    () => "id"
  );
  const [open, setOpen] = useState(false);

  const pick = (code: LangCode) => {
    setOpen(false);

    if (code === "id") {
      if (!isPageTranslated() && lang === "id") return;

      clearLangCookies();
      if (window.location.hash.includes("googtrans")) {
        window.history.replaceState(
          null,
          "",
          window.location.pathname + window.location.search
        );
      }
      window.dispatchEvent(new Event(LANG_CHANGE_EVENT));
      window.location.reload();
      return;
    }

    if (code === lang && isPageTranslated()) return;

    setLangCookie(code);
    window.dispatchEvent(new Event(LANG_CHANGE_EVENT));

    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="relative notranslate" translate="no">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Ganti bahasa"
        aria-expanded={open}
        className="flex h-10 items-center justify-center gap-1.5 rounded-full border px-3 shadow-sm transition-colors
          border-slate-200 bg-white text-slate-600 hover:bg-slate-50
          dark:border-line dark:bg-surface-2 dark:text-mist dark:shadow-none dark:hover:bg-[#27253B]"
      >
        <Languages size={16} />
        <span className="text-xs font-bold uppercase">
          {LANGS.find((l) => l.code === lang)?.label}
        </span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-12 z-50 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-line dark:bg-surface">
            {LANGS.map((l) => (
              <button
                type="button"
                key={l.code}
                onClick={() => pick(l.code)}
                className={`flex w-full items-center justify-between px-3 py-2.5 text-xs font-semibold transition-colors hover:bg-slate-100 dark:hover:bg-surface-2 ${
                  l.code === lang
                    ? "text-brand dark:text-brand-soft"
                    : "text-slate-600 dark:text-mist"
                }`}
              >
                {l.name}
                {l.code === lang && <Check size={14} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
