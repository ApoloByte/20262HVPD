let numeroAleatorio = Math.random() * 10;
document.getElementById("numero1").textContent = "Número aleatorio entre 0 y 10: " + numeroAleatorio;

let numeroEntero = Math.floor(Math.random() * 11); 
document.getElementById("numero2").textContent = "Número entero entre 0 y 10: " + numeroEntero;

function numeroAleatorioEntre(minimo, maximo) { 
    return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo; }
let resultado = numeroAleatorioEntre(5, 20);

document.getElementById("numero3").textContent = "Número entero entre 5 y 20: " + resultado;
