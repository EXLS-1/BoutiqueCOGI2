import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Hero from "@/components/herocarousel"
import Footer from "@/components/footer";
import Leftsidebar from "@/components/leftsidebar";
import rightsidebar from "@/components/rightsidebar";

const inter = Inter({
  variable: "--turqoise",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Boutique COGI",
  description: "A la decouverte du style et de l'élegance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={'${inter.className} min-h-screen flex flex-col bg-state-50'}>
        <Navbar/>
        <HeroCarousel/>

        {/* Conteneur principal avec les 2 sidebars */}
        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar de Gauche: Menu & Parametre */}
          <aside className="hidden md:block w-64 border-r bg-white p-4">
            Leftsidebar
          </aside>
          {/* Conteneur Central */}
          <main className="flex-1 overflow-y-auto">
          {children}
          </main>
          {/* Sidebar de Droite: Favoris & Panier */}
          <aside className="hidden md:block w-72 border-r bg-white p-4">
            Rightsidebar
          </aside>
        </div>

        <footer/>
      </body>
    </html>
  );
}
