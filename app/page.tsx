import Link from "next/link";

export default function Home() {
  return (
    <section id="home" className="px-5 pt-6 space-y-5">
      {/* 1. Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
        <span className="size-2 rounded-full bg-green-500" />
          Terbuka untuk pekerjaan
      </div>
      {/* 2. H1 + paragraf */}
      <div className="space-y-3">
        <h1 className="text-balance text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white">
          Halo, saya Gani. Saya membangu web yang cepat dan nyaman dipakai
        </h1>
        <p className="text-base leading-relaxed text-slate-500 dark:text-slate-400">
          Junior web developer yang suka mengubah desain menjadi halaman yang rapi, responsif dan mudah dirawat
        </p>
      </div>
      {/* 3. CTA */}
      <div className="flex flex-wrap gap-3">
        <Link 
          href="/projects"
          className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-400"
        >
          Lihat proyek
        </Link>
        <Link
          href="/contact"
          className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100 active:scale-95 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
        >
          Hubungi saya
        </Link>
      </div>
      {/* 4. Kartu kode */}
      <div className="rounded-3xl border border-transparent bg-slate-900 p-5 font-mono text-sm leading-relaxed text-slate-100 dark:border-slate-800">
        <pre className="overflow-x-auto">
          <code>
            <span className="text-blue-400">const</span> gani = {"{"}
            {"\n"}
            {"  "}role: <span className="text-rose-400">"Web Developer"</span>,
            {"\n"}
            {"  "}stack: [
              <span className="text-rose-400">"HTML"</span>,{"  "}
              <span className="text-rose-400">CSS</span>,{" "}
              <span className="text-rose-400">JS</span>],
            {"\n"}
            {"  "}belajar: <span className="text-rose-400">"React"</span>
            {"\n"}
            {"}"};
          </code>
        </pre>
      </div>
    </section>
  );
}