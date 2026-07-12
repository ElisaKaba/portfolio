import { supabase } from "../lib/supabaseClient";

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("is_visible", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Erreur Supabase projects:", error);
    return [];
  }

  return data;
}
