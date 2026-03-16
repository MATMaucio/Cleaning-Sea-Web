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

            console.log("Enviando datos a Supabase...", feedbackData);
            
            // Llamamos a la función de supabase-client.js y esperamos la respuesta
            const exito = await enviarFeedbackASupabase(feedbackData);

            // Damos feedback visual al usuario dependiendo del resultado
            if (exito) {
                alert("¡Gracias por tu feedback! Tus comentarios ayudarán a mejorar Cleaning Sea.");
                
                // Limpiamos el formulario después de enviar
                feedbackForm.reset();
                // Restauramos la versión por defecto
                document.getElementById('version').value = "v0.1-Alpha"; 
            } else {
                alert("Hubo un error al enviar el feedback. Revisa la consola para más detalles.");
            }
        });
    }
});