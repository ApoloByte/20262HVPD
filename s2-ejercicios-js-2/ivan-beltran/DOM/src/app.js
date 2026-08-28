//Elementos con ID
const elemento = document.getElementById("mi-elemento");
console.log(elemento);

//Acceder a Elementos con ID

//Texto Original
elemento.textContent = "Hola, mundo!";
//Texto Nuevo
elemento.innerHTML = "Hola mundo Nuevo !";
//Estilo Nuevo
elemento.style.color = "blue";


//Elementos con Clase
let elementos = document.getElementsByClassName("mi-clase");
console.log(elementos);

//Acceder a Elementos con Clase
for (var i = 0; i < elementos.length; i++) {
	elementos[i].innerHTML = "Nuevo contenido";
}
//Estilo Nuevo
for (var i = 0; i < elementos.length; i++) {
	elementos[i].style.color = "red"; // Cambia el color del texto a rojo
}


//Elementos con Etiqueta
let parrafos = document.getElementsByTagName("p");
console.log(parrafos);

//Acceder a Elementos con Etiqueta
for (let i = 0; i <parrafos.length; i++) {
	parrafos[i].innerHTML = 'Párrafo modificado ' + (i + 1);
}

//Estilo Nuevo
for (let i = 0; i < parrafos.length; i++) {
	parrafos[i].style.backgroundColor = 'blue';
	parrafos[i].style.fontWeight = 'bold';
}

//Elementos con QuerySelector
let primerDiv = document.querySelector('#mi-elemento');
console.log(primerDiv);

//Acceder a Elementos con QuerySelector All
const todosLosDivs = document.querySelectorAll('mi.elemento');

//Funcion AppendChild
const div = document.getElementById('miDiv');   
const parrafo = document.createElement('p');
const texto = document.createTextNode('Este es un parrafo creado dinámicamente.');
parrafo.appendChild(texto);
div.appendChild(parrafo);

//Añadir un nuevo elemento a la lista
const lista = document.getElementById('lista1');
const nuevoItem = document.createElement('li');
nuevoItem.textContent = 'Elemento nuevo';
lista.appendChild(nuevoItem);

//Mover nodo de una lista a otra
const item = document.querySelector('#lista2 li:last-child');
document.getElementById('lista1').appendChild(item);