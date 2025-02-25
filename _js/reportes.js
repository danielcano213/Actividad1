// Función para cargar Contactos
function cargarContactos() {
    const contactosList = document.getElementById('contactosList');
    contactosList.innerHTML = '';
    const contactos = JSON.parse(localStorage.getItem('contactos')) || [];
  
    if (contactos.length === 0) {
      contactosList.innerHTML = '<li class="list-group-item">No hay contactos guardados.</li>';
      return;
    }
  
    contactos.forEach((contacto, index) => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `
        <strong>Nombre:</strong> ${contacto.nombre || 'N/A'}<br>
        <strong>Email:</strong> ${contacto.email || 'N/A'}<br>
        <strong>Teléfono:</strong> ${contacto.telefono || 'N/A'}<br>
        <button class="btn btn-sm btn-warning mt-2" onclick="editarContacto(${index})">✏️ Editar</button>
        <button class="btn btn-sm btn-danger mt-2" onclick="eliminarContacto(${index})">🗑 Eliminar</button>
      `;
      contactosList.appendChild(li);
    });
  }
  
  // Función para cargar Ventas
  function cargarVentas() {
    const ventasList = document.getElementById('ventasList');
    ventasList.innerHTML = '';
    const ventas = JSON.parse(localStorage.getItem('ventas')) || [];
  
    if (ventas.length === 0) {
      ventasList.innerHTML = '<li class="list-group-item">No hay ventas guardadas.</li>';
      return;
    }
  
    ventas.forEach((venta, index) => {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      li.innerHTML = `
        <strong>Producto:</strong> ${venta.producto || 'N/A'}<br>
        <strong>Cliente:</strong> ${venta.cliente || 'N/A'}<br>
        <strong>Monto:</strong> ${venta.monto || 'N/A'}<br>
        <button class="btn btn-sm btn-warning mt-2" onclick="editarVenta(${index})">✏️ Editar</button>
        <button class="btn btn-sm btn-danger mt-2" onclick="eliminarVenta(${index})">🗑 Eliminar</button>
      `;
      ventasList.appendChild(li);
    });
  }
  
  // Función para cargar Campañas
  function cargarCampañas() {
    const campañasList = document.getElementById('campañasList');
    campañasList.innerHTML = '';
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
        <button class="btn btn-sm btn-warning mt-2" onclick="editarCampaña(${index})">✏️ Editar</button>
        <button class="btn btn-sm btn-danger mt-2" onclick="eliminarCampaña(${index})">🗑 Eliminar</button>
      `;
      campañasList.appendChild(li);
    });
  }
  
  // Funciones para eliminar registros
  function eliminarContacto(index) {
    let contactos = JSON.parse(localStorage.getItem('contactos')) || [];
    contactos.splice(index, 1);
    localStorage.setItem('contactos', JSON.stringify(contactos));
    cargarContactos();
  }
  
  function eliminarVenta(index) {
    let ventas = JSON.parse(localStorage.getItem('ventas')) || [];
    ventas.splice(index, 1);
    localStorage.setItem('ventas', JSON.stringify(ventas));
    cargarVentas();
  }
  
  function eliminarCampaña(index) {
    let campañas = JSON.parse(localStorage.getItem('campañas')) || [];
    campañas.splice(index, 1);
    localStorage.setItem('campañas', JSON.stringify(campañas));
    cargarCampañas();
  }
  
  // Funciones para editar registros
  function editarContacto(index) {
    let contactos = JSON.parse(localStorage.getItem('contactos')) || [];
    const nuevoNombre = prompt("Editar Nombre:", contactos[index].nombre);
    const nuevoEmail = prompt("Editar Email:", contactos[index].email);
    const nuevoTelefono = prompt("Editar Teléfono:", contactos[index].telefono);
  
    if (nuevoNombre && nuevoEmail && nuevoTelefono) {
      contactos[index] = { nombre: nuevoNombre, email: nuevoEmail, telefono: nuevoTelefono };
      localStorage.setItem('contactos', JSON.stringify(contactos));
      cargarContactos();
    }
  }
  
  function editarVenta(index) {
    let ventas = JSON.parse(localStorage.getItem('ventas')) || [];
    const nuevoProducto = prompt("Editar Producto:", ventas[index].producto);
    const nuevoCliente = prompt("Editar Cliente:", ventas[index].cliente);
    const nuevoMonto = prompt("Editar Monto:", ventas[index].monto);
  
    if (nuevoProducto && nuevoCliente && nuevoMonto) {
      ventas[index] = { producto: nuevoProducto, cliente: nuevoCliente, monto: nuevoMonto };
      localStorage.setItem('ventas', JSON.stringify(ventas));
      cargarVentas();
    }
  }
  
  function editarCampaña(index) {
    let campañas = JSON.parse(localStorage.getItem('campañas')) || [];
    const nuevoNombre = prompt("Editar Nombre de la Campaña:", campañas[index].nombre);
    const nuevaDescripcion = prompt("Editar Descripción:", campañas[index].descripcion);
    const nuevoPresupuesto = prompt("Editar Presupuesto:", campañas[index].presupuesto);
  
    if (nuevoNombre && nuevaDescripcion && nuevoPresupuesto) {
      campañas[index] = { nombre: nuevoNombre, descripcion: nuevaDescripcion, presupuesto: nuevoPresupuesto };
      localStorage.setItem('campañas', JSON.stringify(campañas));
      cargarCampañas();
    }
  }
  
  // Cargar datos al iniciar
  document.addEventListener('DOMContentLoaded', () => {
    cargarContactos();
    cargarVentas();
    cargarCampañas();
  });