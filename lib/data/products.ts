import { supabase } from "@/lib/supabase"

export async function getProducts() {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("is_active", true)

  if (error) throw error

  return data
}