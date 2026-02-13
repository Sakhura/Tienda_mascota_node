// productos.js - Módulo de productos para mascotas

export const productos = [
  {
    id: 1,
    nombre: "Alimento Premium para Perros",
    precio: 25000,
    categoria: "Alimento",
    stock: 50
  },
  {
    id: 2,
    nombre: "Arena Sanitaria para Gatos",
    precio: 8500,
    categoria: "Higiene",
    stock: 30
  },
  {
    id: 3,
    nombre: "Juguete Interactivo",
    precio: 12000,
    categoria: "Juguetes",
    stock: 25
  },
  {
    id: 4,
    nombre: "Collar Antipulgas",
    precio: 15000,
    categoria: "Salud",
    stock: 40
  }
];

export function mostrarProductos() {
  console.log("=== CATÁLOGO DE PRODUCTOS ===");
  productos.forEach(producto => {
    console.log(`${producto.nombre} - $${producto.precio} (Stock: ${producto.stock})`);
  });
}

export function buscarProducto(nombre) {
  return productos.find(p => p.nombre.toLowerCase().includes(nombre.toLowerCase()));
}