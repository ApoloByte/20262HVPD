const elemento = document.getElementById("mi-elemento");

elemento.textContent = "Hola, mundo!";
elemento.style.backgroundColor = "blue";

const elementos = document.getElementsByClassName("mi-clase");

for (const elemento of elementos) {
	elemento.textContent = "Hola, mundo!";
	elemento.style.color = "green";
}
