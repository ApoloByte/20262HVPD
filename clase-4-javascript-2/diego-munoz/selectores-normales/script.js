let miElemento = document.getElementById("mi-elemento");
miElemento.innerHTML = "Hola mundo!";
miElemento.style.backgroundColor = "blue";

let elementos = document.getElementsByClassName("mi-clase");
console.log(elementos);

for (let i = 0; i < elementos.length; i++) {
  elementos[i].innerHTML = "Hola mundo!";
  elementos[i].style.color = "green";
}