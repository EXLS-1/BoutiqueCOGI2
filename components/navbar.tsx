import Link from "next/link";
import { ShoppingCart, Heart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo Textuel */}
        <Link href="/" className="group transition-all">
          <span className="text-2xl font-black text-turquoise group-hover:text-rose-cogi transition-colors">
            Boutique COGI
          </span>
        </Link>

        {/* Barre de recherche centrale */}
        <div className="hidden lg:flex relative w-full max-w-sm items-center mx-8">
          <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher un article..."
            className="pl-9 focus-visible:ring-turquoise"
          />
        </div>

        {/* Actions utilisateur */}
        <nav className="flex items-center gap-2">
          <Button variant="ghost" className="hidden sm:flex text-turquoise hover:text-rose-cogi">
            <User className="mr-2 h-5 w-5" />
            Log In
          </Button>
          
          <Button variant="ghost" size="icon" className="text-red-cogi hover:bg-red-cogi/10">
            <Heart className="h-5 w-5" />
          </Button>

          <Button variant="ghost" size="icon" className="relative text-turquoise hover:bg-turquoise/10">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-cogi text-[10px] text-white font-bold">
              0
            </span>
          </Button>
        </nav>
      </div>
    </header>
  );
}