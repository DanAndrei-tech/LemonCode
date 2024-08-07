import { Tablero } from "./modelo";
import {
  voltearLaCarta,
  reiniciarJuego,
  sePuedeVoltearLaCarta,
  sonPareja,
  esPartidaCompleta,
  parejaEncontrada,
  parejaNoEncontrada,
} from "./motor";

export const renderizarTablero = (
  tablero: Tablero,
  tableroElement: HTMLElement,
  manejarClickCarta: (indice: number) => void // Solo acepta índice como argumento
): void => {
  //mostrar el numero de intentos
  const intentosElement = document.getElementById("intentos");
  if (intentosElement && intentosElement instanceof HTMLDivElement) {
    intentosElement.textContent = `Intentos: ${tablero.intentos}`;
  }
  tableroElement.innerHTML = "";
  tablero.cartas.forEach((carta, indice) => {
    const cartaElement = document.createElement("div");
    cartaElement.classList.add("carta");
    cartaElement.dataset.indice = indice.toString();
    const imgClass = carta.estaVuelta ? "volteada" : "";
    cartaElement.innerHTML = `<img class ="${imgClass}" src = "${
      carta.estaVuelta ? carta.imagen : "img/foto.jpg"
    }"/>`;
    cartaElement.addEventListener("click", () => {
      manejarClickCarta(indice); // Llama a manejarClickCarta con solo el índice
    });
    tableroElement.appendChild(cartaElement);
  });
};

const mostrarMensajeFinJuego = (tablero: Tablero) => {
  const mensajeTexto = document.getElementById("mensaje-texto")!;
  const botonReiniciar = document.getElementById("boton-reiniciar")!;

  mensajeTexto.classList.add("text");
  mensajeTexto.textContent = `Enhorabuena, lo has conseguido en ${tablero.intentos} intentos`;
  botonReiniciar.style.display = "inline";
  document.getElementById("mensaje")!.style.display = "block";

  // Agregar el manejador del clic para reiniciar el juego
  botonReiniciar.addEventListener("click", () => {
    reiniciarJuego(tablero);
    const tableroElement = document.getElementById("tablero")!;
    renderizarTablero(tablero, tableroElement, manejarClickCarta(tablero));
    document.getElementById("mensaje")!.style.display = "none";
    botonReiniciar.style.display = "none";
  });
};

const comprobarSiEsLaSegundaCarta = (tablero: Tablero) => {
  const indiceCartaA = tablero.indiceCartaVolteadaA;
  const indiceCartaB = tablero.indiceCartaVolteadaB;

  if (indiceCartaA !== undefined && indiceCartaB !== undefined) {
    if (sonPareja(indiceCartaA, indiceCartaB, tablero)) {
      parejaEncontrada(tablero, indiceCartaA, indiceCartaB);
      if (esPartidaCompleta(tablero)) {
        tablero.estadoPartida = "PartidaCompleta";
        setTimeout(() => {
          mostrarMensajeFinJuego(tablero);
        }, 500);
      } else {
        tablero.estadoPartida = "CeroCartasLevantadas";
      }
    } else {
      parejaNoEncontrada(tablero, indiceCartaA, indiceCartaB);
      // llamo a mi función que le de la vuelta a las cartas que no son pareja
      // con el setTimeout
      // NOTA: le tengo que dar la vuelta (mostrar el fondo trasero), a las cartas, que no estén encontradas ni están dadas la vuelta.
    }
  }
};

// Ajustamos manejarClickCarta para que acepte solo el índice y use la función del motor
export const manejarClickCarta =
  (tablero: Tablero) =>
  (indice: number): void => {
    if (sePuedeVoltearLaCarta(tablero, indice)) {
      voltearLaCarta(tablero, indice);
      const tableroElement = document.getElementById("tablero")!;
      renderizarTablero(tablero, tableroElement, manejarClickCarta(tablero));
      comprobarSiEsLaSegundaCarta(tablero);
    }
  };
