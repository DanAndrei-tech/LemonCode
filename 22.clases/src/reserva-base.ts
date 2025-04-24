import { Reserva } from "./modelo";

export class ReservaBase {
  protected reservas: Reserva[];
  protected precios: Record<string, number>;
  protected IVA: number = 0.21;
  protected DESAYUNO_PRECIO: number = 15;

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
