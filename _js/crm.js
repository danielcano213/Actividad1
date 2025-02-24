// Selecciona el div donde se mostrarán los resultados
const output = document.getElementById('output');

function gestionarContactos() {
  output.innerHTML = "<h3>Gestión de Contactos</h3><p>Aquí puedes añadir, editar o eliminar contactos.</p>";
}

function seguimientoVentas() {
  output.innerHTML = "<h3>Seguimiento de Ventas</h3><p>Monitorea todas las etapas de tus ventas aquí.</p>";
}

function automatizacionMarketing() {
  output.innerHTML = "<h3>Automatización de Marketing</h3><p>Configura y lanza campañas de marketing automatizadas.</p>";
}

function verReportes() {
  output.innerHTML = "<h3>Reportes</h3><p>Consulta los reportes de ventas, marketing y desempeño.</p>";
}
