"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Moon, Sun, Languages, Check } from "lucide-react";
import { useTheme } from "../global/theme-provider";

const LANGS = [
  { code: "id", label: "ID", name: "Indonesia" },
  { code: "en", label: "EN", name: "English" },
  { code: "ja", label: "JP", name: "日本語" },
] as const;
 
type LangCode = (typeof LANGS)[number]["code"];
 
const readCookieLang = (): LangCode => {
  if (typeof document === "undefined") return "id";
  const m = document.cookie.match(/googtrans=\/id\/(\w+)/);
  const code = m?.[1];
  return code === "en" || code === "ja" ? code : "id";
};

const setLangCookie = (code: LangCode) => {
  if (code === "id") {
    document.cookie = "googtrans=; path=/; max-age=0";
  } else {
    document.cookie = `googtrans=/id/${code}; path=/`;
  }
};

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [lang, setLang] = useState<LangCode>("id");
  const [open, setOpen] = useState(false);
 
  useEffect(() => {
    setLang(readCookieLang());
  }, []);
 
  const pick = (code: LangCode) => {
    setOpen(false);
    if (code === readCookieLang()) return;
  
    // Kembali ke Indonesia = bahasa asli → hapus cookie + reload
    if (code === "id") {
      document.cookie = "googtrans=; path=/; max-age=0";
      window.location.reload();
      return;
    }
  
    // EN/JA → trigger select internal widget (tanpa reload)
    const combo = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (combo) {
      combo.value = code;
      combo.dispatchEvent(new Event("change"));
      setLang(code); // update label langsung
    } else {
      // Fallback: widget belum init → pakai cookie + reload
      setLangCookie(code);
      window.location.reload();
    }
  };

  return (
    <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-line md:hidden">
      <Image
        src="/testing/profile.jpg"
        alt="Logo Gani Maulana"
        width={40}
        height={40}
        className="h-10 w-10 rounded-xl object-cover"
      />
      <div className="flex items-center gap-2">
        {/* Dropdown bahasa */}
        <div className="relative">
          <button
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
              {/* Backdrop penutup */}
              <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
              <div className="absolute right-0 top-12 z-50 w-36 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-line dark:bg-surface">
                {LANGS.map((l) => (
                  <button
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

        {/* Tombol theme */}
        <button
          onClick={toggleTheme}
          aria-label="Ganti tema"
          className="flex h-10 items-center justify-center gap-2 rounded-full border px-4 shadow-sm transition-colors
            border-slate-200 bg-white text-slate-600 hover:bg-slate-50
            dark:border-line dark:bg-surface-2 dark:text-mist dark:shadow-none dark:hover:bg-[#27253B]"
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </header>
  );
}
