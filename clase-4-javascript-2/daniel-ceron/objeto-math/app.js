let numeroAleatorio = Math.random() * 10
console.log(numeroAleatorio)

let numeroEntero = Math.floor(Math.random() * 11)
console.log(numeroEntero)

let numero1 = 20
let numero2 = 10

let minimo = Math.min(numero1, numero2)
let maximo = Math.max(numero1, numero2)

let numeroEntreValores = Math.floor(
  Math.random() * (maximo - minimo + 1) + minimo
)

console.log(numeroEntreValores)

let numero = 5.7

console.log(Math.round(numero))
console.log(Math.ceil(numero))
console.log(Math.floor(numero))

console.log(Math.pow(4, 3))
console.log(Math.pow(5, 2))
console.log(Math.pow(5, -2))

console.log(Math.sqrt(9))
console.log(Math.sqrt(64))
console.log(Math.sqrt(25))