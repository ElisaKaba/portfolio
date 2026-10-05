import { supabase } from "../lib/supabaseClient";
import { localSkills } from "../data/localSkills";

let cachedSkills = null;

export async function getSkills() {
  if (cachedSkills) {
    return cachedSkills;
  }

  try {
    const { data, error } = await supabase
      .from("skills")
      .select(
        `
        id,
        name,
        icon,
        category,
        description,
        level,
        display_order,
        is_visible
      `
      )
      .eq("is_visible", true)
      .order("display_order", { ascending: true });

    if (error) {
      console.warn(
        "Supabase indisponible pour les compétences, utilisation des données locales.",
        error
      );

      cachedSkills = localSkills;
      return localSkills;
    }

    if (!data || data.length === 0) {
      console.warn(
        "Aucune compétence retournée par Supabase, utilisation des données locales."
      );

      cachedSkills = localSkills;
      return localSkills;
    }

    cachedSkills = data;

    return data;
  } catch (error) {
    console.warn(
      "Erreur réseau ou timeout Supabase skills, utilisation des données locales.",
      error
    );

    cachedSkills = localSkills;
    return localSkills;
  }
}