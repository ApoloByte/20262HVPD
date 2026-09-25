//-----------------ID--------------------------------

miElemento = document.getElementById("mi-elemento");
miElemento.innerHTML = "HOLA MUNDO!!!"
miElemento.style.color = "blue"

// ---------------CLASE---------------------------------

let elementos = document.getElementsByClassName("mi-clase");
console.log(elementos); // Muestra la colección de elementos en la consola

// Modificar el contenido de elementos con class="mi-clase"
elementos = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].innerHTML = "Hola mundo!!";
}

// Cambiar el estilo de elementos con class="mi-clase"
elementos = document.getElementsByClassName("mi-clase");
for (var i = 0; i < elementos.length; i++) {
	elementos[i].style.color = "green"; // Cambia el color del texto a verde
}

//OTRAS FRASES CON OTROS COLORES, ENSAYANDO 
let ensayo = document.getElementsByClassName("my-clase");
console.log(ensayo);

ensayo = document.getElementsByClassName("my-clase");
for (var i = 0; i < ensayo.length; i++) {
	ensayo[i].innerHTML = "Liney Anacona";
}

ensayo = document.getElementsByClassName("my-clase");
for (var i = 0; i < ensayo.length; i++) {
	ensayo[i].style.color = "pink"; 
}

//------------------ PARRAFOS------------------------- 

let parrafos = document.getElementsByTagName("p");
//parafos 
for (let i = 0; i < parrafos.length; i++) {
    parrafos[i].innerHTML = "Hola mundo";
    parrafos[i].style.backgroundColor = "yellow";
    parrafos[i].style.border = "1px solid";
}

//por clase 

let amarillos = document.getElementsByClassName("amarillo");
let rosados = document.getElementsByClassName("rosado");

for (let i = 0; i < amarillos.length; i++) {
	amarillos[i].innerHTML = "Experimentando en java script";
    amarillos[i].style.backgroundColor = "gray";
}

for (let i = 0; i < rosados.length; i++) {
	rosados[i].innerHTML = "Todo salio bien !!";
    rosados[i].style.backgroundColor = "#90ee90";
	rosados[i].style.border = "8px solid";
}

//en linea
let segundoParrafo = document.getElementsByTagName("a");

for (let i = 0; i < segundoParrafo.length; i++) {
    segundoParrafo[i].innerHTML = "Colegio mayor";
    segundoParrafo[i].style.backgroundColor = "pink";
    segundoParrafo[i].style.border = "2px solid";
}