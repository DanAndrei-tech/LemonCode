import { Reserva } from "./modelo";

export class ReservaBase {
  reservas: Reserva[];
  precios: Record<string, number>;
  IVA: number = 0.21;
  DESAYUNO_PRECIO: number = 15;

  constructor(reservas: Reserva[], precios: Record<string, number>) {
    this.reservas = reservas;
    this.precios = precios;
  }

  calcularSubtotal(): number {
    return 0;
  }

  calcularIVA(subtotal: number): number {
    return subtotal * this.IVA;
  }

  calcularTotal(): number {
    const subtotal = this.calcularSubtotal();
    const iva = this.calcularIVA(subtotal);
    return subtotal + iva;
  }
}
