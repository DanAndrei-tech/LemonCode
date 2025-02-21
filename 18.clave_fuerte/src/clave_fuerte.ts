import { ValidacionClave } from "./modelo";
import { commonPasswords } from "./datos";
import {
  tieneMayusculasYminusculas,
  tieneNumeros,
  tieneCaracteresEspeciales,
  tieneLongitudMinima,
  contieneNombreUsuario,
  tienePalabrasComunes,
} from "./clave_fuerte_helper";

export const validarClave = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  const validaciones = [
    tieneLongitudMinima(clave),
    tieneMayusculasYminusculas(clave),
    tieneNumeros(clave),
    tieneCaracteresEspeciales(clave),
    contieneNombreUsuario(nombreUsuario, clave),
    tienePalabrasComunes(clave, commonPasswords),
  ];

  for (const validacion of validaciones) {
    if (!validacion.esValida) {
      return validacion;
    }
  }
  return { esValida: true };
};
