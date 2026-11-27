"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { items } from "./Navbar";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Topbar() {
    const pathname = usePathname();
    const { theme, toggleTheme } = useTheme();

    return (
        <header className="sticky top-0 z-40 hidden border-b border-slate-200 backdrop-blur-md transition-colors duration-300 dark:border-line md:block">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/testing/profile.jpg"
                        alt="Logo Gani Maulana"
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-xl object-cover"
                    />
                    <span className="text-sm font-bold text-slate-900 dark:text-slate-100">
                        Gani Maulana
                    </span>
                </Link>

                {/* Navigasi horizontal */}
                <nav>
                    <ul className="flex items-center gap-1">
                        {items.map(({ id, label, icon: Icon, href }) => {
                            const isActive = pathname === href;
                            return (
                                <li key={id}>
                                    <Link
                                        href={href}
                                        aria-current={isActive ? "page" : undefined}
                                        className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${isActive
                                            ? "bg-brand text-white shadow-md shadow-brand/30"
                                            : "text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:text-mist dark:hover:bg-surface dark:hover:text-slate-100"
                                            }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <div className="flex items-center gap-2">
                    {/* Dropdown bahasa */}
                    <LanguageSwitcher />

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
            </div>
        </header>
    )
}