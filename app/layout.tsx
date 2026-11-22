import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/theme-provider";
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased bg-slate-50 text-slate-900 transition-colors duration-300 dark:text-slate-50">
        <ThemeProvider>
          {/* Header di bagian atas */}
          <Header />

          {/* Konten utama dari page.tsx akan otomatis masuk ke {children} ini */}
          <main className="pb-24"> 
            {children}
          </main>

          {/* Navbar melayang di bagian bawah (jika konsepnya seperti di gambar) */}
          <Navbar />
        </ThemeProvider>
      </body>
    </html>
  );
}
