const elemento = document.getElementById("mi-elemento");

elemento.textContent = "Hola, mundo!";
elemento.style.backgroundColor = "blue";

const elementos = document.getElementsByClassName("mi-clase");

for (const elemento of elementos) {
	elemento.textContent = "Hola, mundo!";
	elemento.style.color = "green";
}

const parrafos = document.getElementsByTagName("p");

for (const parrafo of parrafos) {
	parrafo.textContent = "Hola mundo";
	parrafo.style.backgroundColor = "yellow";
	parrafo.style.border = "1px solid";
}
