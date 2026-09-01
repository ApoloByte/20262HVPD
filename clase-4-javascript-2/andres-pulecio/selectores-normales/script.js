//actividad 1
let miElemento = document.getElementById("mi-elemento");

console.log(miElemento); // Muestra el elemento en la consola

miElemento.innerHTML = "HOLA MUNDO!!!";

let miElementoSegundo = document.getElementById("mi-elemento-segundo");

console.log(miElementoSegundo); // Muestra el elemento en la consola

miElementoSegundo.innerHTML = "HOLA WILLY!!!";

let miElementoTercero = document.getElementById("mi-elemento-tercero");

console.log(miElementoTercero); // Muestra el elemento en la consola

miElementoTercero.innerHTML = "HOLA COMPAÑERO!!!";

// Cambiar el estilo de fondo de un elemento 

miElemento.style.backgroundColor = "blue"; // Cambia el color del texto a azul

miElementoSegundo.style.backgroundColor = "green"; // Cambia el color del texto a verde

miElementoTercero.style.backgroundColor = "yellow"; // Cambia el color del texto a amarillo

//actividad 2

let elementos = document.getElementsByClassName("mi-clase");

for (let i = 0; i < elementos.length; i++) {
    elementos[i].innerHTML = "Hola mundo"; // Cambia el contenido de cada elemento
    elementos[i].style.color = "green"; // Cambia el color del texto
}

let elementosSegundos = document.getElementsByClassName("mi-clase-segunda");

for (let i = 0; i < elementosSegundos.length; i++) {
    elementosSegundos[i].innerHTML = "Duende tu sabes que la amo"; // Cambia el contenido de cada elemento
    elementosSegundos[i].style.color = "blue"; // Cambia el color del texto
}

let elementosTerceros = document.getElementsByClassName("mi-clase-tercera");

for (let i = 0; i < elementosTerceros.length; i++) {
    elementosTerceros[i].innerHTML = "Pero si yo la quiero tambien, es duende y ng"; // Cambia el contenido de cada elemento
    elementosTerceros[i].style.color = "yellow"; // Cambia el color del texto
}

//actividad 3


let parrafos = document.getElementsByTagName("p");

for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].innerHTML = "Hola mundo";
    parrafos[i].style.backgroundColor = "yellow";
    parrafos[i].style.border = "1px solid";
}

let parrafosSegundo = document.getElementsByTagName("a");

for (let i = 0; i < parrafosSegundo.length; i++) {
    parrafosSegundo[i].innerHTML = "Hola gente de yt";
    parrafosSegundo[i].style.backgroundColor = "yellow";
    parrafosSegundo[i].style.border = "1px solid";
}
