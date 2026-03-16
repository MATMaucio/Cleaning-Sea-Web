// js/supabase-client.js

const SUPABASE_URL = 'https://zajqyvnxvwgekzdbtbta.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_HVjb44nKY8xNi-4_mFpUzQ_-MJ77UjX';

// ¡CAMBIO CLAVE! Le cambiamos el nombre a la variable para evitar conflictos
const clienteSupabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function enviarFeedbackASupabase(data) {
    try {
        // Usamos la nueva variable clienteSupabase aquí
        const { error } = await clienteSupabase
            .from('feedback_jugadores')
            .insert([data]);

        if (error) throw error;
       
        console.log("¡Feedback guardado con éxito en Supabase!");
        return true;

    } catch (error) {
        console.error("Error al guardar el feedback:", error.message);
        return false;
    }
}