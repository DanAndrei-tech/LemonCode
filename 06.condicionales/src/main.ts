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

// Función para obtener una carta aleatoria
function obtenerCartaAleatoria(): number {
  let cartaAleatoria: number = Math.floor(Math.random() * 10) + 1;
  if (cartaAleatoria > 7) {
    cartaAleatoria += 2;
  }
  return cartaAleatoria;
}

// Función para sumar puntos según la carta obtenida
function sumarPuntos(carta: number) {
  if (carta >= 1 && carta <= 7) {
    puntuacionUsuario += carta;
  } else {
    puntuacionUsuario += 0.5;
  }
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

// Función principal para pedir carta
function pedirCarta() {
  const cartaAleatoria = obtenerCartaAleatoria();
  sumarPuntos(cartaAleatoria);
  mostrarCarta(cartaAleatoria);
  muestraPuntuacion();

  if (puntuacionUsuario > 7.5) {
    mostrarMensaje("GAME OVER", true);
    deshabilitarBotones();
    mostrarBotonNuevaPartida(true);
  }
}

// Función para plantarse
function plantarse() {
  deshabilitarBotones();

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

  mostrarMensaje(mensaje);
  mostrarBotonNuevaPartida(true);
}

// Función para iniciar nueva partida
function nuevaPartida() {
  puntuacionUsuario = 0;
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
