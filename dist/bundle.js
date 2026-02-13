/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carrito.js"
/*!************************!*\
  !*** ./src/carrito.js ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   agregarAlCarrito: () => (/* binding */ agregarAlCarrito),
/* harmony export */   calcularTotal: () => (/* binding */ calcularTotal),
/* harmony export */   carrito: () => (/* binding */ carrito),
/* harmony export */   vaciarCarrito: () => (/* binding */ vaciarCarrito),
/* harmony export */   verCarrito: () => (/* binding */ verCarrito)
/* harmony export */ });
// carrito.js - Módulo del carrito de compras

let carrito = [];

function agregarAlCarrito(producto, cantidad = 1) {
  const item = {
    producto: producto,
    cantidad: cantidad,
    subtotal: producto.precio * cantidad
  };
  carrito.push(item);
  console.log(`✓ ${producto.nombre} agregado al carrito (x${cantidad})`);
}

function verCarrito() {
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

function calcularTotal() {
  return carrito.reduce((total, item) => total + item.subtotal, 0);
}

function vaciarCarrito() {
  carrito = [];
  console.log("Carrito vaciado");
}



/***/ },

/***/ "./src/productos.js"
/*!**************************!*\
  !*** ./src/productos.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buscarProducto: () => (/* binding */ buscarProducto),
/* harmony export */   mostrarProductos: () => (/* binding */ mostrarProductos),
/* harmony export */   productos: () => (/* binding */ productos)
/* harmony export */ });
// productos.js - Módulo de productos para mascotas

const productos = [
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

function mostrarProductos() {
  console.log("=== CATÁLOGO DE PRODUCTOS ===");
  productos.forEach(producto => {
    console.log(`${producto.nombre} - $${producto.precio} (Stock: ${producto.stock})`);
  });
}

function buscarProducto(nombre) {
  return productos.find(p => p.nombre.toLowerCase().includes(nombre.toLowerCase()));
}

/***/ },

/***/ "./src/servicios.js"
/*!**************************!*\
  !*** ./src/servicios.js ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   agendarServicio: () => (/* binding */ agendarServicio),
/* harmony export */   mostrarServicios: () => (/* binding */ mostrarServicios),
/* harmony export */   servicios: () => (/* binding */ servicios)
/* harmony export */ });
// servicios.js - Módulo de servicios de la tienda

const servicios = {
  peluqueria: {
    nombre: "Peluquería Canina",
    precio: 20000,
    duracion: "1-2 horas"
  },
  veterinaria: {
    nombre: "Consulta Veterinaria",
    precio: 30000,
    duracion: "30-45 minutos"
  },
  guarderia: {
    nombre: "Guardería Diaria",
    precio: 15000,
    duracion: "Día completo"
  }
};

function mostrarServicios() {
  console.log("\n=== SERVICIOS DISPONIBLES ===");
  for (let servicio in servicios) {
    const s = servicios[servicio];
    console.log(`${s.nombre} - $${s.precio} (${s.duracion})`);
  }
}

function agendarServicio(tipoServicio, mascota) {
  const servicio = servicios[tipoServicio];
  if (servicio) {
    return `Servicio agendado: ${servicio.nombre} para ${mascota}`;
  }
  return "Servicio no disponible";
}

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _productos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./productos.js */ "./src/productos.js");
/* harmony import */ var _servicios_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./servicios.js */ "./src/servicios.js");
/* harmony import */ var _carrito_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carrito.js */ "./src/carrito.js");
// index.js - Archivo principal que importa los módulos





console.log("🐾 BIENVENIDO A LA TIENDA DE MASCOTAS 🐾\n");

// Mostrar productos disponibles
(0,_productos_js__WEBPACK_IMPORTED_MODULE_0__.mostrarProductos)();

// Mostrar servicios disponibles
(0,_servicios_js__WEBPACK_IMPORTED_MODULE_1__.mostrarServicios)();

console.log("\n=== SIMULACIÓN DE COMPRA ===");

// Buscar y agregar productos al carrito
const alimento = (0,_productos_js__WEBPACK_IMPORTED_MODULE_0__.buscarProducto)("Alimento");
const arena = (0,_productos_js__WEBPACK_IMPORTED_MODULE_0__.buscarProducto)("Arena");
const collar = (0,_productos_js__WEBPACK_IMPORTED_MODULE_0__.buscarProducto)("Collar");

if (alimento) (0,_carrito_js__WEBPACK_IMPORTED_MODULE_2__.agregarAlCarrito)(alimento, 2);
if (arena) (0,_carrito_js__WEBPACK_IMPORTED_MODULE_2__.agregarAlCarrito)(arena, 1);
if (collar) (0,_carrito_js__WEBPACK_IMPORTED_MODULE_2__.agregarAlCarrito)(collar, 1);

// Ver el carrito
(0,_carrito_js__WEBPACK_IMPORTED_MODULE_2__.verCarrito)();

// Agendar un servicio
console.log("\n=== AGENDAR SERVICIO ===");
const cita = (0,_servicios_js__WEBPACK_IMPORTED_MODULE_1__.agendarServicio)("peluqueria", "Max (Golden Retriever)");
console.log(cita);

console.log("\n✅ Demo de Webpack completada!");
console.log("📦 Webpack ha empaquetado correctamente todos los módulos");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCLHdCQUF3QixTQUFTO0FBQ3JFO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFVBQVUsSUFBSSxzQkFBc0IsR0FBRyxlQUFlLEtBQUssY0FBYztBQUM1RixHQUFHO0FBQ0gseUJBQXlCLGdCQUFnQjtBQUN6QztBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxtQkFBbUIsaUJBQWlCLEtBQUssaUJBQWlCLFVBQVUsZUFBZTtBQUNuRixHQUFHO0FBQ0g7QUFDQTtBQUNPO0FBQ1A7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsVUFBVSxLQUFLLFVBQVUsR0FBRyxXQUFXO0FBQzFEO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBLGlDQUFpQyxpQkFBaUIsT0FBTyxRQUFRO0FBQ2pFO0FBQ0E7QUFDQSxDOzs7Ozs7VUNsQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0M1QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDNkU7QUFDVjtBQUNRO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQWdCO0FBQ2hCO0FBQ0E7QUFDQSwrREFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNkRBQWM7QUFDL0IsY0FBYyw2REFBYztBQUM1QixlQUFlLDZEQUFjO0FBQzdCO0FBQ0EsY0FBYyw2REFBZ0I7QUFDOUIsV0FBVyw2REFBZ0I7QUFDM0IsWUFBWSw2REFBZ0I7QUFDNUI7QUFDQTtBQUNBLHVEQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4REFBZTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSx5RSIsInNvdXJjZXMiOlsid2VicGFjazovL3RpZW5kYS1tYXNjb3Rhcy13ZWJwYWNrLy4vc3JjL2NhcnJpdG8uanMiLCJ3ZWJwYWNrOi8vdGllbmRhLW1hc2NvdGFzLXdlYnBhY2svLi9zcmMvcHJvZHVjdG9zLmpzIiwid2VicGFjazovL3RpZW5kYS1tYXNjb3Rhcy13ZWJwYWNrLy4vc3JjL3NlcnZpY2lvcy5qcyIsIndlYnBhY2s6Ly90aWVuZGEtbWFzY290YXMtd2VicGFjay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aWVuZGEtbWFzY290YXMtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGllbmRhLW1hc2NvdGFzLXdlYnBhY2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aWVuZGEtbWFzY290YXMtd2VicGFjay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RpZW5kYS1tYXNjb3Rhcy13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNhcnJpdG8uanMgLSBNw7NkdWxvIGRlbCBjYXJyaXRvIGRlIGNvbXByYXNcclxuXHJcbmxldCBjYXJyaXRvID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWdyZWdhckFsQ2Fycml0byhwcm9kdWN0bywgY2FudGlkYWQgPSAxKSB7XHJcbiAgY29uc3QgaXRlbSA9IHtcclxuICAgIHByb2R1Y3RvOiBwcm9kdWN0byxcclxuICAgIGNhbnRpZGFkOiBjYW50aWRhZCxcclxuICAgIHN1YnRvdGFsOiBwcm9kdWN0by5wcmVjaW8gKiBjYW50aWRhZFxyXG4gIH07XHJcbiAgY2Fycml0by5wdXNoKGl0ZW0pO1xyXG4gIGNvbnNvbGUubG9nKGDinJMgJHtwcm9kdWN0by5ub21icmV9IGFncmVnYWRvIGFsIGNhcnJpdG8gKHgke2NhbnRpZGFkfSlgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZlckNhcnJpdG8oKSB7XHJcbiAgY29uc29sZS5sb2coXCJcXG49PT0gQ0FSUklUTyBERSBDT01QUkFTID09PVwiKTtcclxuICBpZiAoY2Fycml0by5sZW5ndGggPT09IDApIHtcclxuICAgIGNvbnNvbGUubG9nKFwiRWwgY2Fycml0byBlc3TDoSB2YWPDrW9cIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIFxyXG4gIGNhcnJpdG8uZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGAke2luZGV4ICsgMX0uICR7aXRlbS5wcm9kdWN0by5ub21icmV9IHgke2l0ZW0uY2FudGlkYWR9ID0gJCR7aXRlbS5zdWJ0b3RhbH1gKTtcclxuICB9KTtcclxuICBjb25zb2xlLmxvZyhgVE9UQUw6ICQke2NhbGN1bGFyVG90YWwoKX1gKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGFyVG90YWwoKSB7XHJcbiAgcmV0dXJuIGNhcnJpdG8ucmVkdWNlKCh0b3RhbCwgaXRlbSkgPT4gdG90YWwgKyBpdGVtLnN1YnRvdGFsLCAwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHZhY2lhckNhcnJpdG8oKSB7XHJcbiAgY2Fycml0byA9IFtdO1xyXG4gIGNvbnNvbGUubG9nKFwiQ2Fycml0byB2YWNpYWRvXCIpO1xyXG59XHJcblxyXG5leHBvcnQgeyBjYXJyaXRvIH07IiwiLy8gcHJvZHVjdG9zLmpzIC0gTcOzZHVsbyBkZSBwcm9kdWN0b3MgcGFyYSBtYXNjb3Rhc1xyXG5cclxuZXhwb3J0IGNvbnN0IHByb2R1Y3RvcyA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIG5vbWJyZTogXCJBbGltZW50byBQcmVtaXVtIHBhcmEgUGVycm9zXCIsXHJcbiAgICBwcmVjaW86IDI1MDAwLFxyXG4gICAgY2F0ZWdvcmlhOiBcIkFsaW1lbnRvXCIsXHJcbiAgICBzdG9jazogNTBcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgbm9tYnJlOiBcIkFyZW5hIFNhbml0YXJpYSBwYXJhIEdhdG9zXCIsXHJcbiAgICBwcmVjaW86IDg1MDAsXHJcbiAgICBjYXRlZ29yaWE6IFwiSGlnaWVuZVwiLFxyXG4gICAgc3RvY2s6IDMwXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIG5vbWJyZTogXCJKdWd1ZXRlIEludGVyYWN0aXZvXCIsXHJcbiAgICBwcmVjaW86IDEyMDAwLFxyXG4gICAgY2F0ZWdvcmlhOiBcIkp1Z3VldGVzXCIsXHJcbiAgICBzdG9jazogMjVcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgbm9tYnJlOiBcIkNvbGxhciBBbnRpcHVsZ2FzXCIsXHJcbiAgICBwcmVjaW86IDE1MDAwLFxyXG4gICAgY2F0ZWdvcmlhOiBcIlNhbHVkXCIsXHJcbiAgICBzdG9jazogNDBcclxuICB9XHJcbl07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9zdHJhclByb2R1Y3RvcygpIHtcclxuICBjb25zb2xlLmxvZyhcIj09PSBDQVTDgUxPR08gREUgUFJPRFVDVE9TID09PVwiKTtcclxuICBwcm9kdWN0b3MuZm9yRWFjaChwcm9kdWN0byA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhgJHtwcm9kdWN0by5ub21icmV9IC0gJCR7cHJvZHVjdG8ucHJlY2lvfSAoU3RvY2s6ICR7cHJvZHVjdG8uc3RvY2t9KWApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYnVzY2FyUHJvZHVjdG8obm9tYnJlKSB7XHJcbiAgcmV0dXJuIHByb2R1Y3Rvcy5maW5kKHAgPT4gcC5ub21icmUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhub21icmUudG9Mb3dlckNhc2UoKSkpO1xyXG59IiwiLy8gc2VydmljaW9zLmpzIC0gTcOzZHVsbyBkZSBzZXJ2aWNpb3MgZGUgbGEgdGllbmRhXHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljaW9zID0ge1xyXG4gIHBlbHVxdWVyaWE6IHtcclxuICAgIG5vbWJyZTogXCJQZWx1cXVlcsOtYSBDYW5pbmFcIixcclxuICAgIHByZWNpbzogMjAwMDAsXHJcbiAgICBkdXJhY2lvbjogXCIxLTIgaG9yYXNcIlxyXG4gIH0sXHJcbiAgdmV0ZXJpbmFyaWE6IHtcclxuICAgIG5vbWJyZTogXCJDb25zdWx0YSBWZXRlcmluYXJpYVwiLFxyXG4gICAgcHJlY2lvOiAzMDAwMCxcclxuICAgIGR1cmFjaW9uOiBcIjMwLTQ1IG1pbnV0b3NcIlxyXG4gIH0sXHJcbiAgZ3VhcmRlcmlhOiB7XHJcbiAgICBub21icmU6IFwiR3VhcmRlcsOtYSBEaWFyaWFcIixcclxuICAgIHByZWNpbzogMTUwMDAsXHJcbiAgICBkdXJhY2lvbjogXCJEw61hIGNvbXBsZXRvXCJcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbW9zdHJhclNlcnZpY2lvcygpIHtcclxuICBjb25zb2xlLmxvZyhcIlxcbj09PSBTRVJWSUNJT1MgRElTUE9OSUJMRVMgPT09XCIpO1xyXG4gIGZvciAobGV0IHNlcnZpY2lvIGluIHNlcnZpY2lvcykge1xyXG4gICAgY29uc3QgcyA9IHNlcnZpY2lvc1tzZXJ2aWNpb107XHJcbiAgICBjb25zb2xlLmxvZyhgJHtzLm5vbWJyZX0gLSAkJHtzLnByZWNpb30gKCR7cy5kdXJhY2lvbn0pYCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWdlbmRhclNlcnZpY2lvKHRpcG9TZXJ2aWNpbywgbWFzY290YSkge1xyXG4gIGNvbnN0IHNlcnZpY2lvID0gc2VydmljaW9zW3RpcG9TZXJ2aWNpb107XHJcbiAgaWYgKHNlcnZpY2lvKSB7XHJcbiAgICByZXR1cm4gYFNlcnZpY2lvIGFnZW5kYWRvOiAke3NlcnZpY2lvLm5vbWJyZX0gcGFyYSAke21hc2NvdGF9YDtcclxuICB9XHJcbiAgcmV0dXJuIFwiU2VydmljaW8gbm8gZGlzcG9uaWJsZVwiO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDaGVjayBpZiBtb2R1bGUgZXhpc3RzIChkZXZlbG9wbWVudCBvbmx5KVxuXHRpZiAoX193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0gPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIG1vZHVsZUlkICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGluZGV4LmpzIC0gQXJjaGl2byBwcmluY2lwYWwgcXVlIGltcG9ydGEgbG9zIG3Ds2R1bG9zXHJcblxyXG5pbXBvcnQgeyBwcm9kdWN0b3MsIG1vc3RyYXJQcm9kdWN0b3MsIGJ1c2NhclByb2R1Y3RvIH0gZnJvbSAnLi9wcm9kdWN0b3MuanMnO1xyXG5pbXBvcnQgeyBtb3N0cmFyU2VydmljaW9zLCBhZ2VuZGFyU2VydmljaW8gfSBmcm9tICcuL3NlcnZpY2lvcy5qcyc7XHJcbmltcG9ydCB7IGFncmVnYXJBbENhcnJpdG8sIHZlckNhcnJpdG8sIGNhbGN1bGFyVG90YWwgfSBmcm9tICcuL2NhcnJpdG8uanMnO1xyXG5cclxuY29uc29sZS5sb2coXCLwn5C+IEJJRU5WRU5JRE8gQSBMQSBUSUVOREEgREUgTUFTQ09UQVMg8J+QvlxcblwiKTtcclxuXHJcbi8vIE1vc3RyYXIgcHJvZHVjdG9zIGRpc3BvbmlibGVzXHJcbm1vc3RyYXJQcm9kdWN0b3MoKTtcclxuXHJcbi8vIE1vc3RyYXIgc2VydmljaW9zIGRpc3BvbmlibGVzXHJcbm1vc3RyYXJTZXJ2aWNpb3MoKTtcclxuXHJcbmNvbnNvbGUubG9nKFwiXFxuPT09IFNJTVVMQUNJw5NOIERFIENPTVBSQSA9PT1cIik7XHJcblxyXG4vLyBCdXNjYXIgeSBhZ3JlZ2FyIHByb2R1Y3RvcyBhbCBjYXJyaXRvXHJcbmNvbnN0IGFsaW1lbnRvID0gYnVzY2FyUHJvZHVjdG8oXCJBbGltZW50b1wiKTtcclxuY29uc3QgYXJlbmEgPSBidXNjYXJQcm9kdWN0byhcIkFyZW5hXCIpO1xyXG5jb25zdCBjb2xsYXIgPSBidXNjYXJQcm9kdWN0byhcIkNvbGxhclwiKTtcclxuXHJcbmlmIChhbGltZW50bykgYWdyZWdhckFsQ2Fycml0byhhbGltZW50bywgMik7XHJcbmlmIChhcmVuYSkgYWdyZWdhckFsQ2Fycml0byhhcmVuYSwgMSk7XHJcbmlmIChjb2xsYXIpIGFncmVnYXJBbENhcnJpdG8oY29sbGFyLCAxKTtcclxuXHJcbi8vIFZlciBlbCBjYXJyaXRvXHJcbnZlckNhcnJpdG8oKTtcclxuXHJcbi8vIEFnZW5kYXIgdW4gc2VydmljaW9cclxuY29uc29sZS5sb2coXCJcXG49PT0gQUdFTkRBUiBTRVJWSUNJTyA9PT1cIik7XHJcbmNvbnN0IGNpdGEgPSBhZ2VuZGFyU2VydmljaW8oXCJwZWx1cXVlcmlhXCIsIFwiTWF4IChHb2xkZW4gUmV0cmlldmVyKVwiKTtcclxuY29uc29sZS5sb2coY2l0YSk7XHJcblxyXG5jb25zb2xlLmxvZyhcIlxcbuKchSBEZW1vIGRlIFdlYnBhY2sgY29tcGxldGFkYSFcIik7XHJcbmNvbnNvbGUubG9nKFwi8J+TpiBXZWJwYWNrIGhhIGVtcGFxdWV0YWRvIGNvcnJlY3RhbWVudGUgdG9kb3MgbG9zIG3Ds2R1bG9zXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==