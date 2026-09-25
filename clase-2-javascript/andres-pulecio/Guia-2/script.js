// Acceder a un elemento con id="mi-elemento"

let elemento = document.getElementById("mi-elemento");

console.log(elemento); // Muestra el elemento en la consola


// Modificar el contenido de un elemento con id="mi-elemento"

let elemento2 = document.getElementById("mi-elemento");

elemento2.innerHTML = "Nuevo contenido"; // Cambia el contenido del elemento


// Cambiar el estilo de un elemento con id="mi-elemento"

let elemento3 = document.getElementById("mi-elemento");

elemento3.style.color = "red"; // Cambia el color del texto a rojo


// Acceder a elementos con class="mi-clase"

let elementoCasa = document.getElementsByClassName("mi-clase");

console.log(elementoCasa); // Muestra los elementos en la consola


// Modificar el contenido de elementos con class="mi-clase"

let elementos2 = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementos2.length; i++) {

    elementos2[i].innerHTML = "Nuevo contenido"; // Cambia el contenido de cada elemento

}


// Cambiar el estilo de elementos con class="mi-clase"

let elementos3 = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementos3.length; i++) {

    elementos3[i].style.color = "red"; // Cambia el color del texto a rojo

}


// Acceder a párrafos

let parrafos = document.getElementsByTagName("p");

console.log(parrafos); // Muestra una colección de todos los elementos


// Modificar párrafos

let parrafos2 = document.getElementsByTagName("p");

for (let i = 0; i < parrafos2.length; i++) {

    parrafos2[i].innerHTML = "Párrafo modificado " + (i + 1);

}


// Cambiar estilo

let parrafos3 = document.getElementsByTagName("p");

for (let i = 0; i < parrafos3.length; i++) {

    parrafos3[i].style.backgroundColor = "blue"; // Cambia el color de fondo a azul

    parrafos3[i].style.fontWeight = "bold"; // Cambia el peso de la fuente a negrita

}


// Uso de querySelector

let primerDiv = document.querySelector("#mi-elemento");

console.log(primerDiv); // Muestra el primer elemento con id="mi-elemento"


// Uso de querySelectorAll

const elementosQuery = document.querySelectorAll(".mi-elemento");

const mensajes = document.querySelectorAll(".mensaje");

mensajes.forEach((mensaje, indice) => {

    mensaje.textContent = `Mensaje ${indice + 1}`; // Cambia el contenido de cada elemento

});


// Función AppendChild
// Crear un párrafo y añadirlo al div

const div = document.getElementById("miDiv");

const parrafo = document.createElement("p"); // Crea un nuevo elemento <p>

const texto = document.createTextNode(
    "Este es un párrafo creado dinámicamente"
); // Crea un nodo de texto

parrafo.appendChild(texto); // Añadir texto al párrafo

div.appendChild(parrafo); // Añadir párrafo al div


// Añadir un nuevo ítem a una lista

const lista = document.getElementById("miLista");

const nuevoItem = document.createElement("li"); // Crea un nuevo elemento <li>

nuevoItem.textContent = "Elemento nuevo";

lista.appendChild(nuevoItem);


// Mover un nodo de una lista a otra

const item = document.querySelector("#lista2 li:last-child");

document.getElementById("lista1").appendChild(item); // Mover el elemento a la nueva lista