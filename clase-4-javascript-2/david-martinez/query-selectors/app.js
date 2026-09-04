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


const LI_ELEMENTS = document.querySelectorAll(".tareas li:nth-child(2n)");

LI_ELEMENTS.forEach(elemento => {
    elemento.style.fontWeight = "bold";
    elemento.style.color = "red";
});


function inputSelectorUnchecked() {
    const LI_ELEMENTS = document.querySelectorAll("input[type='checkbox']:not(:checked)");

    LI_ELEMENTS.forEach(elemento => {
        elemento.ariaChecked = "false";
    });
