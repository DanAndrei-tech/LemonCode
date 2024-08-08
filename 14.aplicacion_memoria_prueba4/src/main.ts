const div1 = document.getElementById("div1");
const img1 = document.getElementById("img1") as HTMLImageElement;

const div2 = document.getElementById("div2");
const img2 = document.getElementById("img2") as HTMLImageElement;

let firstCardFlipped = false;
let firstCard: HTMLImageElement | null = null;
let firstDiv: HTMLDivElement | null = null;

if (div1 && div1 instanceof HTMLDivElement) {
  div1.addEventListener("click", () => {
    if (!firstCardFlipped) {
      img1.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
      firstCardFlipped = true;
      firstCard = img1;
      firstDiv = div1;
      div1.classList.add("flip");
    } else if (firstCard !== img1) {
      img1.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png";
      div1.classList.add("flip");
      setTimeout(() => {
        img1.src = "img/foto.jpg";
        firstCard!.src = "img/foto.jpg";
        div1.classList.remove("flip");
        firstDiv!.classList.remove("flip");
        firstCardFlipped = false;
        firstCard = null;
        firstDiv = null;
      }, 1000);
    }
  });
}

if (div2 && div2 instanceof HTMLDivElement) {
  div2.addEventListener("click", () => {
    if (!firstCardFlipped) {
      img2.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png";
      firstCardFlipped = true;
      firstCard = img2;
      firstDiv = div2;
      div2.classList.add("flip");
    } else if (firstCard !== img2) {
      img2.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png";
      div2.classList.add("flip");
      setTimeout(() => {
        img2.src = "img/foto.jpg";
        firstCard!.src = "img/foto.jpg";
        div2.classList.remove("flip");
        firstDiv!.classList.remove("flip");
        firstCardFlipped = false;
        firstCard = null;
        firstDiv = null;
      }, 1000);
    }
  });
}
