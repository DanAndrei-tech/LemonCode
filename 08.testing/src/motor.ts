import { partida } from "./model";

//--------------------------FUNCIONES PARA TESTING-------------------------//
//Funcion para probar caso de ganador.
export function determinarGanador(): string | null {
  if (partida.puntuacionUsuario === 7.5) {
    return "¡¡¡Enhorabuena!!!🎉🎉";
  } else if (partida.puntuacionUsuario > 7.5) {
    return "Game Over";
  } else {
    return null;
  }
}

// Función para obtener una carta aleatoria
export function obtenerCartaAleatoria(numeroAleatorio: number): number {
  if (numeroAleatorio > 7) {
    numeroAleatorio += 2;
  }
  return numeroAleatorio;
}

//Funcion para obtener puntos
export function obtenerPuntos(carta: number): number {
  let puntos: number;
  if (carta >= 1 && carta <= 7) {
    puntos = carta;
  } else {
    puntos = 0.5;
  }
  return puntos;
}

//--------------------------END TESTING-------------------------//

//funcion que genera numero aleatorio
export function generarNumero(): number {
  return Math.floor(Math.random() * 10) + 1;
}

//Funcion para sumar los puntos
export function sumarPuntos(puntos: number): number {
  return partida.puntuacionUsuario + puntos;
}

//Asignar los puntos al usuario
export function asignaPuntos(puntos: number) {
  partida.puntuacionUsuario = puntos;
}
