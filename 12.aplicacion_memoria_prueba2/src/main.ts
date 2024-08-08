import "./style.css";

const divImagen = document.getElementById("app");
const imgElement = document.getElementById("img") as HTMLImageElement;

if (divImagen && divImagen instanceof HTMLDivElement && imgElement) {
  divImagen.addEventListener("click", () => {
    imgElement.src =
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.png";

    divImagen.classList.toggle("flip");
  });
}
