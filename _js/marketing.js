// Función para cargar las campañas desde LocalStorage
function cargarCampañas() {
    const campañasList = document.getElementById('campañasList');
    campañasList.innerHTML = ''; // Limpiar la lista antes de renderizar
  
    const campañas = JSON.parse(localStorage.getItem('campañas')) || [];
  
    if (campañas.length === 0) {
      campañasList.innerHTML = '<li class="list-group-item">No hay campañas guardadas.</li>';
      return;
    }
  
    campañas.forEach((campaña, index) => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `
        <strong>Nombre de la Campaña:</strong> ${campaña.nombre || 'N/A'}<br>
        <strong>Descripción:</strong> ${campaña.descripcion || 'N/A'}<br>
        <strong>Presupuesto:</strong> ${campaña.presupuesto || 'N/A'}<br>
        <button class="btn btn-sm btn-danger mt-2" onclick="eliminarCampaña(${index})">🗑 Eliminar</button>
      `;
      campañasList.appendChild(li);
    });
  }
  
  // Función para eliminar una campaña
  function eliminarCampaña(index) {
    let campañas = JSON.parse(localStorage.getItem('campañas')) || [];
    campañas.splice(index, 1);
    localStorage.setItem('campañas', JSON.stringify(campañas));
    cargarCampañas();
  }
  
  // Guardar campaña
  document.getElementById('marketingForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();
    const presupuesto = document.getElementById('presupuesto').value.trim();
  
    if (!nombre || !descripcion || !presupuesto) {
      alert('⚠️ Por favor, completa todos los campos.');
      return;
    }
  
    const nuevaCampaña = { nombre, descripcion, presupuesto };
    let campañas = JSON.parse(localStorage.getItem('campañas')) || [];
    campañas.push(nuevaCampaña);
    localStorage.setItem('campañas', JSON.stringify(campañas));
  
    alert('✅ ¡Campaña guardada exitosamente!');
    this.reset();
    cargarCampañas();
  });
  
  // Cargar campañas al iniciar
  document.addEventListener('DOMContentLoaded', cargarCampañas);
  