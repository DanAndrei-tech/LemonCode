import { Personaje } from "./personajes-modelo";
import { obtenerPersonajes } from "./personajes-listado.api";
import { obtenerPersonajesFiltrados } from "./personajes-listado.api";

const crearElementoImagen = (
  portada: string,
  titulo: string
): HTMLImageElement => {
  const imagen = document.createElement("img");
  const BASE_URL = "http://localhost:3000";
  imagen.src = `${BASE_URL}/${portada}`;
  imagen.alt = titulo;
  return imagen;
};

const crearElementoParrafo = (
  span: string,
  ...textos: string[]
): HTMLParagraphElement => {
  const parrafo = document.createElement("h4");
  const negritaTexto = `<span class="negrita">${span}</span>`;
  const textoFinal = [negritaTexto, ...textos].join(" ");

  parrafo.innerHTML = textoFinal;

  return parrafo;
};

const crearContenedorPersonaje = (personaje: Personaje): HTMLDivElement => {
  const elementoPersonaje = document.createElement("div");
  elementoPersonaje.classList.add("personaje-contenedor");

  const imagen = crearElementoImagen(personaje.imagen, personaje.nombre);
  elementoPersonaje.appendChild(imagen);

  const titulo = crearElementoParrafo("Nombre: ", personaje.nombre);
  elementoPersonaje.appendChild(titulo);

  const especialidad = crearElementoParrafo(
    "Especialidad: ",
    personaje.especialidad
  );
  elementoPersonaje.appendChild(especialidad);

  const habilidades = crearElementoParrafo(
    "Habilidades: ",
    ...personaje.habilidades
  );
  elementoPersonaje.appendChild(habilidades);

  return elementoPersonaje;
};

const obtenerValorInput = (input: string): string => {
  const elementoInput = document.querySelector(`#${input}`);
  if (elementoInput && elementoInput instanceof HTMLInputElement) {
    return elementoInput.value;
  } else {
    throw new Error(`No se ha encontrado el input ${input}`);
  }
};

const renderizarPersonajes = (personajes: Personaje[]): void => {
  const listado = document.querySelector("#listado-personajes");

  if (listado && listado instanceof HTMLElement) {
    listado.innerHTML = "";
    personajes.forEach((personaje) => {
      const contenedor = crearContenedorPersonaje(personaje);
      listado.appendChild(contenedor);
    });
  } else {
    throw new Error("No se ha encontrado el contenedor listado-personajes");
  }
};

const pintarPersonajes = async () => {
  const personajes = await obtenerPersonajes();
  renderizarPersonajes(personajes);
};

const actualizarPersonajes = async () => {
  try {
    const nombre = obtenerValorInput("personaje");
    const personajes = await obtenerPersonajesFiltrados(nombre);
    if (personajes.length === 0) {
      mostrarPopup("No existe ningún personaje con ese nombre");
    } else {
      renderizarPersonajes(personajes);
    }
  } catch (error) {
    throw new Error("Error al cargar los personajes");
  }
};

const volverAlaPaginaDeInicio = () => {
  const boton = document.getElementById("home");
  if (boton && boton instanceof HTMLButtonElement) {
    boton.addEventListener("click", () => {
      pintarPersonajes();
      const input = document.getElementById("personaje") as HTMLInputElement;
      if (input) input.value = "";
    });
  }
};

const mostrarPopup = (mensaje: string) => {
  const popup = document.getElementById("popup") as HTMLDivElement;
  const popupMessage = document.getElementById(
    "popup-message"
  ) as HTMLParagraphElement;

  popupMessage.textContent = mensaje; // Actualizamos el mensaje en el popup
  popup.style.display = "flex"; // Mostramos el popup

  const closeBtn = document.getElementById("popup-close") as HTMLElement;
  closeBtn.addEventListener("click", () => {
    popup.style.display = "none"; // Cerramos el popup cuando se hace clic en el botón de cerrar
  });
};

document.addEventListener("DOMContentLoaded", async () => {
  pintarPersonajes();

  const formulario = document.querySelector("#formulario");
  if (formulario && formulario instanceof HTMLFormElement) {
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      actualizarPersonajes();
    });
    volverAlaPaginaDeInicio();
  } else {
    throw new Error("No se ha encontrado el formulario");
  }
});
