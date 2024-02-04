import { partida } from "./model";
import {
  generarNumero,
  obtenerCartaAleatoria,
  obtenerPuntos,
  sumarPuntos,
  asignaPuntos,
} from "./motor";

// ELEMENTOS DEL DOM
export const botonPideCarta = document.getElementById("pedir_carta");
export const imgCarta = document.getElementById("carta");
export const puntuacion = document.getElementById("mostrar_puntos");
export const mensajes = document.getElementById("mostrar_mensaje");
export const botonPlantarse = document.getElementById("plantarse");
export const botonNuevaPartida = document.getElementById("nueva_partida");
export const botonQueHabriaPasado = document.getElementById("post-plantarse");

// Función para mostrar la puntuación
export function muestraPuntuacion() {
  if (
    puntuacion !== null &&
    puntuacion !== undefined &&
    puntuacion instanceof HTMLDivElement
  ) {
    puntuacion.innerHTML = partida.puntuacionUsuario.toString();
  }
}

// Función para elegir la URL de la carta
function elegirUrl(carta: number): string {
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
function meteUrl(url: string) {
  if (
    imgCarta !== null &&
    imgCarta !== undefined &&
    imgCarta instanceof HTMLImageElement
  ) {
    imgCarta.src = url;
  }
}

// Función para mostrar la carta
function mostrarCarta(carta: number) {
  const urlImagen = elegirUrl(carta);
  meteUrl(urlImagen);
}

// Función principal para pedir carta
export function pedirCarta() {
  const numeroAleatorio = generarNumero();
  const cartaAleatoria = obtenerCartaAleatoria(numeroAleatorio);
  const puntosCarta = obtenerPuntos(cartaAleatoria);
  const nuevaPuntuacion = sumarPuntos(puntosCarta);
  asignaPuntos(nuevaPuntuacion);
  mostrarCarta(cartaAleatoria);
  muestraPuntuacion();
  comprobarPuntosUsuario();
}

//Funcion para deshabilitar ver que pasa
export function deshabilitaVerQuePasaria(estado: boolean = true) {
  if (
    botonQueHabriaPasado !== null &&
    botonQueHabriaPasado !== undefined &&
    botonQueHabriaPasado instanceof HTMLButtonElement
  ) {
    if (estado) {
      botonQueHabriaPasado.disabled = true;
    } else {
      botonQueHabriaPasado.disabled = false;
    }
  }
}

// Función para deshabilitar botones
export function deshabilitarBotones() {
  if (
    botonPideCarta !== null &&
    botonPideCarta !== undefined &&
    botonPideCarta instanceof HTMLButtonElement
  ) {
    botonPideCarta.disabled = true;
  }
  if (
    botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement
  ) {
    botonPlantarse.disabled = true;
  }
}

// Función para mostrar mensaje
export function mostrarMensaje(mensaje: string, esError: boolean = false) {
  if (
    mensajes !== null &&
    mensajes !== undefined &&
    mensajes instanceof HTMLDivElement
  ) {
    mensajes.innerHTML = mensaje;
    if (esError) {
      mensajes.classList.add("error");
    } else {
      mensajes.classList.remove("error");
    }
  }
}

// Función para mostrar el botón de nueva partida
export function mostrarBotonNuevaPartida(mostrar: boolean) {
  if (
    botonNuevaPartida !== null &&
    botonNuevaPartida !== undefined &&
    botonNuevaPartida instanceof HTMLButtonElement
  ) {
    botonNuevaPartida.style.display = mostrar ? "block" : "none";
  }
}

// Función para mostrar el botón de que habria pasado
export function mostrarBotonQuePasaria(mostrar: boolean) {
  if (
    botonQueHabriaPasado !== null &&
    botonQueHabriaPasado !== undefined &&
    botonQueHabriaPasado instanceof HTMLButtonElement
  ) {
    botonQueHabriaPasado.style.display = mostrar ? "block" : "none";
  }
}

//funcion para comprobar puntuacion usuario y mostrar mensaje
export function comprobarPuntosUsuario() {
  if (partida.puntuacionUsuario > 7.5) {
    mostrarMensaje("GAME OVER", true);
    deshabilitarBotones();
    mostrarBotonNuevaPartida(true);
  } else if (partida.puntuacionUsuario === 7.5) {
    mostrarMensaje("¡¡¡Enhorabuena!!!🎉🎉", false);
    deshabilitarBotones();
    mostrarBotonNuevaPartida(true);
  }
}

//funcion mostrar mensaje en caso de plantarse
export function mensajePlantarse() {
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
  return mensaje;
}

// Función para plantarse
export function plantarse() {
  deshabilitarBotones();
  const mensaje = mensajePlantarse();
  mostrarMensaje(mensaje);
  mostrarBotonNuevaPartida(true);
  mostrarBotonQuePasaria(true);
}

//funciona para establecer ajustes de nueva partida
export function ajustesNuevaPartida() {
  if (mensajes !== null && mensajes !== undefined) {
    mensajes.innerHTML = "";
    mensajes.classList.remove("error");
  }

  if (
    botonPideCarta !== null &&
    botonPideCarta !== undefined &&
    botonPideCarta instanceof HTMLButtonElement
  ) {
    botonPideCarta.disabled = false;
  }
  if (
    botonPlantarse !== null &&
    botonPlantarse !== undefined &&
    botonPlantarse instanceof HTMLButtonElement
  ) {
    botonPlantarse.disabled = false;
  }
}

// Función para iniciar nueva partida
export function nuevaPartida() {
  partida.puntuacionUsuario = 0;
  muestraPuntuacion();
  mostrarCarta(0);
  mostrarBotonNuevaPartida(false);
  mostrarBotonQuePasaria(false);
  deshabilitaVerQuePasaria(false);
  ajustesNuevaPartida();
}

//Funcion para saber que habria pasado
export function verQueHabriaPasado() {
  pedirCarta();
}

export function iniciaPartida() {
  mostrarBotonNuevaPartida(false);
  mostrarBotonQuePasaria(false);
}
