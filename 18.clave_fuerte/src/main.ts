import "./style.css";

import { validarClave } from "./clave_fuerte";
import { pruebas } from "./datos";

pruebas.forEach(({ usuario, clave }, index) => {
  const resultado = validarClave(usuario, clave);
  console.log(`Prueba ${index + 1}: `, resultado);
});
