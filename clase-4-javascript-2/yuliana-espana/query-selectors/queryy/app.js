const ELEMENTOS = document.querySelectorAll('.destacado');
ELEMENTOS.forEach(elemento => {
    elemento.style.background = 'yellow';
    elemento.style.border = '5px solid orange';
});

const LINK_ELEMENT = document.querySelectorAll("#menu a");

LINK_ELEMENT.forEach(elemento => {
    elemento.classList.add('activo')
});

