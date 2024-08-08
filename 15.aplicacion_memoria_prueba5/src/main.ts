// src/script.ts
import "./style.css";
import { shuffle } from "./motor";
import { InfoCarta } from "./modelo";

// Definimos las cartas (parejas de 3 tipos diferentes para este ejemplo)
const cartas: InfoCarta[] = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.png",
  },
];

// Duplicamos las cartas
const cartasDuplicadas = [...cartas, ...cartas];

// Barajamos las cartas
const cartasBarajadas = shuffle(cartasDuplicadas);
console.log(cartasBarajadas);

const container = document.getElementById("app");

if (container && container instanceof HTMLDivElement) {
  cartasBarajadas.forEach((carta, index) => {
    const divCarta = document.createElement("div");
    divCarta.className = "carta";
    divCarta.setAttribute("data-index", index.toString());

    const imgCarta = document.createElement("img");
    imgCarta.src = "img/foto.jpg"; // Imagen trasera
    imgCarta.alt = "";
    imgCarta.width = 200;
    imgCarta.height = 200;

    divCarta.appendChild(imgCarta);
    container.appendChild(divCarta);

    // Escuchamos el evento click
    divCarta.addEventListener("click", () => {
      imgCarta.src = carta.imagen;
    });
  });
}
