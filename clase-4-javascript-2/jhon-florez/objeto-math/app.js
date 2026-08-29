// 1. Número aleatorio entre 0 y 10
const numeroAleatorio = Math.random() * 10;
document.querySelector("#aleatorio").textContent =
    `Número aleatorio entre 0 y 10: ${numeroAleatorio}`;

// 2. Número entero aleatorio entre 0 y 10
const enteroAleatorio = Math.floor(Math.random() * 11);
document.querySelector("#entero-aleatorio").textContent =
    `Número entero aleatorio entre 0 y 10: ${enteroAleatorio}`;

// 3. Número entero aleatorio entre dos valores
const minimo = 5;
const maximo = 20;
const rangoAleatorio =
    Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

document.querySelector("#rango-aleatorio").textContent =
    `Número entero aleatorio entre ${minimo} y ${maximo}: ${rangoAleatorio}`;
    // 4. Funciones de redondeo

const numero = 4.7;

document.querySelector("#redondeo").textContent =
    `Math.round(4.7): ${Math.round(numero)}`;

document.querySelector("#ceil").textContent =
    `Math.ceil(4.7): ${Math.ceil(numero)}`;

document.querySelector("#floor").textContent =
    `Math.floor(4.7): ${Math.floor(numero)}`;
    // 5. Potencias

document.querySelector("#potencia1").textContent =
    `4³ = ${Math.pow(4, 3)}`;

document.querySelector("#potencia2").textContent =
    `5² = ${Math.pow(5, 2)}`;

document.querySelector("#potencia3").textContent =
    `5⁻² = ${Math.pow(5, -2)}`;
    // 6. Raíces cuadradas

document.querySelector("#raiz1").textContent =
    `√9 = ${Math.sqrt(9)}`;

document.querySelector("#raiz2").textContent =
    `√64 = ${Math.sqrt(64)}`;

document.querySelector("#raiz3").textContent =
    `√25 = ${Math.sqrt(25)}`;