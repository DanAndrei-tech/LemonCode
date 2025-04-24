export interface Reserva {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}

export const preciosParticular = {
  standard: 100,
  suite: 150,
};

export const preciosTour = {
  standard: 100,
  suite: 100,
};
