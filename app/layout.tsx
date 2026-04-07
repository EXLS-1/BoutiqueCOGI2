import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boutique COGI | Élégance & Style",
  description: "Découvrez nos collections exclusives de mode.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-slate-50`}>
        <Navbar />
        
        <div className="flex flex-1 container mx-auto">
          {/* Sidebar Gauche */}
          <aside className="hidden lg:block w-64 border-r py-8 px-4 shrink-0">
            {/* Composant LeftSidebar à venir */}
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Menu</p>
          </aside>

          {/* Contenu Principal */}
          <main className="flex-1 px-6 py-8">
            {children}
          </main>

          {/* Sidebar Droite */}
          <aside className="hidden xl:block w-80 border-l py-8 px-4 shrink-0">
            {/* Composant RightSidebar à venir */}
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Panier Rapide</p>
          </aside>
        </div>

        <Footer />
      </body>
    </html>
  );
}