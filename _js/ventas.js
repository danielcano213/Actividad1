document.getElementById('ventaForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const producto = document.getElementById('producto').value;
    const cliente = document.getElementById('cliente').value;
    const monto = document.getElementById('monto').value;
  
    const nuevaVenta = { producto, cliente, monto };
  
    const ventas = JSON.parse(localStorage.getItem('ventas')) || [];
    ventas.push(nuevaVenta);
    localStorage.setItem('ventas', JSON.stringify(ventas));
  
    alert('✅ Venta guardada correctamente');
    this.reset();
  });
  