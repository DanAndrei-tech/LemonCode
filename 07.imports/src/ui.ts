import {
  puntuacion,
  partida,
  mensajes,
  botonPideCarta,
  botonPlantarse,
  botonNuevaPartida,
} from "./model";
import { mostrarCarta } from "./motor";

// Función para obtener elementos del DOM y hacer comprobaciones
export function getElemento(id: string, tipo: string): HTMLElement {
  const elemento = document.getElementById(id);
  if (!elemento) {
    throw new Error(`Elemento con id ${id} no encontrado.`);
  }

  if (!(elemento instanceof HTMLButtonElement) && tipo === "button") {
    throw new Error(`Elemento con id ${id} no es un botón.`);
  }

  if (!(elemento instanceof HTMLImageElement) && tipo === "img") {
    throw new Error(`Elemento con id ${id} no es una imagen.`);
  }

  if (!(elemento instanceof HTMLDivElement) && tipo === "div") {
    throw new Error(`Elemento con id ${id} no es un div.`);
  }

  return elemento;
}

export // Función para mostrar la puntuación
function muestraPuntuacion() {
  if (puntuacion) {
    puntuacion.innerHTML = partida.puntuacionUsuario.toString();
  }
}

// Función para mostrar el botón de nueva partida
export function mostrarBotonNuevaPartida(mostrar: boolean) {
  if (botonNuevaPartida) {
    botonNuevaPartida.style.display = mostrar ? "block" : "none";
  }
}

// Función para mostrar mensaje
export function mostrarMensaje(mensaje: string, esError: boolean = false) {
  if (mensajes) {
    mensajes.innerHTML = mensaje;
    if (esError) {
      mensajes.classList.add("error");
    } else {
      mensajes.classList.remove("error");
    }
  }
}

// Función para iniciar nueva partida
export function nuevaPartida() {
  partida.puntuacionUsuario = 0;
  muestraPuntuacion();
  mostrarCarta(0);
  mostrarBotonNuevaPartida(false);
  if (mensajes) {
    mensajes.innerHTML = "";
    mensajes.classList.remove("error");
  }

  if (botonPideCarta) {
    botonPideCarta.disabled = false;
  }
  if (botonPlantarse) {
    botonPlantarse.disabled = false;
  }
}
