import "./style.css";
import { renderizarImagenes } from "./utils";

// 1. Seleccionamos los elementos del DOM
const textarea = document.getElementById("textarea") as HTMLTextAreaElement;
const boton = document.querySelector("button") as HTMLButtonElement;
const datosDiv = document.querySelector(".datos") as HTMLDivElement;

// 2. Escuchamos el click del botón
boton.addEventListener("click", () => {
  const htmlTexto = textarea.value;

  // 4. Definimos la expresión regular para extraer las URLs del src
  const regex = /<img[^>]*src="([^"]+)"[^>]*>/gi;

  // 5. Ejecutamos la búsqueda con matchAll
  const matches = [...htmlTexto.matchAll(regex)];

  // 6. Extraemos solo las URLs
  const urls = matches.map((match) => match[1]);

  if (urls.length === 0) {
    datosDiv.innerHTML = "<p style='color:red;'>No se encontraron imágenes</p>";
    return;
  }

  datosDiv.innerHTML = renderizarImagenes(urls);
});
