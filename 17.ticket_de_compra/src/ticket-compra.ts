import {
  LineaTicket,
  ResultadoLineaTicket,
  TotalPorTipoIva,
  TicketFinal,
  TipoIva,
} from "./modelo";
import {
  actualizarDesgloseIva,
  calcularPrecioConIva,
  calculaPrecioSinIva,
  calcularIva,
} from "./ticket-compra-helper";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  if (!lineasTicket) {
    throw new Error("Entrada no válida");
  }
  let totalSinIva = 0;
  let totalConIva = 0;
  let totalIva = 0;
  let desgloseIva: Record<string, number> = {};

  let lineasResultado: ResultadoLineaTicket[] = [];

  for (let i = 0; i < lineasTicket.length; i++) {
    const { producto, cantidad } = lineasTicket[i];

    const precioSinIva = calculaPrecioSinIva(producto.precio, cantidad);
    const precioConIva =
      calcularPrecioConIva(producto.precio, producto.tipoIva) * cantidad;
    const iva = calcularIva(precioConIva, precioSinIva);

    totalSinIva += precioSinIva;
    totalConIva += precioConIva;
    totalIva += iva;

    actualizarDesgloseIva(desgloseIva, producto.tipoIva, iva);

    lineasResultado.push({
      nombre: producto.nombre,
      cantidad,
      precioSinIva: precioSinIva,
      tipoIva: producto.tipoIva,
      precioConIva: precioConIva,
    });
  }

  // Convertir el desglose de IVA en array de objetos
  let desgloseIvaArray: TotalPorTipoIva[] = Object.keys(desgloseIva).map(
    (tipoIva) => ({
      tipoIva: tipoIva as TipoIva,
      cuantia: Number(desgloseIva[tipoIva].toFixed(2)),
    })
  );

  return {
    lineas: lineasResultado,
    total: {
      totalSinIva: Number(totalSinIva.toFixed(2)),
      totalConIva: Number(totalConIva.toFixed(2)),
      totalIva: Number(totalIva.toFixed(2)),
    },
    desgloseIva: desgloseIvaArray,
  };
};
