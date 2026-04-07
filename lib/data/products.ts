import { createClient } from '@supabase/supabase-js';
import type { Product } from '@/types/database';

// Le client est isolé et réutilisable
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function getActiveProducts(): Promise<Product[]> {
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Erreur Supabase:", error.message);
      throw new Error("Impossible de charger ou de récupérer les produits.");
    }

    return data as Product[];
  } catch (error) {
    console.error("Erreur lors de la récupération des produits:", error);
    return []; // Retourne un tableau vide pour ne pas faire crasher l'interface
  }
}
