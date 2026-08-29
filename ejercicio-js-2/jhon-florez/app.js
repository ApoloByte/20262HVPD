const elemento = document.getElementById("mi-elemento");

elemento.textContent = "Hola, mundo!";
elemento.style.backgroundColor = "blue";

const elementos = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = "Hola, mundo!";
    elementos[i].style.color = "green";
}