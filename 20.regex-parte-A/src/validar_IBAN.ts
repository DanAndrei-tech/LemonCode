import { ResultadoIBAN } from "./modelo-iban";

export function validarIBANyExtraer(iban: string): ResultadoIBAN {
  const limpio = iban.trim().toUpperCase().replace(/[\s-]/g, "");

  const regex =
    /^(?<pais>[A-Z]{2})(?<dc>\d{2})(?<banco>\d{4})(?<oficina>\d{4})(?<digitoControl>\d{2})(?<cuenta>\d{10})$/;

  const match = limpio.match(regex);

  if (!match || !match.groups) {
    return { valido: false, error: "El formato del IBAN es incorrecto" };
  }

  const { pais, dc, banco, oficina, digitoControl, cuenta } = match.groups as {
    pais: string;
    dc: string;
    banco: string;
    oficina: string;
    digitoControl: string;
    cuenta: string;
  };

  const ibanNormalizado = `${pais}${dc}${banco}${oficina}${digitoControl}${cuenta}`;

  return {
    valido: true,
    iban: ibanNormalizado,
    datos: {
      pais,
      dc,
      banco,
      oficina,
      digitoControl,
      cuenta,
    },
  };
}
