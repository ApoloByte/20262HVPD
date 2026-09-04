const aleatorioDecimal = Math.random() * 10;
console.log(aleatorioDecimal);

const aleatorioEntero = Math.floor(Math.random() * 11);
console.log(aleatorioEntero);

function numeroAleatorioEntre(minimo, maximo) {
  return Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
}
console.log(numeroAleatorioEntre(5, 15));
console.log(Math.round(4.5));
console.log(Math.ceil(4.1));
console.log(Math.floor(4.9));

console.log(Math.pow(4, 3));
console.log(Math.pow(5, 2));
console.log(Math.pow(5, -2));

console.log(Math.sqrt(9));
console.log(Math.sqrt(64));
console.log(Math.sqrt(25));