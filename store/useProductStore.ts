import { create } from 'zustand';
import { createClient } from '@supabase/supabase-js';
import type { Product } from '@/types/database';

// Initialisation temporaire de Supabase (à déplacer dans un fichier lib/supabase.ts idéalement)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

interface ProductState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({ isLoading: true, error: null });
    
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;

      set({ products: data as Product[], isLoading: false });
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
      console.error("Erreur lors de la récupération des produits:", err.message);
    }
  },
}));
