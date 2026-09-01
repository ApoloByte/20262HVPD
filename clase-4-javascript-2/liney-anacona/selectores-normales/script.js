miElemento = document.getElementById("mi-elemento");
miElemento.innerHTML = "HOLA MUNDO!!!"
miElemento.style.color = "blue"

// Acceder a elementos con class="mi-clase"
let elementos = document.getElementsByClassName("mi-clase");
console.log(elementos); // Muestra la colección de elementos en la consola

// Modificar el contenido de elementos con class="mi-clase"
let elemento = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elemento.length; i++) {
	elemento[i].innerHTML = "Hola mundo!!";
}

// Cambiar el estilo de elementos con class="mi-clase"
var element = document.getElementsByClassName("mi-clase");
for (var i = 0; i < element.length; i++) {
	element[i].style.color = "green"; // Cambia el color del texto a verde
}

//OTRAS FRASES CON OTROS COLORES, ENSAYANDO 
let ensayos = document.getElementsByClassName("my-clase");
console.log(ensayos);

let ensayo = document.getElementsByClassName("my-clase");
for (var i = 0; i < ensayo.length; i++) {
	ensayo[i].innerHTML = "Liney Anacona";
}

var ensay = document.getElementsByClassName("my-clase");
for (var i = 0; i < ensay.length; i++) {
	ensay[i].style.color = "pink"; 
}