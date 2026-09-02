const ELEMENTOS = document.querySelectorAll('.destacado');

ELEMENTOS.forEach(elemento => {
    elemento.style.backgroundColor = "yellow";
    elemento.style.border = "8px solid #ffa263;";
});

const LINK_ELEMENTS = document.querySelectorAll("#menu a");

LINK_ELEMENTS.forEach(elemento => {
    elemento.classList.add('activo');
});

const IMG_ELEMENTS = document.querySelectorAll("img[alt]");

IMG_ELEMENTS.forEach(elemento => {
    elemento.style.border = "3px solid blue";
});

const LI_ELEMENTS = document.querySelectorAll(".tareas li:nth-child(odd)");

LI_ELEMENTS.forEach(elemento => {
    elemento.style.fontWeight = "bold";
});