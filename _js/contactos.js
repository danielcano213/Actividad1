document.getElementById('contactoForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
  
    const nuevoContacto = { nombre, email, telefono };
  
    const contactos = JSON.parse(localStorage.getItem('contactos')) || [];
    contactos.push(nuevoContacto);
    localStorage.setItem('contactos', JSON.stringify(contactos));
  
    alert('✅ Contacto guardado correctamente');
    this.reset();
  });
  