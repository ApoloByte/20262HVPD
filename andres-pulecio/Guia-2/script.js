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
let elementos = document.getElementsByClassName("mi-clase");
console.log(elementos); // Muestra los elementos en la consola

// Modificar el contenido de elementos con class="mi-clase"
let elementos2 = document.getElementsByClassName("mi-clase");
for (var let = 0; let < elementos2.length; let++) {
    elementos2[let].innerHTML = "Nuevo contenido"; // Cambia el contenido de cada elemento
}

// Cambiar el estilo de elementos con class="mi-clase"
var elementos3 = document.getElementsByClassName("mi-clase");
for (var let = 0; let < elementos3.length; let++) {
    elementos3[let].style.color = "red"; // Cambia el color del texto a rojo
}

//Acceder
let parrafos = document.getElementsByTagName('p');
console.log(parrafos); // Muestra una coleccion de todos los elementos

//Modificar
let parrafos2 = document.getElementsByTagName('p');
for (let i = 0; i < parrafos.length; i++) {
     parrafos[i].innerHTML = ' parrafo modificado '+ (i + 1); // Cambia el contenido de cada elemento
}


//Cambiar estilo
let parrafos3 = document.getElementsByTagName('p');
for (let i = 0; i < parrafos3.length; i++) {
    parrafos3[i].style.backgroundColor = 'blue'; // Cambia el color del texto a azul
    parrafos3[i].style.fontWeight = 'bold'; // Cambia el peso de la fuente a negrita
}


//Uso de querySelector
let primerDiv = document.querySelector('#mi-elemento');
console.log(primerDiv); // Muestra el primer elemento con la clase"mi-elemento"


//Uso de querySelectorAll
const elementosQuery = document.querySelectorAll('.mi-elemento');

const mensajes = document.querySelectorAll('.mensaje');
   mensajes.forEach((mensaje, indice) => {
    mensaje.textContent = `Mensaje ${indice + 1}`; // Cambia el contenido de cada elemento
   });

   //Funcion AppendChild

   //crear un parrafo y añadirlo al div 
   const div = document.getElementById('miDiv');
   const parrafo = document.createElement('p'); // Crea un nuevo elemento <p>
   const texto = document.createTextNode('Este un párrafo creado dinamicamente'); // Crea un nodo de texto
   parrafo.appendChild(texto); // Añadir texto al parrafo
   div.appendChild(parrafo); // Añadir párrafo al div


   //Añadir un nuevo ítem a una lista
   const lista = document.getElementById('miLista');
   const nuevoItem = document.createElement('li'); // Crea un nuevo elemento <li>
   nuevoItem.textContent = 'Elemento nuevo';
   lista.appendChild(nuevoItem); 

   //Mover un nodo de una lista a otra
   const item = document.querySelector('#lista2 li:last-child'); 

   document.getElementById('lista1').appendChild(item); // Mover el elemento a la nueva lista