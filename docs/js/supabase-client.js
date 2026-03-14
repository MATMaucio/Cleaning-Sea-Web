// js/supabase-client.js

/* NOTA: Para que esto funcione, en el index.html debemos importar la librería 
  de Supabase ANTES de este script agregando esta línea en el <head> o antes del </body>:
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
*/

// Estas variables las llenaremos cuando crees tu proyecto
const SUPABASE_URL = 'AQUI_IRA_TU_URL';
const SUPABASE_ANON_KEY = 'AQUI_IRA_TU_KEY';

// Inicializamos el cliente (comentado hasta tener las llaves)
// const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

/**
 * Envía el objeto de feedback a la tabla 'feedback_jugadores'
 * @param {Object} data - Los datos del formulario
 * @returns {boolean} - true si fue exitoso, false si hubo error
 */
async function enviarFeedbackASupabase(data) {
    try {
        /* LÓGICA FUTURA:
        const { error } = await supabase
            .from('feedback_jugadores')
            .insert([data]);

        if (error) throw error;
        */
       
        console.log("Simulando guardado en base de datos...");
        return true;

    } catch (error) {
        console.error("Error al guardar el feedback:", error.message);
        return false;
    }
}