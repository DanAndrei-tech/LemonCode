import { ValidacionClave } from "./modelo";

export const tieneMayusculasYminusculas = (clave: string): ValidacionClave => {
  let tieneMayuscula = false;
  let tieneMinuscula = false;

  for (const char of clave) {
    if (char.toUpperCase() === char && isNaN(Number(char))) {
      tieneMayuscula = true;
    }
    if (char.toLowerCase() === char && isNaN(Number(char))) {
      tieneMinuscula = true;
    }
  }

  if (!tieneMayuscula || !tieneMinuscula) {
    return {
      esValida: false,
      error: "La clave debe de tener mayúsculas y minúsculas.",
    };
  }

  return { esValida: true };
};

export const tieneNumeros = (clave: string): ValidacionClave => {
  for (const char of clave) {
    if (!isNaN(Number(char))) {
      return { esValida: true };
    }
  }

  return {
    esValida: false,
    error: "La clave debe de tener números.",
  };
};

export const tieneCaracteresEspeciales = (clave: string): ValidacionClave => {
  const caracteresEspeciales = [
    "@",
    "#",
    "+",
    "_",
    ".",
    ",",
    "-",
    "!",
    "$",
    "%",
    "&",
  ];

  for (const char of clave) {
    if (caracteresEspeciales.includes(char)) {
      return { esValida: true };
    }
  }

  return {
    esValida: false,
    error: "La clave debe de tener caracteres especiales.",
  };
};

export const tieneLongitudMinima = (clave: string): ValidacionClave => {
  if (clave.length < 8) {
    return {
      esValida: false,
      error: "La clave debe tener una longitud minima de 8 caracteres",
    };
  }
  return { esValida: true };
};

export const contieneNombreUsuario = (
  nombreUsuario: string,
  clave: string
): ValidacionClave => {
  if (clave.toLowerCase().includes(nombreUsuario.toLowerCase())) {
    return {
      esValida: false,
      error: "La clave no debe contener el nombre del usuario",
    };
  }
  return { esValida: true };
};

export const tienePalabrasComunes = (
  clave: string,
  commonPasswords: string[]
): ValidacionClave => {
  if (
    commonPasswords.some((common) =>
      clave.toLowerCase().includes(common.toLowerCase())
    )
  ) {
    return {
      esValida: false,
      error: "La clave no debe contener palabras comunes",
    };
  }
  return { esValida: true };
};
