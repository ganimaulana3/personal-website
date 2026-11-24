import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme-provider";
import "@/app/globals.css";

import { Plus_Jakarta_Sans } from "next/font/google"; 

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased bg-slate-50 text-slate-900 transition-colors duration-300 dark:text-slate-50">
        <Script id="theme-init" strategy="beforeInteractive">
          {`(function(){try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches)){document.documentElement.classList.add("dark")}}catch(e){}})()`}
        </Script>
        <ThemeProvider>
          {/* Header di bagian atas */}
          <Header />
          <div className="relative mx-auto min-h-screen max-w-md overflow-hidden border border-slate-200 px-5 pb-28 pt-6 shadow-xl dark:border-transparent dark:bg-transparent dark:shadow-none">

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
