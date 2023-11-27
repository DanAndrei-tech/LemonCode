import "./style.css";

//guardar en variables los elementos del DOM
const marcador = document.getElementById("marcador");
const siguiente = document.getElementById("siguiente");
const anterior = document.getElementById("anterior");
const reset = document.getElementById("reset");
const numeroPropio = document.getElementById("caja") as HTMLInputElement;
const boton = document.getElementById("acceptar");

//Declarar la funcion principal
function contador(turno: string): void {
  if (
    marcador !== null &&
    marcador !== undefined &&
    numeroPropio !== null &&
    numeroPropio !== undefined
  ) {
    //guardar el H1 del DOM en una variable cambiando el tipo e entero
    let numeroTurno = parseInt(marcador.innerText);

    if (turno === "siguiente") {
      numeroTurno++;
    } else if (turno === "anterior") {
      numeroTurno--;
    } else if (turno === "reset") {
      numeroTurno = 0;
    } else if (turno === "aceptar") {
      numeroTurno = parseInt(numeroPropio.value);
    }

    //mostrar en pantalla el resultado, añadiendo la funcion padStart que añade un 0 delante mientras el numero sea de 1 solo digito
    marcador.innerText = numeroTurno.toString().padStart(2, "0");
  }
}

//verificar que los elementos del DOM no sean null o undefined antes de llamar al evento
if (siguiente !== null && siguiente !== undefined) {
  siguiente.addEventListener("click", () => contador("siguiente"));
}
if (anterior !== null && anterior !== undefined) {
  anterior.addEventListener("click", () => contador("anterior"));
}
if (reset !== null && reset !== undefined) {
  reset.addEventListener("click", () => contador("reset"));
}
if (boton !== null && boton !== undefined) {
  boton.addEventListener("click", () => contador("aceptar"));
}
