"use client";

import { useState } from "react";
import { Languages, Check } from "lucide-react";
import { type Locale } from "@/lib/i18n";
import { useI18n } from "./I18nProvider";

const LANGS: ReadonlyArray<{ code: Locale; label: string; name: string }> = [
  { code: "id", label: "ID", name: "Indonesia" },
  { code: "en", label: "EN", name: "English" },
  { code: "jp", label: "JP", name: "日本語" },
];

export default function LanguageSwitcher() {
  const { locale, dict, setLocale } = useI18n();
  const [open, setOpen] = useState(false);

  const pick = (code: Locale) => {
    setOpen(false);
    setLocale(code);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={dict.common.changeLanguage}
        aria-expanded={open}
        className="flex h-10 items-center justify-center gap-1.5 rounded-full border px-3 shadow-sm transition-colors
          border-slate-200 bg-white text-slate-600 hover:bg-slate-50
          dark:border-line dark:bg-surface-2 dark:text-mist dark:shadow-none dark:hover:bg-[#27253B]"
      >
        <Languages size={16} />
        <span className="text-xs font-bold uppercase">
          {LANGS.find((l) => l.code === locale)?.label}
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
                  l.code === locale
                    ? "text-brand dark:text-brand-soft"
                    : "text-slate-600 dark:text-mist"
                }`}
              >
                {l.name}
                {l.code === locale && <Check size={14} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
