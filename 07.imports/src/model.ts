import { getElemento } from "./ui";

interface Partida {
  puntuacionUsuario: number;
}

export const partida: Partida = {
  puntuacionUsuario: 0,
};

// ELEMENTOS DEL DOM
export const botonPideCarta = getElemento(
  "pedir_carta",
  "button"
) as HTMLButtonElement;
export const imgCarta = getElemento("carta", "img") as HTMLImageElement;
export const puntuacion = getElemento("mostrar_puntos", "div");
export const mensajes = getElemento("mostrar_mensaje", "div");
export const botonPlantarse = getElemento(
  "plantarse",
  "button"
) as HTMLButtonElement;
export const botonNuevaPartida = getElemento("nueva_partida", "button");
