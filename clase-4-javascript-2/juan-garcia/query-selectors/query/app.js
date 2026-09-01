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

const LI_ELEMENTS = document.querySelectorAll('.tareas li:nth-child(odd)');
LI_ELEMENTS.forEach(elemento => {
    elemento.style.fontWeight = 'bold';
    elemento.style.color = 'red';
});
function inputSelectorUncheck() {
    const CHECKBOX_ELEMENTS = document.querySelectorAll('input[type="checkbox"]:checked');
    CHECKBOX_ELEMENTS.forEach(elemento => {
        elemento.checked = false;
    });
}