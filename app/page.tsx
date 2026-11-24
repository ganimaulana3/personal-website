import Link from "next/link";
import ShiningStars from "@/components/ShiningStars";
import ShootingStars from "@/components/ShootingStars";
import BackgroundFX from "@/components/home/BackgroundFX";

export default function Home() {
  return (
    <BackgroundFX>
      <section className="flex items-center justify-between gap-4">
        <ShiningStars/>
        <ShootingStars/>
        <div className="flex-1 space-y-2">
          <p className="text-sm text-slate-500 transition-colors duration-300 dark:text-gray-300">Hello, I&apos;m</p>
          <h1 className="text-2xl font-bold leading-tight">
            Gani <span className="text-purple-600 dark:text-purple-400">Maulana</span>
          </h1>
          <p className="inline-block border-b-2 border-purple-600 dark:border-purple-500 pb-1 text-xs font-medium text-slate-700 transition-colors duration-300 dark:text-gray-200">
            Web &amp; Mobile Developer
          </p>
          <p className="pt-1 text-xs leading-relaxed text-slate-500 transition-colors duration-300 dark:text-gray-400">
            Saya seorang D3 Teknik Informatika yang bersemangat dalam membangun aplikasi modern, baik di web maupun mobile.
          </p>
        </div>
        <div className="relative h-28 w-28 shrink-0 rounded-full border-2 border-purple-500/60 dark:border-purple-400/50 p-1 shadow-[0_0_25px_rgba(168,85,247,0.25)]">
          <img
            src="/testing/profile.jpg" // Ganti dengan path foto Anda di folder public/
            alt="Gani Maulana"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </section>
    </BackgroundFX>
  );
}