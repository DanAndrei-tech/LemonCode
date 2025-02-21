import { TipoIva } from "./modelo";

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
  return Number((precio * (1 + IVA_PORCENTAJES[tipoIva] / 100)).toFixed(2));
};

export //función para actualizar el desglose de IVA
const actualizarDesgloseIva = (
  desgloseIva: Record<TipoIva, number>,
  tipoIva: TipoIva,
  iva: number
) => {
  if (!desgloseIva[tipoIva]) {
    desgloseIva[tipoIva] = 0;
  }
  desgloseIva[tipoIva] += iva;
};

export const calculaPrecioSinIva = (
  precio: number,
  cantidad: number
): number => {
  return precio * cantidad;
};

export const calcularIva = (
  precioConIva: number,
  precioSinIva: number
): number => {
  return precioConIva - precioSinIva;
};
