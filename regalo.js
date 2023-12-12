function validarFormulario() {
    // Validar campos requeridos
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var whatsapp = document.getElementById("whatsapp").value;
    var regalos = document.getElementsByName("regalos[]");
    var regalosSeleccionados = [];

    // Validar nombre
    if (nombre === "") {
        alert("Por favor, ingresa tu nombre");
        return false;
    }

    // Validar email
    if (email === "") {
        alert("Por favor, ingresa tu correo electrónico");
        return false;
    }

    // Validar WhatsApp
    if (whatsapp === "") {
        alert("Por favor, ingresa tu número de WhatsApp");
        return false;
    }

    // Validar al menos un regalo seleccionado
    var contadorRegalos = 0;
    for (var i = 0; i < regalos.length; i++) {
        if (regalos[i].checked) {
            contadorRegalos++;
            regalosSeleccionados.push(regalos[i].value);
        }
    }
    if (contadorRegalos === 0) {
        alert("Por favor, selecciona al menos un regalo");
        return false;
    }

    // Si todos los campos están completos, mostrar los datos y enviar formulario
    alert("Nombre: " + nombre + "\nEmail: " + email + "\nWhatsApp: " + whatsapp + "\nRegalos Seleccionados: " + regalosSeleccionados.join(", "));
    return true;
}