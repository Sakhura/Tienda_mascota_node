// servicios.js - Módulo de servicios de la tienda

export const servicios = {
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

export function mostrarServicios() {
  console.log("\n=== SERVICIOS DISPONIBLES ===");
  for (let servicio in servicios) {
    const s = servicios[servicio];
    console.log(`${s.nombre} - $${s.precio} (${s.duracion})`);
  }
}

export function agendarServicio(tipoServicio, mascota) {
  const servicio = servicios[tipoServicio];
  if (servicio) {
    return `Servicio agendado: ${servicio.nombre} para ${mascota}`;
  }
  return "Servicio no disponible";
}