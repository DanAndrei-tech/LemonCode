// src/motor.ts

import { Carta, Tablero, cartas } from "./modelo";

const barajarCartas = (cartas: Carta[]): Carta[] => {
  for (let i = cartas.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cartas[i], cartas[j]] = [cartas[j], cartas[i]];
  }
  return cartas;
};

const sePuedeVoltearLaCarta = (tablero: Tablero, indice: number): boolean => {
  const carta = tablero.cartas[indice];
  if (carta.estaVuelta) {
    alert("¡Esta carta ya esta volteada!");
    return false;
  }
  return !carta.encontrada && tablero.estadoPartida !== "DosCartasLevantadas";
};

export const voltearLaCarta = (tablero: Tablero, indice: number): void => {
  if (!sePuedeVoltearLaCarta(tablero, indice)) return;

  tablero.cartas[indice].estaVuelta = true;
  tablero.intentos++;

  if (tablero.estadoPartida === "CeroCartasLevantadas") {
    tablero.indiceCartaVolteadaA = indice;
    tablero.estadoPartida = "UnaCartaLevantada";
  } else if (tablero.estadoPartida === "UnaCartaLevantada") {
    tablero.indiceCartaVolteadaB = indice;
    tablero.estadoPartida = "DosCartasLevantadas";

    if (
      sonPareja(
        tablero.indiceCartaVolteadaA!,
        tablero.indiceCartaVolteadaB!,
        tablero
      )
    ) {
      parejaEncontrada(
        tablero,
        tablero.indiceCartaVolteadaA!,
        tablero.indiceCartaVolteadaB!
      );
      if (esPartidaCompleta(tablero)) {
        tablero.estadoPartida = "PartidaCompleta";
      } else {
        tablero.estadoPartida = "CeroCartasLevantadas";
      }
    } else {
      setTimeout(() => {
        parejaNoEncontrada(
          tablero,
          tablero.indiceCartaVolteadaA!,
          tablero.indiceCartaVolteadaB!
        );
        tablero.estadoPartida = "CeroCartasLevantadas";
      }, 1000);
    }
  }
};

export const sonPareja = (
  indiceA: number,
  indiceB: number,
  tablero: Tablero
): boolean => {
  return tablero.cartas[indiceA].idFoto === tablero.cartas[indiceB].idFoto;
};

const parejaEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].encontrada = true;
  tablero.cartas[indiceB].encontrada = true;
};

const parejaNoEncontrada = (
  tablero: Tablero,
  indiceA: number,
  indiceB: number
): void => {
  tablero.cartas[indiceA].estaVuelta = false;
  tablero.cartas[indiceB].estaVuelta = false;
};

export const esPartidaCompleta = (tablero: Tablero): boolean => {
  return tablero.cartas.every((carta) => carta.encontrada);
};

export const iniciaPartida = (tablero: Tablero): void => {
  tablero.cartas = barajarCartas(cartas);
  tablero.estadoPartida = "CeroCartasLevantadas";
};

export const reiniciarJuego = (tablero: Tablero): void => {
  tablero.cartas.forEach((carta) => {
    carta.estaVuelta = false; // Volteamos todas las cartas
    carta.encontrada = false; // Restablecemos el estado de encontradas
  });
  tablero.estadoPartida = "CeroCartasLevantadas";
  tablero.intentos = 0; // Reiniciamos el contador de intentos
  tablero.cartas = barajarCartas(cartas); // Barajamos las cartas nuevamente
};
