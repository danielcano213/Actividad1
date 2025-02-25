// crm.js

// Función genérica para guardar datos en localStorage
function guardarDatos(clave, dato) {
  const datos = JSON.parse(localStorage.getItem(clave)) || [];
  datos.push(dato);
  localStorage.setItem(clave, JSON.stringify(datos));
}

// Función para cargar datos desde localStorage
function cargarDatos(clave) {
  return JSON.parse(localStorage.getItem(clave)) || [];
}

// Función para mostrar mensajes
function mostrarMensaje(mensaje) {
  alert(mensaje);
}

// ======================= CONTACTOS =======================

// Guardar Contacto
function guardarContacto() {
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;

  if (nombre && email && telefono) {
    const contacto = { nombre, email, telefono };
    guardarDatos('contactos', contacto);
    mostrarMensaje('¡Contacto guardado exitosamente!');
    mostrarContactos();
  } else {
    mostrarMensaje('Por favor, completa todos los campos.');
  }
}

// Mostrar Contactos
function mostrarContactos() {
  const lista = document.getElementById('listaContactos');
  lista.innerHTML = '';

  const contactos = cargarDatos('contactos');
  contactos.forEach((contacto, index) => {
    const item = document.createElement('li');
    item.textContent = `${contacto.nombre} - ${contacto.email} - ${contacto.telefono}`;

    // Botón Eliminar
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.onclick = () => eliminarDato('contactos', index, mostrarContactos);
    item.appendChild(btnEliminar);

    // Botón Actualizar
    const btnActualizar = document.createElement('button');
    btnActualizar.textContent = 'Actualizar';
    btnActualizar.onclick = () => actualizarContacto(index);
    item.appendChild(btnActualizar);

    lista.appendChild(item);
  });
}

function actualizarContacto(index) {
  const contactos = cargarDatos('contactos');
  const contacto = contactos[index];

  const nuevoNombre = prompt('Actualizar Nombre:', contacto.nombre);
  const nuevoEmail = prompt('Actualizar Email:', contacto.email);
  const nuevoTelefono = prompt('Actualizar Teléfono:', contacto.telefono);

  if (nuevoNombre && nuevoEmail && nuevoTelefono) {
    contactos[index] = { nombre: nuevoNombre, email: nuevoEmail, telefono: nuevoTelefono };
    localStorage.setItem('contactos', JSON.stringify(contactos));
    mostrarContactos();
    mostrarMensaje('Contacto actualizado exitosamente.');
  } else {
    mostrarMensaje('Actualización cancelada o incompleta.');
  }
}

// ======================= VENTAS =======================

function guardarVenta() {
  const producto = document.getElementById('producto').value;
  const cantidad = document.getElementById('cantidad').value;
  const precio = document.getElementById('precio').value;

  if (producto && cantidad && precio) {
    const venta = { producto, cantidad, precio };
    guardarDatos('ventas', venta);
    mostrarMensaje('¡Venta guardada exitosamente!');
    mostrarVentas();
  } else {
    mostrarMensaje('Por favor, completa todos los campos.');
  }
}

function mostrarVentas() {
  const lista = document.getElementById('listaVentas');
  lista.innerHTML = '';

  const ventas = cargarDatos('ventas');
  ventas.forEach((venta, index) => {
    const item = document.createElement('li');
    item.textContent = `${venta.producto} - ${venta.cantidad} unidades - $${venta.precio}`;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.onclick = () => eliminarDato('ventas', index, mostrarVentas);
    item.appendChild(btnEliminar);

    const btnActualizar = document.createElement('button');
    btnActualizar.textContent = 'Actualizar';
    btnActualizar.onclick = () => actualizarVenta(index);
    item.appendChild(btnActualizar);

    lista.appendChild(item);
  });
}

function actualizarVenta(index) {
  const ventas = cargarDatos('ventas');
  const venta = ventas[index];

  const nuevoProducto = prompt('Actualizar Producto:', venta.producto);
  const nuevaCantidad = prompt('Actualizar Cantidad:', venta.cantidad);
  const nuevoPrecio = prompt('Actualizar Precio:', venta.precio);

  if (nuevoProducto && nuevaCantidad && nuevoPrecio) {
    ventas[index] = { producto: nuevoProducto, cantidad: nuevaCantidad, precio: nuevoPrecio };
    localStorage.setItem('ventas', JSON.stringify(ventas));
    mostrarVentas();
    mostrarMensaje('Venta actualizada exitosamente.');
  } else {
    mostrarMensaje('Actualización cancelada o incompleta.');
  }
}

// ======================= MARKETING =======================

function guardarCampania() {
  const nombre = document.getElementById('nombreCampania').value;
  const descripcion = document.getElementById('descripcion').value;
  const fecha = document.getElementById('fecha').value;

  if (nombre && descripcion && fecha) {
    const campania = { nombre, descripcion, fecha };
    guardarDatos('campanias', campania);
    mostrarMensaje('¡Campaña guardada exitosamente!');
    mostrarCampanias();
  } else {
    mostrarMensaje('Por favor, completa todos los campos.');
  }
}

function mostrarCampanias() {
  const lista = document.getElementById('listaCampanias');
  lista.innerHTML = '';

  const campanias = cargarDatos('campanias');
  campanias.forEach((campania, index) => {
    const item = document.createElement('li');
    item.textContent = `${campania.nombre} - ${campania.descripcion} - ${campania.fecha}`;

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.onclick = () => eliminarDato('campanias', index, mostrarCampanias);
    item.appendChild(btnEliminar);

    const btnActualizar = document.createElement('button');
    btnActualizar.textContent = 'Actualizar';
    btnActualizar.onclick = () => actualizarCampania(index);
    item.appendChild(btnActualizar);

    lista.appendChild(item);
  });
}

function actualizarCampania(index) {
  const campanias = cargarDatos('campanias');
  const campania = campanias[index];

  const nuevoNombre = prompt('Actualizar Nombre:', campania.nombre);
  const nuevaDescripcion = prompt('Actualizar Descripción:', campania.descripcion);
  const nuevaFecha = prompt('Actualizar Fecha:', campania.fecha);

  if (nuevoNombre && nuevaDescripcion && nuevaFecha) {
    campanias[index] = { nombre: nuevoNombre, descripcion: nuevaDescripcion, fecha: nuevaFecha };
    localStorage.setItem('campanias', JSON.stringify(campanias));
    mostrarCampanias();
    mostrarMensaje('Campaña actualizada exitosamente.');
  } else {
    mostrarMensaje('Actualización cancelada o incompleta.');
  }
}

// ======================= FUNCIONES GENERALES =======================

function eliminarDato(clave, index, callback) {
  const datos = cargarDatos(clave);
  datos.splice(index, 1);
  localStorage.setItem(clave, JSON.stringify(datos));
  callback();
  mostrarMensaje('Elemento eliminado exitosamente.');
}

// Inicializar datos al cargar página
window.onload = function () {
  if (document.getElementById('listaContactos')) mostrarContactos();
  if (document.getElementById('listaVentas')) mostrarVentas();
  if (document.getElementById('listaCampanias')) mostrarCampanias();
};
