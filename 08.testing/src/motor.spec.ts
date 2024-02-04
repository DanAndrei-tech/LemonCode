import { vi } from "vitest";
import { partida } from "./model";
import {
  determinarGanador,
  obtenerCartaAleatoria,
  obtenerPuntos,
} from "./motor";

describe("determinarGanador", () => {
  it("Cuando el jugador tiene 7.5 puntos GANA la partida", () => {
    //Arrange
    const resultadoEsperado: string = "¡¡¡Enhorabuena!!!🎉🎉";
    vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(7.5);
    //Act
    const resultado = determinarGanador();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("determinarGanador", () => {
  it("Cuando el jugador tiene MÁS de 7.5 puntos PIERDE la partida", () => {
    //Arrange
    const resultadoEsperado: string = "Game Over";
    vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(8.5);
    //Act
    const resultado = determinarGanador();
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("obtenerCartaAleatoria", () => {
  it("Si el numero recibido es mayor que 7 debe sumar 2 al resultado", () => {
    //Arrange
    const numero: number = 8;
    const resultadoEsperado: number = 10;
    //Act
    const resultado = obtenerCartaAleatoria(numero);
    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("obtenerPuntos", () => {
  it("Cuando la carta recibida es entre el 1 y el 7 debe devolver su valor en los puntos", () => {
    //Arrange
    const carta: number = 6;
    const resultadoEsperado: number = 6;

    //Act
    const resultado = obtenerPuntos(carta);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});

describe("obtenerPuntos", () => {
  it("Cuando la carta recibida es mayor que 7 debe devolver 0.5 en los puntos", () => {
    //Arrange
    const carta: number = 10;
    const resultadoEsperado: number = 0.5;

    //Act
    const resultado = obtenerPuntos(carta);

    //Assert
    expect(resultado).toBe(resultadoEsperado);
  });
});
