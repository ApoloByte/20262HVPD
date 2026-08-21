//Number
let edad = 27;
console.log("edad: ", edad); //imprimira la edad 27
//String 
let nombre = "Andres";
console.log("nombre: ", nombre); //imprimira el nombre Andres

//Bolean
let esMayor = true;
console.log("esMayor: ", esMayor); //imprimira el valor true
//Null
coche = null;
console.log("coche: ", coche); //imprimira el valor null
//Undefined
let direccion;
console.log("direccion: ", direccion); //imprimira el valor undefined
//NaN(Not a Number): Representa un valor que no es un número valido
let resultado = 0 / 0;
console.log("resultado: ", resultado); //imprimira el valor NaN

/* Los template literals  son una forma especal de escribir cadenas de caracter en JavaScript. Utilizan
tildes invertidas en lugar de comillas */

const mensaje = `Hola, me llamo ${nombre}, y tengo ${edad} años.`;
console.log(mensaje);

//analisis de resultados
let resultado1 = (3 - 2) * (10 / 2);  //el rersultado es 5
console.log("resultado1: ", resultado1);

let resultado2 = 3 - 2 * 10 / 2;  //el rersultado es -7
console.log("resultado2: ", resultado2);

let resultado3 = (3 - 2) * 10 / 2;  //el rersultado es 5
console.log("resultado3: ", resultado3);

//Imprima en consola
//a
resultado1--;
console.log("resultado1--: ", resultado1); //el rersultado es 4
//b
resultado2++;
console.log("resultado2++: ", resultado2);
//c
resultado3++;
console.log(resultado3); 