// src/shell.ts

import { Tablero, crearTableroInicial } from "./modelo";
import { iniciaPartida } from "./motor";
import { renderizarTablero, manejarClickCarta } from "./ui";

export const inicializarJuego = (): void => {
  const tablero: Tablero = crearTableroInicial();
  const botonIniciar = document.getElementById("boton-iniciar")!;
  const tableroElement = document.getElementById("tablero")!;

  // Inicialmente ocultamos el tablero
  tableroElement.style.display = "none";

  botonIniciar.addEventListener("click", () => {
    // Mostrar el tablero y ocultar el botón
    tableroElement.style.display = "grid"; // O el estilo que uses para mostrar el tablero
    botonIniciar.style.display = "none";

    // Iniciar la partida y renderizar el tablero
    iniciaPartida(tablero);
    renderizarTablero(tablero, tableroElement, manejarClickCarta(tablero));
  });
};
