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

// Formulario de cita
document.getElementById('form-cita').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validación básica
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const asunto = document.getElementById('asunto').value;
    const descripcion = document.getElementById('descripcion').value;
    
    if (!nombre || !email || !telefono || !fecha || !hora || !asunto || !descripcion) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }
    
    // En una implementación real, aquí enviaríamos los datos al servidor
    alert('Su cita ha sido solicitada. Nos pondremos en contacto con usted para confirmarla.');
    this.reset();
});

// Fecha mínima para el formulario (hoy + 2 días)
const fechaInput = document.getElementById('fecha');
const today = new Date