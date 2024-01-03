import "./style.css";

import { botonPideCarta, botonNuevaPartida, botonPlantarse } from "./model";

import { nuevaPartida, mostrarBotonNuevaPartida } from "./ui";

import { plantarse, pedirCarta } from "./motor";

// Eventos
if (botonPideCarta) {
  botonPideCarta.addEventListener("click", pedirCarta);
}

if (botonPlantarse) {
  botonPlantarse.addEventListener("click", plantarse);
}

if (botonNuevaPartida) {
  botonNuevaPartida.addEventListener("click", nuevaPartida);
}

// Ocultar el botón para una nueva partida al inicio
mostrarBotonNuevaPartida(false);
