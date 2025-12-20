import { ReservaBase } from "./reserva-base";
import { Reserva } from "./modelo";

export class ReservaParticular extends ReservaBase {
  constructor(reservas: Reserva[], precios: Record<string, number>) {
    super(reservas, precios);
  }

  calcularSubtotal(): number {
    return this.reservas.reduce((subtotal, reserva) => {
      const precioBase = this.precios[reserva.tipoHabitacion];
      const personasExtra = Math.max(reserva.pax - 1, 0);
      const extraPorPersona = personasExtra * 40;
      const desayuno = reserva.desayuno
        ? reserva.pax * this.DESAYUNO_PRECIO
        : 0;
      const precioNoche = precioBase + extraPorPersona + desayuno;

      return subtotal + precioNoche * reserva.noches;
    }, 0);
  }
}
