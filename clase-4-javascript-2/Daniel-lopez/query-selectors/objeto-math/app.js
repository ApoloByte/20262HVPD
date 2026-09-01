function aleatorioDecimal() {
    return Math.random() * 10;
}
console.log("Aleatorio decimal (0-10):", aleatorioDecimal());

function aleatorioEntero() {
    return Math.floor(Math.random() * 11); 
}
console.log("Aleatorio entero (0-10):", aleatorioEntero());

function aleatorioEntreValores(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Aleatorio entre 5 y 15:", aleatorioEntreValores(5, 15));

const numero = 4.5678;
console.log("Math.round(4.5678):", Math.round(numero)); 
console.log("Math.ceil(4.5678):", Math.ceil(numero));   
console.log("Math.floor(4.5678):", Math.floor(numero)); 

console.log("4^3 =", Math.pow(4, 3));   
console.log("5^2 =", Math.pow(5, 2));   
console.log("5^-2 =", Math.pow(5, -2)); 

console.log("Raíz cuadrada de 9:", Math.sqrt(9));   
console.log("Raíz cuadrada de 64:", Math.sqrt(64)); 
console.log("Raíz cuadrada de 25:", Math.sqrt(25));