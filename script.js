// Función para cambiar el contenido del mensaje
function cambiarMensaje() {
    document.getElementById("mensaje").textContent = "¡Mensaje cambiado!";
}

// Validación básica del formulario
function validarFormulario() {
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    if (nombre === "") {
        alert("Por favor, ingresa tu nombre.");
        return false;
    }
    
    if (email === "") {
        alert("Por favor, ingresa tu correo electrónico.");
        return false;
    }

    alert("Formulario enviado correctamente.");
    return true;
}
