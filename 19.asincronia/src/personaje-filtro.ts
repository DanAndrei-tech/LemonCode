import { Personaje } from "./personajes-modelo";
import { obtenerPersonajes } from "./personajes-listado.api";

export const obtenerValorInput = (input: string): string => {
  const elementoInput = document.querySelector(`#${input}`);
  if (elementoInput && elementoInput instanceof HTMLInputElement) {
    return elementoInput.value;
  } else {
    throw new Error(`No se ha encontrado el input ${input}`);
  }
};

export const obtenerPersonajesFiltrados = async (): Promise<Personaje[]> => {
  try {
    const personajes = await obtenerPersonajes();
    const nombrePersonaje = obtenerValorInput("personaje");
    const personajesFiltrados = personajes.filter((personaje: Personaje) =>
      personaje.nombre.toLowerCase().includes(nombrePersonaje)
    );
    return personajesFiltrados;
  } catch (error) {
    throw new Error("Error");
  }
};
