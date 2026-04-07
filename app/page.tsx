import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">

      {/* HeroCarousel */}
      <section className="text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-turquoise">
          Boutique COGI
        </h1>
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
          Découvrez des collections élégantes et modernes adaptées à votre style.
        </p>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Catégories</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {["Homme", "Femme", "Enfant", "Sac", "Accessoires"].map((cat) => (
            <div
              key={cat}
              className="p-6 border rounded-xl hover:border-turquoise cursor-pointer transition"
            >
              {cat}
            </div>
          ))}
        </div>
      </section>

      {/* Produits */}
      <section className="container mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6">Produits populaires</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((p) => (
            <div
              key={p}
              className="border rounded-xl p-4 hover:shadow-lg transition"
            >
              <div className="h-40 bg-muted rounded-md mb-4" />
              <h3 className="font-medium">Produit {p}</h3>
              <p className="text-sm text-muted-foreground">29.99$</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}