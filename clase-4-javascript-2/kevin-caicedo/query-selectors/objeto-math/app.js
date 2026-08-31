let numeroAleatorio = Math.random() * 10;
console.log(numeroAleatorio);

let enteroALeatorio = Math.floor(Math.random() * 10);
console.log(enteroALeatorio);

function getRandomArbitrary(min, max){
    return Math.random() * (max - min)+ min;
}

let numero = getRandomArbitrary(1, 10);
console.log(numero);

