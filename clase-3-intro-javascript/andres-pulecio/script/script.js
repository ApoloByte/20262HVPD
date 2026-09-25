let nombreUsuario = "Juan";
let edadUsuario = 19;
let esMayorDeEdad = true;
let resultado1 = (3 - 2) * (10 / 2);

//Nombres de funciones
function calcularPromedio(notas) {

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {

        suma += notas[i];

    }

    return suma / notas.length;

}

function mostrarMensaje(mensaje) {

    console.log(mensaje);

}
/*Hola soy un comentario 
multilinea */
//Comentario de una sola linea
console.log(resultado1);
console.log(resultado1++);
console.log(resultado1);
/*console.log(mostrarMensaje);
console.log(calcularPromedio([10, 8, 9, 7, 6]));

*/
console.log("Este es un mensaje de prueba");
console.error("Este es un mensaje de error");
console.warn("Este es un mensaje de advertencia");
name = "Julio";
console.log("nombre: ", name); //imprimira el nombre Julio


//Number
let edad = 27;

//String 
let nombre = "Andres";

//Bolean
let esMayor = true;

//Null
coche = null;

//Undefined
let direccion;

//NaN(Not a Number): Representa un valor que no es un número valido
let resultado = 0 / 0;

//variable const es un bloque invariable

//let y const son variables de bloque, es decir, solo existen dentro del bloque donde fueron declaradas

//var tiene un alcance global, es decir, puede ser accedida desde cualquier parte del código

//operadores aritmeticos
let x = 10;
x += 5; //x ahora es 15

let y = 20;
y -= 5; //y ahora es 15

let t = 9;
t *= 2; //t ahora es 18

let r = 10;
r /= 2; //r ahora es 5

//calcula el modulo de 10 entre 3 y lo asigna a la variable z
let z = 10;
z %= 3; //z ahora es 1


//operadores incremento y decremento

//operadores incremento
let v = 5;

console.log(++v); // Forma de prefijo: Imprime 6

console.log(v++); // Forma de sufijo: Imprime 6, pero x ahora es 7

console.log(v); // Imprime 7

//operadores de decremento
let w = 5;
console.log(--w); // Forma de prefijo: Imprime 4

console.log(w--); // Forma de sufijo: Imprime 4, pero x ahora es 3

console.log(w); // Imprime 3

//iNDICES DE LOS STRINGS
let texto = "JavaScript";

console.log(texto.charAt(0)); // Imprime "J"

console.log(texto.charAt(4)); // Imprime "S"

//Metodos de Busqueda 

let text = "JavaScrpt es genial";

console.log(text.indexOf("es")); // Imprime 11  Devuelve el índice de la primera aparición de un carácter o subcadena.

console.log(text.lastIndexOf("a")); // Imprime 3  Devuelve el índice de la última aparición de un carácter o subcadena.

console.log(text.includes("genial")); // Imprime true  Verifica si una cadena contiene una subcadena.

//Metodos de reemplazo

let texto2 = "JavaScript es genial";

console.log(texto2.replace("genial", "increíble")); // Imprime "JavaScript es increíble"

console.log(texto2.replaceAll("a", "A")); // Imprime "JAvAScript es geniAl"

//Modificacion del Casing 

let texto3 = "JavaScript";

console.log(texto3.toUpperCase()); // Imprime "JAVASCRIPT"

console.log(texto3.toLowerCase()); // Imprime "javascript"

