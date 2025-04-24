import "./style.css";

import { Reserva, preciosParticular, preciosTour } from "./modelo";
import { ReservaParticular } from "./reserva-particular";
import { ReservaTourOperador } from "./reserva-tour";

const reservas: Reserva[] = [
  { tipoHabitacion: "standard", pax: 1, noches: 3, desayuno: false },
  { tipoHabitacion: "standard", pax: 1, noches: 4, desayuno: false },
  { tipoHabitacion: "suite", pax: 2, noches: 1, desayuno: true },
];

const cliente = new ReservaParticular(reservas, preciosParticular);
console.log("Cliente Particular");
console.log("Subtotal:", cliente.calcularSubtotal().toFixed(2));
console.log("Total:", cliente.calcularTotal().toFixed(2));

console.log("-------------------------------------");

const tour = new ReservaTourOperador(reservas, preciosTour);
console.log("Tour Operador");
console.log("Subtotal:", tour.calcularSubtotal().toFixed(2));
console.log("Total:", tour.calcularTotal().toFixed(2));
