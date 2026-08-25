miElemento = document.getElementById("mi-elemento");

miElemento.innerHTML = "HOLA, MUNDO!!"

// Cambiar el estilo de un elemento con id="mi-elemento"
let elemento = document.getElementById("mi-elemento");
elemento.style.color = "blue"; 

// Modificar el contenido de elementos con class="mi-clase"
let elementos = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].innerHTML = "hola, Mundo!";
    elementos[i].style.color = "green";
}

let parrafos = document.getElementsByTagName('p');
for (let i = 0; i <parrafos.length; i++) {
	parrafos[i].innerHTML = 'Hola mundo ';
}