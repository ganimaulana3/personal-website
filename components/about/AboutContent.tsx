"use client"

import { useI18n } from "@/components/global/I18nProvider";
import { Code2, Palette, Zap, FolderClosed, Calendar, GraduationCap, Rocket, ArrowRight } from "lucide-react";
import BackgroundFX from "./BackgroundFX";

export default function AboutContent() {
    const { dict } = useI18n();

    // Data badge (bisa juga dipindahkan ke file dictionary i18n jika perlu)
    const badges = [
        { label: "Developer", icon: Code2 },
        { label: "UI/UX Designer", icon: Palette },
        { label: "Tech Enthusiast", icon: Zap },
    ];
    // Data kartu stats
    const stats = [
        { value: "12+", label: "Projects", icon: FolderClosed },
        { value: "2+", label: "Years Experience", icon: Calendar },
        { value: "D3", label: "Education", icon: GraduationCap },
    ];
    return (
        <BackgroundFX>
            <div className="relative overflow-hidden py-4 md:py-10">

                {/* ===== HERO: teks kiri + foto kanan ===== */}
                <div className="relative">
                    {/* Teks — lebar dibatasi ~55% di mobile dan 50% di desktop agar tidak tertabrak foto */}
                    <div className="relative z-10 w-[56%] min-w-0 space-y-1.5 sm:w-1/2 md:space-y-4">
                        <div className="flex items-center gap-2">
                            <span
                                className="text-brand dark:text-brand-soft font-black text-base select-none tracking-tighter transition-colors duration-300"
                                aria-hidden="true"
                            >
                                //
                            </span>
                            <h2 className="text-xs font-semibold text-slate-600 tracking-wide transition-colors duration-300 dark:text-mist sm:text-sm">
                                {dict.home.aboutTitle}
                            </h2>
                        </div>

                        <h1 className="text-2xl font-bold leading-tight sm:text-4xl md:text-6xl md:font-extrabold md:leading-[1.05] md:tracking-tight">
                            {dict.hero.name}{" "}
                            <span className="text-brand dark:text-brand-soft">
                                {dict.hero.lastName}
                            </span>
                            {dict.hero.lastGreeting}
                        </h1>

                        {/* Tagline & Garis bawah pendek (w-12) sesuai gambar referensi */}
                        <div className="space-y-2 pt-0.5">
                            <p className="text-xs font-medium text-slate-700 transition-colors duration-300 dark:text-mist sm:text-sm md:text-base">
                                {dict.hero.tagline}
                            </p>
                            <div className="h-[2px] w-12 rounded-full bg-brand dark:bg-brand-soft" />
                        </div>

                        <p className="pt-2 text-xs leading-relaxed text-slate-500 transition-colors duration-300 dark:text-mist/80 sm:text-sm md:text-base">
                            {dict.hero.description}
                        </p>
                    </div>

                    {/* Foto — center vertikal terhadap blok hero saja */}
                    <img
                        src="/testing/profile.jpg"
                        alt={dict.hero.name}
                        className="pointer-events-none absolute right-0 top-1/2 z-0 h-52 w-52 -translate-y-1/2 object-contain object-bottom sm:h-80 sm:w-80 md:h-[420px] md:w-[420px]"
                    />
                </div>

                {/* 2. Bagian Tengah: Deretan Badge Skill */}
                <div className="relative z-10 mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3 md:mt-8">
                    {badges.map((badge, index) => {
                        const Icon = badge.icon;
                        return (
                            <div
                                key={index}
                                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-brand/50 dark:border-line dark:bg-surface-2/80 dark:text-slate-200 dark:hover:border-brand-soft/60 sm:px-4 sm:py-2 sm:text-sm"
                            >
                                <Icon className="h-3.5 w-3.5 text-brand dark:text-brand-soft sm:h-4 sm:w-4" />
                                <span>{badge.label}</span>
                            </div>
                        );
                    })}
                </div>

                {/* 3. Bagian Bawah: Kartu Stats (3 Kolom) */}
                <div className="relative z-10 mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-lg backdrop-blur-md transition-colors duration-300 dark:border-line dark:bg-surface/90 dark:shadow-brand/5 sm:p-7 md:mt-10">
                    {/* Aksen pendaran cahaya ungu halus di bagian atas kartu (sesuai referensi) */}
                    <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-soft/50 to-transparent"
                        aria-hidden="true"
                    />
                    <div
                        className="pointer-events-none absolute -top-12 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-brand/15 blur-2xl"
                        aria-hidden="true"
                    />

                    <div className="relative grid grid-cols-3 divide-x divide-slate-200/70 dark:divide-line/60">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-center px-2 text-center sm:px-4"
                                >
                                    <Icon className="mb-2 h-6 w-6 text-brand dark:text-brand-soft sm:mb-3 sm:h-7 sm:w-7" />
                                    <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
                                        {stat.value}
                                    </span>
                                    <span className="mt-1 text-[11px] font-medium text-slate-500 dark:text-mist sm:text-xs md:text-sm">
                                        {stat.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* 4. Bagian My Story */}
                <div className="relative z-10 mt-8 md:mt-12">
                    {/* Judul Section */}
                    <div className="flex items-center gap-2.5">
                        <span
                            className="select-none text-base font-black tracking-tighter text-brand transition-colors duration-300 dark:text-brand-soft sm:text-lg"
                            aria-hidden="true"
                        >
            //
                        </span>
                        <h3 className="text-base font-bold tracking-wide text-slate-800 transition-colors duration-300 dark:text-white sm:text-xl">
                            My Story
                        </h3>
                    </div>

                    {/* Paragraf Cerita (Kiri) & Aksen Tulisan Miring (Kanan) sejajar di semua layar */}
                    <div className="mt-3 flex flex-row items-center justify-between gap-4 sm:gap-8">
                        <p className="w-[70%] text-xs leading-relaxed text-slate-600 transition-colors duration-300 dark:text-mist sm:w-3/4 sm:text-sm md:text-base">
                            {dict.home.aboutText}
                        </p>

                        {/* Aksen Tulisan Miring di Kanan */}
                        <div className="flex w-[30%] shrink-0 items-center justify-center sm:w-1/4">
                            <p
                                className="-rotate-6 select-none text-center font-serif text-xl font-bold italic leading-tight tracking-tight text-brand/85 transition-transform duration-300 hover:rotate-0 dark:text-brand-soft/90 sm:text-3xl md:text-4xl"
                                aria-hidden="true"
                            >
                                Keep
                                <br />
                                Coding!
                            </p>
                        </div>
                    </div>
                </div>

                {/* 5. Bagian My Skills */}
                <div className="relative z-10 mt-8 md:mt-12">
                    {/* Judul Section */}
                    <div className="flex items-center gap-2.5">
                        <span
                            className="select-none text-base font-black tracking-tighter text-brand transition-colors duration-300 dark:text-brand-soft sm:text-lg"
                            aria-hidden="true"
                        >
            //
                        </span>
                        <h3 className="text-base font-bold tracking-wide text-slate-800 transition-colors duration-300 dark:text-white sm:text-xl">
                            My Skills
                        </h3>
                    </div>

                    {/* Daftar Grid Skills (5 kolom di desktop/tablet, otomatis rapi di HP) */}
                    <div className="mt-4 flex flex-wrap gap-2.5 sm:grid sm:grid-cols-3 sm:gap-3 md:grid-cols-5">
                        {[
                            { name: "PHP", badge: "php", color: "bg-[#777BB4]/20 text-[#8892BF]" },
                            { name: "Laravel", badge: "Lv", color: "bg-[#FF2D20]/15 text-[#FF2D20]" },
                            { name: "Next.js", badge: "N", color: "bg-white/10 text-slate-900 dark:text-white" },
                            { name: "Vue.js", badge: "V", color: "bg-[#42B883]/15 text-[#42B883]" },
                            { name: "JavaScript", badge: "JS", color: "bg-[#F7DF1E]/20 text-[#D4B800] dark:text-[#F7DF1E]" },
                            { name: "Java", badge: "Jv", color: "bg-[#EA2D2E]/15 text-[#F89820]" },
                            { name: "MySQL", badge: "SQL", color: "bg-[#00758F]/20 text-[#4479A1]" },
                            { name: "TypeScript", badge: "TS", color: "bg-[#3178C6]/20 text-[#3178C6]" },
                            { name: "Figma", badge: "Fg", color: "bg-[#A259FF]/20 text-[#A259FF]" },
                            { name: "Git", badge: "Gt", color: "bg-[#F05032]/20 text-[#F05032]" },
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white/80 px-3.5 py-2.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 dark:border-line dark:bg-surface/90 dark:hover:border-brand-soft/60"
                            >
                                <span
                                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[10px] font-extrabold tracking-tighter ${skill.color}`}
                                >
                                    {skill.badge}
                                </span>
                                <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 sm:text-sm">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 6. Bagian Banner CTA: Let's work together! */}
                <div className="relative z-10 mt-8 md:mt-12">
                    <a
                        href="#contact"
                        className="group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-5 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-brand/60 dark:border-line dark:bg-surface/90 dark:hover:border-brand-soft/60 sm:p-6"
                    >
                        {/* Efek gradasi pendaran ungu di sisi kiri banner (sesuai referensi) */}
                        <div
                            className="pointer-events-none absolute -left-10 top-1/2 h-36 w-52 -translate-y-1/2 rounded-full bg-brand/25 blur-2xl transition-opacity duration-300 group-hover:opacity-90"
                            aria-hidden="true"
                        />
                        <div
                            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-brand-soft/50 via-brand/20 to-transparent"
                            aria-hidden="true"
                        />

                        {/* Kiri: Ikon Roket & Teks */}
                        <div className="relative flex items-center gap-4 sm:gap-5">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-brand transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 dark:text-brand-soft sm:h-14 sm:w-14">
                                <Rocket className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={1.5} />
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-sm font-bold text-slate-900 transition-colors duration-300 dark:text-white sm:text-lg">
                                    Let&apos;s work together!
                                </h3>
                                <p className="max-w-md text-xs leading-relaxed text-slate-500 transition-colors duration-300 dark:text-mist sm:text-sm">
                                    Saya selalu terbuka untuk berkolaborasi proyek menarik.
                                </p>
                            </div>
                        </div>

                        {/* Kanan: Tombol Panah Lingkaran */}
                        <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-100/80 text-slate-700 transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white dark:border-line dark:bg-surface-2 dark:text-slate-200 dark:group-hover:border-brand-soft dark:group-hover:bg-brand sm:h-12 sm:w-12">
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 sm:h-5 sm:w-5" />
                        </div>
                    </a>
                </div>

            </div>
        </BackgroundFX>
    );
}
