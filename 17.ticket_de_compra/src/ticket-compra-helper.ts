import {
  TipoIva,
  ResultadoLineaTicket,
  LineaTicket,
  TotalPorTipoIva,
} from "./modelo";

export const IVA_PORCENTAJES: Record<TipoIva, number> = {
  general: 21,
  reducido: 10,
  superreducidoA: 5,
  superreducidoB: 4,
  superreducidoC: 0,
  sinIva: 0,
};

export const calcularPrecioConIva = (
  precio: number,
  tipoIva: TipoIva
): number => {
  if (!precio || !tipoIva) {
    throw new Error("Entrada no válida");
  }
  return Number((precio * (1 + IVA_PORCENTAJES[tipoIva] / 100)).toFixed(2));
};

export //función para actualizar el desglose de IVA
const actualizarDesgloseIva = (
  desgloseIva: Record<TipoIva, number>,
  tipoIva: TipoIva,
  iva: number
) => {
  if (!desgloseIva || !tipoIva || iva === undefined) {
    throw new Error("Entrada no válida");
  }

  if (!desgloseIva[tipoIva]) {
    desgloseIva[tipoIva] = 0;
  }
  desgloseIva[tipoIva] += iva;
};

export const calculaPrecioSinIva = (
  precio: number,
  cantidad: number
): number => {
  if (!precio || !cantidad) {
    throw new Error("Entrada no válida");
  }
  return precio * cantidad;
};

export const calcularIva = (
  precioConIva: number,
  precioSinIva: number
): number => {
  if (!precioConIva || !precioSinIva) {
    throw new Error("Entrada no válida");
  }
  return precioConIva - precioSinIva;
};

// ✅ Función auxiliar para calcular líneas del ticket
export const calcularLineasTicket = (
  lineasTicket: LineaTicket[],
  desgloseIva: Record<string, number>
): ResultadoLineaTicket[] => {
  return lineasTicket.map(({ producto, cantidad }) => {
    const precioSinIva = calculaPrecioSinIva(producto.precio, cantidad);
    const precioConIva =
      calcularPrecioConIva(producto.precio, producto.tipoIva) * cantidad;
    const iva = calcularIva(precioConIva, precioSinIva);

    actualizarDesgloseIva(desgloseIva, producto.tipoIva, iva);

    return {
      nombre: producto.nombre,
      cantidad,
      precioSinIva: precioSinIva,
      tipoIva: producto.tipoIva,
      precioConIva: precioConIva,
    };
  });
};

// ✅ Función auxiliar para calcular totales
export const calcularTotales = (
  lineas: ResultadoLineaTicket[]
): { totalSinIva: number; totalConIva: number; totalIva: number } => {
  let totalSinIva = 0;
  let totalConIva = 0;
  let totalIva = 0;

  for (const { precioSinIva, precioConIva } of lineas) {
    totalSinIva += precioSinIva;
    totalConIva += precioConIva;
    totalIva += precioConIva - precioSinIva;
  }

  return {
    totalSinIva: Number(totalSinIva.toFixed(2)),
    totalConIva: Number(totalConIva.toFixed(2)),
    totalIva: Number(totalIva.toFixed(2)),
  };
};

// ✅ Función auxiliar para convertir el desglose de IVA en un array
export const convertirDesgloseIva = (
  desgloseIva: Record<string, number>
): TotalPorTipoIva[] => {
  return Object.keys(desgloseIva).map((tipoIva) => ({
    tipoIva: tipoIva as TipoIva,
    cuantia: Number(desgloseIva[tipoIva].toFixed(2)),
  }));
};
