import Link from "next/link";
import { ReactIcon, Laravel, Nextjs, Tailwind, TypeScript, PHP, MySQL, PostgreSQL } from "./CustomIcons";
import {
  ChevronRight,
  Star,
} from "lucide-react";

const skills = [
  { name: "React", icon: ReactIcon },
  { name: "Laravel", icon: Laravel },
  { name: "Next.js", icon: Nextjs },
  { name: "Tailwind CSS", icon: Tailwind },
  { name: "TypeScript", icon: TypeScript },
  { name: "PHP", icon: PHP },
  { name: "MySQL", icon: MySQL },
  { name: "PostgreSQL", icon: PostgreSQL },
];

export default function SkillsCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-line dark:bg-surface md:p-6">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Star className="h-4 w-4 fill-brand text-brand dark:text-brand-soft" />
          <h2 className="text-base font-semibold text-slate-900 dark:text-white">
            Skills
          </h2>
        </div>
        <Link
          href="/skills"
          className="flex items-center gap-1 text-xs text-slate-500 transition-colors hover:text-brand dark:text-mist dark:hover:text-brand-soft"
        >
          Lihat Semua <ChevronRight className="h-3.5 w-3.5" />
        </Link>
      </div>

      {/* Grid badge — 2 kolom mobile, 4 kolom desktop (2 baris x 4) */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 md:gap-3">
        {skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-700 transition-colors hover:border-brand/50 hover:text-brand dark:border-line dark:bg-surface-2 dark:text-mist dark:hover:text-brand-soft"
          >
            <Icon className="h-4 w-4 shrink-0 text-brand dark:text-brand-soft" />
            <span className="truncate">{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}