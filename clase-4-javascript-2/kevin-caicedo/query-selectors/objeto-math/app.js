let numeroAleatorio = Math.random() * 10;
console.log(numeroAleatorio);

let enteroALeatorio = Math.floor(Math.random() * 10);
console.log(enteroALeatorio);

function getRandomArbitrary(min, max){
    return Math.random() * (max - min)+ min;
}

let numeros = getRandomArbitrary(1, 10);
console.log(numeros);


let numero = 3.6;

console.log(numero);
console.log(Math.round(numero));
console.log(Math.ceil(numero));
console.log(Math.floor(numero));


console.log(Math.pow(4, 3));
console.log(Math.pow(5, 2));
console.log(Math.pow(5, -2));

console.log(Math.sqrt(9));
console.log(Math.sqrt(64));
console.log(Math.sqrt(25));