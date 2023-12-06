import "./style.css";

import "./style.css";

let puntuacionUsuario: number = 0;

//ELEMENTOS DEL DOM
const botonPideCarta = document.getElementById("pedir_carta");
const imgCarta = document.getElementById("carta") as HTMLImageElement;
const puntuacion = document.getElementById("mostrar_puntos");
const mensajes = document.getElementById("mostrar_mensaje");
const botonPlantarse = document.getElementById("plantarse");
const botonNuevaPartida = document.getElementById("nueva_partida");

//funcion que muestra la puntuacion
const muestraPuntuacion = () => {
  if (puntuacion) {
    puntuacion.innerHTML = puntuacionUsuario.toString();
  }
};

//FUNCION MOSTRAR CARTA
const mostrarCarta = (carta: number): void => {
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

  imgCarta.src = urlImagen;
};

//Cargar la puntuacion cuando el DOM este listo
document.addEventListener("DOMContentLoaded", () => {
  muestraPuntuacion();
  mostrarCarta(0); //con el argumento 0 entra en el case default del switch para mostrar la carta boca abajo
});

//FUNCION PARA PEDIR CARTA
const dameCarta = (): void => {
  let cartaAleatoria: number = Math.floor(Math.random() * 10) + 1;
  if (cartaAleatoria > 7) {
    cartaAleatoria += 2;
  }

  // Sumar la puntuación de la carta al total
  if (cartaAleatoria >= 1 && cartaAleatoria <= 7) {
    puntuacionUsuario += cartaAleatoria;
  } else {
    puntuacionUsuario += 0.5;
  }
  // Verificar si se ha pasado de puntos
  if (
    mensajes &&
    botonPideCarta instanceof HTMLButtonElement &&
    botonPlantarse instanceof HTMLButtonElement &&
    puntuacionUsuario > 7.5
  ) {
    mensajes.innerHTML = "GAME OVER";
    mensajes.classList.add("error");
    botonPideCarta.disabled = true;
    botonPlantarse.disabled = true; //deshabilitar boton de plantarse si es game over

    mostrarBotonNuevaPartida(true);
  }

  //Llamar a la funcion para mostrar carta y actualizar la puntuacion
  mostrarCarta(cartaAleatoria);
  muestraPuntuacion();
};

//Función para plantarse
const plantarse = (): void => {
  //Deshabilitar botones
  if (botonPideCarta instanceof HTMLButtonElement) {
    botonPideCarta.disabled = true;
  }
  if (botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = true;
  }

  //Mostrar mensaje
  if (mensajes) {
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

    mensajes.innerHTML = mensaje;
  }

  mostrarBotonNuevaPartida(true);
};

//Función para iniciar nueva partida
const nuevaPartida = (): void => {
  //Reiniciar variables
  puntuacionUsuario = 0;
  muestraPuntuacion();
  mostrarCarta(0);
  mostrarBotonNuevaPartida(false);
  if (mensajes) {
    mensajes.innerHTML = "";
  }

  //Habilitar botones
  if (botonPideCarta instanceof HTMLButtonElement) {
    botonPideCarta.disabled = false;
  }
  if (botonPlantarse instanceof HTMLButtonElement) {
    botonPlantarse.disabled = false;
  }
};

// función para mostrar el boton de nueva partida
const mostrarBotonNuevaPartida = (mostrar: boolean): void => {
  if (botonNuevaPartida instanceof HTMLButtonElement) {
    if (mostrar) {
      botonNuevaPartida.style.display = "block";
    } else {
      botonNuevaPartida.style.display = "none";
    }
  }
};

// Eventos
if (botonPideCarta && botonPideCarta instanceof HTMLButtonElement) {
  botonPideCarta.addEventListener("click", dameCarta);
}

if (botonPlantarse && botonPlantarse instanceof HTMLButtonElement) {
  botonPlantarse.addEventListener("click", plantarse);
}

if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", nuevaPartida);
}

// Ocultar el botón para una nueva partida al inicio
mostrarBotonNuevaPartida(false);
