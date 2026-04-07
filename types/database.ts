export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  price: number; // Toujours en centimes
  category: string;
  image_url: string | null;
  stock: number;
  is_active: boolean;
  created_at: string;
}
