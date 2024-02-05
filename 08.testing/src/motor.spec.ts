import { vi } from "vitest";
import { EstadoPartida, partida } from "./model";
import {
  obtenerEstadoPartida,
  obtenerCartaAleatoria,
  obtenerPuntos,
} from "./motor";

describe("./src/motor.ts", () => {
  describe("obtenerEstadoPartida", () => {
    it("Cuando el jugador tiene 7.5 puntos GANA la partida", () => {
      //Arrange
      const resultadoEsperado: EstadoPartida = "JUSTO_MAXIMA";
      vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(7.5);
      //Act
      const resultado = obtenerEstadoPartida();
      //Assert
      expect(resultado).toBe(resultadoEsperado);
    });

    it("Cuando el jugador tiene MÁS de 7.5 puntos PIERDE la partida", () => {
      //Arrange
      const resultadoEsperado: EstadoPartida = "TE HAS PASADO";
      vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(8.5);
      //Act
      const resultado = obtenerEstadoPartida();
      //Assert
      expect(resultado).toBe(resultadoEsperado);
    });

    it("Cuando el jugador tiene MENOS de 7.5 puntos se queda corto", () => {
      //Arrange
      const resultadoEsperado: EstadoPartida = "POR_DEBAJO_MAXIMO";
      vi.spyOn(partida, "puntuacionUsuario", "get").mockReturnValue(6.5);
      //Act
      const resultado = obtenerEstadoPartida();
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

  describe("obtenerCartaAleatoria", () => {
    it("Si el numero recibido es MAYOR que 7 debe sumar 2 al resultado", () => {
      //Arrange
      const numero: number = 8;
      const resultadoEsperado: number = 10;
      //Act
      const resultado = obtenerCartaAleatoria(numero);
      //Assert
      expect(resultado).toBe(resultadoEsperado);
    });

    it("Si el numero recibido es MENOR que 7 deve devolver ese mismo numero", () => {
      //Arrange
      const numero: number = 5;
      const resultadoEsperado: number = 5;
      //Act
      const resultado = obtenerCartaAleatoria(numero);
      //Assert
      expect(resultado).toBe(resultadoEsperado);
    });
  });
});
