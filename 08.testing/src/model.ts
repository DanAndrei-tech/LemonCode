interface Partida {
  puntuacionUsuario: number;
  puntosMaximosTotales: number;
  estado: EstadoPartida;
}

export type EstadoPartida =
  | "POR_DEBAJO_MAXIMO"
  | "JUSTO_MAXIMA"
  | "TE HAS PASADO";

export const partida: Partida = {
  puntuacionUsuario: 0,
  puntosMaximosTotales: 7.5,
  estado: "POR_DEBAJO_MAXIMO",
};
