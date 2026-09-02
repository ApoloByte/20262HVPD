let elemento = document.getElementById("mi-elemento");

elemento.innerHTML = "Hola, mundo"

elemento.style.backgroundColor = "blue";




let elementos = document.getElementsByClassName("mi-clase");

for (let i=0;i < elementos.length; i++){
    elementos[i].innerHTML="Hola, mundo!";
    elementos[i].style.color="green";
}

let parrafos = document.getElementsByTagName("p");

for (let i=0;i < parrafos.length; i++){
    parrafos[i].innerHTML="Hola mundo";
    parrafos[i].style.backgroundColor = "yellow";
    parrafos[i].style.border="1px solid";
}