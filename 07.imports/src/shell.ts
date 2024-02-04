import {
  botonPideCarta,
  botonPlantarse,
  botonNuevaPartida,
  botonQueHabriaPasado,
  plantarse,
  nuevaPartida,
  pedirCarta,
  verQueHabriaPasado,
  deshabilitaVerQuePasaria,
  iniciaPartida,
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

if (
  botonQueHabriaPasado !== null &&
  botonQueHabriaPasado !== undefined &&
  botonQueHabriaPasado instanceof HTMLButtonElement
) {
  botonQueHabriaPasado.addEventListener("click", () => {
    deshabilitaVerQuePasaria(true);
  });
}

// Ocultar el botón para una nueva partida al inicio
document.addEventListener("DOMContentLoaded", iniciaPartida);
