
const ELEMENTOS = document.querySelectorAll('.');

ELEMENTOS.forEach(elemento =>{
    elemento.style.backgroundColor = "yellow";
    elemento.style.border = "8px solid #ffa263;";

});

const LINK_ELEMENTS = document.querySelectorAll("#menu a");

LINK_ELEMENTS.forEach(elemento =>{
    elemento.classList.add = ('activo');

});







