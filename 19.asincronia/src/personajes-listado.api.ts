import axios from "axios";
import { Personaje } from "./personajes-modelo";

export const obtenerPersonajes = async (): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get("http://localhost:3000/personajes");
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Error al obtener los personajes");
  }
};

export const obtenerPersonajesFiltrados = async (
  nombrePersonaje: string
): Promise<Personaje[]> => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/personajes?nombre_like=${encodeURIComponent(
        nombrePersonaje
      )}`
    );
    return data;
  } catch (error) {
    throw new Error("Error al obtener el personaje");
  }
};
