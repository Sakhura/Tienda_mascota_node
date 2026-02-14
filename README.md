# Tienda de Mascotas - Webpack Demo

Proyecto demostrativo que simula una tienda de mascotas utilizando **JavaScript modular** empaquetado con **Webpack**. El objetivo es mostrar cómo Webpack toma múltiples módulos JS y los combina en un único archivo `bundle.js` optimizado.

## Descripción

La aplicación implementa tres módulos independientes que representan las funcionalidades principales de una tienda de mascotas:

- **Productos** (`productos.js`): Catálogo de productos con búsqueda por nombre.
- **Servicios** (`servicios.js`): Servicios disponibles como peluquería canina, consulta veterinaria y guardería.
- **Carrito** (`carrito.js`): Sistema de carrito de compras con funciones para agregar productos, ver el contenido y calcular el total.

El archivo `index.js` actúa como punto de entrada, importando y orquestando todos los módulos para ejecutar una simulación de compra.

## Tecnologías Utilizadas

- JavaScript ES6+ (módulos `import`/`export`)
- Webpack 5
- Webpack CLI
- HTML5 / CSS3

## Estructura del Proyecto

```
Tienda_mascota_node/
├── src/
│   ├── index.js          # Punto de entrada principal
│   ├── productos.js      # Módulo de productos
│   ├── servicios.js      # Módulo de servicios
│   └── carrito.js        # Módulo del carrito de compras
├── dist/
│   └── bundle.js         # Archivo empaquetado generado por Webpack
├── index.html            # Página principal
├── webpack.config.js     # Configuración de Webpack
├── package.json          # Dependencias y scripts
└── .gitignore            # Archivos ignorados por Git
```

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v14 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/tu-usuario/Tienda_mascota_node.git
cd Tienda_mascota_node
```

2. Instalar las dependencias:

```bash
npm install
```

## Uso

### Compilar el proyecto con Webpack

Para generar el bundle en modo desarrollo:

```bash
npm run dev
```

Para generar el bundle en modo producción:

```bash
npm run build
```

Para compilar automáticamente al detectar cambios:

```bash
npm run watch
```

### Ejecutar la aplicación

Abrir el archivo `index.html` en un navegador web y acceder a la consola del navegador (F12) para ver la salida de la aplicación.

## Ejemplo de Salida en Consola

```
🐾 BIENVENIDO A LA TIENDA DE MASCOTAS 🐾

=== CATÁLOGO DE PRODUCTOS ===
Alimento Premium para Perros - $25000 (Stock: 50)
Arena Sanitaria para Gatos - $8500 (Stock: 30)
Juguete Interactivo - $12000 (Stock: 25)
Collar Antipulgas - $15000 (Stock: 40)

=== SERVICIOS DISPONIBLES ===
Peluquería Canina - $20000 (1-2 horas)
Consulta Veterinaria - $30000 (30-45 minutos)
Guardería Diaria - $15000 (Día completo)

=== SIMULACIÓN DE COMPRA ===
✓ Alimento Premium para Perros agregado al carrito (x2)
✓ Arena Sanitaria para Gatos agregado al carrito (x1)
✓ Collar Antipulgas agregado al carrito (x1)

=== CARRITO DE COMPRAS ===
1. Alimento Premium para Perros x2 = $50000
2. Arena Sanitaria para Gatos x1 = $8500
3. Collar Antipulgas x1 = $15000
TOTAL: $73500

=== AGENDAR SERVICIO ===
Servicio agendado: Peluquería Canina para Max (Golden Retriever)

✅ Demo de Webpack completada!
📦 Webpack ha empaquetado correctamente todos los módulos
```

## Configuración de Webpack

El archivo `webpack.config.js` define:

- **entry**: `./src/index.js` como punto de entrada.
- **output**: Genera `bundle.js` en la carpeta `dist/`.
- **mode**: `development` por defecto.
- **devtool**: `inline-source-map` para facilitar la depuración.

## Autor

Desarrollado como proyecto académico demostrativo de Webpack.

## Licencia

ISC
