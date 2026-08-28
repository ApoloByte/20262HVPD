const ELEMENTOS = document.querySelectorAll('.destacado');
ELEMENTOS.forEach(elemento => {
    elemento.style.background = 'yellow';
    elemento.style.border = '5px solid orange';
});
const LINKELEMENTS = document.querySelectorAll('#menu a');
LINKELEMENTS.forEach(elemento => {
    elemento.classList.add('activo');
});
const IMGELEMENTS = document.querySelectorAll('img[alt]');

IMGELEMENTS.forEach(elemento => {
    elemento.style.border = '3px solid red';
});