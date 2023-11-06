import "./style.css";

//Generos
const popRock: string = "🎸Pop Rock";
const rock: string = "🤘Rock";
const hardRock: string = "👨‍🎤Hard Rock";
const clasica: string = "🎹Clásica";

//estilos css
const estilos = "font-weight:bold; font-size:18px; background-color:green;";

//interfaz Grupos
interface Grupomusical {
  nombre: string;
  año: number;
  activo: boolean;
  genero: string;
}

//Grupos musicales
const grupo1: Grupomusical = {
  nombre: "The Beatles",
  año: 1960,
  activo: true,
  genero: popRock,
};

const grupo2: Grupomusical = {
  nombre: "Queen",
  año: 1970,
  activo: false,
  genero: rock,
};

const grupo3: Grupomusical = {
  nombre: "AC DC",
  año: 1973,
  activo: true,
  genero: hardRock,
};

const grupo4: Grupomusical = {
  nombre: "Ludwig van Beethoven",
  año: 1770,
  activo: false,
  genero: clasica,
};

const grupo5: Grupomusical = {
  nombre: "The Rolling Stones",
  año: 1962,
  activo: true,
  genero: rock,
};

console.log("%cThe Beatles", estilos);
console.log(grupo1);
console.log("%cQueen", estilos);
console.log(grupo2);
console.log("%cAC DC", estilos);
console.log(grupo3);
console.log("%cLudwig van Beethoven", estilos);
console.log(grupo4);
console.log("%cThe Rolling Stones", estilos);
console.log(grupo5);
