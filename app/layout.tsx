import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-[#FAFCFD]`}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          
          <div className="flex-1 container mx-auto">
            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Sidebar Gauche - Navigation Catégories */}
              <aside className="hidden lg:block w-64 shrink-0 py-10">
                <nav className="sticky top-24 space-y-2">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest px-4 mb-4">
                    Collections
                  </h3>
                  {/* Les liens seront ici */}
                </nav>
              </aside>

              {/* Zone de contenu dynamique */}
              <main className="flex-1 py-10 px-4 md:px-0">
                {children}
              </main>

              {/* Sidebar Droite - Widgets Panier/Promo */}
              <aside className="hidden xl:block w-72 shrink-0 py-10">
                <div className="sticky top-24 border rounded-2xl p-6 bg-white shadow-sm border-slate-100">
                  <h3 className="font-bold text-slate-800 mb-4">Panier Rapide</h3>
                  <p className="text-sm text-slate-500">Votre panier est vide.</p>
                </div>
              </aside>

            </div>
          </div>

          {/* Footer */}
        </div>
      </body>
    </html>
  );
}