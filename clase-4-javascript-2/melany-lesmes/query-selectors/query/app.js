const ELEMENTOS =document.querySelectorAll('.destacado');

ELEMENTOS.forEach((elemento) => {
    elemento.style.backgroundColor = 'yellow';
});

const LIN_KELEMENTS = document.querySelectorAll('#menu a');

LINK_ELEMENTS.forEach((elemento) => {
    elemento.classList.add('activo');
});