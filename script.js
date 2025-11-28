// Menu hamburguesa
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// FORMULARIO DE CITA A WHATSAPP
document.getElementById('form-cita').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const asunto = document.getElementById('asunto').value;
    const descripcion = document.getElementById('descripcion').value;

    // Validación básica
    if (!nombre || !email || !telefono || !fecha || !hora || !asunto || !descripcion) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }

    // Número de WhatsApp
    const whatsapp = "59172563700";

    // Mensaje que se enviará a WhatsApp
    const mensaje = 
`*NUEVA SOLICITUD DE CITA*
------------------------------------
*Nombre:* ${nombre}
*Email:* ${email}
*Teléfono:* ${telefono}
*Fecha solicitada:* ${fecha}
*Hora solicitada:* ${hora}
*Área:* ${asunto}
*Descripción del caso:* 
${descripcion}
------------------------------------
Enviado desde la página web del Consultorio Jurídico UPEA.`;

    // Link a WhatsApp
    const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp
    window.open(url, "_blank");

    // Limpiar formulario
    document.getElementById('form-cita').reset();
});
