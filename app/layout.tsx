import { Suspense } from "react";
import { cookies } from "next/headers";
import Script from "next/script";
import { Plus_Jakarta_Sans, Noto_Sans_JP } from "next/font/google";
import "@/app/globals.css";
import Navbar from "@/components/global/Navbar";
import Header from "@/components/global/Header";
import Topbar from "@/components/global/Topbar";
import { ThemeProvider } from "@/components/global/theme-provider";
import { I18nProvider } from "@/components/global/I18nProvider";
import { LANG_COOKIE_NAME, normalizeLocale } from "@/lib/i18n";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

async function LocaleProvider({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const locale = normalizeLocale(cookieStore.get(LANG_COOKIE_NAME)?.value);

  return (
    <I18nProvider initialLocale={locale}>
      <Topbar />
      {/* Header di bagian atas */}
      <Header />
      <div className="relative mx-auto min-h-screen max-w-md overflow-hidden border border-slate-200 px-5 pb-28 pt-6 dark:border-transparent dark:bg-transparent dark:shadow-none md:max-w-6xl md:border-x-0 md:px-8 md:pb-16 md:pt-10">
        {/* Konten utama dari page.tsx akan otomatis masuk ke {children} ini */}
        <main>{children}</main>

        {/* Navbar melayang di bagian bawah */}
        <Navbar />
      </div>
    </I18nProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${notoSansJP.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body className="antialiased bg-slate-50 text-slate-900 transition-colors duration-300 dark:text-slate-50">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`}
        </Script>
        <Script id="lang-init" strategy="beforeInteractive">
          {`(function(){try{var m=document.cookie.match(/(?:^|; )lang=(id|en|jp)(?:;|$)/);if(m){document.documentElement.lang=m[1]==="jp"?"ja":m[1]}}catch(e){}})()`}
        </Script>
        <ThemeProvider>
          <Suspense fallback={null}>
            <LocaleProvider>{children}</LocaleProvider>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
