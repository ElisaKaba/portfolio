import { supabase } from "../lib/supabaseClient";
import { localProjects } from "../data/localProjects";

let cachedProjects = null;

export async function getProjects() {
  if (cachedProjects) {
    return cachedProjects;
  }

  try {
    const { data, error } = await supabase
      .from("projects")
      .select(
        `
        id,
        title,
        slug,
        category,
        short_description,
        description,
        image_url,
        technologies,
        github_url,
        demo_url,
        display_order,
        is_visible
      `
      )
      .eq("is_visible", true)
      .order("display_order", { ascending: true });

    if (error) {
      console.warn(
        "Supabase indisponible pour les projets, utilisation des données locales.",
        error
      );

      cachedProjects = localProjects;
      return localProjects;
    }

    if (!data || data.length === 0) {
      console.warn(
        "Aucun projet retourné par Supabase, utilisation des données locales."
      );

      cachedProjects = localProjects;
      return localProjects;
    }

    cachedProjects = data;

    return data;
  } catch (error) {
    console.warn(
      "Erreur réseau ou timeout Supabase projects, utilisation des données locales.",
      error
    );

    cachedProjects = localProjects;
    return localProjects;
  }
}