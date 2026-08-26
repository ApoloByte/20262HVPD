//actividad
let miElemento = document.getElementById("mi-elemento");

console.log(miElemento); // Muestra el elemento en la consola

miElemento.innerHTML = "HOLA MUNDO!!!";

// Cambiar el estilo de fondo de un elemento 
miElemento.style.backgroundColor = "blue"; // Cambia el color del texto a azul

//actividad 2
let elementos = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementos.length; i++) {
    elementos[i].innerHTML = "Hola mundo"; // Cambia el contenido de cada elemento
    elementos[i].style.color = "green"; // Cambia el color del texto
}


//actividad 3


let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].innerHTML = "Hola mundo";
    parrafos[i].style.backgroundColor = "yellow";
    parrafos[i].style.border = "1px solid";
}
