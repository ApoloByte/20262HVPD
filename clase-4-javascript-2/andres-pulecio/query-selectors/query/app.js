//Ejercicio 1: Elementos con clase "destacado"

const ELEMENTOS = document.querySelectorAll('.destacado');

ELEMENTOS.forEach(elemento => {
    elemento.style.backgroundColor = 'yellow';
    elemento.style.border = 'yellow';
});

const PAPUELEMENTOS = document.querySelectorAll('.superDestacado');

PAPUELEMENTOS.forEach(elemento => {
    elemento.style.backgroundColor = 'red';
    elemento.style.color = 'yellow';
});

//Ejercicio 2: Enlaces dentro de #menu

const LINK_ELEMENTS = document.querySelectorAll('#menu a');

LINK_ELEMENTS.forEach(elemento => {
    elemento.classList.add('activo')
});

const LINK_ELEMENTS_NUEVO_MENU = document.querySelectorAll('#menuEspecial a');

LINK_ELEMENTS_NUEVO_MENU.forEach(elemento => {
    elemento.classList.add('activo')
});

/*let enlaces = document.querySelectorAll('#menu a');
enlaces.forEach(function(elemento) {
   elemento.classList.add('activo');
});*/

//Ejercicio 3: Bordear imágenes

const IMG_ELEMENTS = document.querySelectorAll('img[alt]');
IMG_ELEMENTS.forEach(elemento => {
    elemento.style.border = "3px solid blue";
});

const IMG_FULVITO = document.querySelectorAll('img[fulvito]');
IMG_FULVITO.forEach(elemento => {
    elemento.style.border = "3px solid green";
});

//Ejercicio 4: Elementos impares de lista .tareas

const LI_ELEMENTS = document.querySelectorAll('.tareas li:nth-child(odd)');
console.log('Encontrados:', LI_ELEMENTS.length);
LI_ELEMENTS.forEach(elemento => {
    elemento.style.fontWeight = "bold";
    elemento.style.color = "red";
});

const LI_ELEMENTS_PARES_SAN_LUCAS = document.querySelectorAll('.sanLucas li:nth-child(even)');
console.log('Encontrados:', LI_ELEMENTS_PARES_SAN_LUCAS.length);
LI_ELEMENTS_PARES_SAN_LUCAS.forEach(elemento => {
    elemento.style.fontStyle = "italic";
    elemento.style.color = "blue";
});

//Ejercicio 5:Inputs checkbox marcados

function inputSelectorUncheck() {
    const marcados = document.querySelectorAll('input[type="checkbox"]:checked');
    marcados.forEach(elemento => {
        elemento.checked = false;
    });
}

function inputSelectorCheck() {
    const marcadosTodos = document.querySelectorAll('input[type="checkbox"]:not(:checked)');
    marcadosTodos.forEach(elemento => {
        elemento.checked = true;
    });
}
