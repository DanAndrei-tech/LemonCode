import { LineaTicket, TicketFinal } from "./modelo";
import {
  calcularTotales,
  convertirDesgloseIva,
  calcularLineasTicket,
} from "./ticket-compra-helper";

export const calculaTicket = (lineasTicket: LineaTicket[]): TicketFinal => {
  if (!lineasTicket) {
    throw new Error("Entrada no válida");
  }

  let desgloseIva: Record<string, number> = {};
  let lineasResultado = calcularLineasTicket(lineasTicket, desgloseIva);
  let total = calcularTotales(lineasResultado);
  let desgloseIvaArray = convertirDesgloseIva(desgloseIva);

  return {
    lineas: lineasResultado,
    total,
    desgloseIva: desgloseIvaArray,
  };
};
