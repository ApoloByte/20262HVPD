
// Punto 1-2-3 objeto math

const generarNumeroAleatorio = () => Math.random() * 10;
const numeroAleatorio = generarNumeroAleatorio();

document.querySelector("#num1").innerHTML = `Número aleatorio entre 0 y 10: ${numeroAleatorio}`;

// Usando parseInt en lugar de Math.floor
const numeroEntero = parseInt(Math.random() * 11);
document.querySelector("#num2").innerHTML = `Número entero entre 0 y 10: ${numeroEntero}`;

// Arrow function con sintaxis compacta
const numeroAleatorioEntre = (minimo, maximo) => 
    Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

const resultado = numeroAleatorioEntre(5, 20);

document.querySelector("#num3").innerHTML = `Número entero entre 5 y 20: ${resultado}`;





