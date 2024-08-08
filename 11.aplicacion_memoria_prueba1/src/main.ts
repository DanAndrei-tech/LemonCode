import "./style.css";

export function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // Mientras queden elementos a mezclar...
  while (currentIndex !== 0) {
    // Elegir un elemento sin mezclar...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // E intercambiarlo con el elemento actual.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Definimos las cartas (parejas de 6 tipos diferentes)
const cards: string[] = [
  "🐰",
  "🐰",
  "🐶",
  "🐶",
  "🐦",
  "🐦",
  "🐟",
  "🐟",
  "🐮",
  "🐮",
  "🐸",
  "🐸",
];

// Barajamos las cartas
console.log(shuffle(cards));
console.log(shuffle(cards));
console.log(shuffle(cards));
