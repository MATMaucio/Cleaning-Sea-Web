// js/supabase-client.js

const SUPABASE_URL = 'https://zajqyvnxvwgekzdbtbta.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_HVjb44nKY8xNi-4_mFpUzQ_-MJ77UjX';

// Inicializamos el cliente real
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Envía el objeto de feedback a la tabla 'feedback_jugadores'
 * @param {Object} data - Los datos del formulario
 * @returns {boolean} - true si fue exitoso, false si hubo error
 */
async function enviarFeedbackASupabase(data) {
    try {
        // Hacemos el insert real a la tabla
        const { error } = await supabase
            .from('feedback_jugadores')
            .insert([data]);

        // Si Supabase nos devuelve un error (ej. falta de permisos), lo lanzamos
        if (error) throw error;
       
        console.log("¡Feedback guardado con éxito en Supabase!");
        return true;

    } catch (error) {
        console.error("Error al guardar el feedback:", error.message);
        return false;
    }
}