import {
  botonPideCarta,
  botonPlantarse,
  botonNuevaPartida,
  botonQueHabriaPasado,
  mostrarBotonNuevaPartida,
  mostrarBotonQuePasaria,
  plantarse,
  nuevaPartida,
  pedirCarta,
  verQueHabriaPasado,
} from "./ui";

// Eventos
if (
  botonPideCarta !== null &&
  botonPideCarta !== undefined &&
  botonPideCarta instanceof HTMLButtonElement
) {
  botonPideCarta.addEventListener("click", pedirCarta);
}

if (
  botonPlantarse !== null &&
  botonPlantarse !== undefined &&
  botonPlantarse instanceof HTMLButtonElement
) {
  botonPlantarse.addEventListener("click", plantarse);
}

if (
  botonNuevaPartida !== null &&
  botonNuevaPartida !== undefined &&
  botonNuevaPartida instanceof HTMLButtonElement
) {
  botonNuevaPartida.addEventListener("click", nuevaPartida);
}
if (
  botonQueHabriaPasado !== null &&
  botonQueHabriaPasado !== undefined &&
  botonQueHabriaPasado instanceof HTMLButtonElement
) {
  botonQueHabriaPasado.addEventListener("click", verQueHabriaPasado);
}

// Ocultar el botón para una nueva partida al inicio
mostrarBotonNuevaPartida(false);
mostrarBotonQuePasaria(false);
