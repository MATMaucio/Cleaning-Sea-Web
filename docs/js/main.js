// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    const feedbackForm = document.getElementById('feedbackForm');

    if (feedbackForm) {
        feedbackForm.addEventListener('submit', async (e) => {
            // Evitamos que la página se recargue
            e.preventDefault();

            // Obtenemos los valores de los inputs
            const version = document.getElementById('version').value;
            const rating = parseInt(document.getElementById('rating').value);
            const comentario = document.getElementById('comentario').value;
            const email = document.getElementById('email').value;

            // Creamos un objeto con la estructura de nuestra base de datos
            const feedbackData = {
                version_probada: version,
                puntuacion_mecanica: rating,
                comentarios: comentario,
                correo_contacto: email || null // Si no pone correo, mandamos null
            };

            // Aquí simulamos el envío para probar que captura bien los datos
            console.log("Datos listos para enviar a Supabase:", feedbackData);
            
            // TODO: Llamar a la función de supabase-client.js
            // const exito = await enviarFeedbackASupabase(feedbackData);

            // Damos feedback visual al usuario (temporal)
            alert("¡Gracias por tu feedback! Los datos se han capturado en la consola.");
            
            // Limpiamos el formulario después de enviar
            feedbackForm.reset();
            // Restauramos la versión por defecto
            document.getElementById('version').value = "v0.1-Alpha"; 
        });
    }
});