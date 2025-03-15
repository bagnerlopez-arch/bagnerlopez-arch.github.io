	// Validación del formulario de contacto
    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector("form");
        form.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevenir el envío del formulario
    
            const nombre = document.getElementById("nombre").value;
            const email = document.getElementById("email").value;
            const mensaje = document.getElementById("mensaje").value;
    
            if (nombre && email && mensaje) {
                alert("¡Mensaje enviado con éxito!");
                form.reset(); // Limpiar el formulario después de enviar
            } else {
                alert("Por favor, complete todos los campos antes de enviar.");
            }
        });
    });
        