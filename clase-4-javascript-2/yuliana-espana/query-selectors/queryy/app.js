const ELEMENTOS = document.querySelectorAll('.destacado');
ELEMENTOS.forEach(elemento => {
    elemento.style.background = 'yellow';
    elemento.style.border = '5px solid orange';
});

const LINK_ELEMENT = document.querySelectorAll("#menu a");

LINK_ELEMENT.forEach(elemento => {
    elemento.classList.add('activo')
});


const IMG_ELEMENTS = document.querySelectorAll("img[alt]");

IMG_ELEMENTS.forEach(elemento => {
    elemento.style.border = "3px solid blue";
});

const LI_ELEMENTS = document.querySelectorAll(".tareas li:nth-child(odd)");

LI_ELEMENTS.forEach(elemento => {
    elemento.style.fontWeight = "bold";
    elemento.style.color = "red";
});