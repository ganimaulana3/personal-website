"use client";

import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-3">
        <Image
          src="/testing/profile.jpg"
          alt="Foto profil Gani Maulana"
          width={44}
          height={44}
          className="h-11 w-11 rounded-xl object-cover"
        />
        <div className="leading-tight">
          <p className="font-bold text-slate-900 dark:text-slate-100">Gani Maulana</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Junior Web Developer</p>
        </div>
      </div>

      <button
        onClick={toggleTheme}
        aria-label="Ganti tema"
        className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-700 shadow-sm transition-colors dark:bg-slate-900 dark:text-slate-300 dark:shadow-none"
      >
        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
}
