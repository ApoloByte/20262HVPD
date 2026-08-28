const ELEMENTOS = document.querySelectorAll('.destacado');
ELEMENTOS.forEach(elemento => {
    elemento.style.background = 'yellow';
    elemento.style.border = '5px solid orange';
});
const LINKELEMENTS = document.querySelectorAll('#menu a');
LINKELEMENTS.forEach(elemento => {
    elemento.classList.add('activo');
});
