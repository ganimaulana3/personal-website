import Link from "next/link";
import { ArrowRight, CodeXml, CalendarDays, GraduationCap, Download, Briefcase, Send, UserRound } from "lucide-react";
import { Github, Linkedin, Instagram, Tiktok } from "@/components/ShadcnIcons";
import ShiningStars from "@/components/ShiningStars";
import ShootingStars from "@/components/ShootingStars";
import BackgroundFX from "@/components/home/BackgroundFX";
import TimelineCard from "@/components/TimelineCard";
import SkillsCard from "@/components/SkillsCard";

const stats = [
  {
    label: "Projects",
    value: "5+",
    icon: CodeXml,
  },
  {
    label: "Years of Experience",
    shortLabel: "Years of Exp.",
    value: "2+",
    icon: CalendarDays,
  },
  {
    label: "Education",
    value: "D3-TI",
    valueClass: "text-[13px]",
    icon: GraduationCap,
  },
]

const careerData = [
  { year: "2025", title: "Internship / KKI – Access Media", subtitle: "Pengembangan Aplikasi Club Taekwondo Berbasis Web" },
  { year: "2022", title: "Internship / PKL - Puskodal Gedung Sate", subtitle: "Rekayasa Perangkat Lunak" },
];

const educationData = [
  { year: "2023 - 2026", title: "D3 Teknik Informatika", subtitle: "Universitas Dian Nuswantoro" },
  { year: "2020 – 2023", title: "SMK Negeri 1 Banjar", subtitle: "Rekayasa Perangkat Lunak" },
];

const floatingChips = ["Next JS", "Laravel", "PostgreSQL", "Prisma ORM"];

// Slot posisi di sekitar foto — tambah slot bebas, chip akan otomatis mengisi
const chipSlots = [
  "-left-10 top-8",
  "-right-6 bottom-12",
  "-left-8 bottom-20",
  "-right-10 top-14",
  "-left-14 top-1/3",
  "-right-14 top-2/3",
];

// Hash sederhana dari label → index slot (deterministik, terlihat random)
const chipSlot = (label: string, index: number) => {
  let h = 0;
  for (const c of label) h = (h * 31 + c.charCodeAt(0)) % chipSlots.length;
  return chipSlots[(h + index) % chipSlots.length];
};

const socials = [
  { label: "GitHub", href: "https://github.com/username-kamu", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/in/username-kamu", icon: Linkedin },
  { label: "Instagram", href: "https://instagram.com/username-kamu", icon: Instagram },
  { label: "TikTok", href: "https://tiktok.com/@username-kamu", icon: Tiktok },
];

export default function Home() {
  return (
    <BackgroundFX>
      <div className="md:hidden">
        <ShiningStars />
        <ShootingStars />
      </div>
      <div className="space-y-10 md:space-y-16">
        {/* ===== HERO ===== */}
        <section className="relative flex items-center gap-5 !mb-5 md:grid md:grid-cols-[1.15fr_0.85fr] md:items-center md:gap-12">
          <div className="min-w-0 flex-1 space-y-2 md:space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
              Tersedia untuk proyek baru
            </div>
            <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-mist">Hello, I&apos;m</p>
            <h1 translate="no" className="text-2xl font-bold leading-tight md:text-6xl md:font-extrabold md:leading-[1.05] md:tracking-tight">
              Gani <span className="text-brand dark:text-brand-soft">Maulana</span>
            </h1>
            <p className="inline-block border-b-2 border-brand dark:border-brand pb-1 text-xs font-medium text-slate-700 transition-colors duration-300 dark:text-mist md:text-sm">
              Web &amp; Mobile Developer
            </p>
            <p className="max-w-xl pt-1 text-xs leading-relaxed text-slate-500 transition-colors duration-300 dark:text-mist md:text-base">
              Saya seorang D3 Teknik Informatika yang bersemangat dalam membangun aplikasi modern, baik di web maupun mobile.
            </p>

          </div>
          {/* Foto profil */}
          <div className="relative mx-auto h-28 w-28 shrink-0 md:h-80 md:w-80">
            <div className="hidden md:block">
              <ShiningStars />
              <ShootingStars />
            </div>
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
            {floatingChips.map((label, i) => (
              <div
                key={label}
                className={`absolute hidden rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 shadow-md dark:border-line dark:bg-surface-2 dark:text-mist md:block ${chipSlots[i % chipSlots.length]}`}
              >
                {label}
              </div>
            ))}
          </div>
        </section>

        {/* ===== SOCIAL MEDIA ===== */}
        <section className="flex items-center gap-3 !mb-5 md:justify-start">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand hover:text-brand dark:border-line dark:bg-surface-2 dark:text-mist dark:hover:border-brand dark:hover:text-brand-soft"
            >
              <Icon size={18} />
            </a>
          ))}
        </section>

        {/* CTA — Desktop only */}
        <section className="hidden gap-3 pt-3 md:flex !mb-5">
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
            <Send size={16} />
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
        </section>

        {/* ===== STATS ===== */}
        <section className="grid grid-cols-3 gap-3 md:gap-4 !mb-5">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-colors dark:border-line dark:bg-surface md:p-5"
              >
                {/* ===== Versi MOBILE ===== */}
                <div className="md:hidden">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center text-brand dark:text-brand-soft">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className={`font-extrabold text-slate-900 dark:text-slate-100 ${stat.valueClass ?? "text-lg"}`}>
                      {stat.value}
                    </p>
                  </div>
                  <p className="mt-1.5 text-[10px] leading-tight text-slate-500 dark:text-mist text-center">
                    {stat.shortLabel ?? stat.label}
                  </p>
                </div>

                {/* ===== Versi DESKTOP ===== */}
                <div className="hidden items-center gap-4 md:flex">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center text-brand dark:text-brand-soft">
                    <Icon className="h-10 w-10" />
                  </div>
                  <div>
                    <p className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
                      {stat.value}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-mist">{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* CTA - Mobile */}
        <section className="grid grid-cols-3 gap-2 !mb-5 md:hidden">
          <Link
            href="/projects"
            className="group inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full bg-brand px-2 py-2 text-[11px] font-semibold leading-none text-white shadow-lg shadow-brand/30 transition-colors hover:bg-brand-soft"
          >
            <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
            Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-slate-300 px-2 py-2 text-[11px] font-semibold leading-none text-slate-700 transition-colors hover:bg-slate-100 dark:border-line dark:text-mist dark:hover:bg-surface"
          >
            <Send size={13} />
            Contact Me
          </Link>
          <a
            href="/resume.pdf"
            download
            className="btn-grid inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-full border border-slate-300 px-2 py-2 text-[11px] font-semibold leading-none text-slate-700 shadow-sm transition-all hover:border-brand hover:text-brand dark:border-line dark:text-mist"
          >
            <Download size={13} />
            CV
          </a>
        </section>

        {/* Section Cards — masonry abstrak */}
        <section className="gap-4 md:columns-2 md:gap-6">
          {/* Karir */}
          <div className="mb-4 break-inside-avoid md:mb-6">
            <TimelineCard title="Journey Karir" icon={<Briefcase className="h-5 w-5" />} items={careerData} />
          </div>

          {/* Pendidikan */}
          <div className="mb-4 break-inside-avoid md:mb-6">
            <TimelineCard title="Journey Pendidikan" icon={<GraduationCap className="h-5 w-5" />} items={educationData} />
          </div>

          {/* About Me */}
          <div className="mb-4 break-inside-avoid md:mb-6">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-line dark:bg-surface md:p-6">
              <img src="/images/light/bg-laptop-light.png" alt="" className="absolute inset-0 h-full w-full object-cover dark:hidden" />
              <img src="/images/dark/bg-laptop-dark.png" alt="" className="absolute inset-0 hidden h-full w-full object-cover dark:block" />
              <div className="relative z-10 max-w-[65%]">
                <div className="flex items-center gap-2.5">
                  <span className="text-brand dark:text-brand-soft"><UserRound /></span>
                  <h2 className="text-base font-semibold text-slate-900 dark:text-white">About Me</h2>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-slate-500 dark:text-mist md:text-sm">
                  Saya Gani Maulana, mahasiswa D3 Teknik Informatika yang passionate membangun aplikasi web dan mobile modern. Fokus saya di frontend development dengan React dan Next.js, serta mobile development.
                </p>
                <Link href="/about" className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-brand transition-colors hover:text-brand-soft dark:text-brand-soft dark:hover:text-brand">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Skills — di bawah About dalam urutan DOM */}
          <div className="mb-4 break-inside-avoid md:mb-6">
            <SkillsCard />
          </div>
        </section>
      </div>
    </BackgroundFX>
  );
}