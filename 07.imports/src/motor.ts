import { partida, botonPideCarta, botonPlantarse, imgCarta } from "./model";

import {
  muestraPuntuacion,
  mostrarMensaje,
  mostrarBotonNuevaPartida,
} from "./ui";

// Función para elegir la URL de la carta
export function elegirUrl(carta: number): string {
  let urlImagen = "";
  //Mapear valor de la carta
  switch (carta) {
    case 1:
      urlImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      break;
    case 2:
      urlImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      break;
    case 3:
      urlImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      break;
    case 4:
      urlImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      break;
    case 5:
      urlImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      break;
    case 6:
      urlImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      break;
    case 7:
      urlImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      break;
    case 10:
      urlImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      break;
    case 11:
      urlImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      break;
    case 12:
      urlImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      break;
    default:
      //carta boca abajo por defecto
      urlImagen =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
      break;
  }
  return urlImagen;
}

// Función para meter la URL en el src de la imagen
export function meteUrl(url: string) {
  imgCarta.src = url;
}

// Función para mostrar la carta
export function mostrarCarta(carta: number) {
  const urlImagen = elegirUrl(carta);
  meteUrl(urlImagen);
}

// Función para obtener una carta aleatoria
export function obtenerCartaAleatoria(): number {
  let cartaAleatoria: number = Math.floor(Math.random() * 10) + 1;
  if (cartaAleatoria > 7) {
    cartaAleatoria += 2;
  }
  return cartaAleatoria;
}

// Función para sumar puntos según la carta obtenida
export function sumarPuntos(carta: number) {
  if (carta >= 1 && carta <= 7) {
    partida.puntuacionUsuario += carta;
  } else {
    partida.puntuacionUsuario += 0.5;
  }
}

// Función para deshabilitar botones
export function deshabilitarBotones() {
  if (botonPideCarta) {
    botonPideCarta.disabled = true;
  }
  if (botonPlantarse) {
    botonPlantarse.disabled = true;
  }
}

// Función para plantarse
export function plantarse() {
  deshabilitarBotones();

  let mensaje = "";
  if (partida.puntuacionUsuario < 4) {
    mensaje = "Has sido muy conservador💩";
  } else if (partida.puntuacionUsuario === 5 || partida.puntuacionUsuario < 6) {
    mensaje = "Te ha entrado el canguelo eh? 🤣";
  } else if (partida.puntuacionUsuario >= 6 && partida.puntuacionUsuario <= 7) {
    mensaje = "Casi casi...😲";
  } else if (partida.puntuacionUsuario === 7.5) {
    mensaje = "¡Lo has clavado! ¡Enhorabuena!🎉🎉";
  }

  mostrarMensaje(mensaje);
  mostrarBotonNuevaPartida(true);
}

// Función principal para pedir carta
export function pedirCarta() {
  const cartaAleatoria = obtenerCartaAleatoria();
  sumarPuntos(cartaAleatoria);
  mostrarCarta(cartaAleatoria);
  muestraPuntuacion();

  if (partida.puntuacionUsuario > 7.5) {
    mostrarMensaje("GAME OVER", true);
    deshabilitarBotones();
    mostrarBotonNuevaPartida(true);
  }
}
