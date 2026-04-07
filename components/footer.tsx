export default function Footer() {
  return (
    <footer className="border-t bg-white py-8">
      <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Boutique COGI. Tous droits réservés.
      </div>
    </footer>
  );
}
