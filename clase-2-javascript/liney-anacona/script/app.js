console.log("Hola mundo")

// String
let nombre = "Liney";

// Number
let edad = 20;

// Boolean
let estudiante = true;

// Undefined
let direccion;

// Null
let telefono = null;

// BigInt
let numeroGrande = 12345678901234567890n;

// Symbol
let identificador = Symbol("id");

console.log(`Nombre: ${nombre}`);
console.log(`Edad: ${edad}`);
console.log(`Estudiante: ${estudiante}`);
console.log(`Dirección: ${direccion}`);
console.log(`Teléfono: ${telefono}`);
console.log(`Número grande: ${numeroGrande}`);
console.log(`Identificador: ${identificador.toString()}`);

// Ejercicio 5
let resultado1 = (3 - 2) * (10 / 2);
let resultado2 = 3 - 2 * 10 / 2;
let resultado3 = (3 - 2) * 10 / 2;

console.log(`Resultado 1: ${resultado1}`);
console.log(`Resultado 2: ${resultado2}`);
console.log(`Resultado 3: ${resultado3}`);

//1. `resultado1--` 
//2. `resultado2++`
resultado1--;
resultado2++;
resultado3++;

console.log(`Resultado 1 después de --: ${resultado1}`);
console.log(`Resultado 2 después de ++: ${resultado2}`);
console.log(`Resultado 3 después de ++: ${resultado3}`);

let frase = "El desarrollo web es lo máximo";

// Métodos de búsqueda
console.log(`¿Contiene "web"? ${frase.includes("web")}`);
console.log(`Posición de "web": ${frase.indexOf("web")}`);
console.log(`¿Empieza con "El"? ${frase.startsWith("El")}`);
console.log(`¿Termina en "máximo"? ${frase.endsWith("máximo")}`);

// Métodos de reemplazo
console.log(`Reemplazo: ${frase.replace("web", "desarrollo")}`);
console.log(`ReplaceAll: ${frase.replaceAll("o", "0")}`);

// Modificación del casing
console.log(`Mayúsculas: ${frase.toUpperCase()}`);
console.log(`Minúsculas: ${frase.toLowerCase()}`);