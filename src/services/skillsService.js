import { supabase } from '../lib/supabaseClient';

export async function getSkills() {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .eq('is_visible', true)
    .order('display_order', { ascending: true });

  if (error) {
    console.error('Erreur Supabase skills:', error);
    return [];
  }

  return data;
}