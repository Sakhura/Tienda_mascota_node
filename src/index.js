// index.js - Archivo principal que importa los módulos

import { productos, mostrarProductos, buscarProducto } from './productos.js';
import { mostrarServicios, agendarServicio } from './servicios.js';
import { agregarAlCarrito, verCarrito, calcularTotal } from './carrito.js';

console.log("🐾 BIENVENIDO A LA TIENDA DE MASCOTAS 🐾\n");

// Mostrar productos disponibles
mostrarProductos();

// Mostrar servicios disponibles
mostrarServicios();

console.log("\n=== SIMULACIÓN DE COMPRA ===");

// Buscar y agregar productos al carrito
const alimento = buscarProducto("Alimento");
const arena = buscarProducto("Arena");
const collar = buscarProducto("Collar");

if (alimento) agregarAlCarrito(alimento, 2);
if (arena) agregarAlCarrito(arena, 1);
if (collar) agregarAlCarrito(collar, 1);

// Ver el carrito
verCarrito();

// Agendar un servicio
console.log("\n=== AGENDAR SERVICIO ===");
const cita = agendarServicio("peluqueria", "Max (Golden Retriever)");
console.log(cita);

console.log("\n✅ Demo de Webpack completada!");
console.log("📦 Webpack ha empaquetado correctamente todos los módulos");