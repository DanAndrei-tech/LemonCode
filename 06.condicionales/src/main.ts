import "./style.css";

let puntuacionUsuario: number = 0;

// ELEMENTOS DEL DOM
const botonPideCarta = getElemento(
  "pedir_carta",
  "button"
) as HTMLButtonElement;
const imgCarta = getElemento("carta", "img") as HTMLImageElement;
const puntuacion = getElemento("mostrar_puntos", "div");
const mensajes = getElemento("mostrar_mensaje", "div");
const botonPlantarse = getElemento("plantarse", "button") as HTMLButtonElement;
const botonNuevaPartida = getElemento("nueva_partida", "button");
const botonQueHabriaPasado = getElemento("post-plantarse", "button");

// Función para obtener elementos del DOM y hacer comprobaciones
function getElemento(id: string, tipo: string): HTMLElement {
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

// Función para mostrar la puntuación
function muestraPuntuacion() {
  if (puntuacion) {
    puntuacion.innerHTML = puntuacionUsuario.toString();
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
  imgCarta.src = url;
}

// Función para mostrar la carta
function mostrarCarta(carta: number) {
  const urlImagen = elegirUrl(carta);
  meteUrl(urlImagen);
}

//funcion que genera numero aleatorio
function generarNumero(): number {
  return Math.floor(Math.random() * 10) + 1;
}

// Función para obtener una carta aleatoria
function obtenerCartaAleatoria(): number {
  let cartaAleatoria: number = generarNumero();
  if (cartaAleatoria > 7) {
    cartaAleatoria += 2;
  }
  return cartaAleatoria;
}

//Funcion para sumar puntos
function sumaPuntos(carta: number): number {
  let puntos: number;
  if (carta >= 1 && carta <= 7) {
    puntos = carta;
  } else {
    puntos = 0.5;
  }
  return puntos;
}

// Función para meter puntos en puntuacion usuario
function sumarPuntosUsuario(carta: number) {
  puntuacionUsuario += sumaPuntos(carta);
}

// Función para deshabilitar botones
function deshabilitarBotones() {
  if (botonPideCarta) {
    botonPideCarta.disabled = true;
  }
  if (botonPlantarse) {
    botonPlantarse.disabled = true;
  }
}

// Función para mostrar mensaje
function mostrarMensaje(mensaje: string, esError: boolean = false) {
  if (mensajes) {
    mensajes.innerHTML = mensaje;
    if (esError) {
      mensajes.classList.add("error");
    } else {
      mensajes.classList.remove("error");
    }
  }
}

// Función para mostrar el botón de nueva partida
function mostrarBotonNuevaPartida(mostrar: boolean) {
  if (botonNuevaPartida) {
    botonNuevaPartida.style.display = mostrar ? "block" : "none";
  }
}

// Función para mostrar el botón de que habria pasado
function mostrarBotonQuePasaria(mostrar: boolean) {
  if (botonQueHabriaPasado) {
    botonQueHabriaPasado.style.display = mostrar ? "block" : "none";
  }
}

//Funcion para saber que habria pasado
function verQueHabriaPasado() {
  pedirCarta();
}

//funcion para comprobar puntuacion usuario y mostrar mensaje
function comprobarPuntosUsuario() {
  if (puntuacionUsuario > 7.5) {
    mostrarMensaje("GAME OVER", true);
    deshabilitarBotones();
    mostrarBotonNuevaPartida(true);
  } else if (puntuacionUsuario === 7.5) {
    mostrarMensaje("¡¡¡Enhorabuena!!!🎉🎉", false);
    deshabilitarBotones();
    mostrarBotonNuevaPartida(true);
  }
}

// Función principal para pedir carta
function pedirCarta() {
  const cartaAleatoria = obtenerCartaAleatoria();
  sumarPuntosUsuario(cartaAleatoria);
  mostrarCarta(cartaAleatoria);
  muestraPuntuacion();
  comprobarPuntosUsuario();
}

//funcion mostrar mensaje en caso de plantarse
function mensajePlantarse() {
  let mensaje = "";
  if (puntuacionUsuario < 4) {
    mensaje = "Has sido muy conservador💩";
  } else if (puntuacionUsuario === 5 || puntuacionUsuario < 6) {
    mensaje = "Te ha entrado el canguelo eh? 🤣";
  } else if (puntuacionUsuario >= 6 && puntuacionUsuario <= 7) {
    mensaje = "Casi casi...😲";
  } else if (puntuacionUsuario === 7.5) {
    mensaje = "¡Lo has clavado! ¡Enhorabuena!🎉🎉";
  }
  return mensaje;
}

// Función para plantarse
function plantarse() {
  deshabilitarBotones();
  const mensaje = mensajePlantarse();
  mostrarMensaje(mensaje);
  mostrarBotonNuevaPartida(true);
  mostrarBotonQuePasaria(true);
}

//funciona para establecer ajustes de nueva partida
function ajustesNuevaPartida() {
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

// Función para iniciar nueva partida
function nuevaPartida() {
  puntuacionUsuario = 0;
  muestraPuntuacion();
  mostrarCarta(0);
  mostrarBotonNuevaPartida(false);
  mostrarBotonQuePasaria(false);
  ajustesNuevaPartida();
}
// Eventos
if (botonPideCarta instanceof HTMLButtonElement) {
  botonPideCarta.addEventListener("click", pedirCarta);
}

if (botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", plantarse);
}

if (botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", nuevaPartida);
}
if (botonQueHabriaPasado instanceof HTMLButtonElement) {
  botonQueHabriaPasado.addEventListener("click", verQueHabriaPasado);
}

// Ocultar el botón para una nueva partida al inicio
mostrarBotonNuevaPartida(false);
mostrarBotonQuePasaria(false);
