import Link from "next/link";
import { ShoppingCart, Heart, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4">
        
        {/* Logo Textuel - Identité Visuelle */}
        <Link href="/" className="shrink-0">
          <span className="text-2xl font-black tracking-tighter text-turquoise hover:text-rose-cogi transition-colors duration-300">
            Boutique COGI
          </span>
        </Link>

        {/* Barre de recherche - Flex-1 pour occuper l'espace central */}
        <div className="flex-1 max-w-md mx-auto hidden md:block">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-turquoise transition-colors" />
            <Input
              type="search"
              placeholder="Rechercher l'élégance..."
              className="pl-10 border-slate-200 focus:border-turquoise focus:ring-turquoise/20 rounded-full bg-slate-50/50"
            />
          </div>
        </div>

        {/* Actions utilisateur - Alignées à droite */}
        <nav className="flex items-center gap-1 sm:gap-3">
          <Button 
            variant="ghost" 
            className="text-turquoise hover:text-rose-cogi hover:bg-rose-cogi/5 gap-2 transition-all font-medium"
          >
            <User className="h-5 w-5" />
            <span className="hidden lg:inline">Se connecter</span>
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-turquoise hover:text-rose-cogi hover:bg-rose-cogi/5"
          >
            <Heart className="h-5 w-5" />
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            className="relative text-turquoise hover:text-rose-cogi hover:bg-rose-cogi/5"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-cogi text-[10px] text-white font-bold animate-in zoom-in">
              0
            </span>
          </Button>
        </nav>
      </div>
    </header>
  );
}
