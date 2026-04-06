import Link from "next/link";
import { ShoppingBag, Heart, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-amber-200">
      <div className="flex h-16 items-center justify-between px-6 md:px-10">

        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-brand-turquoise to-brand-rose">
            Boutique COGI
          </span>
        </Link>
        {/* Navigation centrale */}
        <nav className="hidden md:flex gap-8 font-medium text-sm"> 
          <Link href="/" className="hover:text-brand-turquoise transition">Accueil</Link>
          <Link href="/boutique" className="hover:text-brand-turquoise transition">Boutique</Link>
          <Link href="/contact" className="hover:text-brand-turquoise transition">Contact</Link>
        </nav>
        {/* Actions (Mobile view handles opening sidebars via Sheet/Modals later) */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="lg-hidden">
            <Heart className="h-5 w-5 text-secondary-red"/>
          </Button>
          <Button variant="ghost" size="icon" className="lg-hidden">
            <Heart className="h-5 w-5 text-secondary-red"/>
          </Button>
          <Button variant="ghost" size="icon" className="lg-hidden">
            <Heart className="h-5 w-5 text-secondary-red"/>
          </Button>
        </div>

      </div> 
    </header>
  )
}