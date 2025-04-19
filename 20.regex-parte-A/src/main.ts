import { bancos } from "./modelo-iban";
import { validarIBANyExtraer } from "./validar_IBAN";
import { pintarDatos } from "./utils";
import { isValidIBAN } from "ibantools";

const input = document.getElementById("iban") as HTMLInputElement;
const button = document.getElementById("buscar") as HTMLInputElement;
const datosDiv = document.querySelector(".datos") as HTMLDivElement;
const buttonClear = document.getElementById("limpiar") as HTMLButtonElement;

button.addEventListener("click", () => {
  const valorIBAN = input.value;
  const resultado = validarIBANyExtraer(valorIBAN);

  if (!resultado.valido) {
    datosDiv.innerHTML = `<p style = "color:red;">${resultado.error}</p>`;
    return;
  }

  const esValido = isValidIBAN(resultado.iban);
  if (!esValido) {
    datosDiv.innerHTML = `<p style="color:red";>El IBAN no es válido. </p>`;
    return;
  }

  const { banco, oficina, digitoControl, cuenta, pais } = resultado.datos;
  const nombreBanco = bancos[banco] ?? "Banco no encontrado";

  pintarDatos({ nombreBanco, oficina, digitoControl, cuenta, pais });
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    button.click();
  }
});

buttonClear.addEventListener("click", () => {
  datosDiv.innerHTML = "";
  input.value = "";
});
