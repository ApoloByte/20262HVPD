const ELEMENTOS = document.querySelectorAll('.');

ELEMENTOS.forEach(elemento =>{
    elemento.style.backgroundColor = "yellow";
    elemento.style.border = "8px solid #ffa263;";
});

const LINK_ELEMENTS = document.querySelectorAll("#menu a");

LINK_ELEMENTS.forEach(elemento =>{
    elemento.classList.add = ('activo');
});

const IMG_ELEMENTS = document.querySelectorAll("img[alt]");

IMG_ELEMENTS.forEach(elemento =>{
    elemento.classList.add = "3px solid blue";
});

const LI_ELEMENTS = document.querySelectorAll('input[type="checkbox"]:checked');

LI_ELEMENTS.forEach(elemento =>{
    elemento.style.fontWeight = "bold";
    elemento.style.color = "red";
});







