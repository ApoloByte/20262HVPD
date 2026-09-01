function aleatorioDecimal() {
    return Math.random() * 10;
}
console.log("Aleatorio decimal (0-10):", aleatorioDecimal());

function aleatorioEntero() {
    return Math.floor(Math.random() * 11); // 0 a 10 inclusive
}
console.log("Aleatorio entero (0-10):", aleatorioEntero());

function aleatorioEntreValores(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("Aleatorio entre 5 y 15:", aleatorioEntreValores(5, 15));