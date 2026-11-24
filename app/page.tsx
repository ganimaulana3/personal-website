import Link from "next/link";
import { ArrowRight, CodeXml, CalendarDays, GraduationCap, Download } from "lucide-react";
import ShiningStars from "@/components/ShiningStars";
import ShootingStars from "@/components/ShootingStars";
import BackgroundFX from "@/components/home/BackgroundFX";

const stats = [
  {
    label: "Projek",
    value: "5+",
    icon: CodeXml,
  },
  {
    label: "Tahun Pengalaman",
    value: "2+",
    icon: CalendarDays,
  },
  {
    label: "Teknik Informatika",
    value: "D3",
    icon: GraduationCap,
  },
]

export default function Home() {
  return (
    <BackgroundFX>
      <div className="space-y-10 md:space-y-16">
        <section className="relative flex items-center gap-5 md:grid md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12">
          <div className="min-w-0 flex-1 space-y-2 md:space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Tersedia untuk proyek baru
            </div>
            <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-mist">Hello, I&apos;m</p>
            <h1 className="text-2xl font-bold leading-tight md:text-6xl md:font-extrabold md:leading-[1.05] md:tracking-tight">
              Gani <span className="text-brand dark:text-brand-soft">Maulana</span>
            </h1>
            <p className="inline-block border-b-2 border-brand dark:border-brand pb-1 text-xs font-medium text-slate-700 transition-colors duration-300 dark:text-mist md:text-sm">
              Web &amp; Mobile Developer
            </p>
            <p className="max-w-xl pt-1 text-xs leading-relaxed text-slate-500 transition-colors duration-300 dark:text-mist md:text-base">
              Saya seorang D3 Teknik Informatika yang bersemangat dalam membangun aplikasi modern, baik di web maupun mobile.
            </p>
            {/* CTA — desktop only */}
            <div className="hidden gap-3 pt-3 md:flex">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-soft"
              >
                Lihat Proyek
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-line, dark:text-mist dark:hover:bg-white/5"
              >
                Hubungi Saya
              </Link>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-100 dark:border-line, dark:text-mist dark:hover:bg-white/5"
              >
                <Download size={16} />
                Download CV
              </a>
            </div>
          </div>
          {/* Foto profil */}
          <div className="relative mx-auto h-28 w-28 shrink-0 md:h-80 md:w-80">
            <ShiningStars />
            <ShootingStars />
            <div className="absolute inset-0 rounded-full bg-brand/30 blur-3xl" />
            <div className="absolute -inset-4 rounded-full border border-dashed border-brand/40 md:-inset-6" />
            <div className="relative h-full w-full rounded-full border-2 border-brand/60 p-1.5 shadow-[0_0_40px_rgba(124,93,250,0.35)] dark:border-brand-soft/50 md:p-2">
              <img
                src="/testing/profile.jpg"
                alt="Gani Maulana"
                className="h-full w-full rounded-full object-cover"
              />
            </div>

            {/* Chip melayang — desktop only */}
            <div className="absolute -left-10 top-8 hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-md dark:border-line dark:bg-surface-2 dark:text-mist md:block">
              NextJS
            </div>
            <div className="absolute -right-6 bottom-12 hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-md dark:border-line dark:bg-surface-2 dark:text-mist md:block">
              Laravel
            </div>
          </div>
        </section>

        {/* ===== STATS — desktop only ===== */}
        <section className="hidden gap-4 md:grid md:grid-cols-3">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-line dark:bg-surface"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center text-brand dark:text-brand-soft">
                  <Icon size={40} />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-mist">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </BackgroundFX>
  );
}