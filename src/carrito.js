// carrito.js - Módulo del carrito de compras

let carrito = [];

export function agregarAlCarrito(producto, cantidad = 1) {
  const item = {
    producto: producto,
    cantidad: cantidad,
    subtotal: producto.precio * cantidad
  };
  carrito.push(item);
  console.log(`✓ ${producto.nombre} agregado al carrito (x${cantidad})`);
}

export function verCarrito() {
  console.log("\n=== CARRITO DE COMPRAS ===");
  if (carrito.length === 0) {
    console.log("El carrito está vacío");
    return;
  }
  
  carrito.forEach((item, index) => {
    console.log(`${index + 1}. ${item.producto.nombre} x${item.cantidad} = $${item.subtotal}`);
  });
  console.log(`TOTAL: $${calcularTotal()}`);
}

export function calcularTotal() {
  return carrito.reduce((total, item) => total + item.subtotal, 0);
}

export function vaciarCarrito() {
  carrito = [];
  console.log("Carrito vaciado");
}

export { carrito };