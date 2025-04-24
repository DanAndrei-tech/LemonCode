import { ReservaBase } from "./reserva-base";
import { Reserva } from "./modelo";

export class ReservaTourOperador extends ReservaBase {
  descuento: number = 0.15;

  constructor(reservas: Reserva[], precios: Record<string, number>) {
    super(reservas, precios);
  }
  calcularSubtotal(): number {
    let subtotal = 0;

    for (const reserva of this.reservas) {
      const precioNoche = 100;
      const desayuno = reserva.desayuno
        ? reserva.pax * this.DESAYUNO_PRECIO
        : 0;
      subtotal += (precioNoche + desayuno) * reserva.noches;
    }

    return subtotal * (1 - this.descuento);
  }
}
