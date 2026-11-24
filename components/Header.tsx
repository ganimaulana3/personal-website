"use client";

import Image from "next/image";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-white/10">
      <Image
        src="/testing/profile.jpg"
        alt="Logo Gani Maulana"
        width={40}
        height={40}
        className="h-10 w-10 rounded-xl object-cover"
      />
      <button
        onClick={toggleTheme}
        aria-label="Ganti tema"
        className="flex h-10 items-center justify-center gap-2 rounded-full border px-4 shadow-sm transition-colors
          border-slate-200 bg-white text-slate-600 hover:bg-slate-50
          dark:border-white/10 dark:bg-[#151324] dark:text-gray-300 dark:shadow-none dark:hover:bg-[#1d1836]"
      >
        {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </header>
  );
}
