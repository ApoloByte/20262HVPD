const ELEMENTS = document.querySelectorAll('.destacado');

ELEMENTS.forEach(elemento => {
  elemento.style.backgroundColor = 'yellow';
  elemento.style.border = '8px solid orange';
});

const LINK_ELEMENTS = document.querySelectorAll("#menu a");

LINK_ELEMENTS.forEach(elemento => {
    elemento.classList.add('activo');
}); 

const IMG_ELEMENTS = document.querySelectorAll("img[alt]");

IMG_ELEMENTS.forEach(elemento => {
    elemento.style.border = "3px solid blue";
});


