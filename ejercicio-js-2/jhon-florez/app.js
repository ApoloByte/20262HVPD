const elemento = document.getElementById("mi-elemento");

elemento.textContent = "Hola, mundo!";
elemento.style.backgroundColor = "blue";

const elementos = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementos.length; i++) {
    elementos[i].textContent = "Hola, mundo!";
    elementos[i].style.color = "green";
}
const parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].textContent = "Hola mundo";
    parrafos[i].style.backgroundColor = "yellow";
    parrafos[i].style.border = "1px solid black";
}