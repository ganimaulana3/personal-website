"use client";

import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../global/theme-provider";
import LanguageSwitcher from "./LanguageSwitcher";
import { useI18n } from "./I18nProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { dict } = useI18n();

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
        <LanguageSwitcher />

        {/* Tombol theme */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={dict.common.toggleTheme}
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
