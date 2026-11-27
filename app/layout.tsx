import Navbar from "@/components/global/Navbar";
import Header from "@/components/global/Header";
import Topbar from "@/components/global/Topbar";
import Script from "next/script";
import { ThemeProvider } from "@/components/global/theme-provider";
import "@/app/globals.css";
import GoogleTranslate from "@/components/global/GoogleTranslate";

import { Plus_Jakarta_Sans } from "next/font/google";
import { Noto_Sans_JP } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* Definisi callback — wajib sebelum element.js */}
        <Script id="google-translate-init" strategy="beforeInteractive">
          {`function googleTranslateElementInit(){new google.translate.TranslateElement({pageLanguage:"id",includedLanguages:"en,ja",autoDisplay:false},"google_translate_element");}`}
        </Script>
        <Script
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 transition-colors duration-300 dark:text-slate-50">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`}
        </Script>
        <ThemeProvider>
          <GoogleTranslate />
          <Topbar />
          {/* Header di bagian atas */}
          <Header />
          <div className="relative mx-auto min-h-screen max-w-md overflow-hidden border border-slate-200 px-5 pb-28 pt-6 dark:border-transparent dark:bg-transparent dark:shadow-none md:max-w-6xl md:border-x-0 md:px-8 md:pb-16 md:pt-10">
            {/* Konten utama dari page.tsx akan otomatis masuk ke {children} ini */}
            <main>{children}</main>

            {/* Navbar melayang di bagian bawah (jika konsepnya seperti di gambar) */}
            <Navbar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
