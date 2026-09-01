// variables de los primeros ejercicios
let primerNombre = "Daniel"
let edad = 20
let direccion
let esMayorDeEdad = true
let cantidad = NaN
let inventario = null

// operacion matematica
let resultado = (3-2) * (10/2)

// mostrar titulo
console.log("===Ejercicios 1-3===")

// mostrar variables
console.log(primerNombre)
console.log(edad)
console.log(direccion)
console.log(esMayorDeEdad)
console.log(cantidad)
console.log(inventario)
console.log("=========")

// ejercicio de operadores
console.log("===Ejercicio 5===")

// operaciones con diferente prioridad
let resultado1 = (3 - 2) * (10 / 2)
let resultado2 = 3 - 2 * 10 / 2
let resultado3 = (3 - 2) * 10 / 2

// mostrar resultados
console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log("=========")

// incremento y decremento
console.log(resultado1--)
console.log(resultado2++)
console.log(resultado3++)
console.log("=========")

// ejercicio de strings
console.log("Ultimo Punto")

let frase = "El desarrollo web es lo máximo"
console.log(`Frase normal: ${frase}`)

// obtener caracteres
console.log(frase.charAt(0))
console.log(frase[3])

// buscar texto
console.log(frase.indexOf("des"))
console.log(frase.lastIndexOf("web"))
console.log(frase.includes("mejor"))

// reemplazar texto
console.log(frase.replace("máximo", "mejor"))
console.log(frase.replaceAll("o", "a"))

// cambiar mayusculas y minusculas
console.log(frase.toUpperCase())
console.log(frase.toLowerCase())
